import { Metadata } from 'next';
import { LastUpdated } from '@/components/molecules';
import { ProjectsArchiveList, ProjectsArchiveTable } from '@/components/organisms';
import { ArchiveTemplate } from '@/components/templates';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { sortProjectsByDate } from '@/lib/projects';
import { LAST_UPDATED, SITE_URL as siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: "All Projects - Archive | Tugrul Subekci",
  description: "Browse through all of my completed projects, showcasing various technologies and solutions built over the years.",
  keywords: ["projects", "portfolio", "archive", "development"],
  openGraph: {
    title: "All Projects - Archive | Tugrul Subekci",
    description: "Browse through all of my completed projects, showcasing various technologies and solutions built over the years.",
    url: `${siteUrl}/archive`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/archive`,
  },
};

export default function Archive() {
  const sortedProjects = sortProjectsByDate(projects);

  return (
    <ArchiveTemplate
      title="All Projects"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      backLink={{ href: '/', label: profile.name }}
    >
      <ProjectsArchiveList projects={sortedProjects} />
      <ProjectsArchiveTable projects={sortedProjects} />
      <footer className="mt-16">
        <LastUpdated date={LAST_UPDATED} />
      </footer>
    </ArchiveTemplate>
  );
}
