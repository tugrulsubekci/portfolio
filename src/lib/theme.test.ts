import { describe, expect, it } from 'vitest';
import { themeInitScript, THEME_STORAGE_KEY } from './theme';

/** Runs the inline <head> script against a fake browser. */
const runScript = ({ saved, systemLight }: { saved?: string; systemLight: boolean }) => {
  const root = { dataset: {} as Record<string, string> };
  let onChange: (() => void) | undefined;
  const media = {
    matches: systemLight,
    addEventListener: (_: string, cb: () => void) => (onChange = cb),
  };
  const store: Record<string, string> = saved ? { [THEME_STORAGE_KEY]: saved } : {};
  const window = { matchMedia: () => media };
  const localStorage = { getItem: (k: string) => store[k] ?? null };
  const document = { documentElement: root };

  new Function('window', 'localStorage', 'document', themeInitScript)(window, localStorage, document);

  return {
    theme: () => root.dataset.theme,
    systemChanges: (light: boolean) => {
      media.matches = light;
      onChange?.();
    },
  };
};

describe('themeInitScript', () => {
  it('follows the OS when nothing is saved', () => {
    expect(runScript({ systemLight: true }).theme()).toBe('light');
    expect(runScript({ systemLight: false }).theme()).toBe('dark');
  });

  it('prefers the saved choice over the OS', () => {
    expect(runScript({ saved: 'dark', systemLight: true }).theme()).toBe('dark');
  });

  it('keeps following live OS changes when nothing is saved', () => {
    const page = runScript({ systemLight: false });
    page.systemChanges(true);
    expect(page.theme()).toBe('light');
  });

  it('never throws (e.g. storage blocked)', () => {
    expect(() =>
      new Function('window', 'localStorage', 'document', themeInitScript)({}, {}, {})
    ).not.toThrow();
  });
});
