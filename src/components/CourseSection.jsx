import React, { useState } from 'react';
import CourseCard from './CourseCard.jsx';
import './CourseSection.css';

export default function CourseSection({ courses, onSelectCourse, searchQuery, onClearSearch }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCourses = searchQuery
    ? courses.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

  const maxIndex = Math.max(0, filteredCourses.length - 4);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCourses.length - 4 > 0 ? filteredCourses.length - 4 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="courses" className="course-section">
      <div className="container">
        
        {/* Header Row */}
        <div className="course-header-row">
          <h2 className="course-section-title">
            Top course of study fields
          </h2>

          <div className="course-actions-wrap">
            {searchQuery && (
              <span className="course-filter-badge">
                Filtered: "{searchQuery}"
                <button
                  onClick={onClearSearch}
                  style={{ fontWeight: 'bold', marginLeft: '4px', cursor: 'pointer' }}
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={() => {
                if (searchQuery) onClearSearch();
                else {
                  const el = document.getElementById('courses');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="course-see-all-link"
            >
              See all
            </button>
          </div>
        </div>

        {/* Carousel Area */}
        {filteredCourses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f9fafb', borderRadius: '16px', border: '1px solid #f3f4f6' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>No courses match your query</p>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '16px' }}>Try searching for keywords like "Data", "Management", "Science", or "Geometry"</p>
            <button
              onClick={onClearSearch}
              style={{ background: '#000', color: '#fff', fontSize: '0.85rem', fontWeight: '600', padding: '10px 20px', borderRadius: '8px' }}
            >
              Reset Search &amp; Show All Courses
            </button>
          </div>
        ) : (
          <div className="carousel-wrapper">
            
            {/* Left Circular Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous courses"
              className="carousel-arrow left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* Right Circular Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next courses"
              className="carousel-arrow right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Cards Grid */}
            <div className="carousel-grid">
              {filteredCourses.slice(currentIndex, currentIndex + 4).map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelectCourse={onSelectCourse}
                />
              ))}
            </div>

            {/* Carousel Dot Indicators */}
            {filteredCourses.length > 4 && (
              <div className="carousel-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
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
