"use client";
import React, { useEffect, useRef } from 'react';
import styles from './FigmaParallaxCard.module.css';

export const FigmaParallaxCard: React.FC<{image: string; title: string; description: string}> = ({
  image,
  title,
  description,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const offset = rect.top * -0.2; // parallax factor
      cardRef.current.style.backgroundPosition = `center ${offset}px`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.card} ref={cardRef} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FigmaParallaxCard;