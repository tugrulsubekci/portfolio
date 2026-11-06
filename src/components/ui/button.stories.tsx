import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NextLink from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  args: { children: 'View project' },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Link: Story = { args: { variant: 'link', children: 'Read more' } };
export const WithIcon: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://rapidrender.app" target="_blank" rel="noopener noreferrer">
        rapidrender.app <ArrowUpRight data-icon="inline-end" />
      </a>
    ),
  },
};

// Site variants: the portfolio's own text/icon controls (no box, no padding).
export const Quiet: Story = {
  args: {
    variant: 'quiet',
    'aria-label': 'Toggle theme',
    children: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.6 8.6 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 22 14.05a1 1 0 0 0-.36-1.05Z" />
      </svg>
    ),
  },
};
export const BrandLink: Story = {
  args: { variant: 'brand-link', asChild: true, children: <NextLink href="/">← Back to home</NextLink> },
};
export const HeadingLink: Story = {
  args: { variant: 'heading-link', asChild: true, children: <NextLink href="/archive">View Full Project Archive →</NextLink> },
};
