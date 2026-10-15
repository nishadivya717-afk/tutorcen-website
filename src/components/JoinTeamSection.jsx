import React from 'react';
import './JoinTeamSection.css';

export default function JoinTeamSection({ onOpenApply }) {
  return (
    <section className="join-team-section">
      <div className="container">
        <div className="join-team-grid">
          
          {/* Left Column: Heading, description, CTA */}
          <div>
            <h2 className="join-team-headline">
              Join our global team,<br />share your passion
            </h2>
            
            <p className="join-team-description">
              At Tutorcen, we extend a warm invitation to join our worldwide network of tutors and learners. 
              Whether you're a seasoned educator or a student hungry for knowledge, our platform fosters a 
              supportive community where learning has no limits.
            </p>

            <div>
              <button
                onClick={onOpenApply}
                className="btn-apply-dark"
              >
                Apply for tutor
              </button>
            </div>
          </div>

          {/* Right Column: 3 Tutor Portrait Cards */}
          <div>
            <div className="join-team-cards-row">
              
              {/* Card 1: Male tutor on periwinkle blue */}
              <div className="tutor-card-1">
                <img
                  src="/src/assets/images/tutor_man_blue_bg_1791878994592.jpg"
                  alt="Tutor with notebooks"
                  className="tutor-card-photo"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Card 2: Center taller card (Woman in pink) with Green 100% EXPERTS Rosette */}
              <div className="tutor-card-2-center">
                
                {/* 100% EXPERTS Rosette Badge on top-left */}
                <div className="rosette-badge">
                  <svg
                    viewBox="0 0 100 100"
                    className="rosette-svg"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M50 0 C54 7, 58 7, 62 1 C67 7, 71 8, 77 3 C80 10, 84 12, 90 9 C91 16, 95 19, 100 18 C98 25, 100 29, 103 30 C99 36, 100 41, 102 44 C96 49, 96 54, 97 58 C90 61, 88 66, 88 71 C80 72, 77 77, 75 82 C67 81, 63 85, 60 89 C53 86, 48 89, 44 92 C39 87, 34 89, 29 93 C26 86, 21 86, 16 89 C15 82, 10 80, 5 82 C6 75, 2 72, 0 72 C5 66, 2 61, 0 57 C6 52, 5 47, 2 43 C9 39, 9 34, 8 29 C16 27, 18 22, 19 17 C27 18, 30 14, 33 9 C40 13, 44 10, 48 6 Z" />
                  </svg>
                  <div className="rosette-text-wrap">
                    <span className="rosette-pct">100%</span>
                    <span className="rosette-label">EXPERTS</span>
                  </div>
                </div>

                <img
                  src="/src/assets/images/tutor_curly_pink_bg_1791878996045.jpg"
                  alt="Certified tutor holding textbooks"
                  className="tutor-card-photo"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Card 3: Female tutor in blazer on peach background */}
              <div className="tutor-card-3">
                <img
                  src="/src/assets/images/tutor_woman_peach_bg_1791878996363.jpg"
                  alt="Academic advisor with clipboard"
                  className="tutor-card-photo"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
