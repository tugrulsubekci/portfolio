import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { aboutParagraphs } from '@/data/profile';
import { AboutSection } from './AboutSection';

const meta = {
  title: 'Organisms/AboutSection',
  component: AboutSection,
  args: { paragraphs: aboutParagraphs },
  decorators: [(Story) => <div className="max-w-2xl">{Story()}</div>],
} satisfies Meta<typeof AboutSection>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
