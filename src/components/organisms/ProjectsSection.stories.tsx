import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { projects } from '@/data/projects';
import { ProjectsSection } from './ProjectsSection';

const meta = {
  title: 'Organisms/ProjectsSection',
  component: ProjectsSection,
  args: { projects: projects.filter((p) => p.featured) },
  decorators: [(Story) => <div className="max-w-2xl">{Story()}</div>],
} satisfies Meta<typeof ProjectsSection>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
