import React, { useState } from 'react';

export default function CourseCard({ course, onSelectCourse }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onSelectCourse && onSelectCourse(course)}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer w-full"
    >
      {/* Course Image Area */}
      <div className="relative w-full h-48 sm:h-52 bg-gray-100 overflow-hidden">
        {!imgError ? (
          <img
            src={course.image}
            alt={course.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-cyan-100 to-amber-100 text-gray-600 font-medium text-sm p-4 text-center">
            {course.title}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Date */}
          <p className="text-xs font-medium text-gray-500 mb-2">
            {course.date}
          </p>

          {/* Title */}
          <h3 className="text-[17px] sm:text-[18px] font-bold text-gray-950 leading-snug group-hover:text-[#0088ff] transition-colors line-clamp-2 mb-3">
            {course.title}
          </h3>
        </div>

        {/* Instructor */}
        <div className="pt-1">
          <p className="text-xs sm:text-sm text-gray-600 font-normal">
            {course.instructor}
          </p>
        </div>
      </div>
    </div>
  );
}
