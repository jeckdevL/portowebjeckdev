'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Database, Monitor } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const PROJECTS = [
  { title: 'Fullstack App', icon: Monitor },
  { title: 'Database System', icon: Database },
  { title: 'UI Dashboard', icon: LayoutGrid },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={i}
            href="#"
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-b from-white/5 to-transparent p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all text-center"
          >
            <div className="mb-6 flex justify-center text-white/50 group-hover:text-white transition-colors">
              <p.icon size={48} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{p.title}</h3>
            <span className="text-xs text-white/40 tracking-widest uppercase">Coming Soon</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}