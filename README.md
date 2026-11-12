# Lovart AI — promo site

Promo site for the Lovart AI iPhone app (AI image generator, App Store ID 6816067629).
Design: Paper file “Lovart AI v1 RF”, page Promo (structure after the Capture template,
look from the app’s own Figma). React 18 + TypeScript + Vite 6 + Tailwind 4 + React Router 7.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173/
pnpm build      # → dist/
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to
GitHub Pages at https://lovarti.lat (custom domain, `public/CNAME`). In the repo, Settings → Pages →
Source must be **GitHub Actions**. The workflow copies `index.html` to `404.html` so deep
links load the app (they still answer HTTP 404, which only search engines notice).

### base / custom domain trap

`vite.config.ts` has `base: "/"` because the site runs on the domain lovarti.lat.
If the domain is ever removed, in **one commit**:

- set `base: "/LovartAIv1rf/"`;
- delete `public/CNAME`.

Otherwise every asset 404s and the site is a white screen. Image paths always go
through `img()` (`src/app/utils/img.ts`), so they follow `base` automatically.

## Where things live

- `src/app/content/site.ts` — every fact: brand, email, App Store link, features, FAQ,
  specs, operator (Luka Prochazka) and the brand disclaimer. Empty `minIOS` hides its row.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, **verbatim** from the
  owner (only `## ` headings without numbers and `- ` lists added), effective 12 November 2026.
- `src/styles/index.css` — tokens in `:root` (same as the Paper tokens) and all layout.
- `public/images/` — WebP pictures; sources and the iPhone frame script are in `../File/`.

## Motion rule

Reveals use CSS transitions driven by `useReveal` (viewport‑gated fallbacks), so content
is never left hidden in a background tab. No smooth/inertia scroll, the header never hides.
