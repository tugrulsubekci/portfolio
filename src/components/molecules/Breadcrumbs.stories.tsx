import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  args: { items: [{ label: 'Home', href: '/' }, { label: 'Projects' }] },
} satisfies Meta<typeof Breadcrumbs>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
