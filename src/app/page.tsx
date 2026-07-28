'use client';

import HeroSection from '@/components/dom/HeroSection';
import AboutSection from '@/components/dom/AboutSection';
import ProjectsSection from '@/components/dom/ProjectsSection';
import ServicesSection from '@/components/dom/ServicesSection';
import ContactSection from '@/components/dom/ContactSection';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import SplineEmbed from '@/components/ui/SplineEmbed';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between pt-16">
        <HeroSection />
<SplineEmbed url="https://example.spline.design/template/scene.splinecode" />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
