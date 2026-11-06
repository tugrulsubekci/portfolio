import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  args: { project: projects.find((p) => p.featured)! },
  decorators: [(Story) => <div className="max-w-2xl">{Story()}</div>],
} satisfies Meta<typeof ProjectCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {};
export const WithoutImage: Story = { args: { project: { ...projects[0], image: undefined } } };
