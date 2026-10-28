import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onStartShopping }) => {
  const handleScrollToShop = (e) => {
    e.preventDefault();
    if (onStartShopping) {
      onStartShopping();
    } else {
      const section = document.querySelector('#new-arrivals');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Decorative Typography */}
      <div className="hero-bg-text-layer" aria-hidden="true">
        <span className="hero-watermark hero-watermark-top">UNICLUB</span>
        <span className="hero-watermark-bold hero-watermark-left">UNI</span>
        <span className="hero-watermark-bold hero-watermark-right">QUE</span>
      </div>

      <div className="hero-container">
        {/* Left Floating Promotional Card */}
        <div className="hero-promo-card" id="hero-promo-card">
          <div className="hero-promo-tag">LIMITED EDITION // 2026</div>
          <h1 className="hero-promo-title">
            <span>STREET</span>
            <span>WEARS</span>
          </h1>
          <p className="hero-promo-subtitle">
            HIGH QUALITY COOL T-SHIRTS FOR STREET FASHION
          </p>
          <a
            href="#new-arrivals"
            className="hero-promo-btn"
            onClick={handleScrollToShop}
            id="hero-cta-btn"
          >
            <span>START SHOPPING</span>
            <ArrowRight size={16} className="hero-btn-arrow" />
          </a>
        </div>

        {/* Center-Right Hero Model Image */}
        <div className="hero-model-wrapper">
          <div className="hero-model-backdrop-glow" />
          <img
            src="/images/hero-model.jpg"
            alt="Male streetwear model wearing white hoodie, cap, and cargo pants"
            className="hero-model-img"
            loading="eager"
            id="hero-model-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
