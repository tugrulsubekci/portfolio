import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/social';
import { MobileHeader } from './MobileHeader';

const meta = {
  title: 'Organisms/MobileHeader',
  component: MobileHeader,
  args: { profile, socialLinks },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Mobile only: hidden from the `lg` breakpoint (1024px) up.' } },
  },
} satisfies Meta<typeof MobileHeader>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
