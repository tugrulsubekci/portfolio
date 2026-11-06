import { ExternalLink, SocialIcon } from '@/components/atoms';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { SocialLink } from '@/data/social';

export const SocialLinks = ({ links }: { links: SocialLink[] }) => (
  <div className="flex gap-4">
    {links.map((link) => (
      <Tooltip key={link.name}>
        <TooltipTrigger asChild>
          <Button variant="quiet" asChild>
            <ExternalLink href={link.url} aria-label={link.name}>
              <SocialIcon name={link.icon} />
            </ExternalLink>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{link.name}</TooltipContent>
      </Tooltip>
    ))}
  </div>
);
