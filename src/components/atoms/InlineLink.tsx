import type { ReactNode } from 'react';
import { ExternalLink } from './ExternalLink';

interface InlineLinkProps {
  href: string;
  external?: boolean;
  children: ReactNode;
}

const className = 'font-bold text-strong hover:text-brand-hover transition-colors';

/** Emphasised link used inside body copy. */
export const InlineLink = ({ href, external = false, children }: InlineLinkProps) =>
  external ? (
    <ExternalLink href={href} className={className}>
      {children}
    </ExternalLink>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
