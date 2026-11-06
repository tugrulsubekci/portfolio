# Portfolio components — how to build with them

These are the real components of tugrulsubekci.com: a dark-first, single-page developer portfolio (Inter, slate + teal, generous whitespace). Components are data-driven: most take a typed data object, not children.

## Wrap every screen in `PortfolioRoot`

```jsx
const { PortfolioRoot } = window.Portfolio;
<PortfolioRoot theme="dark">{/* screen */}</PortfolioRoot>
```

It sets `<html data-theme>` (the colour tokens switch on it), the Inter font, the page background (`var(--page)`) and default text colour. Without it, text renders white-on-white and in a fallback font. `theme` is `"dark"` (default, the site's main look) or `"light"`.

## Styling: semantic Tailwind tokens only

Style your own layout glue with these semantic utilities, never raw palette colours (`slate-*`, `teal-*`) — the tokens are what switch with the theme:

| Role | Classes |
|---|---|
| Backgrounds | `bg-page` `bg-card` `bg-media` (surface colour: `bg-secondary` or `var(--surface)`) |
| Text | `text-strong` (primary) `text-heading` `text-subtle` `text-body` (body copy) `text-faint` `text-brand` / `hover:text-brand-hover` (teal links) |
| Borders | `border-line` `border-line-strong` `border-media-border` |
| Indicator | `bg-indicator` `bg-indicator-idle` |

Only utilities the site already uses are compiled in (Tailwind JIT). Safe layout/type set: `flex` `gap-2` `gap-3` `gap-4` `space-y-2..4` `p-4` `p-6` `px-4` `px-6` `px-8` `py-4` `py-6` `py-10` `py-16` `py-24` `max-w-sm|xl|2xl|6xl` `text-xs` `text-sm` `text-base` `text-lg` `text-xl` `text-3xl..5xl` (no `text-2xl`) `font-semibold` `font-bold` `uppercase` `tracking-widest` `leading-relaxed` `rounded-lg`, plus `sm:` `md:` `lg:` variants of the page layout (`lg:flex-row`, `lg:w-[35%]`, `lg:sticky`, `lg:py-24`). For anything else use inline styles with the CSS variables: `var(--page)` `var(--card)` `var(--surface)` `var(--strong)` `var(--body)` `var(--brand)` `var(--line)` etc.

Typography: section labels are `SectionHeading` (small, uppercase, tracked; it is `lg:sr-only` — visually hidden at ≥1024px, where the Sidebar nav labels the sections); body copy is `text-body leading-relaxed`; emphasis inside prose is `InlineLink` (bold `text-strong`).

## shadcn/ui primitives

`Button` (`variant`: default | outline | secondary | ghost | link | destructive; `size`: default | xs | sm | lg | icon…; `asChild` to render an `<a>`), `Badge` (`variant`: default | secondary | outline | destructive), `Card` + `CardHeader` / `CardTitle` / `CardDescription` / `CardAction` / `CardContent` / `CardFooter`, `Separator` (`orientation`), `Tooltip` + `TooltipTrigger` / `TooltipContent` (`PortfolioRoot` already provides the `TooltipProvider`). They are themed from the same tokens, so shadcn's semantic classes also work and switch with the theme: `bg-primary` / `text-primary-foreground` (teal on page), `bg-secondary` `bg-muted` (the `surface` colour), `text-muted-foreground` (= body), `text-foreground` (= strong), `border-border` (= line-strong), `ring-ring`. Note: in this system `bg-muted` is a surface background, not a text colour — for body text use `text-body` or `text-muted-foreground`.

Tech-stack chips: `<Badge variant="secondary">React</Badge>` in a `flex flex-wrap gap-2` row.

**Site-style variants (use these to match the portfolio, not the stock ones):** `Button` `variant="quiet"` (icon control: body colour, blue on hover — theme toggle, social icons), `"nav"` (sidebar section link), `"brand-link"` (teal text link + `ArrowIcon`), `"heading-link"` (heading-colour link, teal on hover); they have no box or padding, so wrap a link with `asChild`: `<Button variant="brand-link" asChild><a href="/">…</a></Button>`. `Card` `variant="interactive"` (borderless, lifts to the surface colour on hover; children use `group-hover:`) and `variant="outline"` (quiet bordered tile); add padding yourself (`p-4` / `p-6`) and `asChild` to make the card an `<a>`. `Table` / `TableHeader` / `TableBody` / `TableRow` / `TableHead` / `TableCell` and `Breadcrumb` / `BreadcrumbList` / `BreadcrumbItem` / `BreadcrumbLink` / `BreadcrumbPage` / `BreadcrumbSeparator` are stock shadcn; the site's `ProjectsArchiveTable` and `Breadcrumbs` are the styled versions.

## Data shapes (referenced by the `.d.ts` props)

```ts
Project    { date: 'MM/DD/YYYY'; title; description; madeAt; image?: string /* URL */; url; featured: boolean }
Experience { period: 'OCT 2022 — APR 2025'; title; company; url; bullets: string[] }
NavItem    { label; sectionId }          // SectionNav / Sidebar scroll targets
SocialLink { name; url; icon: 'github' | 'linkedin' | 'email' }
profile    { name; title; bio }          // Sidebar, MobileHeader, ProfileIntro (name/title/bio props)
```

## Layout and responsiveness

The site is two columns at `lg` (≥1024px): `Sidebar` (sticky left, `hidden` below lg) plus scrolling sections. Below lg use `MobileHeader` instead. `ProjectsArchiveTable` is for md and up; `ProjectsArchiveList` (stacked cards) is for below md. Use both pairs together so every width is covered. `Spotlight` is a fixed, cursor-following background glow: render it once, at the root.

## Where the truth lives

Read `styles.css` → `_ds_bundle.css` (the compiled site CSS, including all tokens under `:root[data-theme]`) before inventing styles, and each component's `<Name>.prompt.md` / `<Name>.d.ts` for its API.

## Example

```jsx
const { PortfolioRoot, SectionHeading, ExperienceCard, InlineLink } = window.Portfolio;
<PortfolioRoot theme="dark">
  <main className="max-w-2xl px-6 py-16 space-y-4">
    <SectionHeading>Experience</SectionHeading>
    <p className="text-base text-body leading-relaxed">
      At <InlineLink href="https://sugartech.io/" external>Sugar Technology</InlineLink>, I joined as one of five engineers.
    </p>
    <ExperienceCard experience={{ period: 'OCT 2022 — APR 2025', title: 'Software Engineer', company: 'Sugar Technology', url: 'https://sugartech.io/', bullets: ['Built and maintained scalable applications.'] }} />
  </main>
</PortfolioRoot>
```
