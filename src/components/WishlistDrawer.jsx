import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { formatPKR } from '../data/products';

const WishlistDrawer = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onMoveToCart
}) => {
  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`cart-drawer-panel ${isOpen ? 'open' : ''}`}
        aria-label="Wishlist Drawer"
        id="wishlist-drawer"
      >
        <div className="drawer-header">
          <div className="drawer-title-group">
            <Heart size={20} fill="#000" />
            <h3 className="drawer-title">YOUR WISHLIST</h3>
            <span className="drawer-count-chip">({wishlistItems.length})</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close wishlist"
            id="close-wishlist-btn"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {wishlistItems.length === 0 ? (
            <div className="cart-empty-view">
              <Heart size={48} strokeWidth={1.2} className="empty-icon" />
              <h4>YOUR WISHLIST IS EMPTY</h4>
              <p>Save items you like by tapping the heart icon on any product card.</p>
              <button
                className="cart-shop-now-btn"
                onClick={onClose}
              >
                EXPLORE DROPS
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {wishlistItems.map((product) => (
                <div className="cart-item-row" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-thumb"
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h4 className="cart-item-title">{product.name}</h4>
                      <button
                        className="cart-item-remove-btn"
                        onClick={() => onRemoveWishlist(product.id)}
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div className="cart-item-meta">
                      <span className="product-category">{product.category}</span>
                    </div>
                    <div className="cart-item-footer">
                      <span className="cart-item-price">
                        {formatPKR(product.price)}
                      </span>
                      <button
                        className="wishlist-move-cart-btn"
                        onClick={() => onMoveToCart(product)}
                      >
                        <ShoppingBag size={14} />
                        <span>ADD TO CART</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default WishlistDrawer;
