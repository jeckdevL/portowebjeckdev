'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import MagneticButton from '@/components/ui/MagneticButton';
import { PERSONAL_INFO } from '@/lib/constants';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

// Lazy load 3D component
const SplineEmbed = dynamic(() => import('@/components/ui/SplineEmbed'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div {...fadeInLeft} className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm mb-4 tracking-wider uppercase"
            >
              Fullstack Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            >
              {PERSONAL_INFO.shortName}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {PERSONAL_INFO.status}. Creating digital experiences with modern technologies and clean design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <MagneticButton 
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-sm font-medium"
              >
                Let's Talk
              </MagneticButton>
              <MagneticButton 
                href="#projects"
                className="border border-white/20 text-white hover:bg-white hover:text-black rounded-full px-8 py-4 text-sm font-medium transition-all duration-300"
              >
                View Work
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right 3D Model */}
          <motion.div {...fadeInRight} className="h-[400px] lg:h-[600px] relative">
            <SplineEmbed
  url="https://prod.spline.design/8bR8g7P1yMcg9VQVtJ0v3K2o/scene.splinecode"
  className="w-full h-full"
/>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}