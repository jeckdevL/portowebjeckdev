'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'extraction';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantStyles = {
    primary: 'bg-[#00F0FF] text-black font-bold uppercase tracking-widest clip-path-r6 hover:bg-white transition-all duration-200',
    secondary: 'bg-transparent text-[#00F0FF] border-2 border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black uppercase tracking-widest clip-path-r6',
    outline: 'border border-white/30 text-white hover:bg-white/5 disabled:opacity-50',
    extraction: 'bg-black/90 backdrop-blur-sm text-white font-bold uppercase tracking-widest clip-path-r6 border border-[#00F0FF]/30 hover:bg-[#00F0FF]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  );
}