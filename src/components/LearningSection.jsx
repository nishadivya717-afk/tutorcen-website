import React from 'react';
import './LearningSection.css';

export default function LearningSection({ onOpenAuth, onNavigateSection }) {
  return (
    <section id="elevate" className="learning-section">
      <div className="container">
        <div className="learning-grid">
          
          {/* Left Graphic Element: Yellow Sunburst + Handwritten "NEW!" annotation + Clipboard graphic */}
          <div className="learning-art-wrap">
            
            {/* Handwritten "NEW!" annotation */}
            <div className="learning-new-annotation">
              <span className="learning-new-text">NEW!</span>
              <svg
                className="learning-new-arrow"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4 C16 14, 22 22, 26 32 M26 32 L16 30 M26 32 L28 22"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Yellow Decorative Sunburst / Starburst Graphic */}
            <div className="learning-sunburst-wrap">
              <svg
                viewBox="0 0 100 100"
                className="learning-sunburst-svg"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="
                  50,0 59,25 85,15 75,38 100,50 75,62 85,85 59,75 50,100 
                  41,75 15,85 25,62 0,50 25,38 15,15 41,25
                " />
              </svg>
              <div className="learning-sunburst-label">
                <span className="sunburst-tag">Interactive</span>
                <span className="sunburst-live">Live 1:1</span>
              </div>
            </div>

            {/* Decorative Clipboard Card */}
            <div className="learning-clipboard-card">
              <div className="clipboard-clip">
                <div className="clipboard-clip-wire" />
              </div>
              <div className="clipboard-content">
                <div className="clipboard-row-top">
                  <div className="clipboard-check-icon">✓</div>
                  <span className="clipboard-verified-text">Verified Tutor</span>
                </div>
                <div className="clipboard-bar-full" />
                <div className="clipboard-bar-half" />
                <div className="clipboard-footer">
                  <span>Active Now</span>
                  <span style={{ color: '#059669', fontWeight: 700 }}>100% Match</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content: Headline & Pillars */}
          <div>
            <h2 className="learning-headline">
              Elevate Your Learning<br />
              <span className="learning-headline-sub">with Tutorcen</span>
            </h2>

            <p className="learning-description">
              Connect with vetted subject-matter experts, accelerate your academic breakthroughs, 
              and explore tailored learning roadmaps designed for your personal goals.
            </p>

            <div className="learning-pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="pillar-title">Top 1% Vetted Mentors</h4>
                  <p className="pillar-desc">
                    Rigorous screening ensures every tutor brings verified subject mastery and proven pedagogy.
                  </p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <h4 className="pillar-title">Flexible Scheduling</h4>
                  <p className="pillar-desc">
                    Book sessions around your calendar with instant calendar sync and flexible rescheduling.
                  </p>
                </div>
              </div>
            </div>

            <div className="learning-cta-group">
              <button
                onClick={onOpenAuth}
                className="btn-primary-dark"
              >
                <span>Get Started Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                onClick={() => onNavigateSection('courses')}
                className="btn-secondary-white"
              >
                Browse All Fields
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
