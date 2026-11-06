import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'Atoms/SectionHeading',
  component: SectionHeading,
  args: { children: 'Experience' },
  parameters: {
    docs: {
      description: {
        component:
          'Visible below the `lg` breakpoint; screen-reader only on desktop, where the sidebar nav labels sections. Shrink the canvas to see it.',
      },
    },
  },
} satisfies Meta<typeof SectionHeading>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
