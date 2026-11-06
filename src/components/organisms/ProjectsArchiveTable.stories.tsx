import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { projects } from '@/data/projects';
import { sortProjectsByDate } from '@/lib/projects';
import { ProjectsArchiveTable } from './ProjectsArchiveTable';

const meta = {
  title: 'Organisms/ProjectsArchiveTable',
  component: ProjectsArchiveTable,
  args: { projects: sortProjectsByDate(projects) },
  parameters: {
    docs: { description: { component: 'Medium screens and up: hidden below the `md` breakpoint (768px).' } },
  },
} satisfies Meta<typeof ProjectsArchiveTable>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
