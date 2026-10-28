import React from 'react';
import { CheckCircle2, Heart, ShoppingBag, X } from 'lucide-react';

const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const icons = {
    cart: <ShoppingBag size={18} className="toast-icon-cart" />,
    wishlist: <Heart size={18} fill="#000" className="toast-icon-wishlist" />,
    success: <CheckCircle2 size={18} className="toast-icon-success" />
  };

  return (
    <div className={`toast-notification ${toast.type}`} role="status">
      <div className="toast-content">
        {icons[toast.type] || <CheckCircle2 size={18} />}
        <span className="toast-message">{toast.message}</span>
      </div>
      <button
        className="toast-close-btn"
        onClick={onClose}
        aria-label="Close notification"
      >
        <X size={15} />
      </button>
    </div>
  );
};

export default Toast;
