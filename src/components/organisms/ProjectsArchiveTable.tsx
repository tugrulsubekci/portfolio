import { ProjectArchiveRow } from '@/components/molecules';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Project } from '@/data/projects';

const columns = ['Year', 'Project', 'Made at', 'Link'];

/** Archive as a table, shown from md up. */
export const ProjectsArchiveTable = ({ projects }: { projects: Project[] }) => (
  <div className="hidden md:block">
    <Table className="min-w-180 text-base">
      <TableHeader>
        <TableRow className="border-line-strong hover:bg-transparent">
          {columns.map((col) => (
            <TableHead
              key={col}
              className="h-auto px-4 py-4 text-sm font-semibold text-heading uppercase tracking-wider"
            >
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="[&_tr:last-child]:border-b">
        {projects.map((project) => (
          <ProjectArchiveRow key={project.title} project={project} />
        ))}
      </TableBody>
    </Table>
  </div>
);
