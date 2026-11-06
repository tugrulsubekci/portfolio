# CLAUDE.md

Personal portfolio for Tugrul Subekci: https://tugrulsubekci.com (Storybook: https://storybook.tugrulsubekci.com).
The repo is itself a showcase of engineering quality, so keep changes clean, typed, tested and consistent.

## Stack

Next.js 16 (App Router, static pages), React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui (style `radix-nova`, unified `radix-ui` package), class-variance-authority, Storybook 10 (`@storybook/nextjs-vite`), Vitest, Lighthouse CI. Node 24. Deployed on Vercel; DNS on Cloudflare.

## Commands

```bash
npm run dev | build | start
npm run lint          # ESLint flat config
npm run typecheck     # tsc --noEmit
npm test              # Vitest (src/**/*.test.ts[x])
npm run storybook     # :6006 ; npm run build-storybook
npm run lighthouse    # after npm run build; mobile + desktop budgets
```

Before opening a PR, run lint, typecheck, test and build. CI (`.github/workflows/ci.yml`) also builds Storybook and runs Lighthouse. Accessibility and SEO must stay at 100; performance needs ≥ 90 on mobile and ≥ 95 on desktop.

## Layout

- `src/app/`: pages (`/`, `/archive`, 404), root layout (theme init script, JSON-LD, GA, `TooltipProvider`), sitemap, manifest, OG/Twitter images.
- `src/components/ui/`: shadcn primitives (lowercase filenames, double quotes, no semicolons: keep shadcn's style).
- `src/components/{atoms,molecules,organisms,templates}/`: site components (PascalCase, single quotes). Each folder has an `index.ts` barrel and a `*.stories.tsx` per component.
- `src/data/`: typed content (profile, experience, projects, navigation, social). Content edits go here, not in components.
- `src/lib/`: `site.ts` (SITE_URL), `theme.ts` (pre-paint theme script), `projects.ts`, `og.tsx`, `utils.ts`.
- `src/hooks/useActiveSection.ts`: scroll-spy for the sidebar nav.

## UI rules

1. **shadcn first.** For any new UI, check shadcn for a matching primitive (`npx shadcn@latest search <q>` / `docs <name>`) and add it with `npx shadcn@latest add <name>`. Build custom only when nothing fits.
2. **Site look lives in variants.** Don't restyle primitives at call sites with long class lists. Add or reuse a `cva` variant:
   - `Button`: `quiet` (icon controls), `nav` (sidebar link), `brand-link` (teal arrow link), `heading-link` (heading-colour arrow link). Site variants default to size `none` and skip shadcn's box "chrome".
   - `Card`: `interactive` (hover tile), `outline` (bordered mobile archive card).
   - Use `asChild` to render a primitive as `Link` / `ExternalLink` / `article`.
3. **Semantic tokens only**, from `src/app/globals.css`: `page`, `card`, `surface`, `media`, `strong`, `heading`, `subtle`, `body`, `faint`, `brand`, `brand-hover`, `indicator`, `line`, `line-strong`, `danger`, `spotlight`. No raw palette colours in components. Themes switch via `<html data-theme="light|dark">`; the `dark:` variant follows that attribute, not a class.
4. **Respect reduced motion** and keep controls keyboard-accessible and labelled (`aria-label`, Radix tooltips).
5. Keep client components minimal (`'use client'` only where interaction needs it).
6. Every new or changed component gets or updates a story. Check both themes.

## Claude Design sync

Components are mirrored to the Claude Design project "Portfolio Design System" via `/design-sync` (config and learnings in `.design-sync/`: `config.json`, `NOTES.md`, `conventions.md`). After adding or changing components or stories, re-run `/design-sync` and commit the `.design-sync/` changes. `.ds-sync/`, `ds-bundle/` and `.design-sync/.cache/` are local working files (gitignored).

## Gotchas

- `public/sw.js` is a service-worker kill switch; keep it deployed. `ServiceWorkerCleanup` removes old registrations and caches.
- `LAST_UPDATED` in `src/lib/site.ts` is the build time (pages are static).
- Lighthouse runs block Google Analytics URLs; don't remove that from `lighthouserc.cjs`.
- Storybook's Vercel project only rebuilds when `src/`, `.storybook/` or package files change.

## Workflow

- Development happens in the **private** repo `tugrulsubekci/portfolio-dev` (full history, PRs, Vercel). The **public** repo `tugrulsubekci/portfolio` holds a single commit that `.github/workflows/publish-public.yml` replaces on every push to `main` (uses the write deploy key stored as the `PUBLIC_REPO_DEPLOY_KEY` secret). Never push branches, PRs or history to the public repo.
- Work on a branch, never commit directly to `main`. Open a PR with `gh`; squash-merge only after the user explicitly approves each merge.
- Commit or push only when asked.
- The user prefers short, concise replies.
