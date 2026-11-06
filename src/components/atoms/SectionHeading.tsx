import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

/** Section title: visible on mobile, screen-reader only on desktop (the sidebar nav labels sections there). */
export const SectionHeading = ({ children, className = '' }: SectionHeadingProps) => (
  <h2 className={`lg:sr-only text-sm font-bold uppercase tracking-widest text-heading ${className} mb-6`.replace(/\s+/g, ' ')}>
    {children}
  </h2>
);
