# First Artifact site

The launch site for First Artifact: a selective community for proven, high-agency builders and founders.

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

- `/` — stacked character hero and marquee, manifesto, admission standard, five founding-member placeholders, intended community formats, and application form
- `/admission` — evidence-based acceptance criteria
- `/events` — intended formats with an explicit no-announced-events state
- `/faq` — current operating answers and unresolved details

## Brand system

GoCake is self-hosted for the lowercase wordmark, stacked home title, marquee, and major headings. Source Sans 3 is self-hosted for the hero side words, body copy, navigation, controls, and metadata. Signal red, white, near-black, and crisp 1px lines define the surface; the home portrait is grayscale and decorative. The site intentionally contains no external font dependency, glassmorphism, or concentric hero field.

Brand files live under `public/brand` and `public/fonts`. The navbar uses the transparent inline SVG from `components/brand-mark.tsx`; its color follows `currentColor` and its stroke is controlled through the `strokeWidth` prop. The supplied red-square PNG remains the manifesto tile and favicon. Font license files must remain beside the distributed font files.

## Application behavior

The form validates and normalizes all six fields in the browser. A submission backend is not connected yet, so a valid review produces an explicit unavailable state and offers a portable clipboard copy. It never reports a successful submission.

Before connecting a backend, define the retention policy, privacy copy, response timing, error recovery, and a tested server-side validation path.

## Member content

There are five real founding members, represented by honest placeholders until approved names, photos, and biographies arrive. Replacement rules are documented in `.impeccable/assets/asset-manifest.md`; do not infer or fabricate profile content.
