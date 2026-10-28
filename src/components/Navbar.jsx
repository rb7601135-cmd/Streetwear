import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', category: null },
    { label: 'SHOP', href: '#new-arrivals', category: 'All' },
    { label: 'HOODIES', href: '#new-arrivals', category: 'Hoodies' },
    { label: 'T-SHIRTS', href: '#new-arrivals', category: 'T-Shirts' },
    { label: 'ACCESSORIES', href: '#promo-banners', category: null },
    { label: 'JACKETS', href: '#new-arrivals', category: 'Sweatshirts' }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item.category && onSelectCategory) {
      onSelectCategory(item.category);
    }
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}
        id="top-navbar"
      >
        <div className="navbar-container">
          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Brand Logo */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, { href: '#home' })}
            id="brand-logo"
          >
            UNICLUB
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-links" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, item)}
                id={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="navbar-actions">
            <button
              className="navbar-action-btn"
              onClick={onOpenSearch}
              aria-label="Search products"
              id="search-button"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            <button
              className="navbar-action-btn"
              onClick={onOpenWishlist}
              aria-label="View Wishlist"
              id="wishlist-button"
            >
              <Heart size={20} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span className="navbar-badge" id="wishlist-badge">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              className="navbar-action-btn cart-btn"
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              id="cart-button"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="navbar-badge cart-badge-highlight" id="cart-badge">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        id="mobile-drawer-menu"
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-brand">UNICLUB</span>
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-drawer-links">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-drawer-link"
              onClick={(e) => handleNavClick(e, item)}
            >
              <span>{item.label}</span>
              <ArrowRight size={16} className="mobile-link-arrow" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-notice">
            <p className="mobile-notice-title">NEW SEASON DROP</p>
            <p className="mobile-notice-sub">Free express shipping on orders over Rs. 5,000</p>
          </div>
          <div className="mobile-drawer-actions">
            <button
              className="mobile-action-pill"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
            >
              <ShoppingBag size={18} />
              <span>Cart ({cartCount})</span>
            </button>
            <button
              className="mobile-action-pill"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWishlist();
              }}
            >
              <Heart size={18} />
              <span>Wishlist ({wishlistCount})</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
