import React from 'react';

export default function JoinTeamSection({ onOpenApply }) {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, description, CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-black tracking-tight leading-[1.15] mb-6">
              Join our global team,<br />share your passion
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-lg">
              At Tutorcen, we extend a warm invitation to join our worldwide network of tutors and learners. 
              Whether you're a seasoned educator or a student hungry for knowledge, our platform fosters a 
              supportive community where learning has no limits.
            </p>

            <div>
              <button
                onClick={onOpenApply}
                className="bg-black hover:bg-neutral-800 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Apply for tutor
              </button>
            </div>
          </div>

          {/* Right Column: 3 Tutor Portrait Cards */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="flex items-end gap-3 sm:gap-4 lg:gap-5 max-w-full">
              
              {/* Card 1: Male tutor on periwinkle blue */}
              <div className="w-28 sm:w-44 md:w-52 h-44 sm:h-64 md:h-76 rounded-2xl overflow-hidden bg-[#93a5cf] shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1">
                <img
                  src="/src/assets/images/tutor_man_blue_bg_1791878994592.jpg"
                  alt="Tutor with notebooks"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Card 2: Center taller card (Woman in pink) with Green 100% EXPERTS Rosette */}
              <div className="relative w-36 sm:w-56 md:w-64 h-56 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[#fbc2eb] shadow-xl shrink-0 transition-transform duration-300 hover:-translate-y-1.5">
                
                {/* 100% EXPERTS Rosette Badge on top-left */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-[#059669] drop-shadow-md animate-spin-slow"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Wavy scalloped rosette flower border */}
                    <path d="M50 0 C54 7, 58 7, 62 1 C67 7, 71 8, 77 3 C80 10, 84 12, 90 9 C91 16, 95 19, 100 18 C98 25, 100 29, 103 30 C99 36, 100 41, 102 44 C96 49, 96 54, 97 58 C90 61, 88 66, 88 71 C80 72, 77 77, 75 82 C67 81, 63 85, 60 89 C53 86, 48 89, 44 92 C39 87, 34 89, 29 93 C26 86, 21 86, 16 89 C15 82, 10 80, 5 82 C6 75, 2 72, 0 72 C5 66, 2 61, 0 57 C6 52, 5 47, 2 43 C9 39, 9 34, 8 29 C16 27, 18 22, 19 17 C27 18, 30 14, 33 9 C40 13, 44 10, 48 6 Z" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1">
                    <span className="text-[9px] sm:text-[11px] font-extrabold text-white leading-none">100%</span>
                    <span className="text-[6px] sm:text-[7px] font-bold text-white uppercase tracking-tighter leading-none mt-0.5">EXPERTS</span>
                  </div>
                </div>

                <img
                  src="/src/assets/images/tutor_curly_pink_bg_1791878996045.jpg"
                  alt="Certified tutor holding textbooks"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Card 3: Female tutor in blazer on peach background */}
              <div className="w-28 sm:w-44 md:w-52 h-44 sm:h-64 md:h-76 rounded-2xl overflow-hidden bg-[#f7a399] shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1">
                <img
                  src="/src/assets/images/tutor_woman_peach_bg_1791878996363.jpg"
                  alt="Academic advisor with clipboard"
                  className="w-full h-full object-cover object-top"
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
