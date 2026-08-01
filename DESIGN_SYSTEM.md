# Wesplix Media — Design System

This is the established visual language and component pattern for this site.
Follow it for any new section, page, or feature so the whole site keeps
feeling like one coherent product. Don't introduce a new color, spacing
scale, animation style, or card pattern without a good reason — extend the
existing system instead.

## Tokens (`src/app/globals.css`)

- Dark theme only. Background `#08090b`, foreground `#f5f5f7`, muted text
  `var(--muted)` (`#96979e`).
- Surfaces: `bg-surface` / `bg-surface-2` for slightly-raised panels/alternating
  section backgrounds (e.g. `bg-surface/40` on every other section).
- Borders: `border-border` (hairline, default) and `border-border-strong`
  (more visible, used on interactive/floating elements).
- Signature gradient: `var(--gradient-primary)` — violet → magenta → orange
  (`#7c5cfc` → `#b56cf9` → `#ff8f6b`). Used for: gradient text (`.text-gradient`),
  CTA tiles/backgrounds, progress bars, small brand-mark squares. Don't add new
  gradients — reuse this one at different opacities.
- Accent colors for icons/small details only: `accent-violet`, `accent-cyan`,
  `accent-orange`. Rotate between these per-section (see below) rather than
  reusing violet everywhere.
- `.bg-grid` — subtle grid background, usually masked with a radial gradient,
  used behind Hero and CTA band.
- `.glass` — frosted glass effect for the sticky navbar and floating cards.

## Typography

- Font: Geist (via `next/font/google`), no secondary font. Hierarchy comes
  from size/weight, not font-family.
- Section eyebrow label: `text-xs uppercase tracking-[0.2em]`, colored with
  one of the three accents (rotate accent per section for variety).
- Section heading: `text-4xl md:text-5xl font-semibold tracking-tight`.
- Hero headline only: much larger, `text-[13vw] sm:text-[64px] md:text-[86px]
  lg:text-[96px]`, with `text-gradient` on the key phrase.
- Body copy: `text-muted`, `text-sm` to `text-base`.

## Layout rhythm

- Every section: `py-28 md:py-36`, content wrapped in
  `mx-auto max-w-7xl px-6 md:px-10`.
- Section header pattern: eyebrow → `h2` → optional short supporting
  paragraph, usually in a `flex flex-col md:flex-row md:items-end
  md:justify-between` two-column layout (heading left, description right).
- Alternate `bg-surface/40` on every other section for visual rhythm without
  hard dividers.
- Each section has an `id` matching its Navbar anchor (`#servicios`,
  `#proceso`, `#software`, `#beneficios`, `#faq`, `#contacto`).

## Components to reuse (don't reinvent)

- `Reveal` / `RevealGroup` + `revealItem` (`src/components/ui/Reveal.tsx`) —
  scroll-reveal wrapper for every section/card. Use `Reveal` for single
  blocks, `RevealGroup` + `revealItem` variants for staggered grids.
- `MagneticButton` (`src/components/ui/MagneticButton.tsx`) — every primary
  CTA button (filled = `bg-foreground text-background`, outline = `border
  border-border-strong`).
- `Counter` (`src/components/ui/Counter.tsx`) — any animated numeric stat.
- Card grid pattern (see `Services.tsx` / `Software.tsx`): cards are children
  of a grid with `gap-px bg-border border border-border rounded-3xl
  overflow-hidden`, so a single pixel of `bg-border` shows through as hairline
  dividers between cards — don't use individually-bordered cards with gaps
  instead.
- "Image tile" card pattern (`Software.tsx`): gradient/photo block on top
  (`bg-gradient-to-br`, big faded index number, hover arrow badge), text
  block below. Reuse this for any future showcase grid (case studies,
  products, team, etc).
- Icons: `lucide-react` only. This version has **no brand icons**
  (Instagram/Linkedin/Twitter/etc were removed) — use text initials (see
  Footer's `IG`/`IN`/`X`) or a generic icon instead of guessing an icon name.

## Content conventions

- All UI copy is in Spanish, direct and confident, no fluff.
- All section content lives as data arrays in `src/lib/data.ts` (`services`,
  `process`, `software`, `benefits`, `technologies`, `stats`, `testimonials`,
  `faqs`) — components map over data, they don't hardcode copy inline. Add
  new content the same way.

## Motion

- Entrance: fade + rise (`opacity 0→1`, `y: 20-28px → 0`), `duration ~0.6-0.9s`,
  `ease: [0.16, 1, 0.3, 1]`, triggered `whileInView` with `once: true`.
- Floating decorative elements (Hero cards) use slow infinite `y` loops
  (`duration 5.5-9.5s`, `ease: easeInOut`).
- Hover: subtle scale/translate on icons and cards, never anything jarring.
- Keep everything performant — no heavy JS-driven scroll effects beyond what's
  already here (Framer Motion `whileInView` + a few `useScroll`/`useSpring`
  uses for the progress bar and magnetic buttons).
