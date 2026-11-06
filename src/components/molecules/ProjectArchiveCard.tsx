import { Card } from '@/components/ui/card';
import type { Project } from '@/data/projects';
import { getYearFromDate } from '@/lib/projects';
import { ProjectLink } from './ProjectLink';

/** Archive entry for small screens. */
export const ProjectArchiveCard = ({ project }: { project: Project }) => (
  <Card variant="outline" className="p-4" asChild>
    <article>
    <div className="flex items-start justify-between gap-4">
      <h2 className="text-base font-semibold text-heading leading-snug">{project.title}</h2>
      <span className="shrink-0 text-sm text-body">{getYearFromDate(project.date)}</span>
    </div>
    <p className="mt-2 text-sm text-body">{project.madeAt}</p>
    <ProjectLink project={project} className="mt-3 text-sm" />
    </article>
  </Card>
);
