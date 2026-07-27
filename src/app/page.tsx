'use client';

import HeroSection from '@/components/dom/HeroSection';
import AboutSection from '@/components/dom/AboutSection';
import ProjectsSection from '@/components/dom/ProjectsSection';
import ServicesSection from '@/components/dom/ServicesSection';
import ContactSection from '@/components/dom/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}