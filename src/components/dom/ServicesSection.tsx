'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const SKILLS = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 
  'Node.js', 'PostgreSQL', 'AWS', 'Framer Motion', 'GraphQL'
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Skills & Tech" />
      <div className="flex flex-wrap gap-4 mt-16 justify-center">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/30 transition-all cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}