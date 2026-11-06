import { TableCell, TableRow } from '@/components/ui/table';
import type { Project } from '@/data/projects';
import { getYearFromDate } from '@/lib/projects';
import { ProjectLink } from './ProjectLink';

const cell = 'px-4 py-6 whitespace-normal text-body';

/** Archive table row for medium screens and up. */
export const ProjectArchiveRow = ({ project }: { project: Project }) => (
  <TableRow className="border-line duration-200">
    <TableCell className={cell}>{getYearFromDate(project.date)}</TableCell>
    <TableCell className={cell}>
      <span className="text-heading font-semibold">{project.title}</span>
    </TableCell>
    <TableCell className={cell}>{project.madeAt}</TableCell>
    <TableCell className={cell}>
      <ProjectLink project={project} />
    </TableCell>
  </TableRow>
);
