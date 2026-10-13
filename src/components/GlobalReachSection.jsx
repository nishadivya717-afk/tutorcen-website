import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function GlobalReachSection() {
  const [activePin, setActivePin] = useState(null);

  // Global tutor markers matching the Figma dotted map
  const tutorPins = [
    { id: 1, name: 'Emma Watson', location: 'New York, USA', subject: 'Calculus & Physics', rating: 4.9, x: 23, y: 35, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
    { id: 2, name: 'Lucas Silva', location: 'São Paulo, Brazil', subject: 'Python & AI', rating: 4.8, x: 33, y: 72, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
    { id: 3, name: 'Arthur Pendelton', location: 'London, UK', subject: 'Economics & Stats', rating: 4.95, x: 44, y: 32, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
    { id: 4, name: 'Clara Dubois', location: 'Paris, France', subject: 'Literature & French', rating: 4.85, x: 49, y: 44, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
    { id: 5, name: 'Dr. Jens Vogel', location: 'Berlin, Germany', subject: 'Chemistry', rating: 4.9, x: 55, y: 48, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80' },
    { id: 6, name: 'Priya Sharma', location: 'New Delhi, India', subject: 'Algorithms & Data', rating: 4.98, x: 67, y: 55, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80' },
    { id: 7, name: 'Kenji Sato', location: 'Tokyo, Japan', subject: 'Robotics & Math', rating: 4.9, x: 80, y: 35, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80' },
    { id: 8, name: 'Kofi Mensah', location: 'Nairobi, Kenya', subject: 'Biology & Medicine', rating: 4.88, x: 53, y: 70, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' },
    { id: 9, name: 'Liam O’Connor', location: 'Sydney, Australia', subject: 'Product & Design', rating: 4.92, x: 82, y: 78, img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Title and Astronaut Rocket Graphic */}
        <div className="relative mb-8 sm:mb-14">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-black tracking-tight leading-[1.18]">
              World-Class Tutors, Global<br />Learning Reach
            </h2>
          </div>

          {/* Hand-drawn style Astronaut on Rocket in Top-Right */}
          <div className="hidden md:block absolute right-0 lg:right-8 -top-8 w-36 h-36 lg:w-44 lg:h-44 pointer-events-none select-none">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-gray-800"
            >
              {/* Clouds */}
              <path d="M140 160 C130 160, 120 150, 130 140 C135 130, 155 130, 160 140 C170 140, 175 155, 165 160 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M160 70 C155 70, 150 65, 155 60 C160 55, 175 55, 178 60 C185 60, 188 70, 180 70 Z" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Rocket Body */}
              <g transform="translate(110, 80) rotate(-35)">
                <ellipse cx="40" cy="20" rx="35" ry="16" stroke="currentColor" strokeWidth="2.5" fill="white" />
                <path d="M75 20 L95 20" stroke="currentColor" strokeWidth="2.5" />
                {/* Rocket Window */}
                <circle cx="50" cy="20" r="7" stroke="currentColor" strokeWidth="2" fill="#f8fafc" />
                {/* Fins */}
                <path d="M15 10 L5 0 L15 20 L5 40 L15 30" stroke="currentColor" strokeWidth="2" fill="white" />
                {/* Exhaust flames */}
                <path d="M5 20 C-10 16, -20 22, -30 20 C-15 26, -5 24, 5 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M5 15 C-12 12, -25 14, -35 15" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Astronaut Standing on top */}
                <g transform="translate(30, -32)">
                  {/* Helmet */}
                  <circle cx="15" cy="10" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
                  <ellipse cx="16" cy="10" rx="6" ry="5" stroke="currentColor" strokeWidth="2" fill="black" />
                  {/* Body & limbs */}
                  <rect x="9" y="20" width="12" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="white" />
                  {/* Arms */}
                  <path d="M9 22 C3 25, 4 30, 7 32" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M21 22 C27 25, 26 30, 23 32" stroke="currentColor" strokeWidth="2" fill="none" />
                  {/* Legs */}
                  <path d="M11 35 L10 44" stroke="currentColor" strokeWidth="2" />
                  <path d="M19 35 L20 44" stroke="currentColor" strokeWidth="2" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Global Dotted Map with Floating Tutor Pins */}
        <div className="relative w-full max-w-5xl mx-auto h-[320px] sm:h-[440px] md:h-[500px] bg-white rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-8 flex items-center justify-center overflow-hidden">
          
          {/* Halftone Dotted World Map Graphic */}
          <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full text-gray-800"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pattern of dotted continental contours */}
              <g opacity="0.6">
                {/* North America dots */}
                {[
                  [180, 100], [200, 100], [220, 110], [170, 120], [190, 120], [210, 120], [230, 125],
                  [160, 140], [180, 140], [200, 140], [220, 140], [240, 145], [260, 140],
                  [170, 160], [190, 160], [210, 160], [230, 160], [250, 165], [270, 160],
                  [180, 180], [200, 180], [220, 185], [240, 180], [260, 185],
                  [200, 205], [220, 210], [240, 215], [215, 230], [225, 245], [235, 260]
                ].map(([cx, cy], i) => (
                  <circle key={`na-${i}`} cx={cx} cy={cy} r="2.2" />
                ))}

                {/* South America dots */}
                {[
                  [280, 280], [300, 285], [320, 290],
                  [270, 305], [290, 310], [310, 315], [330, 320],
                  [280, 335], [300, 340], [320, 345],
                  [290, 365], [310, 370],
                  [300, 395], [315, 410], [320, 430]
                ].map(([cx, cy], i) => (
                  <circle key={`sa-${i}`} cx={cx} cy={cy} r="2.2" />
                ))}

                {/* Europe dots */}
                {[
                  [460, 110], [480, 105], [500, 100],
                  [450, 130], [470, 125], [490, 125], [510, 120], [530, 120],
                  [440, 150], [460, 150], [480, 145], [500, 145], [520, 140],
                  [450, 170], [470, 170], [490, 165], [510, 165], [530, 160]
                ].map(([cx, cy], i) => (
                  <circle key={`eu-${i}`} cx={cx} cy={cy} r="2.2" />
                ))}

                {/* Africa dots */}
                {[
                  [470, 200], [490, 195], [510, 200], [530, 205],
                  [460, 225], [480, 225], [500, 230], [520, 235], [540, 230], [560, 235],
                  [470, 255], [490, 260], [510, 265], [530, 265], [550, 260],
                  [480, 285], [500, 290], [520, 295], [540, 290],
                  [490, 320], [510, 325], [530, 320],
                  [500, 350], [520, 355],
                  [510, 380], [525, 400]
                ].map(([cx, cy], i) => (
                  <circle key={`af-${i}`} cx={cx} cy={cy} r="2.2" />
                ))}

                {/* Asia dots */}
                {[
                  [570, 105], [600, 100], [630, 95], [660, 90], [690, 95], [720, 100], [750, 105],
                  [560, 130], [590, 125], [620, 125], [650, 120], [680, 125], [710, 130], [740, 135], [770, 130], [800, 135],
                  [580, 155], [610, 150], [640, 150], [670, 155], [700, 160], [730, 165], [760, 160], [790, 165],
                  [600, 185], [630, 185], [660, 190], [690, 195], [720, 195], [750, 200], [780, 205],
                  [630, 215], [660, 220], [690, 225], [720, 230], [750, 235],
                  [650, 245], [680, 255], [710, 260], [740, 270],
                  [670, 280], [700, 290], [730, 300]
                ].map(([cx, cy], i) => (
                  <circle key={`as-${i}`} cx={cx} cy={cy} r="2.2" />
                ))}

                {/* Australia dots */}
                {[
                  [770, 340], [790, 335], [810, 340], [830, 345],
                  [760, 365], [780, 365], [800, 370], [820, 370], [840, 365],
                  [770, 395], [790, 400], [810, 400], [830, 395],
                  [790, 420], [810, 420]
                ].map(([cx, cy], i) => (
                  <circle key={`au-${i}`} cx={cx} cy={cy} r="2.2" />
                ))}
              </g>
            </svg>
          </div>

          {/* Location Pins Overlay */}
          {tutorPins.map((pin) => (
            <div
              key={pin.id}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-full cursor-pointer group z-20"
              onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
              onMouseEnter={() => setActivePin(pin.id)}
            >
              {/* Pin Map Marker with Avatar and Purple Outline */}
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#7c3aed] to-[#a855f7] shadow-lg group-hover:scale-115 transition-transform duration-200">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border border-white">
                    <img
                      src={pin.img}
                      alt={pin.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                {/* Pointer tip triangle */}
                <div className="w-2.5 h-2.5 bg-[#7c3aed] rotate-45 -mt-1 rounded-xs" />
              </div>

              {/* Tooltip Card on Hover/Active */}
              {activePin === pin.id && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-2.5 z-50 text-left animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-xs font-bold text-gray-900">{pin.name}</div>
                  <div className="text-[11px] text-gray-500">{pin.location}</div>
                  <div className="text-[11px] font-medium text-[#0088ff] mt-1">{pin.subject}</div>
                  <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-amber-500">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{pin.rating} Rating</span>
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
