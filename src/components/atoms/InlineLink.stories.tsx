import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InlineLink } from './InlineLink';

const meta = {
  title: 'Atoms/InlineLink',
  component: InlineLink,
  args: { href: 'https://sugartech.io/', children: 'Sugar Technology', external: false },
  decorators: [
    (Story) => (
      <p className="text-base text-body max-w-xl">
        At <Story />, I joined as one of five engineers and helped scale the company.
      </p>
    ),
  ],
} satisfies Meta<typeof InlineLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SameTab: Story = {};
export const External: Story = { args: { external: true } };
