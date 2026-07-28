'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if (isHovered) {
      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Render simple version on server, enhanced version on client
  if (!mounted) {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg ${className}`}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        onClick={onClick}
        className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {href ? (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg overflow-hidden group ${className}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[var(--token-accent-yellow)] to-[var(--token-accent-pink)]"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Button content */}
        <span className="relative z-10">{children}</span>

        {/* Ripple effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ scale: 0, opacity: 0.5 }}
          whileHover={{
            scale: 2,
            opacity: 0,
            transition: { duration: 0.6 },
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)',
          }}
        />
        </motion.a>
      ) : (
        <motion.button
          onClick={onClick}
          className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg overflow-hidden group ${className}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[var(--token-accent-yellow)] to-[var(--token-accent-pink)]"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Button content */}
          <span className="relative z-10">{children}</span>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ scale: 0, opacity: 0.5 }}
            whileHover={{
              scale: 2,
              opacity: 0,
              transition: { duration: 0.6 },
            }}
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)',
            }}
          />
        </motion.button>
      )}
    </motion.div>
  );
}
