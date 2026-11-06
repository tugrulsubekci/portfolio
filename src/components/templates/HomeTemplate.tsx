import type { ReactNode } from 'react';
import { Spotlight } from '@/components/atoms';

interface HomeTemplateProps {
  /** Sidebar (desktop) and/or mobile header */
  header: ReactNode;
  children: ReactNode;
}

/** Two-column layout: sticky sidebar on the left, scrolling content on the right. */
export const HomeTemplate = ({ header, children }: HomeTemplateProps) => (
  <div className="bg-page text-strong min-h-screen relative overflow-visible">
    <Spotlight />

    <div className="mx-auto max-w-6xl flex flex-col lg:flex-row lg:gap-24">
      {header}

      <main id="content" className="pt-24 lg:py-24 flex-1">
        {children}
      </main>
    </div>
  </div>
);
