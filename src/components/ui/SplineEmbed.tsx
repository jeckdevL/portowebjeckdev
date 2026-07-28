'use client';

import { useEffect } from 'react';

interface SplineEmbedProps {
  /** Spline scene URL (the value from the "Share" dialog) */
  url: string;
  /** Optional additional classes for sizing */
  className?: string;
}

/**
 * Embeds a Spline interactive scene.
 * The component injects the Spline runtime script once on mount.
 *
 * Example usage:
 * <SplineEmbed url="https://prod.spline.design/abcd1234/scene.splinecode" />
 */
export default function SplineEmbed({ url, className }: SplineEmbedProps) {
  useEffect(() => {
    // Load Spline runtime only once
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/runtime';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Clean up when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={className ?? 'w-full h-[500px]'}
      data-spline={url}
    />
  );
}