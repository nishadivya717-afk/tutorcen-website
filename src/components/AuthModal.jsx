import React, { useState } from 'react';
import './Modals.css';

export default function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
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
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem', fontWeight: 'bold' }}>
              ✓
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
              {tab === 'login' ? 'Welcome Back!' : 'Account Created!'}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
              {tab === 'login' ? 'Logging into your Tutorcen dashboard...' : 'Setting up your customized learning profile...'}
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--color-cyan)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>
                  t
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>tutorcen</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-black)' }}>
                {tab === 'login' ? 'Welcome back' : 'Start learning today'}
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '4px' }}>
                {tab === 'login' ? 'Sign in to access your sessions and tutors' : 'Join thousands of students and tutors on Tutorcen'}
              </p>
            </div>

            <div className="modal-tabs-track">
              <button
                type="button"
                onClick={() => setTab('login')}
                className={`modal-tab-pill ${tab === 'login' ? 'active' : ''}`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => setTab('signup')}
                className={`modal-tab-pill ${tab === 'signup' ? 'active' : ''}`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {tab === 'signup' && (
                <div className="modal-form-group">
                  <label className="modal-label">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="modal-input"
                  />
                </div>
              )}

              <div className="modal-form-group">
                <label className="modal-label">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="modal-input"
                />
              </div>

              <div className="modal-form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label className="modal-label" style={{ margin: 0 }}>Password</label>
                  {tab === 'login' && (
                    <button type="button" style={{ fontSize: '0.78rem', color: 'var(--color-blue)' }}>
                      Forgot?
                    </button>
                  )}
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="modal-input"
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                <span>{tab === 'login' ? 'Log In to Tutorcen' : 'Create Account'}</span>
                <span>→</span>
              </button>
            </form>

            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af' }}>
              By proceeding, you agree to Tutorcen's Terms of Service and Privacy Policy.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
