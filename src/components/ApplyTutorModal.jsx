import React, { useState } from 'react';
import './Modals.css';

export default function ApplyTutorModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Data Science');
  const [rate, setRate] = useState('45');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ padding: '40px 0', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.8rem', fontWeight: 'bold' }}>
              ✓
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
              Application Submitted!
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
              Thank you, {name}. Our academic review team will verify your credentials and reach out within 24–48 hours.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', background: '#e0f2fe', color: '#0096c7', borderRadius: '999px', display: 'inline-block', marginBottom: '8px' }}>
                Join Tutorcen Mentor Network
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-black)' }}>
                Apply to become a tutor
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '4px' }}>
                Share your knowledge, set your own schedule, and earn flexibly with global students.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-form-group">
                <label className="modal-label">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Jordan Reed"
                  className="modal-input"
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan.reed@university.edu"
                  className="modal-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="modal-form-group">
                  <label className="modal-label">Primary Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="modal-input"
                  >
                    <option value="Data Science & AI">Data Science &amp; AI</option>
                    <option value="Product Management">Product Management</option>
                    <option value="Mathematics & Geometry">Mathematics &amp; Geometry</option>
                    <option value="Psychology & Well-Being">Psychology &amp; Well-Being</option>
                    <option value="Physics & Engineering">Physics &amp; Engineering</option>
                  </select>
                </div>

                <div className="modal-form-group">
                  <label className="modal-label">Desired Rate (USD/hr)</label>
                  <input
                    type="number"
                    required
                    min="20"
                    max="300"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="modal-input"
                  />
                </div>
              </div>

              <button type="submit" className="modal-submit-btn">
                <span>Submit Tutor Application</span>
                <span>→</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
