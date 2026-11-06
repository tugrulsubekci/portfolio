import { SectionHeading } from '@/components/atoms';
import { ExperienceCard } from '@/components/molecules';
import type { Experience } from '@/data/experience';

export const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => (
  <section id="experience" className="py-16 lg:py-20">
    <div className="w-full">
      <div className="space-y-4">
        <SectionHeading className="px-6">Experience</SectionHeading>
        {experiences.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.period}`} experience={exp} />
        ))}
      </div>
    </div>
  </section>
);
