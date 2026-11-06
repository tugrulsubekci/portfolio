import type { Project } from '@/data/projects';

/** Project dates are stored as DD/MM/YYYY. */
export const parseProjectDate = (date: string) => {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const getYearFromDate = (date: string) => date.split('/')[2] ?? '';

/** Newest first. Returns a new array. */
export const sortProjectsByDate = (projects: Project[]) =>
  [...projects].sort((a, b) => parseProjectDate(b.date) - parseProjectDate(a.date));

/** Projects without a live link use '#' as their URL. */
export const hasProjectLink = (project: Pick<Project, 'url'>) => project.url !== '#';

export const getProjectHostname = (project: Pick<Project, 'url'>) =>
  hasProjectLink(project) ? new URL(project.url).hostname : 'Coming soon';
