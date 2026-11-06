'use client';

import { useEffect, useRef } from 'react';

// Mouse-following glow. Updates the DOM directly (no React state) so the page
// doesn't re-render on every mouse move.
export const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Keep the glow static for users who prefer reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty(
          'background',
          `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, var(--spotlight), transparent 80%)`
        );
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(600px at 0px 0px, var(--spotlight), transparent 80%)',
      }}
    />
  );
};
