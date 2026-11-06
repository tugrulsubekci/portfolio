import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';
import { SITE_URL } from '@/lib/site';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

interface OgImageOptions {
  /** Small label above the heading, e.g. "Projects archive" */
  eyebrow?: string;
  heading: string;
  subheading: string;
}

const loadFont = (file: string) => readFile(join(process.cwd(), 'src/assets/fonts', file));

/** Shared 1200x630 social card in the site's slate/teal style. Rendered at build time. */
export const renderOgImage = async ({ eyebrow, heading, subheading }: OgImageOptions) => {
  const [regular, bold] = await Promise.all([
    loadFont('Inter-Regular.ttf'),
    loadFont('Inter-Bold.ttf'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#0f172a',
          backgroundImage:
            'radial-gradient(900px at 85% 15%, rgba(29, 78, 216, 0.35), transparent 70%)',
          color: '#e2e8f0',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {eyebrow && (
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#2dd4bf',
                marginBottom: 24,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div style={{ fontSize: 96, fontWeight: 700, color: '#f8fafc', lineHeight: 1.05 }}>
            {heading}
          </div>
          <div style={{ fontSize: 40, color: '#94a3b8', marginTop: 28, maxWidth: 900 }}>
            {subheading}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 30 }}>
          <div style={{ width: 64, height: 3, backgroundColor: '#2dd4bf', marginRight: 20 }} />
          <div style={{ color: '#2dd4bf' }}>{new URL(SITE_URL).hostname}</div>
          <div style={{ color: '#475569', marginLeft: 16 }}>{`· ${profile.name}`}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Inter', data: regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: bold, weight: 700, style: 'normal' },
      ],
    }
  );
};
