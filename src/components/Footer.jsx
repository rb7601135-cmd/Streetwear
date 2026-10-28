import React from 'react';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

const Footer = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, targetId, category) => {
    e.preventDefault();
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-root" id="footer">
      <div className="footer-container">
        {/* Brand Banner Row */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <span className="footer-brand-logo">UNICLUB</span>
            <p className="footer-brand-bio">
              Engineered for the streets. Heavyweight cottons, oversized architectural cuts, and high-contrast monochrome design tailored for contemporary urban culture.
            </p>
            <div className="footer-social-links">
              <a href="#instagram" aria-label="Instagram" className="footer-social-icon">
                <InstagramIcon />
              </a>
              <a href="#twitter" aria-label="Twitter / X" className="footer-social-icon">
                <TwitterIcon />
              </a>
              <a href="#youtube" aria-label="YouTube" className="footer-social-icon">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <button
            className="footer-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            id="scroll-to-top"
          >
            <ArrowUp size={16} />
            <span>TOP</span>
          </button>
        </div>

        <div className="footer-divider" />

        {/* 4 Columns */}
        <div className="footer-columns-grid">
          {/* Col 1: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a>
              </li>
              <li>
                <a href="#new-arrivals" onClick={(e) => handleLinkClick(e, '#new-arrivals', 'All')}>Shop All</a>
              </li>
              <li>
                <a href="#new-arrivals" onClick={(e) => handleLinkClick(e, '#new-arrivals', 'Hoodies')}>Hoodies</a>
              </li>
              <li>
                <a href="#new-arrivals" onClick={(e) => handleLinkClick(e, '#new-arrivals', 'T-Shirts')}>T-Shirts</a>
              </li>
              <li>
                <a href="#new-arrivals" onClick={(e) => handleLinkClick(e, '#new-arrivals', 'Sweatshirts')}>Sweatshirts</a>
              </li>
              <li>
                <a href="#promo-banners" onClick={(e) => handleLinkClick(e, '#promo-banners')}>Exclusive Drops</a>
              </li>
            </ul>
          </div>

          {/* Col 2: About Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">ABOUT US</h4>
            <ul className="footer-nav-list">
              <li><a href="#story">Our Story</a></li>
              <li><a href="#sustainability">Heavyweight Fabrics</a></li>
              <li><a href="#lookbook">Lookbook 2026</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Editorial Press</a></li>
            </ul>
          </div>

          {/* Col 3: Help Centre */}
          <div className="footer-col">
            <h4 className="footer-col-title">HELP CENTRE</h4>
            <ul className="footer-nav-list">
              <li><a href="#track">Track Order</a></li>
              <li><a href="#shipping">Shipping & Delivery</a></li>
              <li><a href="#returns">Exchange & Returns</a></li>
              <li><a href="#sizes">Size Guide</a></li>
              <li><a href="#faqs">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTACT INFORMATION</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Sector 15, Korangi Industrial Area, Karachi, Pakistan</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="contact-icon" />
                <span>+92 (021) 3456-7890</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <span>support@uniclubstreetwear.pk</span>
              </div>
              <div className="footer-hours">
                <span>Mon – Sat: 10:00 AM – 8:00 PM PKT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Bottom bar with copyright and badges */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 UNICLUB Streetwear Co. All rights reserved. Designed for authentic street culture.
          </p>
          <div className="footer-payment-methods">
            <span className="pay-chip">VISA</span>
            <span className="pay-chip">MASTERCARD</span>
            <span className="pay-chip">CASH ON DELIVERY</span>
            <span className="pay-chip">BANK TRANSFER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
