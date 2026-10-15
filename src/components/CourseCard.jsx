import React, { useState } from 'react';
import './CourseCard.css';

export default function CourseCard({ course, onSelectCourse }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onSelectCourse && onSelectCourse(course)}
      className="course-card"
    >
      <div className="course-card-img-wrap">
        {!imgError ? (
          <img
            src={course.image}
            alt={course.title}
            onError={() => setImgError(true)}
            className="course-card-img"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', color: '#6b7280', fontSize: '0.85rem' }}>
            {course.title}
          </div>
        )}
      </div>

      <div className="course-card-body">
        <div>
          <p className="course-card-date">{course.date}</p>
          <h3 className="course-card-title">{course.title}</h3>
        </div>
        <p className="course-card-instructor">{course.instructor}</p>
      </div>
    </div>
  );
}
