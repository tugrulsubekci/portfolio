import { ArrowIcon, ExternalLink } from '@/components/atoms';
import type { Project } from '@/data/projects';
import { getProjectHostname, hasProjectLink } from '@/lib/projects';

interface ProjectLinkProps {
  project: Pick<Project, 'url'>;
  className?: string;
}

/** Shows the project's hostname with an arrow, or "Coming soon" when it has no link yet. */
export const ProjectLink = ({ project, className = '' }: ProjectLinkProps) => (
  <ExternalLink
    href={project.url}
    className={`${className} inline-flex items-center gap-1 text-body hover:text-brand transition-colors duration-200 group`.trim()}
  >
    {getProjectHostname(project)}
    {hasProjectLink(project) && <ArrowIcon />}
  </ExternalLink>
);
