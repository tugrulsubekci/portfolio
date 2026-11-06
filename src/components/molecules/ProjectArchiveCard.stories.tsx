import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { projects } from '@/data/projects';
import { ProjectArchiveCard } from './ProjectArchiveCard';

const meta = {
  title: 'Molecules/ProjectArchiveCard',
  component: ProjectArchiveCard,
  args: { project: projects[0] },
  decorators: [(Story) => <div className="max-w-sm">{Story()}</div>],
} satisfies Meta<typeof ProjectArchiveCard>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
