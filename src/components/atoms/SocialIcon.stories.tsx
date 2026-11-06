import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SocialIcon } from './SocialIcon';

const meta = {
  title: 'Atoms/SocialIcon',
  component: SocialIcon,
  args: { name: 'github' },
  argTypes: { name: { control: 'inline-radio', options: ['github', 'linkedin', 'email'] } },
  decorators: [(Story) => <span className="text-body">{Story()}</span>],
} satisfies Meta<typeof SocialIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {};
export const LinkedIn: Story = { args: { name: 'linkedin' } };
export const Email: Story = { args: { name: 'email' } };
