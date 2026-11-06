import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArrowIcon } from './ArrowIcon';

const meta = {
  title: 'Atoms/ArrowIcon',
  component: ArrowIcon,
  args: { direction: 'up-right' },
  argTypes: { direction: { control: 'inline-radio', options: ['up-right', 'right', 'left'] } },
  decorators: [
    (Story) => (
      <span className="group inline-flex gap-1 text-heading hover:text-brand cursor-pointer">
        Hover me <Story />
      </span>
    ),
  ],
} satisfies Meta<typeof ArrowIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const UpRight: Story = {};
export const Right: Story = { args: { direction: 'right' } };
export const Left: Story = { args: { direction: 'left' } };
