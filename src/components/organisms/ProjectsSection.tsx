import Link from 'next/link';
import { ArrowIcon, SectionHeading } from '@/components/atoms';
import { ProjectCard } from '@/components/molecules';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

export const ProjectsSection = ({ projects }: { projects: Project[] }) => (
  <section id="projects" className="py-16 lg:py-20">
    <div className="w-full">
      <div className="space-y-4">
        <SectionHeading className="px-4 sm:px-6">Projects</SectionHeading>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* View Full Archive Button */}
      <div className="mt-12 px-4 sm:px-6">
        <Button variant="heading-link" asChild>
          <Link href="/archive">
            View Full Project Archive
            <ArrowIcon direction="right" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
