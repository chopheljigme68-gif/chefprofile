# The Chefs of Bhutan

A chef profile directory built with Next.js 15 (App Router), React 19, TypeScript
and Tailwind CSS. Thirteen chefs, each with a full profile page generated from
their own CV, plus a searchable and filterable directory.

Frontend only — no database, no API, no environment variables. Every page is
prerendered to static HTML at build time.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Requires Node 18.18 or newer. Built and verified on Node 22.

---

## Deploying

### Vercel

Push to a Git repo and import it at [vercel.com/new](https://vercel.com/new).
Vercel detects Next.js automatically. No environment variables, no build
overrides, no configuration needed.

Before you go live, set your real domain in three places so canonical URLs,
Open Graph tags and the sitemap point at the right host:

| File | What to change |
| --- | --- |
| `app/layout.tsx` | `metadataBase` |
| `app/sitemap.ts` | `BASE` |
| `app/robots.ts` | `sitemap` URL |

### Anywhere else

The app has no server-side data fetching, so `next build && next start` works on
any Node host. It also exports to fully static files if you prefer — add
`output: 'export'` to `next.config.mjs`, run `npm run build`, and serve the
`out/` directory from any static host (Netlify, Cloudflare Pages, S3, nginx).

---

## Project structure

```
app/
  layout.tsx              root layout, fonts, metadata, skip link
  globals.css             design tokens + the selvedge motif
  page.tsx                home
  chefs/page.tsx          directory (search + filters)
  chefs/[slug]/page.tsx   profile, statically generated per chef
  about/page.tsx          how the directory is built
  not-found.tsx           404
  error.tsx               error boundary
  sitemap.ts / robots.ts
components/
  SiteHeader.tsx          sticky header, mobile menu
  SiteFooter.tsx
  ChefCard.tsx            directory card
  ChefDirectory.tsx       client component: search + filter state
  Section.tsx             profile section wrapper
  Mark.tsx                the diamond logo mark
lib/
  chefs.ts                all chef data
  types.ts                Chef type definitions
public/
  chefs/*.jpg             portraits, 800x1000
  cv/*.pdf                original CVs
  patterns/*.jpg          textile artwork
```

---

## Editing chef data

All content lives in `lib/chefs.ts` as a typed array. There is no CMS — add,
edit or reorder entries directly and the site follows: the directory, the
filters, the sitemap, the footer and the previous/next links all read from it.

To add a chef:

1. Drop a portrait at `public/chefs/<slug>.jpg` (4:5 ratio, 800×1000 works well).
2. Drop the CV at `public/cv/<slug>.pdf`.
3. Add an object to the `chefs` array. TypeScript will tell you what is missing.

Only `slug`, `name`, `title`, `region`, `location`, `level`, `photo`,
`photoAlt`, `cv`, `summary`, `specialities`, `accolades`, `contact`,
`experience`, `education` and `skills` are required. `training`, `certificates`,
`projects`, `languages`, `interests`, `references` and `years` are optional and
their sections are hidden when absent — several chefs have no `training` block,
for example, and nothing renders for them.

The array order is the display order. It is currently sorted by kitchen
seniority, and the first three entries are featured on the home page.

---

## What is published, and what is not

Profiles are transcribed from CVs the chefs submitted. Job titles, dates,
institutions and scores are reproduced as written; only prose was tidied for
reading on screen.

A CV given to an employer is not the same document as a public web page, so the
following appear on some source CVs and are **deliberately excluded** from every
profile:

- Citizenship ID numbers
- Dates of birth
- Driving licence numbers
- Height and weight
- Parents' names and phone numbers
- Referees' phone numbers and email addresses

Referees are listed by name and role only. Chefs' own email addresses and phone
numbers are published, since being reachable is the point of a directory — if
you would rather withhold them, delete the `contact` fields in `lib/chefs.ts`
and the contact card hides itself.

### Known data issue

Phurpa Wangdi's CV gives his email as `pwangdi787@gamil.com` — `gamil`, not
`gmail`. It is reproduced verbatim rather than silently corrected. Confirm the
correct address with him and update `lib/chefs.ts` before launch.

---

## Design

The palette and the woven edge are taken from a Bhutanese pangtse textile:

| Token | Hex | Role |
| --- | --- | --- |
| `paper` | `#FBF7E4` | page ground |
| `parchment` | `#F3ECD2` | raised panels |
| `ink` | `#1E1A16` | primary text |
| `graphite` | `#4A423A` | body text |
| `crimson` | `#E13B32` | primary accent |
| `saffron` | `#F4A62A` | secondary accent |
| `olive` | `#8C9C3C` | location markers |
| `jade` | `#5FAE96` | certificate markers |
| `clay` | `#9C6437` | labels and captions |

Type is Fraunces for display (variable, with its `SOFT` and `WONK` axes dialled
in), Karla for body, and DM Mono for the small tracked-out labels.

The signature element is the **selvedge** — an alternating crimson-and-saffron
diamond lattice drawn in pure CSS gradients (`.selvedge` in `globals.css`). It
runs under the header, along the base of every card photo, and under the
portrait on profile pages, and it thickens on card hover. Being CSS rather than
an image, it stays crisp at any size and costs no extra request.

---

## Fonts

Fonts load through a `<link>` to Google Fonts in `app/layout.tsx`, with
`preconnect` and `display=swap`. This keeps the build working with no network
access, which matters for offline or air-gapped CI.

If you would rather self-host them — one fewer third-party request, no FOUT —
swap in `next/font`, which downloads and serves the files from your own origin
at build time:

```tsx
import { Fraunces, Karla, DM_Mono } from 'next/font/google';

const display = Fraunces({ subsets: ['latin'], axes: ['SOFT', 'WONK', 'opsz'], variable: '--font-display', display: 'swap' });
const body    = Karla({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono    = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });
```

Then delete the `<head>` block and put the variables on `<html>`:

```tsx
<html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
```

The CSS variable names match, so nothing else changes. Note that this makes the
build require network access to Google Fonts — it was not shipped as the default
for that reason, and has not been verified against a live build.

---

## Verified

- `npm run build` — clean, zero errors, zero warnings
- `tsc --noEmit` — clean under `strict`
- 21 routes prerendered as static HTML
- All 13 profile pages, 13 portraits and 13 CV PDFs return 200; unknown slugs 404
- No horizontal overflow at 320, 360, 390, 768, 1024, 1280 or 1600px
- One `<h1>` per page, no heading-level jumps, all images have `alt`
- Every link and button has an accessible name
- Search and both filter groups tested, including combined and empty states
- Mobile menu: opens, traps scroll, closes on Escape and on navigation
- Visible focus rings, `prefers-reduced-motion` respected, skip link present
- Per-chef `Person` JSON-LD, Open Graph tags, sitemap and robots

## Not included

Deliberately out of scope for a frontend-only build: contact forms, booking,
authentication, a CMS, analytics, and automated tests in the repo (checks above
were run against the production build).
