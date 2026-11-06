import { ThemeToggle } from '@/components/atoms';
import { ProfileIntro, SocialLinks } from '@/components/molecules';
import type { NavItem } from '@/data/navigation';
import type { profile as profileData } from '@/data/profile';
import type { SocialLink } from '@/data/social';
import { SectionNav } from './SectionNav';

interface SidebarProps {
  profile: typeof profileData;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

/** Sticky left column on desktop (hidden below lg). */
export const Sidebar = ({ profile, navItems, socialLinks }: SidebarProps) => (
  <aside className="hidden lg:sticky lg:top-0 lg:h-screen lg:flex lg:w-[35%] lg:flex-col lg:justify-between lg:py-24">
    <div className="space-y-4">
      <ProfileIntro {...profile} size="lg" />
      <SectionNav items={navItems} />
    </div>

    <div className="flex items-center gap-4">
      <SocialLinks links={socialLinks} />
      <ThemeToggle />
    </div>
  </aside>
);
