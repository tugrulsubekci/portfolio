import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { NavLink } from './NavLink';

const meta = {
  title: 'Molecules/NavLink',
  component: NavLink,
  args: { label: 'Experience', active: false, onClick: fn() },
} satisfies Meta<typeof NavLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {};
export const Active: Story = { args: { active: true } };
