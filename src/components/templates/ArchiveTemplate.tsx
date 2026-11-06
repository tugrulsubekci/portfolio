import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowIcon, ThemeToggle } from '@/components/atoms';
import { Breadcrumbs } from '@/components/molecules';
import { Button } from '@/components/ui/button';

interface ArchiveTemplateProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  backLink: { href: string; label: string };
  children: ReactNode;
}

/** Single-column sub-page layout with breadcrumbs, a back link and a page title. */
export const ArchiveTemplate = ({ title, breadcrumbs, backLink, children }: ArchiveTemplateProps) => (
  <div className="min-h-screen bg-page text-strong">
    <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-24">
      <div className="flex items-start justify-between gap-4">
        <Breadcrumbs items={breadcrumbs} />
        <ThemeToggle className="-mt-0.5" />
      </div>

      <Button variant="brand-link" className="mb-8 sm:mb-12 font-normal" asChild>
        <Link href={backLink.href}>
          <ArrowIcon direction="left" />
          {backLink.label}
        </Link>
      </Button>

      <h1 className="text-3xl sm:text-5xl font-bold text-heading mb-8 sm:mb-16">{title}</h1>

      {children}
    </main>
  </div>
);
