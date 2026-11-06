import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { experiences } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';

const meta = {
  title: 'Molecules/ExperienceCard',
  component: ExperienceCard,
  args: { experience: experiences[0] },
  decorators: [(Story) => <div className="max-w-2xl">{Story()}</div>],
} satisfies Meta<typeof ExperienceCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const LongRole: Story = {};
export const ShortRole: Story = { args: { experience: experiences[1] } };
