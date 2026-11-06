import { profile } from '@/data/profile';
import { ogContentType, ogSize, renderOgImage } from '@/lib/og';

export const alt = `${profile.name} – ${profile.title}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: profile.title,
    heading: profile.name,
    subheading: profile.bio,
  });
}
