/* eslint-disable @typescript-eslint/no-unused-vars -- shim: drops Next-only router props on purpose */
// Bundle-only stand-in for next/link (no Next router in Claude Design).
// Renders the same <a> next/link renders; router-only props are dropped.
import { forwardRef, type AnchorHTMLAttributes } from 'react';

type Url = string | { pathname?: string | null; hash?: string | null; search?: string | null; query?: Record<string, string> };
export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: Url;
  prefetch?: boolean | null;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
  locale?: string | false;
}

const toHref = (u: Url) => {
  if (typeof u === 'string') return u;
  const q = u.search ?? (u.query ? '?' + new URLSearchParams(u.query).toString() : '');
  return `${u.pathname ?? ''}${q}${u.hash ? (u.hash.startsWith('#') ? u.hash : '#' + u.hash) : ''}`;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, prefetch, replace, scroll, shallow, passHref, legacyBehavior, locale, ...rest },
  ref,
) {
  return <a ref={ref} href={toHref(href)} {...rest} />;
});

export default Link;
