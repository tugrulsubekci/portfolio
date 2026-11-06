import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { projects } from '@/data/projects';
import { ProjectArchiveRow } from './ProjectArchiveRow';

const meta = {
  title: 'Molecules/ProjectArchiveRow',
  component: ProjectArchiveRow,
  args: { project: projects[0] },
  decorators: [
    (Story) => (
      <table className="w-full">
        <tbody>{Story()}</tbody>
      </table>
    ),
  ],
} satisfies Meta<typeof ProjectArchiveRow>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
