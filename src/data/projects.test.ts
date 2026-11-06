import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { hasProjectLink } from '@/lib/projects';
import { projects } from './projects';

// Guards against content mistakes when editing src/data/projects.ts.
describe('projects data', () => {
  it.each(projects.map((p) => [p.title, p] as const))('%s is valid', (_, project) => {
    // Date is a real DD/MM/YYYY date
    expect(project.date).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    const [day, month, year] = project.date.split('/').map(Number);
    const d = new Date(year, month - 1, day);
    expect(d.getDate()).toBe(day);
    expect(d.getMonth()).toBe(month - 1);

    // URL is '#' (coming soon) or an absolute https URL
    if (hasProjectLink(project)) {
      expect(new URL(project.url).protocol).toBe('https:');
    }

    // Image, if set, exists in public/
    if (project.image) {
      expect(existsSync(join(process.cwd(), 'public', project.image))).toBe(true);
    }
  });

  it('has unique titles (used as React keys)', () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('every featured project has an image', () => {
    for (const p of projects.filter((p) => p.featured)) {
      expect(p.image, p.title).toBeTruthy();
    }
  });
});
