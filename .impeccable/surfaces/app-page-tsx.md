---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/admission/page.tsx","app/events/page.tsx","app/faq/page.tsx"]
---

# First Artifact launch surface

- Scope: Home plus Admission, Events, and FAQ routes. Visitor mode: Persuade.
- Audience and job: proven, high-agency builders and founders deciding whether this selective club recognizes them and whether they should apply.
- Primary action: complete the on-page application with name, email, role, strongest shipped-work URL, build description, and obsession answer.
- Proof and content: five real founding members exist; use honest profile placeholders until approved names, photos, and biographies arrive. Do not invent projects, testimonials, event history, partner logos, acceptance metrics, pricing, or response times.
- Constraints: Next.js, local GoCake and Source Sans 3, red/white identity, lowercase headings, line-based surfaces without glassmorphism, WCAG 2.2 AA minimum, reduced-motion fallbacks, no backend submission claim while the backend is absent.

## Chosen direction

The home hero uses the supplied stacked-character template for composition and motion only. First Artifact’s implementation is a 120vh signal-red field with a clearly visible 40px white grid at 28% and far-edge radial fade, a grayscale decorative character, four offset lowercase GoCake “obsess” layers, and lowercase Source Sans principle columns that resolve inward as the visitor crosses the sticky range. A white GoCake marquee separates the artwork from the manifesto. The shared fixed navigation stays visibly above the artwork; the hero adds no separate CTA.

The template’s orange, green, blue, Bamboly, Poppins, Inter, and uppercase treatments are intentionally replaced by the project’s red/white palette, local GoCake, local Source Sans 3, and lowercase voice. Route heroes and downstream surfaces retain sparse 1px grids and solid fields. The supplied character is decorative and must never imply a real member.

## Component grammar

- Color strategy: Committed. Signal red owns the hero and closing CTA; white is the compact transition and primary evidence surface; near-black owns the manifesto and footer.
- Corners: major fields and form controls stay square or lightly rounded; circles are reserved for the five member-count markers and profile placeholders.
- Lines: sparse 1px white or red guides establish the grid; borders clarify navigation, interaction, and editorial rows.
- Elevation: flat. No backdrop blur, glass, glow, or drop-shadow card stack.
- Type ramp: lowercase GoCake for the wordmark, `clamp(7.5rem, 30vw, 28rem)` hero title, compact `clamp(1.75rem, 4vw, 3.25rem)` marquee, and 51–96px section declarations; Source Sans 3 for principle columns, navigation, controls, reading text, and metadata.
- Motion: exact sticky side-word math and 18-second marquee timing join restrained fade-up entries, optional closing media, and the manifesto reveal. Reduced motion places words at rest, pauses the marquee, and removes remote motion.

## Implementation inventory

| Ingredient | Commitment | Medium |
| --- | --- | --- |
| Fixed navigation | Logo/name, Home, Admission, Events, FAQ, Apply; `z-index: 70` above home artwork | Semantic HTML, Next Link, local PNG logo |
| Stacked character hero | 120vh red field, faded 40px white grid, grayscale supplied character, four lowercase GoCake “obsess” layers | One semantic `h1`; grid, repeated layers, and image are decorative |
| Side principle columns | Two four-word Source Sans columns with exact responsive scroll math | Passive scroll/resize listeners and reduced-motion rest state |
| Principle marquee | Four identical lowercase GoCake strings | CSS 18-second linear loop; paused under reduced motion |
| Member signal row | Exactly five honest founding-member placeholders downstream | Semantic list with abstract CSS/SVG signals; replace with `next/image` when assets arrive |
| Manifesto | Near-black field, real red/white mark, sparse signal frame, one short reveal sentence, and six compact beliefs | Semantic section plus decorative `next/image`; readable static text and reduced-motion fallback |
| Admission standard | Evidence, agency, engagement, and technology familiarity without fabricated metrics | Semantic ordered content; no generic card grid |
| Community experiences | Hacker houses, hackathons, buildathons, networking; clearly framed as intended formats | Semantic editorial rows with small authored SVG marks |
| Application | Six fields, accessible validation, backend-unavailable preservation and retry state | Client React form with pure tested validation; shadcn-owned form primitives |
| Closing CTA | Red media-like field with line controls and supporting-route links | Solid red fallback with optional HLS enhancement; no remote video dependency for core meaning |
| Supporting routes | Admission, Events, FAQ in the same world with simpler static fields | Server Components and shared shell |

## Unresolved decisions

- Member names, photos, and biographies.
- Form submission backend, retention policy, privacy copy, and response time.
- Membership pricing and detailed operating expectations.
- Announced event dates and locations.
- Deployment target.
