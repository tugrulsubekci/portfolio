import { useLayoutEffect, type ReactNode } from 'react';
import { TooltipProvider } from '../src/components/ui/tooltip';

export type PortfolioTheme = 'dark' | 'light';

export interface PortfolioRootProps {
  /** Colour theme. Tokens (bg-page, text-body, bg-primary, ...) switch on <html data-theme>. Default 'dark'. */
  theme?: PortfolioTheme;
  children?: ReactNode;
}

/**
 * Root wrapper for designs built with the portfolio components (mirrors the
 * site's layout + the Storybook decorator): sets <html data-theme>, the Inter
 * font, the page background and the default text colour, and provides the
 * shadcn TooltipProvider. Wrap every screen in it.
 */
export function PortfolioRoot({ theme = 'dark', children }: PortfolioRootProps) {
  // Layout effect: runs before the browser paints, so there's no flash of the wrong theme.
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return (
    <TooltipProvider>
      <div
        className="text-strong antialiased"
        style={{ background: 'var(--page)', color: 'var(--strong)', fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}
      >
        {children}
      </div>
    </TooltipProvider>
  );
}
