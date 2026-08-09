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
    fontSize: "clamp(1.75rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1
  hero-side:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "clamp(1.6rem, 7vw, 9rem)"
    fontWeight: 500
    lineHeight: 1.1
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
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  reveal:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "clamp(2rem, 5.4vw, 5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
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

The system is playful and experimental without becoming ornamental. Lowercase GoCake declarations give the site its unmistakable voice; Source Sans 3 makes the proof, controls, and unresolved details easy to trust. Sparse 1px guides suggest an active field, while stark sectional changes turn the manifesto into the page's memorable reveal.

**Key Characteristics:**

- Saturated signal red, white, and near-black as the dominant three-part palette; the home portrait is deliberately grayscale.
- Lowercase GoCake wordmarks and major declarations paired with practical Source Sans 3 UI.
- Flat, solid surfaces organized by sparse 1px lines and generous negative space.
- Honest placeholders and explicit unavailable states instead of invented proof.
- Restrained motion that disappears completely when the visitor requests reduced motion.

## Colors

Signal red is the public beacon, white is the editorial reading surface, and near-black supplies authority, legibility, and sharp section changes. Gray exists only to support borders, fields, metadata, and secondary reading hierarchy.

### Primary

- **Signal Red:** Owns the fixed header, hero and route fields, community-format field, application surround, closing signal, error borders, and primary red action.
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
- **Marquee display:** GoCake Regular; `clamp(1.75rem, 4vw, 3.25rem)` at 1.0 line-height.
- **Section and route headline:** GoCake Regular; fluid 51–96px, approximately 0.88–0.90 line-height. Keep most declarations to 10–14 characters per line through measured `ch` widths.
- **Manifesto reveal:** Source Sans 3 Medium; fluid 32–80px, 0.98 line-height, maximum 24ch. This is deliberately not GoCake so the statement feels spoken and readable.
- **Row title:** Source Sans 3 Semibold; 18–20px. Use for standards, formats, member labels, and FAQ prompts.
- **Lead body:** Source Sans 3 Regular; 18–20px with relaxed line-height. Keep primary explanations around 36–42rem wide.
- **Body:** Source Sans 3 Regular; 16px with relaxed line-height. Use Medium sparingly for emphasis and metadata.
- **Label and control:** Source Sans 3 Semibold; 12–14px, uppercase where it functions as a control, with 0.08em tracking.

### Named Rules

**The Lowercase Declaration Rule.** Every `h1`, `h2`, and `h3`, plus the visible wordmark, renders lowercase. Preserve semantic source text and heading order; casing is a visual treatment.

**The GoCake Boundary Rule.** Use GoCake only for the wordmark and large declarations whose characters the shipped font supports. Body, UI, long-form text, unsupported glyphs, and future localization fall back to Source Sans 3.

## Layout

The primary content shell is `min(100% - 2rem, 80rem)` on small screens and `min(100% - 5rem, 80rem)` from 768px upward. The fixed header uses a wider 90rem ceiling with 16px mobile and 40px desktop horizontal padding. Core breakpoints follow the implementation at 640px, 768px, and 1024px.

Sections usually breathe at 96px vertically on small screens and 144px on desktop; closing and supporting-route endings may use 128–160px to hold a final declaration. Within sections, 24px separates copy within a thought, 48–64px separates major content groups, and editorial rows use 20–28px vertical padding.

Large sections use asymmetric two-column grids, typically a narrower declaration column and a wider proof or interaction column. Collapse them into a single reading sequence on small screens. Avoid generic equal card grids: standards, beliefs, events, and FAQs are line-separated editorial rows. The five-member list progresses from compact label-and-signal rows on mobile to five columns on large screens, with a subtle alternating vertical offset.

The home hero is the single compositional exception: a 120vh signal-red field with a grayscale decorative character, four offset GoCake word layers, and Source Sans side-word columns that resolve inward across the sticky range. Its title stack begins after the fixed-header clearance plus 2vh mobile / 3vh desktop breathing room. Route heroes retain three sparse vertical guides plus one horizontal guide. Never add concentric rings, dense graph paper, a glass panel, or gradients.

**The Hard-Fold Rule.** The home narrative moves from the signal-red hero through a compact white marquee into a near-black manifesto. Preserve those abrupt field changes; do not soften them with gradients or translucent panels.

## Elevation & Depth

First Artifact is flat. Depth comes from section color, 1px borders, type scale, overlap-free spacing, and motion—not from glassmorphism, backdrop blur, glowing edges, or a stack of drop-shadow cards. Permanent surfaces remain solid. The existing fade-up may transiently move 12px and apply a 1px content blur during entry; both resolve completely and are removed under reduced motion.

The optional closing HLS background is media texture, not elevation. A solid signal-red field and red overlay preserve the composition if video is unsupported, blocked, slow, or intentionally not loaded.

**The Solid Surface Rule.** Do not use `backdrop-filter`, translucent glass panels, glow, or decorative shadow to create hierarchy. Use a field change or 1px rule.

## Shapes

Fields, form surfaces, inputs, selects, textareas, and editorial rows are square. Buttons may be lightly rounded (8px); text links and focus targets may use a subtle 4px radius solely to keep the focus outline readable. Do not turn actions into oversized pills.

Circles are semantic accents, reserved for the five founding-member signals and small signal indicators. The approved brand asset remains square, with its aspect ratio intact; do not crop it into a different silhouette. Borders are one pixel and should read as structure rather than decoration.

## Components

### Fixed header and navigation

- Keep the header fixed above every surface, including the home hero and marquee, with a stable, opaque signal-red background, `z-index: 70`, and a subtle white bottom rule. It must not change color or depend on underlying content for contrast.
- Use the local logo plus lowercase GoCake wordmark, primary route links, and one near-black Apply action. Desktop navigation uses line framing; mobile uses a native `details` disclosure with a solid near-black menu.
- Navigation targets are Home, Admission, Events, FAQ, and `/#apply`. Preserve semantic `nav` labels, a descriptive home-link label, and the skip link before the header.
- Hover uses a modest opacity or solid-color change. Keyboard focus remains visible with a 2px outline/ring and clear offset.

### Buttons and text links

- Buttons are Source Sans 3 Semibold, uppercase, tracked, at least 40px high; default form and primary actions are at least 48px high, while wide actions reach 56–64px.
- Near-black primary, signal-red primary, and transparent 1px line variants are the complete launch vocabulary. A line button inherits its surrounding foreground color.
- Hover changes fill or opacity in 200ms. Active may compress to 98%. Disabled actions prevent interaction and use 50% opacity. Never communicate state with motion or color alone.

### Hero and route hero

- The home hero uses a 120vh signal-red field, a grayscale decorative character, stacked lowercase GoCake “obsess” lettering, and two Source Sans principle columns. The shared fixed navigation remains visibly layered above it; the hero itself contains no CTA, member proof, or claim beyond the single heading.
- Side words begin at the documented mobile/desktop offsets and resolve to zero with opacity 0.35–1 over the sticky range. Reduced motion renders them at rest and fully opaque.
- The white GoCake marquee repeats four identical lowercase copies on an 18-second linear loop; reduced motion pauses it.
- Route heroes continue to use the sparse structural grid, bottom-aligned GoCake declarations, and Source Sans support copy.
- No concentric field, glass panel, autoplay dependency, or fake proof belongs in any hero.

### Manifesto and editorial rows

- The manifesto opens on near-black with one large GoCake declaration, the real red/white brand mark in a sparse signal frame, one concise Source Sans scroll-reveal sentence, and six compact beliefs in a two-column line grid.
- Words may move from 50% to 100% opacity as the statement scrolls into view. Static HTML remains complete and readable before hydration; reduced motion forces every word to full opacity.
- Admission standards, formats, and FAQs reuse top and bottom rules instead of cards. FAQs use native `details`/`summary`, retaining keyboard and disclosure behavior.

### Founding-member placeholders

- Render exactly five semantic list items. Each uses an abstract red square field with simple white guide lines and a small circular signal, followed by “Founding member 01–05” and “Profile pending.”
- Inner geometry is `aria-hidden`; the list and each visible label carry the meaning. Never infer a face, name, project, biography, or endorsement.

### Application form

- The six required controls are Name, Email, Builder/Founder role, strongest shipped-work URL, build description, and obsession answer. Every control keeps a persistent visible label and a minimum 48px target; multiline answers remain vertically resizable.
- Default fields are square white surfaces with a quiet dark border. Focus strengthens the border and adds a 2px near-black ring. Invalid fields use signal red plus an adjacent error linked through `aria-describedby`.
- On invalid review, show a `role="alert"` summary, mark fields with `aria-invalid`, and focus the first invalid control. Do not erase entered values.
- A valid review does not submit. It reveals a near-black `role="status"` region stating that submissions are not connected and that the answers remain on the page, plus a Copy application action.
- Copy has distinct ready, copied, and copy-error messages announced through the same polite live region. On failure, instruct the visitor to select and copy from the still-populated form. Never display a success or response-time claim while no backend exists.

### Closing signal and footer

- The closing section works first as a solid red CTA. HLS video is an optional, low-opacity, luminosity-mixed enhancement behind a red overlay; it is decorative, silent, unfocusable, and absent under reduced motion.
- Remote media failure must not remove copy, controls, contrast, or meaning. The footer returns to solid near-black with the three supporting routes.

### Accessibility and motion contract

- Meet WCAG 2.2 AA at minimum. Preserve semantic landmarks, one ordered heading hierarchy, visible labels, native controls, named navigation regions, and a keyboard-visible skip link.
- `.focus-ring` uses a 2px current-color outline with a 5px offset. Component focus rings use 2px with a 4px offset; field rings use a visible 2px near-black treatment.
- The global reduced-motion query disables smooth scrolling, constrains all animation and transition durations to 0.01ms with one iteration, forces manifesto words to full opacity, and removes fade-up transforms and filters. Framer Motion also checks `useReducedMotion`; HLS loading stops when reduction is requested.
- Meaning and navigation never depend on animation, video, hover, pointer position, or color alone.

### Asset replacement rules

- Use `public/brand/first-artifact-logo.png` as supplied. Preserve its aspect ratio; do not crop, recolor, redraw, or use the reference comp as production imagery. When adjacent text says First Artifact, use empty alt text; when the mark is the only label, use `alt="First Artifact"`.
- Load GoCake and Source Sans 3 only from the committed files under `public/fonts/`, keep their license files beside them, and retain `display: swap` plus readable fallbacks. The home hero and marquee introduce no external font dependency.
- Replace a founding-member placeholder only when the member's approved name, image, and biography are all supplied. Store optimized, project-owned portraits as `public/members/<stable-member-slug>.<avif|webp>` and render with `next/image`. Use the approved full name as alt text only when no adjacent visible name already identifies the member; otherwise use empty alt text.
- Preserve exactly five members until product approval changes the count, and retain the abstract fallback for missing or failed images.
- The supplied remote character URL is approved as decorative home-hero art and is rendered grayscale with empty alt text. Do not present it as a member or product proof. Do not generate a substitute logo, event photograph, partner mark, or evidence asset. The remote HLS source remains optional enhancement only.

## Do's and Don'ts

### Do:

- **Do** preserve the red hero-to-white marquee-to-near-black manifesto rhythm and the stable red fixed header.
- **Do** use sparse 1px guides, borders, editorial rows, generous spacing, and type scale to organize the experience.
- **Do** keep headings and the wordmark lowercase, with GoCake confined to major declarations and Source Sans 3 handling everything operational.
- **Do** state unknowns plainly: five profiles are pending, formats are intended, pricing and dates are unannounced, and application submission is unavailable.
- **Do** preserve complete static meaning and the CSS-enforced reduced-motion path.

### Don't:

- **Don't** add concentric hero contours, glassmorphism, backdrop blur, gradients, glow, decorative shadows, or a card stack.
- **Don't** round major surfaces, fields, or editorial containers; keep controls square or lightly rounded and reserve circles for member/signal markers.
- **Don't** fabricate members, testimonials, shipped work, event history, partner or investor relationships, acceptance metrics, pricing, dates, locations, or response times.
- **Don't** claim the application was sent. Keep answers recoverable and make unavailable, copy-success, and copy-failure states explicit.
- **Don't** make optional HLS media, animation, generated imagery, or JavaScript hydration carry core content or interaction.
