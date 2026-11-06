import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LastUpdated } from './LastUpdated';

const meta: Meta<typeof LastUpdated> = {
  title: 'Molecules/LastUpdated',
  component: LastUpdated,
  args: { date: new Date('2026-11-05T12:00:00Z') },
};
export default meta;

export const Default: StoryObj<typeof LastUpdated> = {};
