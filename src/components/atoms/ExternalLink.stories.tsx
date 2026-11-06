import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ExternalLink } from './ExternalLink';

const meta = {
  title: 'Atoms/ExternalLink',
  component: ExternalLink,
  args: { href: 'https://github.com/tugrulsubekci', children: 'Opens in a new tab', className: 'text-brand underline' },
} satisfies Meta<typeof ExternalLink>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
