import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import CourseSection from './components/CourseSection.jsx';
import LearningSection from './components/LearningSection.jsx';
import JoinTeamSection from './components/JoinTeamSection.jsx';
import FindTutorBanner from './components/FindTutorBanner.jsx';
import RedefineExperienceSection from './components/RedefineExperienceSection.jsx';
import GlobalReachSection from './components/GlobalReachSection.jsx';
import CallToActionBanner from './components/CallToActionBanner.jsx';
import Footer from './components/Footer.jsx';
import AuthModal from './components/AuthModal.jsx';
import ApplyTutorModal from './components/ApplyTutorModal.jsx';
import CourseDetailModal from './components/CourseDetailModal.jsx';
import { coursesData } from './data/courses.js';

export default function App() {
  const [courses] = useState(coursesData);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLocation, setActiveLocation] = useState('');

  const handleSearch = ({ query, location }) => {
    setSearchQuery(query);
    setActiveLocation(location);

    const coursesEl = document.getElementById('courses');
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setActiveLocation('');
  };

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'support') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* 1. Header Navigation Bar */}
      <Navbar
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenApply={() => setApplyModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Areas From Top to Bottom */}
      <main className="app-main">
        {/* 2. Hero Section */}
        <HeroSection
          onSearch={handleSearch}
          activeLocation={activeLocation}
          activeQuery={searchQuery}
        />

        {/* 3. Top Course of Study Fields */}
        <CourseSection
          courses={courses}
          onSelectCourse={(course) => setSelectedCourse(course)}
          searchQuery={searchQuery}
          onClearSearch={handleClearSearch}
        />

        {/* 4. Elevate Your Learning Section with Sunburst Graphic */}
        <LearningSection
          onOpenAuth={() => setAuthModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* 5. Join Our Global Team, Share Your Passion */}
        <JoinTeamSection
          onOpenApply={() => setApplyModalOpen(true)}
        />

        {/* 6. Discover Your Perfect Tutor Banner (Dark Green) */}
        <FindTutorBanner
          onNavigateCourses={() => handleNavigateSection('courses')}
        />

        {/* 7. How We Redefine the Online Tutoring Experience (Tabs & Parent Interaction) */}
        <RedefineExperienceSection />

        {/* 8. World-Class Tutors, Global Learning Reach (Dotted Map & Astronaut) */}
        <GlobalReachSection />

        {/* 9. Ready to Take Your Learning Journey (Dark Navy CTA Banner) */}
        <CallToActionBanner
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      </main>

      {/* 10. Footer matching Figma Design */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenApply={() => setApplyModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <ApplyTutorModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenAuth={() => {
          setSelectedCourse(null);
          setAuthModalOpen(true);
        }}
      />
    </div>
  );
}
