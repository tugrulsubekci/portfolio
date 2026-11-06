import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { ogContentType, ogSize, renderOgImage } from '@/lib/og';

export const alt = `${profile.name} – Projects archive`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Projects archive',
    heading: 'All Projects',
    subheading: `${projects.length} projects spanning cloud, web, machine learning, XR and games.`,
  });
}
