import React, { useState } from 'react';
import { X, Star, Users, Calendar, Award, CheckCircle, Clock } from 'lucide-react';

export default function CourseDetailModal({ course, onClose, onOpenAuth }) {
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full bg-gray-900 shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#00b4d8] text-white uppercase tracking-wider mb-2 inline-block">
              {course.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 text-sm text-gray-600">
            <div className="flex items-center gap-1.5 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
              <span className="text-gray-400 font-normal">({course.studentsCount} students)</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Released {course.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-800 font-medium">
              <Award className="w-4 h-4 text-[#0088ff]" />
              <span>{course.instructor}</span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-2">About this study field</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-100 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">What You'll Learn</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Foundational core concepts &amp; frameworks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>1-on-1 personalized review sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-world case studies &amp; exercises</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Verified Certificate of Mastery</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-gray-500">Total Enrollment Cost</div>
              <div className="text-2xl font-extrabold text-black">$89 <span className="text-xs text-gray-400 font-normal">or Included with Tutorcen Plus</span></div>
            </div>

            {enrolled ? (
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-3 rounded-xl font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Enrolled Successfully!</span>
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
                className="bg-black hover:bg-gray-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all cursor-pointer"
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
