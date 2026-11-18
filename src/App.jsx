import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import HowIWork from './components/HowIWork';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import WritingSection from './components/WritingSection';
import DecisionsSection from './components/DecisionsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <DecisionsSection />
        <HowIWork />
        <ServicesSection />
        <WritingSection />
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}
