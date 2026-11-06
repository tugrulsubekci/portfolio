'use client';

import { useMemo } from 'react';
import { NavLink } from '@/components/molecules/NavLink';
import type { NavItem } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

/** Sidebar navigation that highlights the section currently in view. */
export const SectionNav = ({ items }: { items: NavItem[] }) => {
  const sectionIds = useMemo(() => items.map((item) => item.sectionId), [items]);
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id: string) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <nav className="pt-8 space-y-4">
      {items.map((item) => (
        <NavLink
          key={item.sectionId}
          label={item.label}
          active={activeSection === item.sectionId}
          onClick={() => scrollToSection(item.sectionId)}
        />
      ))}
    </nav>
  );
};
