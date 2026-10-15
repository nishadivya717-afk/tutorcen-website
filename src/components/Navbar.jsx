import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar({ onOpenAuth, onOpenApply, onNavigateSection }) {
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const learnRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (learnRef.current && !learnRef.current.contains(e.target)) {
        setLearnDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'EN', name: 'English (US)' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'JA', name: '日本語' },
    { code: 'ZH', name: '中文' }
  ];

  const learnCategories = [
    { title: 'Academic Tutoring', desc: 'Math, Physics, Chemistry, Biology & K-12 subjects' },
    { title: 'Tech & Data Science', desc: 'Coding, Python, AI, Machine Learning & Analytics' },
    { title: 'Business & Management', desc: 'Product, Marketing, Leadership & Finance' },
    { title: 'Test Preparation', desc: 'SAT, ACT, GRE, GMAT & IELTS targeted prep' },
    { title: 'Languages & Humanities', desc: 'Spanish, French, English, History & Literature' }
  ];

  return (
    <header className="navbar-header">
      <div className="container">
        <div className="navbar-inner">
          
          {/* Tutorcen Logo */}
          <div className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="navbar-logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V21M7 8H17" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17" cy="6" r="2.5" fill="#90e0ef" />
              </svg>
            </div>
            <span className="navbar-logo-text">tutorcen</span>
          </div>

          {/* Navigation Links */}
          <nav className="navbar-nav">
            <button
              onClick={() => onNavigateSection('courses')}
              className="nav-link"
            >
              Find tutors
            </button>

            <button
              onClick={() => onNavigateSection('support')}
              className="nav-link"
            >
              Support
            </button>

            {/* Learn Dropdown */}
            <div className="dropdown-container" ref={learnRef}>
              <button
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                className="nav-link"
                aria-expanded={learnDropdownOpen}
              >
                <span>Learn</span>
                <svg className={`dropdown-arrow ${learnDropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {learnDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-heading">Browse Learning Paths</div>
                  {learnCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setLearnDropdownOpen(false);
                        onNavigateSection('courses');
                      }}
                      className="dropdown-item"
                    >
                      <div className="dropdown-item-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="dropdown-item-title">{cat.title}</div>
                        <div className="dropdown-item-desc">{cat.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenApply}
              className="nav-link"
            >
              Apply for tutor
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="navbar-actions">
            {/* Language Selector */}
            <div className="dropdown-container" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="lang-btn"
                aria-label="Select language"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <div className="lang-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`lang-item ${currentLang === lang.code ? 'active' : ''}`}
                    >
                      <span>{lang.name}</span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login & Sign Up CTA */}
            <button
              onClick={onOpenAuth}
              className="btn-login"
            >
              Login &amp; sign up
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onNavigateSection('courses');
          }}
          className="mobile-nav-link"
        >
          Find tutors
        </button>
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onNavigateSection('support');
          }}
          className="mobile-nav-link"
        >
          Support
        </button>
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenApply();
          }}
          className="mobile-nav-link"
        >
          Apply for tutor
        </button>
      </div>
    </header>
  );
}
