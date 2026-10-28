import React from 'react';
import { Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { formatPKR } from '../data/products';

const ProductCard = ({
  product,
  isWishlisted,
  isInCart,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) => {
  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      {/* Product Image Container */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        {/* Badges */}
        <div className="product-badges">
          {product.onSale && (
            <span className="badge-pill badge-sale">SALE</span>
          )}
          {product.tag && (
            <span className="badge-pill badge-tag">{product.tag}</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          id={`wishlist-btn-${product.id}`}
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            fill={isWishlisted ? "#000" : "none"}
            color={isWishlisted ? "#000" : "#222"}
          />
        </button>

        {/* Hover Quick Actions Overlay */}
        <div className="product-overlay">
          <button
            className="product-overlay-btn"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            title="Quick View"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye size={18} />
            <span>QUICK VIEW</span>
          </button>
          
          <button
            className={`product-overlay-btn btn-cart ${isInCart ? 'in-cart' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            title="Add to Cart"
            aria-label={`Add ${product.name} to cart`}
            id={`add-to-cart-${product.id}`}
          >
            {isInCart ? (
              <>
                <Check size={18} />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <ShoppingBag size={18} />
                <span>ADD TO CART</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info" onClick={() => onQuickView(product)}>
        <span className="product-category">{product.category}</span>
        <h4 className="product-name">{product.name}</h4>
        
        <div className="product-pricing">
          <span className="product-price">{formatPKR(product.price)}</span>
          {product.originalPrice && (
            <span className="product-original-price">
              {formatPKR(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Mobile Direct Add to Cart Button */}
        <button
          className={`mobile-quick-add-btn ${isInCart ? 'in-cart' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          aria-label={`Add ${product.name} to cart`}
        >
          {isInCart ? 'ADDED TO BAG' : 'ADD TO BAG'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
