import {
  AboutSection,
  ExperienceSection,
  MobileHeader,
  ProjectsSection,
  Sidebar,
} from '@/components/organisms';
import { LastUpdated } from '@/components/molecules';
import { HomeTemplate } from '@/components/templates';
import { experiences } from '@/data/experience';
import { navItems } from '@/data/navigation';
import { aboutParagraphs, profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { socialLinks } from '@/data/social';
import { LAST_UPDATED } from '@/lib/site';

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <HomeTemplate
      header={
        <>
          <Sidebar profile={profile} navItems={navItems} socialLinks={socialLinks} />
          <MobileHeader profile={profile} socialLinks={socialLinks} />
        </>
      }
    >
      <AboutSection paragraphs={aboutParagraphs} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={featuredProjects} />
      <footer className="px-4 sm:px-6 pb-16 lg:pb-0">
        <LastUpdated date={LAST_UPDATED} />
      </footer>
    </HomeTemplate>
  );
}
