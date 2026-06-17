# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Vite dev server on http://localhost:3000 (HMR enabled)
pnpm build      # Bundle client → dist/public/ and server → dist/index.js
pnpm start      # Run production Express server (NODE_ENV=production)
pnpm check      # TypeScript type-check without emit
pnpm format     # Prettier auto-format
```

No test suite is configured.

## Architecture

**Dive Dream** is a luxury dive center marketing site for Mauritius. It is a pure client-side SPA — all content is hardcoded in `client/src/const.ts`, no database or backend API exists. The Express server (`server/index.ts`) only serves static files in production.

### Directory structure

```
client/src/
  pages/          # 16 route-level page components
  components/     # Shared UI
    Layout.tsx    # Header + footer + mobile nav wrapper used by every page
    Map.tsx       # Google Maps via Manus platform proxy (no API key needed)
    ui/           # shadcn/ui primitives (~60 components)
  contexts/       # ThemeContext (dark/light)
  hooks/          # useMobile
  const.ts        # All data: DiveSite[], Course[], DivePackage[], Promotion[], etc.
  index.css       # CSS variables / design tokens + custom utility classes
  App.tsx         # Wouter route definitions

server/index.ts   # Express static file server (production only)
shared/const.ts   # Shared cookie/timeout constants
```

TypeScript path aliases: `@/*` → `client/src/`, `@shared/*` → `shared/`

### Routing

Uses **Wouter** (not React Router). All routes are flat and defined in `client/src/App.tsx`. Every page component wraps its content in `<Layout>` for the shared header/footer. To add a page: create the component, add a `<Route>` in App.tsx, and add a nav link in `Layout.tsx`.

### Data

All content lives in `client/src/const.ts` as typed arrays (`DIVE_SITES`, `COURSES`, `DIVE_PACKAGES`, `PROMOTIONS`, `IMAGES`, etc.). Updating content means editing this file directly. `IMAGES` holds Cloudfront CDN URLs — do not add images to `client/public/` or `client/src/assets/` (causes deployment issues); use `/manus-storage/` proxy paths for uploaded assets.

### Design system

Dark-mode-first. Design tokens are CSS variables in `client/src/index.css`. Use semantic color classes (`bg-background`, `bg-card text-card-foreground`, etc.) paired correctly. Custom utilities defined there:

- `.glass-panel` — glassmorphic card (backdrop-blur + semi-transparent border)
- `.btn-premium-primary` / `.btn-premium-secondary` — CTA button styles
- `.container` — centered layout with responsive padding, `max-w-5xl`

### Forms and notifications

Use **React Hook Form + Zod** for forms. Toast notifications use **Sonner** (`import { toast } from "sonner"`), not any Radix toast.

### Build output

`pnpm build` runs two steps: Vite bundles the React app to `dist/public/`, then esbuild bundles `server/index.ts` to `dist/index.js`. Production: `node dist/index.js` serves the SPA with a catch-all for client-side routing.

## Key conventions

- Never nest `<a>` inside Wouter `<Link>` — `Link` already renders an `<a>`.
- Never use empty `value=""` on `<Select.Item>` (shadcn/ui constraint).
- Always pair `bg-card` with `text-card-foreground` (semantic tokens don't inherit automatically).
- Wouter does not support nested routing; keep routes flat.
- Always use TypeScript — no `any` types without a comment explaining why.
- Use Tailwind utility classes, not inline styles.
- Mobile-first CSS — always consider small screens first.
- Glassmorphic design theme — preserve existing visual style.

## What NOT to change without asking

- CSS variable names in the theme (breaking these breaks the whole design).
- Wouter routing setup — do not swap to React Router.
- The Tailwind CSS 4 config — v4 works differently from v3, be careful.

## Deployment

- Output is a static build (`pnpm build` → `dist/public/` folder).
- No environment variables needed (no backend).
- Can be deployed to Vercel, Netlify, or any static host.
- Originally built on Manus, now maintained locally with Claude Code.
