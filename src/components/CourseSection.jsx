import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import CourseCard from './CourseCard.jsx';

export default function CourseSection({ courses, onSelectCourse, searchQuery, onClearSearch }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Filter courses if a search query is active
  const filteredCourses = searchQuery
    ? courses.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

  // Items visible per screen width
  const maxIndex = Math.max(0, filteredCourses.length - 4);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCourses.length - 4 > 0 ? filteredCourses.length - 4 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-black tracking-tight">
              Top course of study fields
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {searchQuery && (
              <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                Filtered: "{searchQuery}"
                <button
                  onClick={onClearSearch}
                  className="font-bold hover:text-black ml-1 text-gray-400"
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={() => {
                if (searchQuery) onClearSearch();
                else {
                  // Scroll smoothly or open full catalog view
                  const el = document.getElementById('courses');
                  el && el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#0088ff] hover:text-[#0066cc] font-semibold text-base sm:text-[17px] hover:underline cursor-pointer whitespace-nowrap"
            >
              See all
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100 p-8">
            <p className="text-lg font-semibold text-gray-800 mb-2">No courses match your query</p>
            <p className="text-sm text-gray-500 mb-4">Try searching for keywords like "Data", "Management", "Science", or "Geometry"</p>
            <button
              onClick={onClearSearch}
              className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Reset Search &amp; Show All Courses
            </button>
          </div>
        ) : (
          <div className="relative group/carousel">
            
            {/* Circular Left Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous courses"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Circular Right Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next courses"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Cards Grid / Slider */}
            <div
              ref={containerRef}
              className="overflow-hidden px-1 py-4"
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(0%)`
                }}
              >
                {/* We display the current sliding window of 4 courses */}
                {filteredCourses.slice(currentIndex, currentIndex + 4).map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onSelectCourse={onSelectCourse}
                  />
                ))}
              </div>
            </div>

            {/* Indicator dots for multi-page carousel */}
            {filteredCourses.length > 4 && (
              <div className="flex items-center justify-center gap-1.5 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-black' : 'w-2 bg-gray-200 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
