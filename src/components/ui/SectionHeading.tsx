'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  const containerClass = centered ? 'text-center' : 'text-left';
  const maxWidthClass = centered ? 'max-w-2xl mx-auto' : 'max-w-3xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${containerClass} ${maxWidthClass}`}
    >
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white/50 text-sm mb-3 tracking-wider uppercase font-medium"
        >
          {label}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      {/* Subtle underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-8 origin-center"
      />
    </motion.div>
  );
}