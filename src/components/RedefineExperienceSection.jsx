import React, { useState } from 'react';
import './RedefineExperienceSection.css';

export default function RedefineExperienceSection() {
  const [activeTab, setActiveTab] = useState('parent');

  const tabs = [
    { id: 'parent', label: 'Parent interaction' },
    { id: 'peer', label: 'Peer classes' },
    { id: 'forum', label: 'Discussion forum' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'explore', label: 'Explore more' }
  ];

  return (
    <section className="redefine-section">
      <div className="container">
        
        {/* Centered Heading */}
        <div className="redefine-header">
          <h2 className="redefine-title">
            How We Redefine the<br />Online Tutoring Experience
          </h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="redefine-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`redefine-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        {activeTab === 'parent' && (
          <div className="redefine-content-grid">
            
            {/* Left Graphic Column: Mother & Daughter + Yellow Sun Circle + Orbiting Badges + Metric Card */}
            <div>
              <div className="redefine-art-stage">
                
                {/* Golden Yellow Solid Sun Circle in Background */}
                <div className="redefine-sun-circle" />

                {/* Orbiting Subject Outline Badges */}
                {/* 1. Atom / Science */}
                <div className="orbit-badge badge-atom">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1" />
                    <path d="M20.2 20.2c2.4-2.4 2.4-6.3 0-8.7L12 3.3 3.8 11.5c-2.4 2.4-2.4 6.3 0 8.7s6.3 2.4 8.7 0l7.7-7.7" />
                    <path d="M3.8 3.8c-2.4 2.4-2.4 6.3 0 8.7L12 20.7l8.2-8.2c2.4-2.4 2.4-6.3 0-8.7s-6.3-2.4-8.7 0L3.8 3.8" />
                  </svg>
                </div>

                {/* 2. Lightbulb / Ideas */}
                <div className="orbit-badge badge-bulb">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                  </svg>
                </div>

                {/* 3. Math Equations */}
                <div className="orbit-badge badge-math">
                  <div className="math-matrix">
                    <span>+</span><span>−</span>
                    <span>×</span><span>=</span>
                  </div>
                </div>

                {/* 4. Globe / Languages */}
                <div className="orbit-badge badge-globe">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>

                {/* 5. Chemistry Flask */}
                <div className="orbit-badge badge-flask">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v7.31L4.1 19.34A2 2 0 0 0 5.76 22h12.48a2 2 0 0 0 1.66-2.66L14 9.31V2" />
                    <path d="M8.5 2h7" />
                    <path d="M7 16h10" />
                  </svg>
                </div>

                {/* Mother and Daughter Photo */}
                <div className="redefine-photo-wrap">
                  <img
                    src="/src/assets/images/mother_daughter_laptop_1791878996994.jpg"
                    alt="Mother and daughter learning together"
                    className="redefine-photo-img"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Floating Metric Card in Bottom-Left */}
                <div className="metric-float-card">
                  <div className="metric-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  
                  <div className="metric-value-text">+74.4%</div>

                  <div className="metric-progress-track">
                    <div className="progress-seg-yellow" />
                    <div className="progress-seg-black" />
                  </div>

                  <p className="metric-sub-caption">47% increase from last week</p>
                </div>

              </div>
            </div>

            {/* Right Text Column: Title & 3 Feature Points */}
            <div>
              <h3 className="redefine-title-right">
                We respect parents' crucial role in<br />
                their child's academic journey
              </h3>

              <div className="redefine-features-list">
                {/* Feature 1 */}
                <div className="redefine-feature-row">
                  <svg className="feature-icon-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <div>
                    <h4 className="feature-heading-text">Monitor Your Child's Activity</h4>
                    <p className="feature-body-text">
                      Keep track of your child's attendance, session participation, and progress in real-time, giving you insight into their engagement and dedication to learning.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="redefine-feature-row">
                  <svg className="feature-icon-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                  <div>
                    <h4 className="feature-heading-text">View Detailed Reports</h4>
                    <p className="feature-body-text">
                      Get comprehensive reports on your child's performance with Tutorcen. View session summaries, assessment results, and tutor feedback for a complete overview of their progress.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="redefine-feature-row">
                  <svg className="feature-icon-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <div>
                    <h4 className="feature-heading-text">Communicate with Tutors</h4>
                    <p className="feature-body-text">
                      Establish direct communication channels with your child's tutors to discuss goals, address concerns, and collaborate on strategies to enhance your child's learning experience.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Content for Peer classes tab */}
        {activeTab === 'peer' && (
          <div style={{ padding: '40px', background: '#f9fafb', borderRadius: '24px', border: '1px solid #f3f4f6', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Cohort Study Groups</h4>
              <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>Collaborate with fellow peers across the globe tackling matching syllabus modules and problem sets together.</p>
            </div>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Live Pair Problem Solving</h4>
              <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>Breakout rooms with shared code canvases and interactive whiteboards guided by teaching assistants.</p>
            </div>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Shared Milestones</h4>
              <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>Stay motivated through healthy peer accountability, team challenges, and group capstone achievements.</p>
            </div>
          </div>
        )}

        {/* Content for Discussion forum tab */}
        {activeTab === 'forum' && (
          <div style={{ padding: '40px', background: '#f9fafb', borderRadius: '24px', border: '1px solid #f3f4f6' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>Active Subject Communities</h3>
            <p style={{ fontSize: '0.95rem', color: '#4b5563', maxWidth: '600px', marginBottom: '20px' }}>
              Ask challenging homework questions 24/7 and receive verified step-by-step explanations from certified tutors and top-ranking scholars.
            </p>
            <button onClick={() => setActiveTab('parent')} className="btn-find-tutor-dark" style={{ display: 'inline-block' }}>
              Back to Parent Interaction
            </button>
          </div>
        )}

        {/* Content for Quiz tab */}
        {activeTab === 'quiz' && (
          <div style={{ padding: '50px', background: '#f9fafb', borderRadius: '24px', border: '1px solid #f3f4f6', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>Adaptive Diagnostic Quizzes</h3>
            <p style={{ fontSize: '0.95rem', color: '#4b5563', maxWidth: '500px', margin: '0 auto 24px' }}>
              Take 5-minute targeted assessments to pinpoint your knowledge gaps before your live 1-on-1 tutor session begins.
            </p>
            <button onClick={() => setActiveTab('parent')} className="btn-find-tutor-dark" style={{ display: 'inline-block' }}>
              Back to Parent Interaction
            </button>
          </div>
        )}

        {/* Content for Explore more tab */}
        {activeTab === 'explore' && (
          <div style={{ padding: '50px', background: '#f9fafb', borderRadius: '24px', border: '1px solid #f3f4f6', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>Custom Learning Roadmaps</h3>
            <p style={{ fontSize: '0.95rem', color: '#4b5563', maxWidth: '500px', margin: '0 auto 24px' }}>
              Personalized syllabi tailored to your target universities, competitive exams, or industry certifications.
            </p>
            <button onClick={() => setActiveTab('parent')} className="btn-find-tutor-dark" style={{ display: 'inline-block' }}>
              Back to Parent Interaction
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
