import type { Preview } from '@storybook/nextjs-vite';
import { Inter } from 'next/font/google';
import '../src/app/globals.css';
import { TooltipProvider } from '../src/components/ui/tooltip';

// Same font setup as src/app/layout.tsx so text renders like the real site
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    layout: 'padded',
    // The page background comes from the active theme (body uses --page).
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Colour theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = context.globals.theme ?? 'dark';
      return (
        <div className={`${inter.variable} text-strong`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
          <TooltipProvider>
            <Story />
          </TooltipProvider>
        </div>
      );
    },
  ],
};

export default preview;
