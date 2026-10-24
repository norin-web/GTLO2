# Getting Out (GTLO2) — promo site

React 18 + TypeScript + Vite 6 + React Router 7. Started as a copy of the Getting Out site
(`getting-out-promo`) and redesigned: light theme, floating capsule nav on desktop and an
iOS-style tab bar on mobile, scroll story with a sticky phone, AI draft demo, topic-filtered help.
App screens come from the Figma file "Getting Out v2" and the App Store screenshots (`../File/`).

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5181/GTLO2/ (see launch config "gtlo2")
pnpm build      # → dist/
```

## Where things live

- `src/app/content/site.ts` — every fact: brand, operator, email, App Store ID, story chapters, features, FAQ.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use **verbatim** from the owner (still empty: the pages link to the documents from the App Store listing until the texts arrive). Never edit the wording.
- `public/images/` — always referenced through `img()` from `src/app/utils/img.ts`.

## Deploy (GitHub Pages)

Repo `norin-web/GTLO2`, push through the SSH host `github-norin`. `.github/workflows/deploy.yml`
builds with pnpm and copies `index.html` to `404.html` for client routing. Pages → Source: GitHub Actions.

`base` in `vite.config.ts` is `/GTLO2/` (no domain yet). When a domain is attached in Pages settings,
switch `base` to `/` **and** add `public/CNAME` in the same commit, or the site goes blank.

## Reveal rule

Scroll reveals use CSS transitions driven by `utils/useReveal.ts`. Its fallbacks are gated on real
geometry, so content is never left hidden and the page never plays every animation on load. Keep it.
