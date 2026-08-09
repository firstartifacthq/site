# First Artifact design system

Concise contributor reference for the shipped launch site. Root [`DESIGN.md`](../DESIGN.md) is the normative specification; `PRODUCT.md`, `.impeccable/landing-page-brief.md`, and `.impeccable/assets/asset-manifest.md` remain the authorities for product truth, surface intent, and asset provenance.

## Core tokens

| Role | Value | Use |
| --- | --- | --- |
| Signal red | `hsl(0 100% 44%)` | Fixed header, hero, manifesto, formats, application surround, closing signal |
| Deep signal red | `hsl(0 91% 37%)` | Red-action hover and errors on white |
| Soft signal red | `hsl(0 100% 96%)` | Restrained error tint |
| White | `hsl(0 0% 100%)` | Reading fields and copy on red/black |
| Near-black | `hsl(0 0% 5%)` | Primary copy, dark fields, footer, focus clarity |
| Muted ink | `hsl(0 0% 36%)` | Secondary copy on white |
| Border gray | `hsl(0 0% 82%)` | Neutral dividers |
| Input gray | `hsl(0 0% 88%)` | Neutral field structure |
| Light structural line | `white / 16%` | Decorative grid on red |
| Hero grid line | `white / 28%` | 40px grid behind the hero artwork |
| Dark editorial line | `black / 18%` | Rows on white |
| Field border | `black / 24%` | Inputs, selects, textareas |

No additional accent family is part of the launch system. Build hierarchy from red, white, near-black, typography, spacing, and 1px rules.

## Type

- **GoCake Regular (400):** lowercase wordmark and major declarations. The home “obsess” stack is `clamp(7.5rem, 30vw, 28rem)` at `0.85`; its compact marquee is `clamp(1.75rem, 4vw, 3.25rem)` at `1`. Section headlines remain roughly `clamp(3.2rem, 7vw, 6rem)` at `0.88–0.90`.
- **GoCake signature:** the manifesto's centered `F.A.` is 120px at 1.0 line-height.
- **Source Sans 3 Medium (500):** hero side words and restrained emphasis.
- **Source Sans 3 Regular (400):** 16px body and 18–20px lead copy with relaxed line-height.
- **Source Sans 3 Semibold (600):** navigation, row titles, labels, and controls. Controls are 12–14px uppercase with `0.08em` tracking.
- All `h1`, `h2`, and `h3` output is lowercase. Keep semantic heading levels and source text intact; lowercase is presentation.

## Structure

- Content shell: `min(100% - 2rem, 80rem)`; from 768px, `min(100% - 5rem, 80rem)`.
- Header shell: 90rem maximum with 16px mobile and 40px desktop gutters.
- Section padding: 96px mobile, normally 144px desktop. Use 24px within a thought and 48–64px between major groups.
- Collapse asymmetric two-column layouts below 1024px. Editorial information uses bordered rows, not equal card grids.
- Home hero: 120vh signal-red field, 40px white grid, grayscale decorative character, stacked GoCake title, and Source Sans side words.
- Preserve the hard red hero → white marquee → red manifesto transmission fold. The manifesto uses a centered white mark, authored copy, and a full-width video with a functional red blend. Do not add concentric fields, glass panels, unearned gradients, backdrop blur, glow, or decorative shadow stacks.
- This is one `/` route ordered as hero, marquee, manifesto, `#standard`, `#team`, `#formats`, `#apply`, closing signal, and footer. Header/footer links are same-document anchors; standalone Admission, Events, and FAQ routes are removed.
- Fields and content surfaces are square. Buttons may use 8px corners; focus targets may use 4px. Circles are reserved for member and small signal indicators.

## Component contract

| Component | Required behavior |
| --- | --- |
| Fixed header | `z-index: 70`, visibly above hero and marquee; stable signal red, subtle white bottom rule, 48px transparent inline SVG mark with adjustable stroke, 28px lowercase GoCake wordmark, anchored Home/Standard/Team/Formats links, dark Apply action |
| Home hero | 120vh signal-red field, user-approved 40px white grid at 28% with a wide central clear zone and far-edge radial fade, grayscale decorative character, four lowercase GoCake title layers with fixed-header clearance plus 2vh/3vh breathing room, exact sticky side-word math |
| Marquee | Four identical lowercase GoCake strings, white field, signal-red text, 18-second linear loop, paused under reduced motion |
| Manifesto | Full-height signal-red transmission, centered 80px white inline SVG, Source Sans 3 mission copy, 120px GoCake `F.A.` signature, two concise paragraphs, and bottom Cloudinary MP4 with Mux HLS fallback |
| Editorial rows | 1px top/bottom rules for admission standards and intended formats; no generic cards |
| Member list | Exactly five semantic placeholders labeled `Founding member 01–05` and `Profile pending`; abstract visual is hidden from assistive technology |
| Buttons | Dark, red, or transparent line variants; at least 40px high, normally 48px; 200ms hover, 98% active scale, visible focus, 50% disabled opacity |
| Fields | White, square, 48px minimum, persistent labels, 1px dark border, 2px focus ring, red invalid treatment; textarea remains resizable |
| Application state | Six required fields; alert summary and first-invalid focus; valid review preserves data and announces backend unavailability; Copy exposes ready, copied, and copy-error states in a polite live region |
| Closing signal | Solid red baseline; optional decorative HLS may sit behind a red overlay but cannot carry meaning, contrast, copy, or navigation |
| Footer | Solid near-black, restrained metadata, anchored links to Standard, Team, and Formats |

## Accessibility and motion

- WCAG 2.2 AA minimum. Preserve landmarks, heading order, named navigation, skip link, persistent labels, native disclosures, and keyboard operation.
- `.focus-ring`: 2px current-color outline, 5px offset. Component rings: 2px with 4px offset. Never remove focus without a visible replacement.
- Invalid controls use `aria-invalid` and `aria-describedby`; the summary uses `role="alert"`; application/copy status uses `role="status"` with `aria-live="polite"`.
- The global reduced-motion query disables smooth scroll, reduces CSS animation/transition duration to `0.01ms` for one iteration, removes fade-up transform/filter, resolves hero side words, and pauses the marquee. Framer Motion also checks `useReducedMotion`; both media surfaces pause and avoid loading when reduction is requested.
- Known mismatch: the mobile disclosure uses 16px/12px rounding and a `0 16px 40px rgb(0 0 0 / 25%)` shadow, outside the otherwise flat, square-or-lightly-rounded grammar. Do not propagate it.
- Core meaning cannot depend on video, animation, hover, pointer position, color alone, JavaScript, or a successful clipboard write.

## Truth and assets

- Five founding members are real; their public identities are not approved. Do not invent names, faces, biographies, projects, or testimonials.
- Events are intended formats, not an event history. Pricing, dates, locations, acceptance metrics, partners, investors, privacy/retention terms, and response times are unannounced.
- The application has no backend. Never show a sent/success state. Preserve entered values and provide explicit unavailable and copy-recovery language.
- Use `components/brand-mark.tsx` for the decorative navbar SVG inside the named home link, and preserve `public/brand/first-artifact-mark.svg` as its portable asset. The manifesto uses a separate centered white inline SVG. Keep `public/brand/first-artifact-logo.png` unchanged for the favicon.
- Keep local font files and licenses together under `public/fonts/`; retain `display: swap` and accessible fallbacks.
- Replace a placeholder only with an approved name, portrait, and biography. Store project-owned portraits at `public/members/<stable-member-slug>.<avif|webp>`, render with `next/image`, and use empty alt text when an adjacent name already identifies the person. Keep the abstract fallback and the five-member count until explicitly changed.
- The supplied Higgs character URL is approved decorative hero art only: grayscale, empty alt, and never evidence of a member. `.impeccable/mocks/living-signal-centered.png` remains reference-only. Do not generate substitute member portraits, event photos, logos, or proof.
