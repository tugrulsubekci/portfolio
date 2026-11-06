import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Separator } from './separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  decorators: [(Story) => <div className="max-w-sm">{Story()}</div>],
} satisfies Meta<typeof Separator>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div>
      <p className="text-sm font-semibold text-strong">Tugrul Subekci</p>
      <p className="text-sm text-body">Software Engineer</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm text-body">
        <span>About</span>
        <Separator orientation="vertical" />
        <span>Experience</span>
        <Separator orientation="vertical" />
        <span>Projects</span>
      </div>
    </div>
  ),
};
