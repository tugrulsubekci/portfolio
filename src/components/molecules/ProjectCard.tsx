import Image from 'next/image';
import { ArrowIcon, ExternalLink } from '@/components/atoms';
import { Card } from '@/components/ui/card';
import type { Project } from '@/data/projects';

/** Featured project card with thumbnail, used on the home page. */
export const ProjectCard = ({ project }: { project: Project }) => (
  <Card variant="interactive" className="p-4 sm:p-6" asChild>
    <ExternalLink href={project.url}>
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Project Image */}
      <div className="sm:w-48 flex-shrink-0">
        <div className="relative aspect-video w-full rounded-lg bg-media overflow-hidden border-2 border-media-border">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 640px) 192px, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-heading group-hover:text-brand transition-colors duration-200 mb-2">
          {project.title}
          <ArrowIcon className="inline-block ml-1" />
        </h3>

        <p className="text-sm text-body leading-relaxed">{project.description}</p>
      </div>
    </div>
    </ExternalLink>
  </Card>
);
