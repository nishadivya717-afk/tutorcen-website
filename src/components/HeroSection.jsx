import React from 'react';
import SearchBar from './SearchBar.jsx';
import './HeroSection.css';

export default function HeroSection({ onSearch, activeLocation, activeQuery }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Heading and Search Bar */}
          <div className="hero-left">
            <p className="hero-kicker">
              EMPOWERING STUDENTS TO EXCEL
            </p>

            <h1 className="hero-title">
              Your Gateway to<br />Effective Learning
            </h1>

            <SearchBar
              onSearch={onSearch}
              activeLocation={activeLocation}
              activeQuery={activeQuery}
            />

            <div className="hero-tags">
              <span className="hero-tags-label">Popular:</span>
              {['Data Science', 'Product Management', 'Fractal Geometry', 'Python', 'SAT Prep'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSearch({ query: tag, location: '' })}
                  className="hero-tag-btn"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Framing with split cream wavy pattern & yellow-orange background */}
          <div className="hero-right">
            <div className="hero-card-frame">
              
              {/* Top half cream background with wave contours */}
              <div className="hero-bg-top">
                <svg
                  className="hero-waves-svg"
                  viewBox="0 0 500 270"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M-50 40 C100 10, 200 70, 350 30 C450 0, 550 50, 600 30" stroke="#e6d5b8" strokeWidth="2" fill="none" />
                  <path d="M-50 80 C80 50, 220 110, 370 70 C470 40, 560 90, 600 70" stroke="#e6d5b8" strokeWidth="2" fill="none" />
                  <path d="M-50 120 C110 90, 240 150, 390 110 C490 80, 570 130, 600 110" stroke="#e6d5b8" strokeWidth="2" fill="none" />
                  <path d="M-50 160 C90 130, 230 190, 380 150 C480 120, 560 170, 600 150" stroke="#e6d5b8" strokeWidth="2" fill="none" />
                  <path d="M-50 200 C120 170, 250 230, 400 190 C500 160, 570 210, 600 190" stroke="#e6d5b8" strokeWidth="2" fill="none" />
                  <path d="M-50 240 C100 210, 240 270, 390 230 C490 200, 570 250, 600 230" stroke="#e6d5b8" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Bottom half solid warm yellow-orange block */}
              <div className="hero-bg-bottom" />

              {/* Tutor Photo with teal shirt and laptop */}
              <div className="hero-img-wrap">
                <img
                  src="/src/assets/images/hero_tutor_teal_laptop_1791876895337.jpg"
                  alt="Student tutor with laptop"
                  className="hero-tutor-img"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Floating verified mentor badge */}
              <div className="hero-floating-badge">
                <span className="hero-badge-dot" />
                <span>1,200+ Active Mentors</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
