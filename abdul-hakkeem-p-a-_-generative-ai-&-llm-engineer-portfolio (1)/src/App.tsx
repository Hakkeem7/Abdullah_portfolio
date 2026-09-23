/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { GenAIExpertise } from './components/GenAIExpertise';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SystemArchitecture } from './components/SystemArchitecture';
import { TechnicalSkills } from './components/TechnicalSkills';
import { ExperienceEducation } from './components/ExperienceEducation';
import { GitHubSection } from './components/GitHubSection';
import { LinkedInSection } from './components/LinkedInSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Header */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <GenAIExpertise />
        <FeaturedProjects />
        <SystemArchitecture />
        <TechnicalSkills />
        <ExperienceEducation />
        <GitHubSection />
        <LinkedInSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter-Ready Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
