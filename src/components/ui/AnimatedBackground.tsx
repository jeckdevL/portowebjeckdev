'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black">
      {/* Subtle top-center radial gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" 
      />
    </div>
  );
}