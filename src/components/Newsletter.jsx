import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    // Standard email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    setStatus('success');
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-bg-image-wrapper">
        <img
          src="/images/newsletter-bg.jpg"
          alt="Streetwear urban backdrop"
          className="newsletter-bg-img"
          loading="lazy"
        />
        <div className="newsletter-dark-overlay" />
      </div>

      <div className="newsletter-container">
        <div className="newsletter-content">
          <span className="newsletter-pill-tag">EXCLUSIVE CLUB INVITATION</span>
          <h2 className="newsletter-heading">
            GET 20% OFF ON YOUR FIRST PURCHASE
          </h2>
          <p className="newsletter-subtitle">
            Sign up for the UNICLUB underground. Get private drop links, secret seasonal sales, and early access to numbered releases.
          </p>

          {status === 'success' ? (
            <div className="newsletter-success-box" id="newsletter-success-state">
              <CheckCircle2 size={32} className="newsletter-success-icon" />
              <div>
                <h4 className="success-title">WELCOME TO THE UNICLUB UNDERGROUND</h4>
                <p className="success-code">
                  Use code <span className="discount-badge">STREET20</span> at checkout for 20% off your first order!
                </p>
                <button
                  type="button"
                  className="newsletter-reset-btn"
                  onClick={handleReset}
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <div className="newsletter-input-group">
                <div className="newsletter-input-wrap">
                  <Mail size={18} className="newsletter-input-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address..."
                    className={`newsletter-input ${status === 'error' ? 'input-error' : ''}`}
                    aria-label="Email address for newsletter"
                    id="newsletter-email-input"
                  />
                </div>
                <button
                  type="submit"
                  className="newsletter-submit-btn"
                  id="newsletter-subscribe-btn"
                >
                  <span>SUBSCRIBE NOW</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {status === 'error' && (
                <div className="newsletter-error-message" id="newsletter-error-state">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          )}

          <p className="newsletter-privacy-note">
            No spam. We only notify when genuine limited heat drops. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
