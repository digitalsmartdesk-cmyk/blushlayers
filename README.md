# Saya

Limited-edition intimate nightwear ecommerce site — a 60-day "edit" of 40 hand-finished pieces across five ongoing collection lines (Bare Silk, Lace Noir, Whisper Satin, Boudoir Bloom, Velvet Dusk), each design capped at 10 pieces.

Fourth brand vertical in the same drop-model family as [Aaranya](https://github.com/digitalsmartdesk-cmyk/aaranya) (sarees), [Vasavi](https://github.com/digitalsmartdesk-cmyk/lehenga) (lehengas) and [Mahika](https://github.com/digitalsmartdesk-cmyk/mahika) (suits) — same architecture, own standalone app, brand differences isolated in `src/brand.js`. Front-end-only mockup: cart/checkout state lives client-side (React context + localStorage), no real payment processing or backend.

## Saya is deliberately different, not normalized

Unlike Vasavi and Mahika (which mostly differ from Aaranya by copy/palette/schema fields), Saya's brief called for real layout and typography differences, kept as-is rather than forced into the other brands' shape:

- **Fonts**: Playfair Display (headlines, italic used liberally) + DM Sans (body/UI) — not Cormorant Garamond / Manrope.
- **Image ratio**: 2:3 (taller) everywhere, not 3:4.
- **Home hero**: image on the left, copy on the right — reversed from the other three brands.
- **Buttons**: uppercase with wide letter-spacing.
- **Product unit**: a single piece, no "set" — spec table is Material / Finish / Silhouette / Edition size / Sizing / Includes / Care (7 rows, see `specs` in `src/data/products.js`), and checkout has a lightweight size field (XS–XL) instead of Vasavi/Mahika's measurement fields.
- **Vocabulary**: "Our Ateliers" (route `/ateliers`) not "Our Artisans"; "The maker" not "The artisan"; low-stock badge reads "N left", not "Only N left".

These are implemented directly in each page component's JSX/inline styles rather than forced through generic brand-config flags shared with the other repos — see `src/brand.js` for the reasoning.

## A note on assets

The design handoff's `assets/ph/` bundle didn't include the 5 Saya-specific atelier photos its own README named (`loom-bare-silk.jpg` etc.) — unlike the other three brands' bundles, where every referenced image was present. `public/images/loom-*.jpg` here are placeholder images borrowed from other brands' asset sets (renamed to the expected filenames) as a stand-in until real atelier photography exists — swap them out first.

## Stack

- React 19 + Vite
- React Router (HashRouter, for static GitHub Pages hosting) for the 7 screens
- Plain CSS custom properties for design tokens (oklch palette, Playfair Display + DM Sans via Google Fonts)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Product imagery under `public/images/` is placeholder colorway artwork, not real photography — swap in real shots before shipping to production.
- The countdown on Home/Collection/Product is live, computed against the edit's real end date (`EDIT_END` in `src/data/products.js`).
- GitHub Pages: `.github/workflows/deploy-pages.yml` builds and deploys on push to `main`. The repo's Settings → Pages → Source must be set to "GitHub Actions" for this to take effect — a brand-new repo has Pages disabled entirely until that's set once by hand.
