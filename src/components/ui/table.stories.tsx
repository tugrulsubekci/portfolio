import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

const meta = {
  title: 'UI/Table',
  component: Table,
} satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { year: '2024', title: 'RapidRender', madeAt: 'Sugar Technology' },
  { year: '2023', title: 'Connect Them All', madeAt: 'Self-employed' },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Year</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Made at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.title}>
            <TableCell className="text-body">{r.year}</TableCell>
            <TableCell className="font-semibold text-heading">{r.title}</TableCell>
            <TableCell className="text-body">{r.madeAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
