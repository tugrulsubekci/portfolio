export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

/**
 * Runs in <head> before first paint so the page never flashes the wrong theme.
 * Uses the saved choice if there is one, otherwise follows the OS setting (and keeps following it).
 */
export const themeInitScript = `(function () {
  try {
    var media = window.matchMedia('(prefers-color-scheme: light)');
    var apply = function () {
      var saved = localStorage.getItem('${THEME_STORAGE_KEY}');
      document.documentElement.dataset.theme = saved || (media.matches ? 'light' : 'dark');
    };
    apply();
    media.addEventListener('change', apply);
  } catch (e) {}
})();`;
