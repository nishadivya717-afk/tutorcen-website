import React, { useState } from 'react';
import './Modals.css';

export default function CourseDetailModal({ course, onClose, onOpenAuth }) {
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog large" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Image */}
        <div className="course-detail-hero">
          <img
            src={course.image}
            alt={course.title}
            className="course-detail-img"
            referrerPolicy="no-referrer"
          />
          <div className="course-detail-scrim" />
          
          <button
            onClick={onClose}
            className="modal-close-btn overlay-close"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="course-detail-header-text">
            <span className="course-detail-tag">
              {course.category}
            </span>
            <h2 className="course-detail-title">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="course-detail-body">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid #f3f4f6', fontSize: '0.88rem', color: '#4b5563', marginBottom: '20px' }}>
            <div style={{ color: '#d97706', fontWeight: 'bold' }}>
              ★ {course.rating} <span style={{ color: '#9ca3af', fontWeight: 'normal' }}>({course.studentsCount} students)</span>
            </div>
            <div>
              📅 Released {course.date}
            </div>
            <div style={{ color: '#111827', fontWeight: 600 }}>
              👨‍🏫 {course.instructor}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '6px' }}>About this study field</h4>
            <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>
              {course.description}
            </p>
          </div>

          <div style={{ background: '#f9fafb', padding: '16px 20px', borderRadius: '12px', border: '1px solid #f3f4f6', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9ca3af', marginBottom: '10px' }}>
              What You'll Learn
            </h4>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', fontSize: '0.85rem', color: '#374151' }}>
              <li>✓ Foundational core concepts &amp; frameworks</li>
              <li>✓ 1-on-1 personalized review sessions</li>
              <li>✓ Real-world case studies &amp; exercises</li>
              <li>✓ Verified Certificate of Mastery</li>
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '10px' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Total Enrollment Cost</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-black)' }}>
                $89 <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 'normal' }}>or Included with Tutorcen Plus</span>
              </div>
            </div>

            {enrolled ? (
              <div style={{ background: '#d1fae5', color: '#059669', padding: '12px 20px', borderRadius: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                ✓ Enrolled Successfully!
              </div>
            ) : (
              <button
                onClick={() => {
                  setEnrolled(true);
                  setTimeout(() => {
                    setEnrolled(false);
                    onClose();
                  }, 2000);
                }}
                className="btn-primary-dark"
                style={{ padding: '12px 24px', fontSize: '0.9rem' }}
              >
                Enroll in Field Now
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
