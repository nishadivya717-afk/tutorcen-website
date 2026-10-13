import React from 'react';

export default function CallToActionBanner({ onOpenAuth }) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Navy Rounded Container */}
        <div className="relative rounded-3xl bg-[#040e35] text-white overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[440px] flex flex-col lg:flex-row items-center justify-between">
          
          {/* Subtle concentric contour lines in background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
              <path d="M-100 250 C200 100, 600 400, 1100 250" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M-100 300 C200 150, 600 450, 1100 300" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M-100 350 C200 200, 600 500, 1100 350" stroke="#3b82f6" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Left Text & CTA */}
          <div className="p-8 sm:p-12 lg:p-16 max-w-xl z-10 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.18] mb-8">
              Ready to take your<br />
              learning journey to the<br />
              next level?
            </h2>

            <div>
              <button
                onClick={onOpenAuth}
                className="bg-[#00a8e8] hover:bg-[#0096c7] active:scale-95 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-[#00a8e8]/25 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Get started
              </button>
            </div>
          </div>

          {/* Right Visual: Laptop with megaphone illustration */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-full min-h-[360px] flex items-center justify-center lg:justify-end p-4 sm:p-6">
            <div className="relative w-full max-w-lg h-full max-h-[380px] rounded-2xl overflow-hidden">
              <img
                src="/src/assets/images/laptop_megaphone_banner_1791879049477.jpg"
                alt="Connect and learn on Tutorcen"
                className="w-full h-full object-contain object-center lg:object-right"
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
