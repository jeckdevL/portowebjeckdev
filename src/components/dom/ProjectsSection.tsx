'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import InteractiveCard from '@/components/ui/InteractiveCard';
import { projects } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          description="A selection of my recent work and collaborations"
        />

        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {projects.map((project) => (
            <InteractiveCard key={project.id} className="h-full">
              <motion.div
                {...fadeInUp}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 h-full flex flex-col"
              >
                {/* Image placeholder with gradient */}
                <div className="relative h-56 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.id === '1' ? '🛒' : project.id === '2' ? '🌐' : '📦'}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech_stack.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-mono bg-white/5 text-white/70 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ x: 2 }}
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      View
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 2 }}
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </InteractiveCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}