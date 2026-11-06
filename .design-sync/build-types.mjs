// design-sync build step (cfg.buildCmd): this repo is a Next.js app with no
// dist/, so we synthesize a package the converter can read:
//   .design-sync/.cache/pkg/index.ts      - bundle entry (re-exports src/components)
//   .design-sync/.cache/pkg/index.d.ts    - types entry
//   .design-sync/.cache/pkg/types/**      - tsc declarations, @/ aliases rewritten to relative paths
import { execSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = join(root, '.design-sync/.cache/pkg');
const types = join(pkg, 'types');
const layers = ['atoms', 'molecules', 'organisms'];

rmSync(pkg, { recursive: true, force: true });
mkdirSync(pkg, { recursive: true });
const tsc = join(root, 'node_modules/typescript/bin/tsc');
// Own tsconfig: declarations for app source only (stories/tests can't emit
// declarations - their `meta` objects reference unexported prop types).
writeFileSync(join(pkg, 'tsconfig.types.json'), JSON.stringify({
  extends: '../../../tsconfig.json',
  compilerOptions: { noEmit: false, declaration: true, emitDeclarationOnly: true, incremental: false, rootDir: '../../..', outDir: './types' },
  include: ['../../../next-env.d.ts', '../../../src/**/*.ts', '../../../src/**/*.tsx'],
  exclude: ['../../../src/**/*.stories.tsx', '../../../src/**/*.test.ts', '../../../src/**/*.test.tsx'],
}, null, 2));
execSync(`node "${tsc}" -p "${join(pkg, 'tsconfig.types.json')}"`, { cwd: root, stdio: 'inherit' });

// Rewrite `@/x` (tsconfig paths -> src/x) to relative imports so ts-morph resolves them.
const srcTypes = join(types, 'src');
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const f of walk(srcTypes).filter((f) => f.endsWith('.d.ts'))) {
  const txt = readFileSync(f, 'utf8');
  const out = txt.replace(/(from\s+|import\()(['"])@\/([^'"]+)\2/g, (_, pre, q, p) => {
    let rel = relative(dirname(f), join(srcTypes, p)).split(sep).join('/');
    if (!rel.startsWith('.')) rel = './' + rel;
    return `${pre}${q}${rel}${q}`;
  });
  if (out !== txt) writeFileSync(f, out);
}

writeFileSync(join(pkg, 'package.json'), JSON.stringify({ name: 'portfolio', version: '0.1.0', private: true, types: 'index.d.ts' }, null, 2) + '\n');
// shadcn/ui components (src/components/ui) have no barrel - re-export each file.
const ui = readdirSync(join(root, 'src/components/ui'))
  .filter((f) => f.endsWith('.tsx') && !f.includes('.stories.') && !f.includes('.test.'))
  .map((f) => f.replace(/\.tsx$/, ''));
writeFileSync(join(pkg, 'index.ts'), [
  ...layers.map((l) => `export * from '../../../src/components/${l}';`),
  ...ui.map((u) => `export * from '../../../src/components/ui/${u}';`),
].join('\n') + '\n');
writeFileSync(join(pkg, 'index.d.ts'), [
  ...layers.map((l) => `export * from './types/src/components/${l}';`),
  ...ui.map((u) => `export * from './types/src/components/ui/${u}';`),
].join('\n') + '\n');
// Bundle tsconfig: next/link and next/image swapped for plain shims (Next's own
// versions read process.env.__NEXT_* and need the Next runtime). @/ aliases are
// left to esbuild's own tsconfig handling - src/ is covered by the root
// tsconfig, and this plugin would resolve @/dir imports to the bare directory.
writeFileSync(join(pkg, 'tsconfig.bundle.json'), JSON.stringify({
  compilerOptions: {
    baseUrl: '.',
    paths: {
      'next/link': ['../../shims/next-link.tsx'],
      'next/image': ['../../shims/next-image.tsx'],
    },
  },
}, null, 2));
console.log('design-sync: types package ready at', relative(root, pkg));
