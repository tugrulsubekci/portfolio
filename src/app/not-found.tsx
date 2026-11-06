import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon, Spotlight, ThemeToggle } from '@/components/atoms';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Page not found | ${profile.name}`,
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-page text-strong flex items-center">
      <Spotlight />
      <ThemeToggle className="absolute top-6 right-6 sm:top-10 sm:right-10" />

      <main className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-brand mb-4">404</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-heading mb-6">Page not found</h1>
        <p className="text-lg text-body max-w-xl mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <Button variant="brand-link" asChild>
            <Link href="/">
              <ArrowIcon direction="left" />
              Back to home
            </Link>
          </Button>
          <Button variant="heading-link" asChild>
            <Link href="/archive">
              View all projects
              <ArrowIcon direction="right" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
