import React from 'react';
import { CheckCircle2, Users, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LearningSection({ onOpenAuth, onNavigateSection }) {
  return (
    <section id="elevate" className="py-16 sm:py-24 bg-[#fafbfc] border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Graphic Element: Yellow Sunburst + Handwritten "NEW!" annotation + Clipboard graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] h-[340px] flex items-center justify-center">
              
              {/* Handwritten "NEW!" Callout & Hand-drawn Arrow */}
              <div className="absolute top-2 left-6 sm:left-10 z-20 flex flex-col items-center">
                <span className="handwritten text-3xl sm:text-4xl font-bold text-black rotate-[-12deg] tracking-wider select-none">
                  NEW!
                </span>
                {/* Hand-drawn style arrow pointing down to sunburst */}
                <svg
                  className="w-8 h-8 text-black -mt-1 ml-3 rotate-[10deg]"
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
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center animate-pulse duration-1000">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-md text-[#fca311]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Multi-point bold starburst */}
                  <polygon points="
                    50,0 59,25 85,15 75,38 100,50 75,62 85,85 59,75 50,100 
                    41,75 15,85 25,62 0,50 25,38 15,15 41,25
                  " />
                </svg>

                {/* Inner badge symbol */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-white font-extrabold text-sm uppercase tracking-wider drop-shadow-sm">
                    Interactive
                  </span>
                  <span className="text-black font-extrabold text-lg sm:text-xl drop-shadow-sm">
                    Live 1:1
                  </span>
                </div>
              </div>

              {/* Decorative study clipboard / pad card graphic */}
              <div className="absolute right-2 sm:right-6 bottom-4 w-44 sm:w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 rotate-3 z-10">
                {/* Binder Clip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                  <div className="w-5 h-1.5 border border-white/60 rounded-xs" />
                </div>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-gray-800">Verified Tutor</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full" />
                  <div className="w-3/4 h-1.5 bg-gray-100 rounded-full" />
                  <div className="pt-1 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                    <span>Active Now</span>
                    <span className="text-emerald-600 font-bold">100% Match</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content: Headline & Pillars */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
              Elevate Your Learning<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-600">
                with Tutorcen
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
              Connect with vetted subject-matter experts, accelerate your academic breakthroughs, 
              and explore tailored learning roadmaps designed for your personal goals.
            </p>

            {/* Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="p-2.5 rounded-lg bg-blue-50 text-[#0088ff] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Top 1% Vetted Mentors</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Rigorous screening ensures every tutor brings verified subject mastery and proven pedagogy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Flexible Scheduling</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Book sessions around your calendar with instant calendar sync and flexible rescheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAuth}
                className="bg-black hover:bg-gray-800 active:scale-95 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateSection('courses')}
                className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all cursor-pointer"
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
