import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, DollarSign, BookOpen, Send } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Application Submitted!
            </h3>
            <p className="text-sm text-gray-600 max-w-sm">
              Thank you, {name}. Our academic review team will verify your credentials and reach out within 24–48 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#0096c7] text-xs font-bold mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Join Tutorcen Mentor Network
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Apply to become a tutor
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Share your knowledge, set your own schedule, and earn flexibly with global students.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Jordan Reed"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-black transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan.reed@university.edu"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-black transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Primary Subject Area
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-black transition-all"
                  >
                    <option value="Data Science & AI">Data Science &amp; AI</option>
                    <option value="Product Management">Product Management</option>
                    <option value="Mathematics & Geometry">Mathematics &amp; Geometry</option>
                    <option value="Psychology & Well-Being">Psychology &amp; Well-Being</option>
                    <option value="Physics & Engineering">Physics &amp; Engineering</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Desired Hourly Rate (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input
                      type="number"
                      required
                      min="20"
                      max="300"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-black transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Tutor Application</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
