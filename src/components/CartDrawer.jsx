import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { formatPKR } from '../data/products';

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountError, setDiscountError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discountAmount = discountApplied ? Math.round(subtotal * 0.20) : 0;
  const shippingThreshold = 5000;
  const shippingFee = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 250;
  const total = subtotal - discountAmount + shippingFee;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setDiscountError('');
    if (promoCode.trim().toUpperCase() === 'STREET20') {
      setDiscountApplied(true);
    } else {
      setDiscountError('Invalid coupon code. Try "STREET20"');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      setTimeout(() => {
        if (onCheckoutSuccess) onCheckoutSuccess();
        setOrderPlaced(false);
      }, 3000);
    }, 1200);
  };

  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`cart-drawer-panel ${isOpen ? 'open' : ''}`}
        aria-label="Shopping Cart Drawer"
        id="cart-drawer"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-group">
            <ShoppingBag size={20} />
            <h3 className="drawer-title">YOUR CART</h3>
            <span className="drawer-count-chip">({cartItems.length})</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close cart"
            id="close-cart-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="shipping-progress-banner">
          {subtotal >= shippingThreshold ? (
            <p className="shipping-status-text success">
              <Check size={16} /> YOU'VE UNLOCKED <strong>FREE SHIPPING</strong>!
            </p>
          ) : (
            <p className="shipping-status-text">
              Add <strong>{formatPKR(shippingThreshold - subtotal)}</strong> more for <strong>FREE DELIVERY</strong>
            </p>
          )}
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%`
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="drawer-body">
          {orderPlaced ? (
            <div className="checkout-success-view">
              <div className="success-check-badge">
                <Check size={36} />
              </div>
              <h3>ORDER CONFIRMED!</h3>
              <p>Thank you for shopping with UNICLUB. Your streetwear drop order is being prepared for express delivery.</p>
              <div className="order-id-pill">ORDER #UC-{Math.floor(100000 + Math.random() * 900000)}</div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="cart-empty-view">
              <ShoppingBag size={48} strokeWidth={1.2} className="empty-icon" />
              <h4>YOUR BAG IS EMPTY</h4>
              <p>Explore our latest heavyweight streetwear drops and add your favorite pieces.</p>
              <button
                className="cart-shop-now-btn"
                onClick={onClose}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item-row" key={`${item.product.id}-${item.size}`}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="cart-item-thumb"
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h4 className="cart-item-title">{item.product.name}</h4>
                      <button
                        className="cart-item-remove-btn"
                        onClick={() => onRemoveItem(item.product.id, item.size)}
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div className="cart-item-meta">
                      <span className="size-badge">SIZE: {item.size || 'M'}</span>
                    </div>
                    <div className="cart-item-footer">
                      <div className="quantity-controls">
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="cart-item-price">
                        {formatPKR(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer Calculations */}
        {cartItems.length > 0 && !orderPlaced && (
          <div className="drawer-footer">
            {/* Promo Code Form */}
            <form className="cart-promo-form" onSubmit={handleApplyPromo}>
              <input
                type="text"
                placeholder="PROMO CODE (STREET20)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="cart-promo-input"
              />
              <button type="submit" className="cart-promo-btn">
                APPLY
              </button>
            </form>
            {discountError && <p className="promo-error">{discountError}</p>}
            {discountApplied && (
              <p className="promo-success">
                ✓ 20% Discount Applied (-{formatPKR(discountAmount)})
              </p>
            )}

            <div className="cart-summary-lines">
              <div className="summary-line">
                <span>Subtotal</span>
                <span>{formatPKR(subtotal)}</span>
              </div>
              {discountApplied && (
                <div className="summary-line discount">
                  <span>Streetwear Club Discount</span>
                  <span>-{formatPKR(discountAmount)}</span>
                </div>
              )}
              <div className="summary-line">
                <span>Estimated Shipping</span>
                <span>{shippingFee === 0 ? 'FREE' : formatPKR(shippingFee)}</span>
              </div>
              <div className="summary-line total-line">
                <span>Total Amount</span>
                <span>{formatPKR(total)}</span>
              </div>
            </div>

            <button
              className="drawer-checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
              id="proceed-checkout-btn"
            >
              {isCheckingOut ? (
                <span>PROCESSING DROP...</span>
              ) : (
                <>
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
            <p className="checkout-guarantee-note">
              100% Secure Checkout with Cash on Delivery & Cards
            </p>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
