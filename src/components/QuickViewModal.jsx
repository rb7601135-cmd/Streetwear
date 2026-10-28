import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Plus, Minus, Check, Star, Shield, RotateCcw } from 'lucide-react';
import { formatPKR } from '../data/products';

const QuickViewModal = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart
}) => {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="quickview-backdrop" onClick={onClose}>
      <div className="quickview-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="quickview-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        <div className="quickview-grid">
          {/* Product Media */}
          <div className="quickview-media-col">
            <img
              src={product.image}
              alt={product.name}
              className="quickview-main-image"
            />
            {product.onSale && (
              <span className="badge-pill badge-sale quickview-badge">SALE</span>
            )}
          </div>

          {/* Product Info */}
          <div className="quickview-info-col">
            <span className="quickview-category">{product.category}</span>
            <h2 className="quickview-title">{product.name}</h2>

            <div className="quickview-rating-row">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating || 5) ? "#000" : "none"}
                    color="#000"
                  />
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviewsCount || 28} verified reviews)
              </span>
            </div>

            <div className="quickview-pricing">
              <span className="current-price">{formatPKR(product.price)}</span>
              {product.originalPrice && (
                <span className="strike-price">{formatPKR(product.originalPrice)}</span>
              )}
            </div>

            <p className="quickview-desc">{product.description}</p>

            {/* Size Selector */}
            <div className="size-selector-wrap">
              <div className="size-label-row">
                <span className="size-label">SELECT SIZE:</span>
                <span className="size-guide-hint">True to oversized fit</span>
              </div>
              <div className="size-options">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quickview-actions-wrap">
              <div className="quantity-controls large">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                className={`quickview-add-btn ${added ? 'added' : ''}`}
                onClick={handleAddToCart}
                id="modal-add-to-cart-btn"
              >
                {added ? (
                  <>
                    <Check size={18} />
                    <span>ADDED TO BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>ADD TO BAG</span>
                  </>
                )}
              </button>

              <button
                className={`quickview-wishlist-toggle ${isWishlisted ? 'active' : ''}`}
                onClick={() => onToggleWishlist(product)}
                aria-label="Toggle wishlist"
              >
                <Heart
                  size={20}
                  fill={isWishlisted ? "#000" : "none"}
                  color={isWishlisted ? "#000" : "#222"}
                />
              </button>
            </div>

            {/* Guarantees */}
            <div className="quickview-guarantees">
              <div className="guarantee-chip">
                <Shield size={16} />
                <span>Heavyweight Cotton Certified</span>
              </div>
              <div className="guarantee-chip">
                <RotateCcw size={16} />
                <span>30-Day Easy Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
