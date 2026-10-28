import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({
  products,
  selectedCategory,
  onSelectCategory,
  wishlistIds,
  cartItemIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) => {
  const categories = ['All', 'Hoodies', 'T-Shirts', 'Sweatshirts'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="product-grid-section" id="new-arrivals">
      <div className="product-grid-container">
        {/* Section Header matching reference */}
        <div className="section-title-wrap">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <div className="section-title-underline" />
        </div>

        {/* Category Filters */}
        <div className="category-filter-pills" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              isInCart={cartItemIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom Action Button matching reference */}
        <div className="view-all-wrapper">
          <button
            className="view-all-btn"
            onClick={() => onSelectCategory('All')}
            id="view-all-products-btn"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
