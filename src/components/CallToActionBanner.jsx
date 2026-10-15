import React from 'react';
import './CallToActionBanner.css';

export default function CallToActionBanner({ onOpenAuth }) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        
        <div className="cta-banner-card">
          
          {/* Subtle concentric contour lines in background */}
          <div className="cta-bg-contour">
            <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
              <path d="M-100 250 C200 100, 600 400, 1100 250" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M-100 300 C200 150, 600 450, 1100 300" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M-100 350 C200 200, 600 500, 1100 350" stroke="#3b82f6" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Left Text & CTA */}
          <div className="cta-left-content">
            <h2 className="cta-headline">
              Ready to take your<br />
              learning journey to the<br />
              next level?
            </h2>

            <div>
              <button
                onClick={onOpenAuth}
                className="btn-get-started-cyan"
              >
                Get started
              </button>
            </div>
          </div>

          {/* Right Visual: Laptop with megaphone illustration */}
          <div className="cta-right-img-wrap">
            <div className="cta-art-frame">
              <img
                src="/src/assets/images/laptop_megaphone_banner_1791879049477.jpg"
                alt="Connect and learn on Tutorcen"
                className="cta-banner-img"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
