import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/social';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  args: { profile, navItems, socialLinks },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Desktop only: hidden below the `lg` breakpoint (1024px).' } },
  },
  decorators: [(Story) => <div className="flex px-8">{Story()}</div>],
} satisfies Meta<typeof Sidebar>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
