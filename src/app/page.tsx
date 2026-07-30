'use client';

import HeroSection from '@/components/dom/HeroSection';
import AboutSection from '@/components/dom/AboutSection';
import ProjectsSection from '@/components/dom/ProjectsSection';
import ServicesSection from '@/components/dom/ServicesSection';
import ContactSection from '@/components/dom/ContactSection';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import Hero3D from '@/components/canvas/Hero3D';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-6 items-center">
          <HeroSection />
          <Hero3D />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
