import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Menu, X, BookOpen, GraduationCap, Award, Compass, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenApply, onNavigateSection }) {
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const learnRef = useRef(null);
  const langRef = useRef(null);

  // Close dropdowns on outside click
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
    { title: 'Academic Tutoring', desc: 'Math, Physics, Chemistry, Biology & K-12 subjects', icon: BookOpen },
    { title: 'Tech & Data Science', desc: 'Coding, Python, AI, Machine Learning & Analytics', icon: Sparkles },
    { title: 'Business & Management', desc: 'Product, Marketing, Leadership & Finance', icon: Award },
    { title: 'Test Preparation', desc: 'SAT, ACT, GRE, GMAT & IELTS targeted prep', icon: GraduationCap },
    { title: 'Languages & Humanities', desc: 'Spanish, French, English, History & Literature', icon: Compass }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00b4d8] to-[#0096c7] flex items-center justify-center text-white shadow-sm shadow-[#00b4d8]/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V21M7 8H17" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17" cy="6" r="2.5" fill="#90e0ef" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-950 font-sans">
              tutorcen
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-gray-800">
            <button
              onClick={() => onNavigateSection('courses')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Find tutors
            </button>

            <button
              onClick={() => onNavigateSection('support')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Support
            </button>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnRef}>
              <button
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer py-2"
                aria-expanded={learnDropdownOpen}
              >
                <span>Learn</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${learnDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {learnDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-3 py-2">
                    Browse Learning Paths
                  </div>
                  {learnCategories.map((cat, idx) => {
                    const IconComponent = cat.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setLearnDropdownOpen(false);
                          onNavigateSection('courses');
                        }}
                        className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-cyan-50 text-[#0096c7] group-hover:bg-[#0096c7] group-hover:text-white transition-colors shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-[#0096c7] transition-colors">
                            {cat.title}
                          </div>
                          <div className="text-xs text-gray-500 line-clamp-1">
                            {cat.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={onOpenApply}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Apply for tutor
            </button>
          </nav>

          {/* Right Side: Language selector & Login button */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-800 hover:text-black transition-colors cursor-pointer py-1.5 px-2 rounded-md hover:bg-gray-50"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4 text-gray-700" />
                <span>{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50 animate-in fade-in duration-150">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        currentLang === lang.code ? 'font-semibold text-[#0096c7] bg-cyan-50/50' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.name}</span>
                      <span className="text-xs text-gray-400 font-mono">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login & Sign Up CTA */}
            <button
              onClick={onOpenAuth}
              className="bg-black text-white hover:bg-gray-800 active:scale-95 transition-all text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm cursor-pointer whitespace-nowrap"
            >
              Login &amp; sign up
            </button>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth()}
              className="bg-black text-white text-xs font-semibold px-3 py-2 rounded-md"
            >
              Login
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateSection('courses');
            }}
            className="w-full text-left py-2.5 text-base font-medium text-gray-900 border-b border-gray-50"
          >
            Find tutors
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateSection('support');
            }}
            className="w-full text-left py-2.5 text-base font-medium text-gray-900 border-b border-gray-50"
          >
            Support
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateSection('courses');
            }}
            className="w-full text-left py-2.5 text-base font-medium text-gray-900 border-b border-gray-50 flex items-center justify-between"
          >
            <span>Learn</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenApply();
            }}
            className="w-full text-left py-2.5 text-base font-medium text-gray-900 border-b border-gray-50"
          >
            Apply for tutor
          </button>

          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Globe className="w-4 h-4 text-gray-600" />
              <span>Language: {currentLang}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
