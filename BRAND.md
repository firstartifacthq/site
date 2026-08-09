# First Artifact — Brand Identity System

**Status:** Canonical brand identity, distilled from the live launch site, `PRODUCT.md`, and `DESIGN.md`.  
**Creative north star:** The Living Signal  
**Architecture:** Monolithic (branded house) — one master brand; events, formats, and future products are descriptors under First Artifact, not independent consumer brands.

This document owns **who we are, how we sound, and which assets make us recognizable**.  
`PRODUCT.md` owns product truth and constraints.  
`DESIGN.md` owns production tokens, component contracts, and accessibility implementation.

---

## 1. Strategy

### Purpose

First Artifact is a selective club **for founders and builders only**. It exists to concentrate people whose defining trait is **obsession expressed through action**: they build, ship, learn, and persist — then meet peers at the same density.

### Positioning

Not a broad networking group. Not a generic tech community. Not for operators, investors, students, or “interested in startups” adjacent roles as members. Distinction comes from a **deliberately high, evidence-based acceptance bar** for people who build and found: demonstrated work, sustained obsession, and high-agency behavior. Exclusivity is functional — it protects member quality and creates a credible external signal.

### Onliness statement

> **First Artifact is the only selective club for founders and builders that admits on shipped proof and sustained obsession — not talent theater, credentials, or talk.**

### Trueline (internal)

Obsession beats talent because obsessed people keep acting. The artifact is the proof. Membership is founders and builders only.

### Public belief line

**Obsession beats talent everytime** — and the proof is the artifact.

### Category enemy

Rooms that reward pitch, potential, and proximity over work. Soft networks that dilute density. Communities that confuse aspiration with agency. Open “anyone in tech” clubs that blur builders with spectators.

### Audience

**Members: founders and builders only.** No other member segments.

Both must be proven people in technology with unusual agency — already shipped something meaningful, still moving without manufactured momentum.

| Who | Fits when |
| --- | --- |
| **Founder** | Building or running a venture; the work is the company |
| **Builder** | Shipping product, systems, or tools with real traction or public weight |

**Not members:** investors seeking dealflow as their primary identity, recruiters, pure operators/advisors without a build practice, students without shipped work, spectators, or general networking attendees. Adjacent roles may appear at carefully managed future touchpoints; they do not redefine who the club is for.

### Brand ideals (working)

| Ideal | How it shows up |
| --- | --- |
| Differentiation | Evidence bar + Living Signal visual system; fails the Swap Test if a competitor logo still “fits” |
| Authenticity | Honest placeholders, explicit unknowns, no fabricated proof |
| Coherence | Red / white / near-black fields, lowercase declarations, flat surfaces |
| Flexibility | Same mark and palette across header, manifesto, social, and future formats |
| Commitment | Density over volume; bar does not loosen for growth vanity |

---

## 2. Personality

First Artifact is **fun, playful, experimental, and strong** — never corporate-prestige theater and never soft motivational fluff.

| Trait | Means | Does not mean |
| --- | --- | --- |
| Direct | Short sentences; name the standard | Rudeness or gatekeeping theater |
| Selective | Clear bar, scarce access | Elitism for its own sake |
| Energetic | Motion, scale, signal red | Glow, hype copy, emoji |
| Honest | State what is intended vs. proven | Fake metrics, invented members, faux history |
| Irreverent | Lowercase GoCake declarations; authored voice | Sloppy grammar as personality |

**Personality in one breath:** a transmission from people already in motion — immediate, legible, a little dangerous, never ornamental.

---

## 3. Voice & verbal identity

### Voice principles

1. **Evidence over potential.** Prefer “shipped,” “artifact,” “traction” over “aspiring,” “passionate,” “potential.”
2. **Open declarations.** Section titles stay lowercase and never end with a full stop. Body copy uses normal punctuation.
3. **Name the unknown.** Intended formats, unannounced dates, unavailable submission — say it plainly.
4. **Agency language.** Members initiate; the brand does not manufacture momentum for them.
5. **One job per line.** Headlines carry one idea; supporting sentences stay short.

### Core lexicon (use)

founders · builders · cracked builders · high agency · obsessed · proven · ship · artifact · evidence · traction · density · standard · signal · apply

Always name the membership as **founders and builders** (or “builders and founders”) — never “members of the tech community,” “professionals,” or “creatives” as a substitute.

### Avoid lexicon

networking mixer · exclusive vibes · thought leadership · unicorn · disrupt · passion · potential alone · guaranteed acceptance · fake scarcity theater · anyone in tech · operators · talent · community for everyone

### Signature phrases

| Role | Line |
| --- | --- |
| Belief | Obsession beats talent everytime |
| Proof hinge | and the proof is the artifact. |
| Hero charge | obsess |
| Principle stream | obsess · build · ship · prove · agency · evolve · purpose · artifact |
| Closing prompt | Your move |
| Admission frame | What we look for |

### Casing rules

- Visible wordmark and all `h1`–`h3` treatments: **lowercase** (presentation); preserve semantic source text.
- Controls and labels: Source Sans Semibold, often **uppercase** with tracking when they function as UI chrome.
- Legal / formal name in prose when needed: **First Artifact**.
- Compact signature: **F.A.** (manifesto only, GoCake, large).

### Tone by surface

| Surface | Tone |
| --- | --- |
| Hero / marquee | Pure signal — scale and verbs, almost no explanation |
| Manifesto | Belief + invitation; still sparse |
| Standard / formats | Operational clarity; editorial rows, not brochure |
| Application | Precise, accountable, never celebratory before backend exists |
| Discord / social | Same voice, shorter; still evidence-forward |

---

## 4. Logo system

### Primary mark

Angular white stroke mark on a **signal-red square field** (or white / currentColor stroke on red UI chrome). Geometry: upward diamond / spear form with a vertical stem and forked base — reads as a beacon or first stake.

| Asset | Path | Role |
| --- | --- | --- |
| Production tile | `public/brand/first-artifact-logo.png` | Favicon, square lockups that need the full red field |
| Portable vector | `public/brand/first-artifact-mark.svg` | Transparent mark for export and reuse |
| Inline UI mark | `components/brand-mark.tsx` | Navbar / in-product; `currentColor` + configurable `strokeWidth` (default `56`) |

### Lockups

1. **Mark + wordmark** — 48px-class mark beside lowercase name (header). Prefer the transparent inline SVG so the mark inherits white on red.
2. **Mark alone** — Favicon, social avatar, compressed UI; only when the surrounding context already names First Artifact, or supply an accessible name.
3. **Signature** — Centered `F.A.` in GoCake on signal red (manifesto ritual, not a general logo substitute).
4. **Tile** — Full red-square PNG when a self-contained badge is required.

### Clear space & minimum size

- Clear space: at least **¼ of the mark’s height** on all sides; do not crowd with competing icons.
- Minimum digital: **24px** mark height for recognition; navbar target **32–48px**.
- Do not crop into a circle, add drop shadows, outline in competing brand colors, or redraw the geometry.
- Always validate **black-and-white / single-color** first; color is applied after the silhouette holds.

### Logo tests (pass criteria)

| Test | Pass |
| --- | --- |
| B&W | Silhouette reads without the red field |
| Small size | Recognizable at favicon scale |
| Swap | Competitor logo on our layout feels wrong |
| Hand | Cover the mark; red field + lowercase GoCake + flat editorial still feel like us |
| Memory | Drawable in a few strokes |

---

## 5. Color system

### Meaning

| Color | Token | Value | Role |
| --- | --- | --- | --- |
| Signal red | `--signal` | `hsl(0 100% 44%)` | Public beacon — header, hero, manifesto, formats field, apply surround, closing CTA |
| Deep signal red | `--signal-deep` | `hsl(0 91% 37%)` | Hover / error emphasis on light surfaces |
| Soft signal red | `--signal-soft` | `hsl(0 100% 96%)` | Restrained tint only |
| White | — | `hsl(0 0% 100%)` | Reading surface; type on red/black; marquee interruption |
| Near-black | — | `hsl(0 0% 5%)` | Authority, primary text, footer, dark actions |
| Muted ink | — | `hsl(0 0% 36%)` | Secondary copy on white |
| Structural grays | border / input | `82%` / `88%` L | Borders and fields only |

### Named rules

- **Three-Field Rule.** Compose from red, white, and near-black. Gray is infrastructure, not a fourth world.
- **Legible Signal Rule.** Essential copy on red is solid white. Opacity is for metadata and 1px structure after AA contrast is confirmed.
- **No accent family** at launch. Hierarchy comes from field changes, type scale, and rules — not a second brand hue.

### Transmission fold (spatial color rhythm)

`signal red (hero)` → `white (marquee)` → `signal red (manifesto)` → white/near-black editorial → `signal red (closing)` → `near-black (footer)`.

Preserve the hard white interruption between hero and manifesto. Do not soften it into gray or glass.

---

## 6. Typography

### Pairing

| Role | Face | Character |
| --- | --- | --- |
| Display / declarations | **GoCake Regular** | Authored, irreverent, rare — the audible “voice” of the brand |
| Reading / UI | **Source Sans 3** (400 / 500 / 600) | Direct, operational, trustworthy |

**GoCake Boundary Rule.** GoCake only for wordmark-scale declarations and glyphs the font supports. Body, UI, unsupported characters, and localization → Source Sans 3.

### Hierarchy (identity view)

| Level | Spec intent |
| --- | --- |
| Hero charge | GoCake, oversized stack (`obsess`), ~0.85 line-height |
| Marquee | GoCake, compact, looping principle stream |
| Section declaration | GoCake, ~51–96px fluid, ~0.88 line-height, ~10–14 characters per line |
| Manifesto title | Source Sans Semibold, large; belief line may sit outside GoCake when readability demands it |
| F.A. signature | GoCake, ~120px |
| Lead / body | Source Sans Regular, 16–20px, relaxed leading |
| Labels / controls | Source Sans Semibold, 12–14px, tracked uppercase when chrome |

### Typographic laws

- Lowercase Declaration Rule for headings and wordmark presentation.
- Open Title Rule — no trailing full stop on section titles.
- Max two families; do not introduce a third “premium” serif or tech mono as brand type without a deliberate system revision.
- Prefer flush-left editorial reading; centered type is reserved for manifesto ritual moments.

---

## 7. Distinctive brand assets

Build fame + uniqueness (Sharp). These cues should trigger “First Artifact” even before the name is read.

| Asset | Uniqueness | Fame plan |
| --- | --- | --- |
| Signal red field | High if held consistently | Own the red transmission in every public surface |
| Angular mark | High | Always same geometry; never redraw |
| Lowercase GoCake declarations | High | Keep rare; do not set paragraphs in GoCake |
| 40px white hero grid | Medium–high | Hero-only structural signature |
| Hard white marquee fold | High | Protect the red→white→red sequence |
| Grayscale decorative character | Medium | Hero atmosphere only — never member proof |
| F.A. signature | Medium | Manifesto / ceremonial use |
| Editorial 1px rows (not cards) | Medium | Admission + formats grammar |
| Circular member signals | Medium | Five-signal constellation; abstract until approved portraits |

Non-assets (do not invest brand meaning in): glassmorphism, glow, purple accents, concentric hero rings, pill stacks, stock “community” photography tropes.

---

## 8. Imagery & motion

### Imagery

- **Hero character:** Approved decorative bust, rendered **grayscale**, empty alt, never framed as a member or testimonial.
- **Member portraits:** Only with approved name + image + bio; otherwise abstract red-field signals with guide lines.
- **Manifesto media:** Full-bleed video as atmosphere under a functional red edge blend; copy must stand alone if media fails.
- **Rose / vine and other ornaments:** Supporting atmosphere on red; must not compete with the belief line.
- **Never fabricate** events, partners, logos, metrics, or proof photography.

### Motion (presence, not noise)

- Sticky side-word convergence in the hero.
- 18s linear marquee on white.
- Restrained fade-up entries.
- Optional closing HLS texture behind opaque red.

**Reduced motion:** Everything resolves to a complete static composition. Meaning never depends on animation, hover, or video.

---

## 9. Spatial system (identity-level)

- Flat planes. Depth = field change, 1px rule, type scale, spacing — not shadow stacks.
- Square fields and controls; buttons may use light 8px radius; circles reserved for member/signal markers.
- Asymmetric editorial columns over equal card grids.
- Generous section breath (≈96px mobile / 144px desktop) so each claim carries weight.
- Content shell capped near 80rem; header may use a wider ceiling.

**Solid Surface Rule.** No backdrop blur, glass panels, glow, or decorative drop-shadow hierarchy.

---

## 10. Touchpoints

| Touchpoint | Identity expression |
| --- | --- |
| Launch site `/` | Full Living Signal system; primary brand theater |
| Fixed header | Stable signal red, mark + lowercase name, dark Apply |
| Discord | Same voice; invite as peer room, not funnel gimmick |
| Application | Six evidence fields; honest unavailable/copy states until backend exists |
| Favicon / OG | Red tile mark; avoid busy screenshots as the only brand cue |
| Future events / houses | First Artifact descriptors (“First Artifact hacker house”), not new logos |
| Email / docs (future) | Source Sans body, signal rules, lowercase titles; GoCake sparingly for titles |

Brand architecture stays **monolithic**: new surfaces inherit this system; they do not invent sibling brands.

---

## 11. Messaging map

| Job | Message |
| --- | --- |
| Recognize | Living Signal — red field, mark, lowercase charge |
| Believe | Obsession beats talent; proof is the artifact |
| Qualify | Founders and builders only · High agency · Obsession · Traction |
| Invite | Bring the work and the question you cannot drop |
| Act | Apply with the work / join the Discord — your move |
| Protect density | Smaller exceptional room of founders and builders > large weak membership |

Admission criteria in product language: **High agency**, **Obsession**, **Traction** — something real is already moving.

---

## 12. Validation battery

Run before major visual or verbal drift:

1. **Swap test** — Drop a generic community logo on the page. If it still feels fine, the system is under-specified.
2. **Hand test** — Cover the mark. Red fields, lowercase declarations, white fold, and flat editorial rows should still read as First Artifact.
3. **Concept test** — Stakeholders still affirm: selective · evidence · obsession · living signal.
4. **Field test** — Show the hero + manifesto to target founders and builders; they should feel seen or correctly excluded — not vaguely “inspired.” A non-builder/non-founder should feel the room is not for them.

---

## 13. Governance

### Document map

| Doc | Authority |
| --- | --- |
| `BRAND.md` (this file) | Strategy, personality, voice, logo, distinctive assets, identity rules |
| `PRODUCT.md` | Users, purpose, constraints, evidence policy, product principles |
| `DESIGN.md` | Tokens, components, a11y, motion, implementation do/don’t |
| `.impeccable/assets/asset-manifest.md` | Asset provenance and replacement rules |

### Change control

- **Strategy / onliness / belief line** — product + brand owners; treat as rare.
- **Logo geometry** — do not redraw casually; update all three mark paths together.
- **Color / type tokens** — change in `DESIGN.md` + CSS variables in lockstep; re-check AA.
- **Voice lexicon** — extend carefully; do not dilute “artifact / obsession / agency.”
- **New sub-brands** — default no; prefer monolithic descriptors.

### Do

- Keep the red → white → red transmission.
- Keep headings lowercase and open.
- Prefer evidence language and honest unknowns.
- Use the approved mark paths; preserve licenses beside fonts.
- Meet WCAG 2.2 AA on public surfaces.

### Don’t

- Zig into purple gradients, cream-serif prestige, glass, glow, or card dashboards.
- Fabricate social proof.
- Claim application success without a backend.
- Set long reading text in GoCake.
- End section titles with a period.
- Let growth pressure loosen the admission story in public copy.

---

## 14. One-page identity brief

**Name:** First Artifact  
**For:** Founders and builders only.  
**Onliness:** The only selective club for founders and builders that admits on shipped proof and sustained obsession.  
**Belief:** Obsession beats talent everytime — proof is the artifact.  
**Look:** Signal red / white / near-black · angular mark · lowercase GoCake + Source Sans 3 · flat editorial fields · living transmission fold.  
**Feel:** Direct, selective, energetic, honest, playfully strong.  
**Enemy:** Talk-first rooms, diluted “anyone in tech” networks.  
**Ask:** Show the work. Apply — or join the Discord. Your move.
