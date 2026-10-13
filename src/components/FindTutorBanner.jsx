import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FindTutorBanner({ onNavigateCourses }) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Forest Green Rounded Card */}
        <div className="relative rounded-3xl bg-[#0e3b26] text-white overflow-hidden shadow-xl min-h-[360px] sm:min-h-[420px] flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Text Content */}
          <div className="p-8 sm:p-12 lg:p-16 max-w-xl z-10 flex flex-col justify-center">
            
            {/* Yellow Ribbon Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#fca311] text-black text-xs font-extrabold uppercase tracking-wider mb-6 w-fit relative shadow-sm">
              <span>FIND A TUTOR</span>
              <Sparkles className="w-3.5 h-3.5 text-black" />
            </div>

            {/* Bold Heading with radiating lines */}
            <div className="relative mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18]">
                Discover Your Perfect Tutor,
                <br />
                Find Expert Guidance for
                <br />
                Every Subject
              </h2>

              {/* Decorative white radiating lines accent */}
              <div className="absolute top-1 right-12 sm:right-24 hidden sm:block opacity-80">
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
                className="bg-black hover:bg-neutral-900 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Find tutor
              </button>
            </div>

          </div>

          {/* Right Image: Student with headphones and laptop */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-full min-h-[360px] flex items-end justify-center lg:justify-end">
            <img
              src="/src/assets/images/student_headphones_green_1791878998075.jpg"
              alt="Student with headphones learning on laptop"
              className="w-full h-full object-cover object-center lg:object-right mix-blend-lighten contrast-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
