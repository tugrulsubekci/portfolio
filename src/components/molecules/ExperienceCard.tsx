import { ArrowIcon, ExternalLink } from '@/components/atoms';
import { Card } from '@/components/ui/card';
import type { Experience } from '@/data/experience';

export const ExperienceCard = ({ experience: exp }: { experience: Experience }) => (
  <Card variant="interactive" className="p-6" asChild>
    <ExternalLink href={exp.url}>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[140px_1fr] md:items-start md:gap-6">
      {/* Period */}
      <div>
        <p className="text-xs font-semibold text-body uppercase tracking-wide text-left md:leading-6">
          {exp.period}
        </p>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base font-semibold text-heading group-hover:text-brand transition-colors duration-200 mb-2 text-left">
          {exp.title} · {exp.company}
          <ArrowIcon className="inline-block ml-1" />
        </h3>

        <ul className="space-y-2 text-sm text-body leading-relaxed text-left">
          {exp.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-brand mt-0.5">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </ExternalLink>
  </Card>
);
