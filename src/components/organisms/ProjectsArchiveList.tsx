import { ProjectArchiveCard } from '@/components/molecules';
import type { Project } from '@/data/projects';

/** Archive as stacked cards, shown below md. */
export const ProjectsArchiveList = ({ projects }: { projects: Project[] }) => (
  <div className="space-y-4 md:hidden">
    {projects.map((project) => (
      <ProjectArchiveCard key={project.title} project={project} />
    ))}
  </div>
);
