'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  type = 'button',
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base';

  const variants = {
    primary:
      'bg-black text-light-gray hover:bg-light-gray hover:text-black',
    secondary:
      'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20',
    outline:
      'border border-light-gray text-light-gray hover:bg-light-gray/10',
  };

  const classes = cn(baseStyle, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}