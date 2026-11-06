import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'UI/Card',
  component: Card,
  decorators: [(Story) => <div className="max-w-md">{Story()}</div>],
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>RapidRender</CardTitle>
        <CardDescription>Cross-platform 3D interior design app</CardDescription>
        <CardAction>
          <Badge variant="outline">2024</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-body leading-relaxed">
          Cloud-based rendering delivers high-quality visualizations within seconds. Used by leading furniture companies
          in Turkey.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">View project</Button>
        <Button size="sm" variant="ghost">
          Source
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Open to new roles</CardTitle>
        <CardDescription>Backend, full-stack and ML-adjacent positions in London.</CardDescription>
      </CardHeader>
    </Card>
  ),
};

// Site variants
export const Interactive: Story = {
  render: () => (
    <Card variant="interactive" className="p-6" asChild>
      <a href="https://rapidrender.app">
        <h3 className="text-lg font-semibold text-heading group-hover:text-brand transition-colors duration-200 mb-2">
          RapidRender
        </h3>
        <p className="text-sm text-body leading-relaxed">Hover me: lifts onto the surface colour.</p>
      </a>
    </Card>
  ),
};

export const Outline: Story = {
  render: () => (
    <Card variant="outline" className="p-4" asChild>
      <article>
        <h2 className="text-base font-semibold text-heading">Connect Them All</h2>
        <p className="mt-2 text-sm text-body">Self-employed</p>
      </article>
    </Card>
  ),
};
