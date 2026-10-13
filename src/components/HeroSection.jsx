import React from 'react';
import SearchBar from './SearchBar.jsx';

export default function HeroSection({ onSearch, activeLocation, activeQuery }) {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headings & Search */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center z-10">
            {/* Eyebrow kicker */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-gray-700 uppercase mb-4 sm:mb-6">
              EMPOWERING STUDENTS TO EXCEL
            </p>

            {/* Main bold title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-black tracking-tight leading-[1.12] mb-8 sm:mb-10 text-balance">
              Your Gateway to<br />Effective Learning
            </h1>

            {/* Search Bar */}
            <SearchBar
              onSearch={onSearch}
              activeLocation={activeLocation}
              activeQuery={activeQuery}
            />

            {/* Popular search tags for quick browsing */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="font-medium text-gray-700">Popular:</span>
              {['Data Science', 'Product Management', 'Fractal Geometry', 'Python', 'SAT Prep'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSearch({ query: tag, location: '' })}
                  className="px-2.5 py-1 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-black border border-gray-200/60 transition-colors cursor-pointer text-xs"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Graphic Section */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[540px] h-[440px] sm:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden shadow-sm">
              
              {/* Top Half: Pale cream background with wavy contour lines */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#fdfaf2] overflow-hidden">
                <svg
                  className="w-full h-full opacity-45"
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

              {/* Bottom Half: Solid warm yellow-orange background */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#fca311]" />

              {/* Tutor Photo with teal shirt & laptop */}
              <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                <img
                  src="/src/assets/images/hero_tutor_teal_laptop_1791876895337.jpg"
                  alt="Student tutor with laptop"
                  className="w-full h-full object-cover object-top mix-blend-multiply sm:mix-blend-normal contrast-[1.05]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Subtle top gloss & decorative badges matching educational style */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-800">1,200+ Active Mentors</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
