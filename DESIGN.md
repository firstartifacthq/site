---
name: First Artifact
description: A living signal for proven builders, expressed through red fields, stark editorial folds, and honest evidence.
colors:
  signal-red: "hsl(0 100% 44%)"
  signal-red-deep: "hsl(0 91% 37%)"
  signal-red-soft: "hsl(0 100% 96%)"
  white: "hsl(0 0% 100%)"
  near-black: "hsl(0 0% 5%)"
  soft-gray: "hsl(0 0% 94%)"
  muted-gray: "hsl(0 0% 92%)"
  muted-ink: "hsl(0 0% 36%)"
  border-gray: "hsl(0 0% 82%)"
  input-gray: "hsl(0 0% 88%)"
  line-on-red: "hsl(0 0% 100% / 0.16)"
  hero-grid: "rgb(255 255 255 / 0.28)"
  line-on-white: "hsl(0 0% 0% / 0.18)"
  field-border: "hsl(0 0% 0% / 0.24)"
typography:
  hero-display:
    fontFamily: "GoCake, Source Sans 3, sans-serif"
    fontSize: "clamp(7.5rem, 30vw, 28rem)"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "0.02em"
  marquee:
    fontFamily: "GoCake, Source Sans 3, sans-serif"
    fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1
  hero-side:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "clamp(1.6rem, 7vw, 9rem)"
    fontWeight: 500
    lineHeight: 1.1
  manifesto-title:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "clamp(2rem, 7vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  manifesto-subline:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "clamp(1.05rem, 2.4vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  display:
    fontFamily: "GoCake, Source Sans 3, sans-serif"
    fontSize: "clamp(4rem, 10vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "GoCake, Source Sans 3, sans-serif"
    fontSize: "clamp(3.2rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  wordmark:
    fontFamily: "GoCake, Source Sans 3, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  signature:
    fontFamily: "GoCake, Source Sans 3, sans-serif"
    fontSize: "7.5rem"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-lead:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  square: "0"
  subtle: "0.25rem"
  control: "0.5rem"
  circle: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  section-mobile: "6rem"
  section-desktop: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-red:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 2rem"
    height: "3.5rem"
  text-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.near-black}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1rem"
    height: "3rem"
---

# Design System: First Artifact

## Overview

**Creative North Star: "The Living Signal"**

First Artifact should feel like a transmission from people already in motion: immediate signal red, hard white interruptions, near-black declarations, and enough empty space for every claim to carry weight. Its energy comes from scale, contrast, editorial sequencing, and crisp structure—not from visual effects or simulated prestige.

The system is playful and experimental without becoming ornamental. Lowercase GoCake declarations give the site its unmistakable voice; Source Sans 3 makes the proof, controls, and unresolved details easy to trust. A visible 40px hero grid and crisp 1px downstream rules create structure, while the compact white marquee turns the red hero into the red manifesto transmission.

**Key Characteristics:**

- Saturated signal red, white, and near-black as the dominant three-part palette; the home portrait is deliberately grayscale.
- Lowercase GoCake wordmarks and major declarations paired with practical Source Sans 3 UI.
- Flat, solid surfaces organized by a hero grid, sparse downstream 1px lines, and generous negative space.
- Honest placeholders and explicit unavailable states instead of invented proof.
- CSS and scroll-driven motion resolves to a static state under reduced motion; the manifesto video pauses and stops loading when reduction is requested.

## Colors

Signal red is the public beacon, white is the editorial reading surface, and near-black supplies authority, legibility, and sharp section changes. Gray exists only to support borders, fields, metadata, and secondary reading hierarchy.

### Primary

- **Signal Red:** Owns the fixed header, hero, manifesto, community-format field, closing CTA, error borders, and primary red action.
- **Near-black:** Owns the admission standard field, footer authority, and sharp section changes that need to break consecutive red.
- **Deep Signal Red:** The red action hover and readable error-copy color on light surfaces.
- **Soft Signal Red:** A restrained error or signal tint; never a substitute for the main red field.

### Neutral

- **White:** Reading sections, application surface, and text on red or black.
- **Near Black:** Primary text, high-contrast sections, footer, focus clarity, and the dark primary action.
- **Soft and Muted Grays:** Supporting neutral surfaces only; this system does not build a layered gray-card hierarchy.
- **Muted Ink:** Secondary copy on white when solid near-black would compete with the heading.
- **Border and Input Grays:** Quiet structural separation in neutral UI.

### Named Rules

**The Three-Field Rule.** Build the page from red, white, and near-black fields. Grays support information; they do not become a fourth visual world.

**The Legible Signal Rule.** Use solid white text for essential copy and controls on signal red. Opacity is reserved for secondary metadata and 1px structure after contrast has been verified to WCAG 2.2 AA.

## Typography

**Display Font:** GoCake Regular, with Source Sans 3 and generic sans-serif fallback

**Body Font:** Source Sans 3 Regular, Medium, and Semibold, with generic sans-serif fallback
**Label Font:** Source Sans 3 Semibold

**Character:** GoCake makes the club sound authored, irreverent, and specific; Source Sans 3 keeps the surrounding experience direct and operational. The display face is a rare signal, not a general-purpose reading font.

### Hierarchy

- **Home hero display:** GoCake Regular; `clamp(7.5rem, 30vw, 28rem)`, 0.85 line-height, and 0.02em tracking. It is a special oversized stacked treatment used only for “obsess.”
- **Marquee display:** GoCake Regular; `clamp(1.125rem, 2.5vw, 1.75rem)` at 1.0 line-height.
- **Manifesto title:** Source Sans 3 Semibold; `clamp(2rem, 7vw, 4.5rem)` at 1.1 line-height with -0.02em tracking for “Obsession beats talent every time”. The supporting line “and the proof is the artifact.” uses Source Sans 3 Regular at `clamp(1.05rem, 2.4vw, 1.375rem)`.
- **Section headline:** GoCake Regular; fluid 51–96px, approximately 0.88–0.90 line-height. Keep most declarations to 10–14 characters per line through measured `ch` widths.
- **Manifesto signature:** GoCake Regular; 120px at 1.0 line-height for the centered `F.A.` signature only.
- **Manifesto mission and copy:** Source Sans 3 Regular; 16px, 1.6 line-height. The mission is uppercase and tracked; the two supporting paragraphs remain centered and sentence case.
- **Row title:** Source Sans 3 Semibold; 18–20px. Use for standards, formats, and member labels.
- **Lead body:** Source Sans 3 Regular; 18–20px with relaxed line-height. Keep primary explanations around 36–42rem wide.
- **Body:** Source Sans 3 Regular; 16px with relaxed line-height. Use Medium sparingly for emphasis and metadata.
- **Label and control:** Source Sans 3 Semibold; 12–14px, uppercase where it functions as a control, with 0.08em tracking.

### Named Rules

**The Lowercase Declaration Rule.** Every `h1`, `h2`, and `h3`, plus the visible wordmark, renders lowercase. Preserve semantic source text and heading order; casing is a visual treatment.

**The Open Title Rule.** Section titles (`h1`–`h3`) never end with a full stop. Keep titles as open declarations, not closed sentences. Body copy, supporting lines, and UI messages may use normal punctuation.

**The GoCake Boundary Rule.** Use GoCake only for the wordmark and large declarations whose characters the shipped font supports. Body, UI, long-form text, unsupported glyphs, and future localization fall back to Source Sans 3.

## Layout

The primary content shell is `min(100% - 2rem, 80rem)` on small screens and `min(100% - 5rem, 80rem)` from 768px upward. The fixed header uses a wider 90rem ceiling with 16px mobile and 40px desktop horizontal padding. Core breakpoints follow the implementation at 640px, 768px, and 1024px.

Sections usually breathe at 96px vertically on small screens and 144px on desktop; the closing section may use 112–160px to hold its final declaration. Within sections, 24px separates copy within a thought, 48–64px separates major content groups, and editorial rows use 20–28px vertical padding.

Large sections use asymmetric two-column grids, typically a narrower declaration column and a wider proof or interaction column. Collapse them into a single reading sequence on small screens. Avoid generic equal card grids: standards and intended formats are line-separated editorial rows. The five-member list progresses from compact label-and-signal rows on mobile to five columns on large screens, with a subtle alternating vertical offset.

The hero is a 120vh signal-red field with a grayscale decorative character, four offset GoCake word layers, and Source Sans side-word columns that resolve inward across the sticky range. A 40px white line grid sits behind the composition at 28% opacity, remains clear through the central 42%, and fades only toward the far perimeter through a radial mask. Its title stack begins after the fixed-header clearance plus 2vh mobile / 3vh desktop breathing room. Never add concentric rings or a glass panel.

The site ships as one `/` route in this order: hero, marquee, manifesto, `#standard`, `#team`, `#formats`, the white working-model band, closing signal, and footer. The working-model band is a compact white interruption carrying the model for fun. Apply actions open the external Google Form rather than an on-page section. The fixed header and footer navigate within that sequence; there are no standalone Admission, Events, or FAQ routes.

**The Transmission Fold Rule.** The home narrative moves from the signal-red hero through a compact white marquee into a signal-red manifesto. Preserve the crisp white interruption; do not insert a near-black manifesto or translucent panel.

## Elevation & Depth

First Artifact is flat. Depth comes from section color, 1px borders, type scale, overlap-free spacing, and motion—not from glassmorphism, backdrop blur, glowing edges, or a stack of drop-shadow cards. Permanent surfaces remain solid. The existing fade-up may transiently move 12px and apply a 1px content blur during entry; both resolve completely and are removed under reduced motion.

The manifesto's bottom media is a full-width Cloudinary MP4 with a Mux HLS fallback and a 100px red-to-transparent edge blend. That gradient is a functional transition into real media, not a reusable surface effect. The closing CTA is a signal-red field with an optional decorative MP4 behind a light ~28% red overlay so the video reads clearly while the final ask stays on brand after the white working-model band; solid red remains when motion is reduced or media fails.

**The Solid Surface Rule.** Do not use `backdrop-filter`, translucent glass panels, glow, or decorative shadow to create hierarchy. Use a field change or 1px rule.

## Shapes

Fields, form surfaces, inputs, selects, textareas, and editorial rows are square. Buttons may be lightly rounded (8px); text links and focus targets may use a subtle 4px radius solely to keep the focus outline readable. Do not turn actions into oversized pills.

Circles are semantic accents, reserved for the five founding-member signals and small signal indicators. The approved brand asset remains square, with its aspect ratio intact; do not crop it into a different silhouette. Borders are one pixel and should read as structure rather than decoration.

## Components

### Fixed header and navigation

- Keep the header fixed above every surface, including the home hero and marquee, with a stable, opaque signal-red background, `z-index: 70`, and a subtle white bottom rule. It must not change color or depend on underlying content for contrast.
- Use the transparent inline `BrandMark` at 48px with controllable `currentColor` stroke plus the 28px lowercase GoCake wordmark, anchored navigation links, and one near-black Apply action. Desktop navigation uses line framing; mobile uses a native `details` disclosure with a solid near-black menu.
- Navigation targets are Home, Manifesto, Standard, Team, Formats, and the external Apply form. In-page targets are anchors within the single `/` sequence and appear in the order those sections appear on the page. Preserve semantic `nav` labels, a descriptive home-link label, and the skip link before the header.
- Hover uses a modest opacity or solid-color change. Keyboard focus remains visible with a 2px outline/ring and clear offset.

### Buttons and text links

- Buttons are Source Sans 3 Semibold, uppercase, tracked, at least 40px high; default form and primary actions are at least 48px high, while wide actions reach 56–64px.
- Near-black primary, signal-red primary, and transparent 1px line variants are the complete launch vocabulary. A line button inherits its surrounding foreground color.
- Hover changes fill or opacity in 200ms. Active may compress to 98%. Disabled actions prevent interaction and use 50% opacity. Never communicate state with motion or color alone.

### Hero and marquee

- The home hero uses a 120vh signal-red field, a grayscale decorative character, stacked lowercase GoCake “obsess” lettering, and two Source Sans principle columns. The shared fixed navigation remains visibly layered above it; the hero itself contains no CTA, member proof, or claim beyond the single heading.
- Side words begin at the documented mobile/desktop offsets and resolve to zero with opacity 0.35–1 over the sticky range. Reduced motion renders them at rest and fully opaque.
- The white GoCake marquee repeats four identical lowercase copies on an 18-second linear loop; reduced motion pauses it.
- No concentric field, glass panel, CTA, autoplay dependency, or fake proof belongs in the hero.

### Manifesto and editorial rows

- The manifesto is a full-height signal-red transmission with a centered 80px white inline SVG, one concise uppercase mission, a 120px GoCake `F.A.` signature, two product-specific Source Sans paragraphs, and a full-width Cloudinary MP4 at its bottom.
- If the MP4 errors, the client attaches the Mux HLS source through `hls.js` when supported, or assigns it directly for native HLS playback. A 100px red-to-transparent blend at the media edge is functional media blending, not decorative elevation. The core copy remains visible without playback.
- Admission standards and intended formats reuse top and bottom rules instead of cards. There are no standalone supporting routes.

### Founding-member placeholders

- Render exactly five semantic list items. Approved members show portrait, name, current build, biography, and links. Any remaining empty slot uses an abstract red square field with simple white guide lines and a small circular signal, labeled by index until name and biography arrive.
- Portrait inner geometry stays decorative (`alt=""`) when an adjacent visible name identifies the member. Never invent a face, name, project, biography, or endorsement.

### Application

- Membership applications open in an external Google Form (`applyFormUrl` in `lib/site-links.ts`). Header, closing CTA, and footer Apply actions use that URL with `target="_blank"` and `rel="noopener noreferrer"`.
- Do not ship an on-page application form or claim an in-product submission path while the form remains external.

### Closing signal and footer

- The closing section is a signal-red CTA with optional decorative video under a red overlay, a near-black Apply action that opens the external form, and a line Discord action.
- Remote media failure must not remove copy, controls, contrast, or meaning. The footer keeps anchored Standard, Team, and Formats links, plus external Apply and Discord join actions.

### Accessibility and motion contract

- Meet WCAG 2.2 AA at minimum. Preserve semantic landmarks, one ordered heading hierarchy, visible labels, native controls, named navigation regions, and a keyboard-visible skip link.
- `.focus-ring` uses a 2px current-color outline with a 5px offset. Component focus rings use 2px with a 4px offset; field rings use a visible 2px near-black treatment.
- The global reduced-motion query disables smooth scrolling, constrains CSS animation and transition durations to 0.01ms with one iteration, removes fade-up transforms and filters, resolves hero side words at rest and full opacity, and pauses the marquee. Framer Motion also checks `useReducedMotion`; the optional closing MP4 texture does not load when reduction is requested.
- The bottom manifesto video is decorative, silent, unfocusable, and pauses under reduced motion; its surrounding copy remains complete without playback.
- The mobile menu currently adds 16px/12px rounding and a `0 16px 40px rgb(0 0 0 / 25%)` shadow. This is an implementation mismatch with the flat, square-or-lightly-rounded component grammar; do not propagate it.
- Meaning and navigation never depend on animation, video, hover, pointer position, or color alone.

### Asset replacement rules

- Use `components/brand-mark.tsx` for the transparent navbar mark. It renders the approved geometry as inline SVG with `currentColor` and a configurable `strokeWidth` (navbar default `56`), and stays decorative inside the labelled home link. The manifesto uses its own centered white inline SVG. Keep `public/brand/first-artifact-mark.svg` as the portable vector asset and preserve `public/brand/first-artifact-logo.png` unchanged for the favicon; do not crop or recolor either asset.
- Load GoCake and Source Sans 3 from the committed files under `public/fonts/`, keep their license files beside them, and retain readable fallbacks across the hero, manifesto, and supporting sections.
- Replace a founding-member placeholder only when the member's approved name, image, and biography are all supplied. Store optimized, project-owned portraits as `public/members/<stable-member-slug>.<avif|webp>` and render with `next/image`. Use the approved full name as alt text only when no adjacent visible name already identifies the member; otherwise use empty alt text.
- Preserve exactly five members until product approval changes the count, and retain the abstract fallback for missing or failed images.
- The supplied remote character URL is approved as decorative home-hero art and is rendered grayscale with empty alt text. Do not present it as a member or product proof. Do not generate a substitute logo, event photograph, partner mark, or evidence asset. The closing-section MP4 texture remains optional enhancement only and must not load under reduced motion; the manifesto's Mux HLS source is the explicit fallback for its Cloudinary MP4.

## Do's and Don'ts

### Do:

- **Do** preserve the red hero-to-white marquee-to-red manifesto transmission rhythm and the stable red fixed header.
- **Do** use the 40px hero grid, sparse downstream 1px guides, editorial rows, generous spacing, and type scale to organize the experience.
- **Do** keep headings and the wordmark lowercase, with GoCake confined to major declarations and Source Sans 3 handling everything operational.
- **Do** leave section titles without a trailing full stop; treat them as open declarations.
- **Do** state unknowns plainly where they affect a visitor action: formats are intended, and pricing and dates are unannounced. Do not narrate internal profile-approval process on the public team section.
- **Do** preserve complete static meaning and the CSS-enforced reduced-motion path.

### Don't:

- **Don't** end section titles with a full stop. Titles stay open; sentences live in body copy.
- **Don't** add concentric hero contours, glassmorphism, backdrop blur, unearned gradients, glow, decorative shadows, or a card stack. The manifesto's red/video blend is the one user-supplied functional gradient exception.
- **Don't** round major surfaces, fields, or editorial containers; keep controls square or lightly rounded and reserve circles for member/signal markers.
- **Don't** fabricate members, testimonials, shipped work, event history, partner or investor relationships, acceptance metrics, pricing, dates, locations, or response times.
- **Don't** invent an on-page submission success state for the external Apply form.
- **Don't** make optional HLS media, animation, generated imagery, or JavaScript hydration carry core content or interaction.
