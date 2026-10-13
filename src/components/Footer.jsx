import React from 'react';

export default function Footer({ onNavigateSection, onOpenAuth, onOpenApply }) {
  return (
    <footer className="bg-[#f5f6f8] border-t border-gray-200/60 pt-16 pb-10 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          
          {/* Column 1: Brand Info & Description */}
          <div className="md:col-span-4 pr-0 md:pr-6">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00b4d8] to-[#0096c7] flex items-center justify-center text-white shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V21M7 8H17" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17" cy="6" r="2.5" fill="#90e0ef" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-950 font-sans">
                tutorcen
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Discover endless learning opportunities with Tutorcen! Whether you're a student seeking academic support or a tutor looking to share your expertise, Tutorcen is your go-to platform.
            </p>
          </div>

          {/* Column 2: About us */}
          <div className="md:col-span-2">
            <h4 className="text-base font-bold text-gray-950 mb-1">About us</h4>
            <div className="w-8 h-[3px] bg-[#00b4d8] rounded-full mb-4" />
            <ul className="space-y-3 text-sm text-gray-600 font-normal">
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  Contact us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-black transition-colors">
                  Voice of success
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-black transition-colors">
                  Blog post
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-black transition-colors">
                  Best tutors
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="md:col-span-2">
            <h4 className="text-base font-bold text-gray-950 mb-1">Policies</h4>
            <div className="w-8 h-[3px] bg-[#00b4d8] rounded-full mb-4" />
            <ul className="space-y-3 text-sm text-gray-600 font-normal">
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  Privacy policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  Security
                </button>
              </li>
              <li>
                <button onClick={onOpenAuth} className="hover:text-black transition-colors">
                  Memberships
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  Terms &amp; use
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  Refund policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Feedback */}
          <div className="md:col-span-2">
            <h4 className="text-base font-bold text-gray-950 mb-1">Help &amp; Feedback</h4>
            <div className="w-8 h-[3px] bg-[#00b4d8] rounded-full mb-4" />
            <ul className="space-y-3 text-sm text-gray-600 font-normal">
              <li>
                <a href="mailto:support@tutorcen.com" className="hover:text-black transition-colors">
                  Mail us
                </a>
              </li>
              <li>
                <button onClick={() => onNavigateSection('elevate')} className="hover:text-black transition-colors">
                  Share your story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-black transition-colors">
                  Study guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  24/7 Student support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('support')} className="hover:text-black transition-colors">
                  Feedback
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Icons */}
          <div className="md:col-span-2">
            <h4 className="text-base font-bold text-gray-950 mb-1">Social</h4>
            <div className="w-8 h-[3px] bg-[#00b4d8] rounded-full mb-4" />
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 hover:scale-105 transition-all"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 hover:scale-105 transition-all"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 hover:scale-105 transition-all"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#twitter"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 hover:scale-105 transition-all"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Other Products & Services divider with wavy background */}
        <div className="relative py-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/70" />
          </div>
          <span className="relative bg-[#f5f6f8] px-6 text-sm font-semibold text-gray-800">
            Our other products &amp; services
          </span>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-6 text-center text-xs text-gray-500">
          Copyright &copy; tutorcen | Terms &amp; Conditions | Privacy Policy
        </div>

      </div>
    </footer>
  );
}
