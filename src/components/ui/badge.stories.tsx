import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  args: { children: 'TypeScript' },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Next.js' } };
export const Outline: Story = { args: { variant: 'outline', children: '2024' } };
export const TechStack: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {['React', 'Node.js', 'PostgreSQL', 'AWS'].map((t) => (
        <Badge key={t} variant="secondary">
          {t}
        </Badge>
      ))}
    </div>
  ),
};
