import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PromoBanners = ({ onExploreCategory }) => {
  return (
    <section className="promo-banners-section" id="promo-banners">
      <div className="promo-banners-container">
        {/* Banner 1: Left */}
        <div className="promo-banner-card" id="promo-banner-left">
          <div className="promo-image-wrapper">
            <img
              src="/images/promo-1.jpg"
              alt="Urban Arsenal Raw Unknown streetwear t-shirt collection"
              className="promo-image"
              loading="lazy"
            />
            <div className="promo-card-overlay" />
          </div>
          <div className="promo-card-content">
            <span className="promo-tag">LIMITED DROP // 2026</span>
            <h3 className="promo-heading">URBAN ARSENAL // T-SHIRTS</h3>
            <p className="promo-subtext">Heavyweight 280 GSM tailored for metropolitan silhouettes.</p>
            <button
              className="promo-link-btn"
              onClick={() => onExploreCategory('T-Shirts')}
              id="promo-btn-tees"
            >
              <span>EXPLORE TEES</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Banner 2: Right */}
        <div className="promo-banner-card" id="promo-banner-right">
          <div className="promo-image-wrapper">
            <img
              src="/images/promo-2.jpg"
              alt="Urban pulse streetwear collection oversized tees and hoodies"
              className="promo-image"
              loading="lazy"
            />
            <div className="promo-card-overlay" />
          </div>
          <div className="promo-card-content">
            <span className="promo-tag">CORE ESSENTIALS</span>
            <h3 className="promo-heading">SPEAK YOUR MIND // OVERSIZED</h3>
            <p className="promo-subtext">Architectural streetwear shapes inspired by concrete culture.</p>
            <button
              className="promo-link-btn"
              onClick={() => onExploreCategory('Hoodies')}
              id="promo-btn-hoodies"
            >
              <span>DISCOVER COLLECTION</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
