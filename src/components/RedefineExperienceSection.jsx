import React, { useState } from 'react';
import { Monitor, CalendarCheck, MessageSquare, TrendingUp, Atom, Lightbulb, Calculator, Globe2, FlaskConical, Users, HelpCircle, Compass, CheckCircle } from 'lucide-react';

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
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-black tracking-tight leading-[1.18]">
            How We Redefine the<br />Online Tutoring Experience
          </h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-500 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        {activeTab === 'parent' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in duration-300">
            
            {/* Left Graphic Column: Mother & Daughter + Yellow Sun Circle + Orbiting Subject Badges + Metric Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
                
                {/* Golden Yellow Solid Sun Circle in Center/Right Background */}
                <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#fca311] right-4 sm:right-8 top-12 z-0" />

                {/* Orbiting Subject Outline Badges (Purple/Blue tinted ring) */}
                {/* 1. Atom / Science (top-left) */}
                <div className="absolute top-12 left-4 sm:left-6 z-20 w-12 h-12 rounded-full bg-white border border-indigo-200 shadow-sm flex items-center justify-center text-indigo-700 hover:scale-110 transition-transform">
                  <Atom className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* 2. Lightbulb / Ideas (top-center) */}
                <div className="absolute top-0 left-32 sm:left-36 z-20 w-11 h-11 rounded-full bg-white border border-indigo-200 shadow-sm flex items-center justify-center text-indigo-700 hover:scale-110 transition-transform">
                  <Lightbulb className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* 3. Math Equations / Symbols (top-right) */}
                <div className="absolute top-8 right-2 sm:right-4 z-20 w-13 h-13 rounded-full bg-white border border-indigo-200 shadow-sm flex items-center justify-center text-indigo-700 hover:scale-110 transition-transform">
                  <div className="grid grid-cols-2 gap-0.5 text-[11px] font-bold leading-none p-1 border border-indigo-300 rounded">
                    <span>+</span><span>−</span>
                    <span>×</span><span>=</span>
                  </div>
                </div>

                {/* 4. Globe / Languages (middle-right) */}
                <div className="absolute top-44 right-0 z-20 w-11 h-11 rounded-full bg-white border border-indigo-200 shadow-sm flex items-center justify-center text-indigo-700 hover:scale-110 transition-transform">
                  <Globe2 className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* 5. Chemistry Flask (middle-left) */}
                <div className="absolute top-52 left-2 z-20 w-11 h-11 rounded-full bg-white border border-indigo-200 shadow-sm flex items-center justify-center text-indigo-700 hover:scale-110 transition-transform">
                  <FlaskConical className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Mother and Daughter Photo */}
                <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                  <img
                    src="/src/assets/images/mother_daughter_laptop_1791878996994.jpg"
                    alt="Mother and daughter learning together"
                    className="w-[88%] h-[88%] object-contain object-bottom drop-shadow-lg"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Floating Metric Card in Bottom-Left */}
                <div className="absolute bottom-2 left-2 sm:left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100 max-w-[210px] sm:max-w-[230px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-2">
                    +74.4%
                  </div>

                  {/* Two-color progress indicator bar (Gold + Black) */}
                  <div className="w-full h-2 rounded-full overflow-hidden bg-black flex mb-1.5">
                    <div className="h-full bg-[#fca311]" style={{ width: '65%' }} />
                    <div className="h-full bg-black" style={{ width: '35%' }} />
                  </div>

                  <p className="text-[11px] text-gray-500 font-medium leading-tight">
                    47% increase from last week
                  </p>
                </div>

              </div>
            </div>

            {/* Right Text Column: Title & 3 Feature Points */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-black tracking-tight leading-[1.22] mb-8">
                We respect parents' crucial role in<br />
                their child's academic journey
              </h3>

              <div className="space-y-7">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg text-black mt-0.5 shrink-0">
                    <Monitor className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1.5">
                      Monitor Your Child's Activity
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Keep track of your child's attendance, session participation, and progress in real-time, giving you insight into their engagement and dedication to learning.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg text-black mt-0.5 shrink-0">
                    <CalendarCheck className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1.5">
                      View Detailed Reports
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Get comprehensive reports on your child's performance with Tutorcen. View session summaries, assessment results, and tutor feedback for a complete overview of their progress.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg text-black mt-0.5 shrink-0">
                    <MessageSquare className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1.5">
                      Communicate with Tutors
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
          <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <Users className="w-8 h-8 text-[#00b4d8] mb-4" />
              <h4 className="text-lg font-bold text-black mb-2">Cohort Study Groups</h4>
              <p className="text-sm text-gray-600">Collaborate with fellow peers across the globe tackling matching syllabus modules and problem sets together.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="text-lg font-bold text-black mb-2">Live Pair Problem Solving</h4>
              <p className="text-sm text-gray-600">Breakout rooms with shared code canvases and interactive whiteboards guided by teaching assistants.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <TrendingUp className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="text-lg font-bold text-black mb-2">Shared Milestones</h4>
              <p className="text-sm text-gray-600">Stay motivated through healthy peer accountability, team challenges, and group capstone achievements.</p>
            </div>
          </div>
        )}

        {/* Content for Discussion forum tab */}
        {activeTab === 'forum' && (
          <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Active Subject Communities</h3>
              <p className="text-sm text-gray-600">Ask challenging homework questions 24/7 and receive verified step-by-step explanations from certified tutors and top-ranking scholars.</p>
              <div className="pt-2 flex gap-3">
                <span className="px-3 py-1 bg-white text-xs font-semibold rounded-full border border-gray-200">#Calculus</span>
                <span className="px-3 py-1 bg-white text-xs font-semibold rounded-full border border-gray-200">#DataScience</span>
                <span className="px-3 py-1 bg-white text-xs font-semibold rounded-full border border-gray-200">#SATPrep</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <div className="text-xs font-bold text-[#00b4d8]">LATEST DISCUSSION</div>
              <div className="text-sm font-bold text-gray-900">How to intuitively conceptualize eigenvector decomposition?</div>
              <div className="text-xs text-gray-500">Answered by Dr. Michael S. · 12 minutes ago</div>
            </div>
          </div>
        )}

        {/* Content for Quiz tab */}
        {activeTab === 'quiz' && (
          <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl border border-gray-100 text-center max-w-2xl mx-auto animate-in fade-in duration-300">
            <HelpCircle className="w-12 h-12 text-[#fca311] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-3">Adaptive Diagnostic Quizzes</h3>
            <p className="text-sm text-gray-600 mb-6">Take 5-minute targeted assessments to pinpoint your knowledge gaps before your live 1-on-1 tutor session begins.</p>
            <button onClick={() => setActiveTab('parent')} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg">
              Return to Parent Interaction
            </button>
          </div>
        )}

        {/* Content for Explore more tab */}
        {activeTab === 'explore' && (
          <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl border border-gray-100 text-center max-w-2xl mx-auto animate-in fade-in duration-300">
            <Compass className="w-12 h-12 text-[#00b4d8] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-3">Custom Learning Roadmaps</h3>
            <p className="text-sm text-gray-600 mb-6">Personalized syllabi tailored to your target universities, competitive exams, or industry certifications.</p>
            <button onClick={() => setActiveTab('parent')} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg">
              Return to Parent Interaction
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
