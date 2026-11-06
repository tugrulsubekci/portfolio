import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Spotlight } from './Spotlight';

const meta = {
  title: 'Atoms/Spotlight',
  component: Spotlight,
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Blue glow that follows the mouse. Move the cursor over the canvas.' } },
  },
  decorators: [(Story) => <div className="h-96 bg-page">{Story()}</div>],
} satisfies Meta<typeof Spotlight>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
