# Lovart AI — promo site

Promo site for the Lovart AI iPhone app (AI image generator, App Store ID 6816067629).
Design: Paper file “Lovart AI v1 RF”, page Promo (structure after the Capture template,
look from the app’s own Figma). React 18 + TypeScript + Vite 6 + Tailwind 4 + React Router 7.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173/LovartAIv1rf/
pnpm build      # → dist/
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to
GitHub Pages: https://norin-web.github.io/LovartAIv1rf/. In the repo, Settings → Pages →
Source must be **GitHub Actions**. The workflow copies `index.html` to `404.html` so deep
links load the app (they still answer HTTP 404, which only search engines notice).

### base / custom domain trap

`vite.config.ts` has `base: "/LovartAIv1rf/"` because there is no domain yet.
When a domain is attached in Pages settings, in **one commit**:

- set `base: "/"`;
- add `public/CNAME` with the bare domain.

Otherwise every asset 404s and the site is a white screen. Image paths always go
through `img()` (`src/app/utils/img.ts`), so they follow `base` automatically.

## Where things live

- `src/app/content/site.ts` — every fact: brand, email, App Store link, features, FAQ,
  specs. Empty `operator` / `minIOS` hide their rows until the owner sends them.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, **verbatim** from the
  owner (only `## ` headings and `- ` lists added). Empty → placeholder layout.
- `src/styles/index.css` — tokens in `:root` (same as the Paper tokens) and all layout.
- `public/images/` — WebP pictures; sources and the iPhone frame script are in `../File/`.

## Motion rule

Reveals use CSS transitions driven by `useReveal` (viewport‑gated fallbacks), so content
is never left hidden in a background tab. No smooth/inertia scroll, the header never hides.
