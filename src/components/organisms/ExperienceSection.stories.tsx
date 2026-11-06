import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { experiences } from '@/data/experience';
import { ExperienceSection } from './ExperienceSection';

const meta = {
  title: 'Organisms/ExperienceSection',
  component: ExperienceSection,
  args: { experiences },
  decorators: [(Story) => <div className="max-w-2xl">{Story()}</div>],
} satisfies Meta<typeof ExperienceSection>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
