# design-sync notes (tugrulsubekci/portfolio -> Claude Design "Portfolio Design System")

## Repo shape
- [GENERAL] This is a Next.js app, not a published package: no dist/, no .d.ts. `buildCmd` (`node .design-sync/build-types.mjs`) synthesizes a package at `.design-sync/.cache/pkg/` (gitignored): `index.ts` re-exports src/components/{atoms,molecules,organisms} (bundle entry, `cfg.entry`), tsc declarations under `types/` with `@/` imports rewritten to relative paths (ts-morph can't resolve tsconfig paths), and `tsconfig.bundle.json`. All package-relative config paths (`srcDir`, `tsconfig`, `extraEntries`, `extraFonts`) are therefore relative to `.design-sync/.cache/pkg/`. Always run buildCmd before package-build.mjs / resync.mjs.
- Templates (src/components/templates) and ServiceWorkerCleanup are deliberately NOT synced: no stories, page-level wiring.
- tsc declarations: stories/tests are excluded (their `meta` objects reference unexported Props types -> TS4023).

## Bundle fixes
- [GENERAL] `process is not defined` at bundle load -> next/link + next/image read `process.env.__NEXT_*` and need the Next runtime -> `tsconfig.bundle.json` paths swap them for `.design-sync/shims/next-link.tsx` (plain `<a>`) and `next-image.tsx` (plain `<img>`, next/image `fill` styles; root-relative srcs resolve against https://tugrulsubekci.com because public/ isn't uploaded).
- [GENERAL] Don't put `@/*` in `tsconfig.bundle.json`: the converter's paths plugin resolves `@/components/atoms` to the bare directory ("Cannot read file ... Incorrect function"). esbuild's own tsconfig handling already resolves `@/` for files under src/.
- [GENERAL] `.storybook/preview.tsx` decorator can't bundle (`globals.css` -> `@import "tailwindcss"`, plus next/font) -> `cfg.provider` = `PortfolioRoot` (`.design-sync/PortfolioRoot.tsx`, shipped via `extraEntries`). It mirrors the decorator: sets `<html data-theme>`, Inter, `text-strong` - and paints `var(--page)` itself, because the preview host page overrides body's background (white page -> white link text invisible).
- CSS comes from the storybook build (`[CSS_FROM_STORYBOOK]`, compiled Tailwind v4 + globals.css tokens). Only utilities used somewhere in src/ exist in it (Tailwind JIT).

## Fonts
- [GENERAL] Storybook's nextjs-vite mocks next/font/google as `--font-inter: 'Inter'` with NO font file - the reference renders a system fallback unless Inter is installed. Real Inter (latin variable woff2, same file next/font serves; OFL) is committed at `.design-sync/fonts/Inter-latin.woff2` and shipped via `cfg.extraFonts` (`fonts/inter.css`, which also defines `--font-inter`). It was copied from `.next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2`.

## Card overrides
- Spotlight: `cardMode: single` (fixed-position glow escapes grid cells). ProjectCard: `cardMode: column` (stories wider than a grid cell).

## Grading log
- InlineLink: match (solo #1) after the PortfolioRoot background fix.
- [GENERAL] After every sb-reference rebuild, inject the Inter @font-face into `.design-sync/sb-reference/iframe.html` (and copy `fonts/Inter-latin.woff2` next to it) so the oracle compares with the real font on both sides - otherwise text wraps differ (fallback vs Inter). Snippet: `<style id="ds-sync-inter">@font-face{font-family:"Inter";font-weight:100 900;src:url("./Inter-latin.woff2") format("woff2")}</style>` before `</head>`.
- Responsive organisms need explicit capture viewports (`cfg.overrides.<Name>.viewport`): Sidebar is `hidden lg:flex` -> 1280x900; ProjectsArchiveList is `md:hidden` -> 390x3400 (the preview capture caps at 2000px tall - its tail rows are ProjectArchiveCard, graded on its own). The default 900x700 capture lands between the two breakpoints, so both showed `sb-error: no storybook root content`.
- Tall organisms (AboutSection, ExperienceSection, ProjectsArchiveTable, ProjectsSection) get taller viewports so the preview side isn't clipped at 700px (storybook side captures the full element).
- [GENERAL] Windows: never leave the shell cwd inside ds-bundle/ - the next package-build can't rm it (EPERM), leaves it half-deleted, and then refuses with [OUT_UNSAFE]. Fix: `rm -rf ds-bundle` from the repo root and rebuild.
- All 25 components graded match on the first sync (2026-11-06). No owned previews were needed.

## Known validate warnings (triaged - not regressions)
- `[RENDER_THIN]` SectionHeading (`lg:sr-only`), MobileHeader (`lg:hidden`), ProjectsArchiveList (`md:hidden`): the validator's render check runs at 1200px wide, where these are hidden by design. Compare grades them at their own viewports (all match); the Claude Design product pane is <=728px wide, so the cards render there.

## Re-sync risks
- `.design-sync/fonts/Inter-latin.woff2` is a copy of next/font's Inter download - if layout.tsx changes font (or weights/subsets), replace it and the `--font-inter` rule in `fonts/inter.css`.
- `PortfolioRoot.tsx` mirrors `.storybook/preview.tsx` + `src/app/layout.tsx` + body rules in globals.css. If the decorator/theme setup changes (new theme, new font var, different text class), update PortfolioRoot - it is the provider every preview and design uses.
- Shims (`shims/next-link.tsx`, `shims/next-image.tsx`) stand in for next/link and next/image. New next/* imports in components (e.g. next/navigation, next/font in a component) will break the bundle (`process is not defined`) - add a shim + `tsconfig.bundle.json` path in build-types.mjs.
- Project thumbnails load from https://tugrulsubekci.com/projects/* (next-image shim). Renaming/removing files in public/projects breaks them in Claude Design even though Storybook (staticDirs) still shows them.
- The sb-reference Inter injection must be redone after every reference rebuild (see Fonts).
- Story caps: all components have <=3 stories, so nothing is capped. ProjectsArchiveList was compared for its first ~2000px only (capture height cap).
- CSS is the storybook build's compiled Tailwind - utilities used nowhere in src/ don't exist. conventions.md enumerates the verified set; re-validate it if components change their classes.
- Toolchain at first sync: Next 16.1.6, React 19.2.3, Storybook 10.6.5 (nextjs-vite), Tailwind 4, Node 24.20.

## shadcn/ui (added 2026-11-06, re-sync #2)
- shadcn (radix-nova, CLI v4) lives in `src/components/ui/` with no barrel; `build-types.mjs` re-exports each non-story `ui/*.tsx` into the package entry. Stories are titled `UI/*` -> group `ui`.
- Token collision: shadcn's `--muted`/`--accent` collided with the site's. Site tokens were renamed (`muted`->`body`, `accent`->`brand`, `accent-hover`->`brand-hover`); shadcn vars are mapped onto site vars in `:root` (primary=brand, secondary/muted/accent=surface, muted-foreground=body, border/input=line-strong, ring=brand), so they follow `data-theme`. `--card` is shared (same meaning).
- `@custom-variant dark` follows `:root:not([data-theme=light])` so shadcn's `dark:` classes match the site theme (no `.dark` class).
- `PortfolioRoot` wraps a `TooltipProvider`. Tooltip: `cardMode: single` (portal overlay), story uses `defaultOpen`.
- In bundle CSS, `bg-surface`, `bg-accent` and `border-input` are NOT compiled (unused in src); conventions.md points to `bg-secondary`/`var(--surface)` instead. Re-check when the ui components change.
- [GENERAL] `cfg.storyImports.shim: ["src/components/ui/"]`: shadcn files are lowercase (`tooltip.tsx`), so the converter's "file named like an export" rule never routed `./tooltip` story imports to the shipped bundle - previews compiled a second copy, whose Tooltip context didn't see PortfolioRoot's TooltipProvider (`Tooltip must be used within TooltipProvider`, root empty). The shim makes every ui/* import use `window.Portfolio`.
- Tooltip is used inside ThemeToggle and SocialLinks (since #7); PortfolioRoot's TooltipProvider covers them. The site provides it in layout.tsx, Storybook in .storybook/preview.tsx.
