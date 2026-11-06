// Lighthouse CI (mobile): audits the production build (next start).
// Run locally with `npm run build && npm run lighthouse`. Desktop variant: lighthouserc.desktop.cjs.
const config = (preset) => ({
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'Ready',
      url: ['http://localhost:3000/', 'http://localhost:3000/archive'],
      numberOfRuns: 3,
      settings: {
        ...(preset === 'desktop' ? { preset: 'desktop' } : {}),
        // Keep CI runs out of Google Analytics.
        blockedUrlPatterns: ['*googletagmanager.com*', '*google-analytics.com*'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: preset === 'desktop' ? 0.95 : 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: `.lighthouseci/${preset}`,
    },
  },
});

module.exports = config('mobile');
module.exports.config = config;
