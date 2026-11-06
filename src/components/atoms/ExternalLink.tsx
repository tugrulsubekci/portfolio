import type { AnchorHTMLAttributes } from 'react';

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> & {
  href: string;
};

/** Anchor that opens in a new tab with safe `rel` attributes. */
export const ExternalLink = (props: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" {...props} />
);
