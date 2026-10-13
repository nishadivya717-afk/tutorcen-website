import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('login'); // 'login' or 'signup'
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {tab === 'login' ? 'Welcome Back!' : 'Account Created!'}
            </h3>
            <p className="text-sm text-gray-500">
              {tab === 'login' ? 'Logging into your Tutorcen dashboard...' : 'Setting up your customized learning profile...'}
            </p>
          </div>
        ) : (
          <>
            {/* Header / Tabs */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[#00b4d8] flex items-center justify-center text-white font-bold text-xs">
                  t
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">tutorcen</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                {tab === 'login' ? 'Welcome back' : 'Start learning today'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {tab === 'login' ? 'Sign in to access your sessions and tutors' : 'Join thousands of students and tutors on Tutorcen'}
              </p>
            </div>

            {/* Segmented Control */}
            <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setTab('login')}
                className={`py-2 text-sm font-semibold rounded-lg transition-all ${
                  tab === 'login' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => setTab('signup')}
                className={`py-2 text-sm font-semibold rounded-lg transition-all ${
                  tab === 'signup' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-black transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-black transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-gray-700">
                    Password
                  </label>
                  {tab === 'login' && (
                    <button type="button" className="text-xs text-[#0088ff] hover:underline">
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-black transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{tab === 'login' ? 'Log In to Tutorcen' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-gray-500">
              By proceeding, you agree to Tutorcen's Terms of Service and Privacy Policy.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
