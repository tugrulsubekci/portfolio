export type SocialIconName = 'github' | 'linkedin' | 'email';

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIconName;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/tugrulsubekci', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tugrulsubekci', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:tugrulsubekci@gmail.com', icon: 'email' },
];
