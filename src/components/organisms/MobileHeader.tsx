import { ThemeToggle } from '@/components/atoms';
import { ProfileIntro, SocialLinks } from '@/components/molecules';
import type { profile as profileData } from '@/data/profile';
import type { SocialLink } from '@/data/social';

interface MobileHeaderProps {
  profile: typeof profileData;
  socialLinks: SocialLink[];
}

/** Top header below lg; replaces the sidebar. */
export const MobileHeader = ({ profile, socialLinks }: MobileHeaderProps) => (
  <header className="flex lg:hidden bg-page text-strong p-6">
    <div className="w-full">
      <div className="space-y-3">
        <ProfileIntro {...profile} size="sm" />
        <div className="pt-2 flex items-center gap-4">
          <SocialLinks links={socialLinks} />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
);
