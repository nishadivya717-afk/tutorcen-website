import React from 'react';
import './FindTutorBanner.css';

export default function FindTutorBanner({ onNavigateCourses }) {
  return (
    <section className="find-tutor-banner-section">
      <div className="container">
        
        <div className="find-tutor-banner-card">
          
          {/* Left Text Content */}
          <div className="find-tutor-left-content">
            
            {/* Yellow Ribbon Badge */}
            <div className="find-tutor-ribbon-badge">
              <span>FIND A TUTOR</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>

            {/* Bold Heading with radiating lines */}
            <div style={{ position: 'relative' }}>
              <h2 className="find-tutor-heading">
                Discover Your Perfect Tutor,<br />
                Find Expert Guidance for<br />
                Every Subject
              </h2>

              <div className="find-tutor-heading-dashes">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="2" x2="12" y2="7" />
                  <line x1="20" y1="12" x2="15" y2="12" />
                  <line x1="18" y1="5" x2="14" y2="9" />
                </svg>
              </div>
            </div>

            {/* Black CTA Button */}
            <div>
              <button
                onClick={onNavigateCourses}
                className="btn-find-tutor-dark"
              >
                Find tutor
              </button>
            </div>

          </div>

          {/* Right Image: Student with headphones and laptop */}
          <div className="find-tutor-right-img-wrap">
            <img
              src="/src/assets/images/student_headphones_green_1791878998075.jpg"
              alt="Student with headphones learning on laptop"
              className="find-tutor-student-img"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
