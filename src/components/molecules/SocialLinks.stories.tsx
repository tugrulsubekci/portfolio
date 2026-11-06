import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { socialLinks } from '@/data/social';
import { SocialLinks } from './SocialLinks';

const meta = {
  title: 'Molecules/SocialLinks',
  component: SocialLinks,
  args: { links: socialLinks },
} satisfies Meta<typeof SocialLinks>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
