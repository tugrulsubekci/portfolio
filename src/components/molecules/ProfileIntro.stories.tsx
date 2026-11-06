import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { profile } from '@/data/profile';
import { ProfileIntro } from './ProfileIntro';

const meta = {
  title: 'Molecules/ProfileIntro',
  component: ProfileIntro,
  args: { ...profile, size: 'lg' },
  argTypes: { size: { control: 'inline-radio', options: ['lg', 'sm'] } },
  decorators: [(Story) => <div className="space-y-4">{Story()}</div>],
} satisfies Meta<typeof ProfileIntro>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {};
export const Small: Story = { args: { size: 'sm' } };
