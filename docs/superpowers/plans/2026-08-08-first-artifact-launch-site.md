# First Artifact Launch Site Implementation Plan

**Goal:** Ship a minimal, accessible First Artifact launch site that translates the approved Centered Signal Portal composition into a real Next.js experience, with honest proof, supporting routes, and a validated application form that never pretends an unavailable backend succeeded.

**Architecture:** Use the Next.js App Router with server-rendered route shells and small client islands for motion, the living signal, HLS enhancement, and application behavior. Keep all business rules in pure TypeScript, all fonts and brand imagery local, and all meaningful content visible without motion or remote media. Tailwind CSS supplies tokens and utilities; shadcn-style owned primitives supply the small form/control layer.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, hls.js, lucide-react, Vitest, Testing Library, jsdom.

## Task 1: Bootstrap the app and quality harness

**Files:** `package.json`, `package-lock.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`, `vitest.setup.ts`, `components.json`, `.gitignore`

1. Declare exact runtime and development dependencies plus `dev`, `build`, `start`, `lint`, `typecheck`, and `test` scripts.
2. Configure App Router TypeScript aliases, Tailwind v4 PostCSS, flat Next.js ESLint, and jsdom testing.
3. Install dependencies and prove the empty harness runs before feature tests are added.

## Task 2: Specify and implement application behavior

**Files:** `lib/application.test.ts`, `lib/application.ts`, `components/application-form.test.tsx`, `components/application-form.tsx`, `components/ui/button.tsx`, `components/ui/input.tsx`, `components/ui/textarea.tsx`, `components/ui/label.tsx`, `lib/utils.ts`

1. Write failing tests for all six required inputs, email and URL semantics, whitespace normalization, and field-specific errors.
2. Implement the smallest pure validator that returns normalized values and an accessible error map; rerun until green.
3. Write failing interaction tests for labeled controls, error focus/announcement, preserved answers, explicit backend-unavailable state, and application copying.
4. Build the form from owned shadcn-style primitives and make the tests pass without simulating network success.

## Task 3: Build the shared visual and accessibility system

**Files:** `app/globals.css`, `app/layout.tsx`, `lib/fonts.ts`, `components/site-header.tsx`, `components/site-footer.tsx`, `components/fade-up.tsx`, `components/living-signal.tsx`, `components/manifesto-reveal.tsx`, `components/hls-background.tsx`, `components/site-header.test.tsx`, `components/living-signal.test.tsx`

1. Write failing semantic tests for navigation labels, mobile navigation behavior, decorative signal hiding, and reduced-motion-safe content.
2. Define red/white HSL tokens, local GoCake and Source Sans 3 fonts, focus styling, restrained liquid glass, spacing, and motion fallbacks.
3. Implement a transparent fixed navigation, semantic footer, reusable reveal helper, live CSS/SVG signal with a static fallback, and optional HLS closing-field enhancement.
4. Make shared tests pass and confirm no remote asset is required for comprehension or action.

## Task 4: Implement the approved home composition

**Files:** `app/page.test.tsx`, `app/page.tsx`, `components/home/hero.tsx`, `components/home/manifesto.tsx`, `components/home/admission-standard.tsx`, `components/home/members.tsx`, `components/home/community-formats.tsx`, `components/home/closing-signal.tsx`

1. Write a failing page test for the approved information sequence, single primary application target, six manifesto beliefs, five honest member placeholders, and intended-event wording.
2. Implement the centered full-height red hero with the white manifesto fold visible, then the manifesto, admission standard, founding members, community formats, application, and closing signal.
3. Keep the five member signals visibly honest and avoid fabricated biographies, event history, statistics, testimonials, partners, pricing, or acceptance timing.
4. Make the page test pass and verify heading hierarchy and landmark structure.

## Task 5: Implement supporting routes

**Files:** `app/admission/page.tsx`, `app/events/page.tsx`, `app/faq/page.tsx`, `app/supporting-routes.test.tsx`, `components/route-hero.tsx`

1. Write failing tests for route-specific headings, admission evidence, explicit no-announced-events state, and accessible native FAQ disclosure controls.
2. Implement compact server-rendered pages using the same red/white world without repeating the immersive home hero.
3. Link each route back to the on-page home application and make all tests pass.

## Task 6: Verify and finish the full experience

**Files:** `README.md`, `DESIGN.md`, `.impeccable/design-system.md`, `.impeccable/assets/asset-manifest.md`

1. Run unit/component tests, TypeScript, ESLint, and a production build; fix the implementation rather than weakening gates.
2. Start the production-capable dev server and verify the home, admission, events, and FAQ routes in a real browser at desktop and mobile sizes, including keyboard navigation, form errors, reduced motion, overflow, console errors, and broken requests.
3. Run the Impeccable detector once, perform one fresh finish review, address critical findings, and run one final browser confirmation round.
4. Document the shipped design system, local run commands, honest backend limitation, and asset replacement path.

## Completion gates

- The approved centered composition is recognizable in the first viewport and the manifesto fold is visible without relying on a screenshot.
- Every route builds and renders; every navigation and CTA target exists.
- Form values survive client-side validation and an unavailable backend is never represented as successful submission.
- Meaning and controls remain available with JavaScript motion disabled, reduced motion enabled, or HLS unavailable.
- Automated tests, typecheck, lint, production build, and browser verification all pass with evidence recorded in the handoff.
