# First Artifact site

The launch site for First Artifact: a selective community for the top 1% of builders and founders building with AI.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

## Routes

- `/` — the complete landing page: stacked character hero, manifesto transmission, admission standard, five founding-member placeholders, intended community formats, and application form

## Brand system

The canonical brand identity lives in [`BRAND.md`](BRAND.md) (strategy, voice, logo, distinctive assets). Printable HTML + PDF exports live in [`brand/`](brand/). Production tokens and component contracts live in [`DESIGN.md`](DESIGN.md); product truth lives in [`PRODUCT.md`](PRODUCT.md).

```bash
npm run brand:pdf   # regenerate brand/first-artifact-brand-identity.pdf
```

GoCake is self-hosted for lowercase declarations, stacked home title, marquee, and manifesto signature. Source Sans 3 is self-hosted for reading text, navigation, controls, and metadata. Signal red, white, near-black, and crisp 1px lines define the surface; the home portrait is grayscale and decorative. The site intentionally contains no external font dependency, glassmorphism, or concentric hero field.

Brand files live under `public/brand` and `public/fonts`. The navbar uses the transparent inline SVG from `components/brand-mark.tsx`; its color follows `currentColor` and its stroke is controlled through the `strokeWidth` prop. The supplied red-square PNG remains the favicon tile. Font license files must remain beside the distributed font files.

## Application behavior

The form validates and normalizes all six fields in the browser. A submission backend is not connected yet, so a valid review produces an explicit unavailable state and offers a portable clipboard copy. It never reports a successful submission.

Before connecting a backend, define the retention policy, privacy copy, response timing, error recovery, and a tested server-side validation path.

## Member content

There are five real founding members, represented by honest placeholders until approved names, photos, and biographies arrive. Replacement rules are documented in `.impeccable/assets/asset-manifest.md`; do not infer or fabricate profile content.
