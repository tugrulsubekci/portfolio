// Lighthouse CI (desktop): same as lighthouserc.cjs with the desktop preset and a stricter perf budget.
// eslint-disable-next-line @typescript-eslint/no-require-imports -- lhci loads CommonJS configs
module.exports = require('./lighthouserc.cjs').config('desktop');
