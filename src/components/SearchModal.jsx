import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag } from 'lucide-react';
import { formatPKR } from '../data/products';

const SearchModal = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onAddToCart
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = searchTerm.trim() === ''
    ? products
    : products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <div className="search-input-field-wrap">
            <Search size={22} className="search-field-icon" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search hoodies, t-shirts, sweatshirts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-modal-input"
              id="global-search-input"
            />
            {searchTerm && (
              <button
                className="search-clear-btn"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button
            className="search-modal-close"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={22} />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="search-popular-tags">
          <span className="search-tags-label">Trending:</span>
          {['All', 'Hoodies', 'Graphic', 'Sweatshirt', 'White'].map((tag) => (
            <button
              key={tag}
              className="search-tag-pill"
              onClick={() => setSearchTerm(tag === 'All' ? '' : tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="search-modal-results">
          {filtered.length === 0 ? (
            <div className="search-empty-state">
              <p>No products match "{searchTerm}"</p>
              <span>Try searching for "Hoodie", "Graphic", or "T-Shirt"</span>
            </div>
          ) : (
            <div className="search-results-grid">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="search-result-item"
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="search-result-img"
                  />
                  <div className="search-result-info">
                    <span className="search-result-cat">{item.category}</span>
                    <h5 className="search-result-name">{item.name}</h5>
                    <span className="search-result-price">{formatPKR(item.price)}</span>
                  </div>
                  <button
                    className="search-result-add-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(item);
                    }}
                    title="Add to Cart"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
