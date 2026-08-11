# First Artifact asset manifest

This manifest covers the approved launch surface after the branded stacked-hero revision. The site uses the project-owned logo and local fonts, one supplied remote decorative character, and CSS-rendered structure and member placeholders.

## Required production assets

| Asset | Path | Intended use | Accessibility treatment |
| --- | --- | --- | --- |
| First Artifact logo tile | `public/brand/first-artifact-logo.png` | Red-square brand tile in the manifesto, favicon, and other placements that require the full supplied artwork. Preserve its aspect ratio; do not crop or recolor the source. | Use `alt=""` when the surrounding section already identifies the brand; otherwise use `alt="First Artifact"`. |
| First Artifact vector mark | `public/brand/first-artifact-mark.svg` and `components/brand-mark.tsx` | Transparent-background navbar mark. The inline component uses `currentColor` and a numeric `strokeWidth` prop; navbar default is `56` in the 1000-unit geometry. | The inline mark is `aria-hidden` inside the already-labelled home link. If reused without adjacent text, the containing link or control must supply an accessible name. |
| GoCake Regular | `public/fonts/gocake/Gocake.ttf` | Wordmark, stacked “obsess” hero, marquee, and large declarations. Load locally and use only where its available glyph set is sufficient. | Fonts do not receive alt text. Keep semantic heading markup, readable fallback fonts, and Source Sans 3 fallback for unsupported characters. |
| Source Sans 3 Regular | `public/fonts/source-sans-3/SourceSans3-Regular.woff2` | Body copy and supporting text at weight 400. | Fonts do not receive alt text. Text must remain semantic, selectable, and readable if the webfont does not load. |
| Source Sans 3 Medium | `public/fonts/source-sans-3/SourceSans3-Medium.woff2` | Small metadata and restrained emphasis at weight 500. | Fonts do not receive alt text. Text must remain semantic, selectable, and readable if the webfont does not load. |
| Source Sans 3 Semibold | `public/fonts/source-sans-3/SourceSans3-Semibold.woff2` | Navigation, labels, and controls at weight 600. | Fonts do not receive alt text. Text must remain semantic, selectable, and readable if the webfont does not load. |

Retain the supplied font notices at `public/fonts/gocake/LICENSE.txt` and `public/fonts/source-sans-3/LICENSE.md` with the distributed font files.

## Remote decorative asset

| Asset | Source | Intended use | Accessibility treatment |
| --- | --- | --- | --- |
| Character bust | `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260801_104316_80b428ea-dc99-4399-afb3-8ccb7b34b2d0.png&w=1280&q=85` | Centered decorative home-hero character. Render at the supplied sizing and apply grayscale/contrast so the asset participates in the First Artifact palette. | `alt=""`, `aria-hidden="true"`, and `pointer-events: none`; never describe or present it as a member, testimonial, or product proof. |

The character URL is a remote runtime dependency. Its failure must leave the stacked title, principle columns, marquee, navigation, and downstream application intact.

## Live visual ingredients — no asset file

| Ingredient | Implementation | Accessibility treatment |
| --- | --- | --- |
| Stacked hero title | Four offset lowercase GoCake layers: white front, translucent-white depth layers, and a signal-red gap. | Only the front layer is the semantic `h1`; mark the three repeated layers `aria-hidden="true"`. |
| Side principle words | Two Source Sans 3 columns whose transforms and opacity resolve with scroll. | Decorative wrapper is `aria-hidden="true"`; reduced motion renders the words at rest and fully opaque. |
| Five founding-member signals | Exactly five abstract, visibly non-photographic CSS/SVG circles in a semantic list. Each may use a distinct contour or noise treatment, but none may imply a real face or person. | Hide each inner visual with `aria-hidden="true"`; give each list item visible or visually hidden text such as “Founding member profile forthcoming.” |
| Small experience marks | Simple authored SVG marks, only where the implemented content needs them. | Use `aria-hidden="true"` when the adjacent text supplies the meaning; otherwise give the containing control or link an accessible name. |

## Founding-member replacement notes

The five launch signals are honest placeholders, not member portraits. No names, photos, biographies, projects, or testimonials may be inferred from them.

| Slot | Launch treatment | Replacement requirement |
| --- | --- | --- |
| Member 1 | Abstract CSS/SVG signal | Replace only after the member’s approved name, profile image, and biography are supplied. |
| Member 2 | Abstract CSS/SVG signal | Replace only after the member’s approved name, profile image, and biography are supplied. |
| Member 3 | Abstract CSS/SVG signal | Replace only after the member’s approved name, profile image, and biography are supplied. |
| Member 4 | Approved portrait, name, and biography supplied | Filled: Michael Abejo. `building.href` stays absent until Capsul’s public URL is confirmed; the label renders as plain text rather than a link. |
| Member 5 | Approved portrait supplied; name and biography outstanding | A portrait may stand in the slot before its name and biography arrive. While it does, the slot keeps its “Founding member 05” label, the image stays `alt=""`, and no name, project, or biography may be inferred from the photograph. |

When approved member media arrives, store optimized, project-owned files under `public/members/<stable-member-slug>.<avif|webp>` and render them with `next/image`. Use the approved full name as alt text when the portrait is the member’s only identifying label; use `alt=""` when an adjacent visible name already provides the same identification. Preserve the five-member count until product approval explicitly changes it, and keep the abstract signal fallback for missing or failed images.

## Reference-only artifact

`.impeccable/mocks/living-signal-centered.png` is an earlier composition reference only. It must not be shipped as the hero background or presented as content.

## Generation decision

No generated image is needed. The user supplied the live character URL; the implementation recolors it non-destructively with CSS and keeps five honest abstract member placeholders downstream. No raster asset has been created under `public/generated/`.
