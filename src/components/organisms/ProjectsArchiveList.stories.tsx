import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { projects } from '@/data/projects';
import { sortProjectsByDate } from '@/lib/projects';
import { ProjectsArchiveList } from './ProjectsArchiveList';

const meta = {
  title: 'Organisms/ProjectsArchiveList',
  component: ProjectsArchiveList,
  args: { projects: sortProjectsByDate(projects) },
  parameters: {
    docs: { description: { component: 'Small screens only: hidden from the `md` breakpoint (768px) up.' } },
  },
  decorators: [(Story) => <div className="max-w-sm">{Story()}</div>],
} satisfies Meta<typeof ProjectsArchiveList>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
