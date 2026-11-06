import { describe, expect, it } from 'vitest';
import type { Project } from '@/data/projects';
import {
  getProjectHostname,
  getYearFromDate,
  hasProjectLink,
  parseProjectDate,
  sortProjectsByDate,
} from './projects';

const project = (date: string, title = date): Project => ({
  date,
  title,
  description: '',
  madeAt: '',
  url: '#',
  featured: false,
});

describe('parseProjectDate', () => {
  it('reads DD/MM/YYYY (not MM/DD)', () => {
    const d = new Date(parseProjectDate('05/11/2026'));
    expect([d.getFullYear(), d.getMonth(), d.getDate()]).toEqual([2026, 10, 5]);
  });
});

describe('getYearFromDate', () => {
  it('returns the year part', () => {
    expect(getYearFromDate('01/06/2023')).toBe('2023');
  });

  it('returns an empty string for a malformed date', () => {
    expect(getYearFromDate('2023')).toBe('');
  });
});

describe('sortProjectsByDate', () => {
  it('sorts newest first, using day and month too', () => {
    const sorted = sortProjectsByDate([
      project('01/01/2022'),
      project('15/03/2024'),
      project('02/03/2024'),
    ]);
    expect(sorted.map((p) => p.date)).toEqual(['15/03/2024', '02/03/2024', '01/01/2022']);
  });

  it('does not mutate the input array', () => {
    const input = [project('01/01/2020'), project('01/01/2021')];
    sortProjectsByDate(input);
    expect(input.map((p) => p.date)).toEqual(['01/01/2020', '01/01/2021']);
  });
});

describe('project links', () => {
  it("treats '#' as no link", () => {
    expect(hasProjectLink({ url: '#' })).toBe(false);
    expect(getProjectHostname({ url: '#' })).toBe('Coming soon');
  });

  it('returns the hostname for real links', () => {
    expect(hasProjectLink({ url: 'https://rapidrender.app/' })).toBe(true);
    expect(getProjectHostname({ url: 'https://www.youtube.com/watch?v=x' })).toBe('www.youtube.com');
  });
});
