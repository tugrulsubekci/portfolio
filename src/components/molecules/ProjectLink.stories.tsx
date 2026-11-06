import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectLink } from './ProjectLink';

const meta = {
  title: 'Molecules/ProjectLink',
  component: ProjectLink,
  args: { project: { url: 'https://rapidrender.app/' } },
} satisfies Meta<typeof ProjectLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithUrl: Story = {};
export const ComingSoon: Story = { args: { project: { url: '#' } } };
