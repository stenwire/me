# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at http://localhost:8080
npm run build      # Production build to /dist
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Architecture

**Stack:** React 18 + TypeScript, Vite (SWC), Tailwind CSS, shadcn/ui (Radix UI), React Query, Framer Motion

**Path alias:** `@/` maps to `./src/`

### Data flow

All portfolio content lives in `/public/data.json`. The `usePortfolioData` hook (`src/hooks/usePortfolioData.ts`) fetches this file via React Query and exposes a strongly-typed `PortfolioData` object. Every section component calls this hook directly — there is no prop drilling for content.

### Page structure

The app is a single-page portfolio (`/`) with a 404 page. `src/pages/Index.tsx` renders the full layout in order: `Hero` → `BentoGrid` → `Footer`.

`BentoGrid` is the main content area. It lays out cards using a bento-style grid and owns the active tab state (`projects` | `writings` | `experience`). It renders section-specific cards (`ProjectCard`, `WritingsCard`, `ExperienceCard`) conditionally based on the selected tab.

`BentoCard` is the base card primitive — it accepts a `size` prop (`small | medium | large | wide | tall`) that maps to Tailwind grid column/row spans.

### Components

- `src/components/ui/` — shadcn/ui primitives (60+ files). Don't modify these manually; prefer the shadcn CLI.
- `src/components/` — portfolio-specific components. Each is a standalone presentational component that reads from `usePortfolioData`.

### Styling

- Global CSS variables for light/dark themes are defined in `src/index.css` using HSL values. The color palette uses warm neutrals (cream/charcoal).
- Custom utility classes defined in `src/index.css`: `.grid-background`, `.card-hover`, `.link-underline`.
- Tailwind config extends animations: `fade-in`, `fade-in-up`, `scale-in` — used extensively for staggered load animations via inline `animationDelay` styles.
- Dark mode uses the `class` strategy via `next-themes`.

### Updating content

To change portfolio content (projects, experience, writings, etc.), edit `/public/data.json`. No code changes are needed.
