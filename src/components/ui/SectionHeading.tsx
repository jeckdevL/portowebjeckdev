'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div className="mb-16 text-center" {...fadeInUp}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-full" />
    </motion.div>
  );
}