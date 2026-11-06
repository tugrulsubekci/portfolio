/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element, jsx-a11y/alt-text -- shim: drops Next-only props on purpose; alt arrives via ...rest (required by ImageProps) */
// Bundle-only stand-in for next/image (no Next image optimizer in Claude Design).
// Renders a plain <img> with next/image's layout styles. Root-relative srcs
// ("/projects/x.png", served from public/ on the site) resolve against the live site.
import { forwardRef, type ImgHTMLAttributes } from 'react';

const SITE = 'https://tugrulsubekci.com';

type StaticImport = { src: string; width?: number; height?: number };
export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  quality?: number | `${number}`;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
  overrideSrc?: string;
}

const resolveSrc = (s: string) => (s.startsWith('/') && !s.startsWith('//') ? SITE + s : s);

const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  { src, fill, priority, quality, placeholder, blurDataURL, unoptimized, loader, overrideSrc, width, height, style, loading, ...rest },
  ref,
) {
  const s = typeof src === 'string' ? src : src.src;
  const w = width ?? (typeof src === 'object' ? src.width : undefined);
  const h = height ?? (typeof src === 'object' ? src.height : undefined);
  return (
    <img
      ref={ref}
      src={resolveSrc(overrideSrc ?? s)}
      width={fill ? undefined : w}
      height={fill ? undefined : h}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding="async"
      style={fill ? { position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', ...style } : { color: 'transparent', ...style }}
      {...rest}
    />
  );
});

export default Image;
