'use client';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

const toggleTheme = () => {
  const root = document.documentElement;
  const next: Theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {}
};

/**
 * Switches between light and dark. Both icons are rendered and CSS picks one
 * (via the `light:` variant), so server and client markup always match.
 */
export const ThemeToggle = ({ className }: { className?: string }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        variant="quiet"
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle light and dark theme"
        className={className}
      >
    {/* Moon: shown in dark mode */}
    <svg className="w-6 h-6 light:hidden" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.6 8.6 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 22 14.05a1 1 0 0 0-.36-1.05Z" />
    </svg>
    {/* Sun: shown in light mode */}
    <svg className="w-6 h-6 hidden light:block" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
      </Button>
    </TooltipTrigger>
    <TooltipContent>Toggle theme</TooltipContent>
  </Tooltip>
);
