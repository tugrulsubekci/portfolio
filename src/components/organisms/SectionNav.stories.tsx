import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { navItems } from '@/data/navigation';
import { SectionNav } from './SectionNav';

const meta = {
  title: 'Organisms/SectionNav',
  component: SectionNav,
  args: { items: navItems },
  parameters: {
    docs: { description: { component: 'Highlights the section in view; the first item is active when no sections are on the page.' } },
  },
} satisfies Meta<typeof SectionNav>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
