# javedahmadzai.com

Personal portfolio. Single-page Next.js site with a retro-pixel identity, deployed to Cloudflare Pages.

## Stack

- **Next.js 15** (App Router, static export)
- **React 19**, **TypeScript 5**
- **Tailwind CSS v4** (CSS-based config, no `tailwind.config.ts`)
- **Biome** for lint + format (replaces ESLint/Prettier)
- **Cloudflare Pages** for hosting (fully static — no backend, no env vars)

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # biome check
npm run lint:fix     # biome check --write
npm run typecheck    # tsc --noEmit
npm run build        # static export to ./out
```

## Project layout

```
src/
  app/
    layout.tsx            root layout, fonts, metadata
    page.tsx              the single page (composes all sections)
    globals.css           Tailwind v4 + theme tokens
    not-found.tsx         404
  components/             one file per section + shared (chip, section)
  content/                typed data (profile, experience, skills, education)
public/                   static assets (resume.pdf, og.png, favicons, etc.)
scripts/
  generate-og.mjs         regenerate the social preview image — run with `npm run gen:og`
```

## Editing content

All content lives in [`src/content/`](src/content/) as typed objects. Update there and the site re-renders.

- `profile.ts` — name, title, location, tagline, about, socials
- `experience.ts` — work history with bullets and stack chips
- `skills.ts` — grouped skill chips
- `education.ts` — degrees

## Theming

Light/dark only. Tokens defined in [`src/app/globals.css`](src/app/globals.css) under `@theme`. To change the accent color, edit `--color-accent` and `--color-accent-bright` for both root and `.dark`.

## Avatar

The hero avatar is the file at [`public/avatar.png`](public/avatar.png) — a 256×256 pixel-art portrait. To swap it, replace that file (keep the same path/filename, square aspect ratio recommended).

## Deploying

See [DEPLOY.md](./DEPLOY.md).
