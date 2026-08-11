import type { Metadata } from "next";

import { DiscordMark } from "@/components/discord-mark";
import { EditorialRow } from "@/components/editorial-row";
import { FadeUp } from "@/components/fade-up";
import { FunFormula } from "@/components/fun-formula";
import { SectionLink } from "@/components/section-link";
import { buttonVariants } from "@/components/ui/button";
import { discordInviteUrl } from "@/lib/site-links";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Talent is everywhere. Obsession is rare. Who First Artifact is for, the bar we hold, and what the room should feel like.",
};

const audience = [
  ["Builders and founders", "Who ship, not people who talk about shipping."],
  ["High-agency people", "Who just keep going — no permission, no roadmap, no waiting."],
  ["People who’ve already built something good", "Proven, not aspiring."],
  ["People who live in the space", "And actually care where it’s heading. Doesn’t have to be AI."],
] as const;

const bar = [
  "High to get in, and it stays high. No loose filter, no “close enough.”",
  "You get in by having built, not by being interesting in a room.",
  "One weak yes lowers the ceiling for everyone. So we don’t do weak yeses.",
  "A hard filter keeps the room worth being in — and scarcity creates its own demand.",
] as const;

const factors = [
  ["Agency", "You own what you’re doing."],
  ["Progress", "You can see yourself moving."],
  ["Optimal challenge", "Hard enough to matter, not so hard you stall."],
  ["Feedback", "You find out fast whether it worked."],
] as const;

const practice = [
  "Put the obsessed in the same room and get out of the way.",
  "Run events that build reputation and momentum — hacker houses, hackathons, buildathons.",
  "Stay genuinely different. If it already exists, we’re not building it.",
] as const;

const declaration =
  "font-display text-balance text-[clamp(2.75rem,6vw,5rem)] leading-[0.9] tracking-[-0.03em]";
const eyebrow = "text-xs font-semibold uppercase tracking-[0.08em]";

export default function ManifestoPage() {
  return (
    <main id="main-content">
      {/* Opening — signal red */}
      <section
        aria-labelledby="manifesto-page-title"
        className="bg-[hsl(var(--signal))] pb-24 pt-32 text-white md:pb-32 md:pt-44"
      >
        <div className="page-shell">
          <FadeUp>
            <p className={eyebrow}>Manifesto</p>
            <h1
              id="manifesto-page-title"
              className={cn(declaration, "mt-6 max-w-[16ch] text-[clamp(3rem,7vw,6rem)]")}
            >
              We’re building a community of the obsessed
            </h1>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-10 grid max-w-[46rem] gap-5 text-lg leading-relaxed md:mt-14 md:text-xl">
              <p>
                Talent is everywhere. Obsession is rare. We don’t want the thousand people who could
                build it — we want the few who can’t stop.
              </p>
              <p>
                The ones already building it, at 2am, because they’d feel worse if they didn’t.
                Obsession beats talent every time. So that’s what we filter for.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Who we're for — white */}
      <section aria-labelledby="audience-title" className="bg-white py-24 md:py-36">
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
            <FadeUp>
              <h2 id="audience-title" className={cn(declaration, "max-w-[10ch]")}>
                Who we’re for
              </h2>
            </FadeUp>

            <div>
              <ul className="border-t border-black/12">
                {audience.map(([title, body], index) => (
                  <EditorialRow
                    key={title}
                    index={index}
                    className="py-7 md:py-8"
                    ruleClassName="bg-black/12 group-hover:bg-black/30"
                  >
                    <h3 className="text-xl font-semibold leading-tight transition-transform duration-200 group-hover:translate-x-1.5">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-[42rem] leading-relaxed text-black/70">{body}</p>
                  </EditorialRow>
                ))}
              </ul>

              <FadeUp delay={0.1}>
                <p className="mt-10 border-l-2 border-[hsl(var(--signal))] pl-5 text-lg font-semibold leading-relaxed md:text-xl">
                  The test: is this the thing you think about all the time?
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* The bar — near-black */}
      <section
        aria-labelledby="bar-title"
        className="bg-[hsl(var(--foreground))] py-24 text-white md:py-36"
      >
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
            <FadeUp>
              <p className={cn(eyebrow, "text-white/54")}>Non-negotiable</p>
              <h2 id="bar-title" className={cn(declaration, "mt-5 max-w-[8ch]")}>
                The bar
              </h2>
            </FadeUp>

            <ul className="border-t border-white/16">
              {bar.map((line, index) => (
                <EditorialRow
                  key={line}
                  index={index}
                  className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-5 py-7 md:grid-cols-[4rem_minmax(0,1fr)] md:py-8"
                  ruleClassName="bg-white/16 group-hover:bg-white/40"
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 text-sm font-semibold tabular-nums tracking-[0.08em] text-white/54 transition-colors duration-200 group-hover:text-[hsl(var(--signal))]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[40rem] text-lg leading-relaxed transition-transform duration-200 group-hover:translate-x-1.5">
                    {line}
                  </p>
                </EditorialRow>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What it feels like — white */}
      <section aria-labelledby="feel-title" className="bg-white py-24 md:py-36">
        <div className="page-shell">
          <FadeUp>
            <h2 id="feel-title" className={cn(declaration, "max-w-[14ch]")}>
              What it feels like
            </h2>
            <p className="mt-7 max-w-[44rem] text-lg leading-relaxed text-black/70">
              Being here should be fun, not a chore. And fun isn’t random — it shows up when four
              things line up.
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <FunFormula className="mt-12 md:mt-16" />
          </FadeUp>

          <ul className="mt-12 border-t border-black/12 md:mt-16">
            {factors.map(([title, body], index) => (
              <EditorialRow
                key={title}
                index={index}
                className="grid gap-1 py-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12 md:py-8"
                ruleClassName="bg-black/12 group-hover:bg-black/30"
              >
                <h3 className="text-xl font-semibold leading-tight transition-transform duration-200 group-hover:translate-x-1.5 md:text-[1.375rem]">
                  {title}
                </h3>
                <p className="max-w-[42rem] leading-relaxed text-black/70">{body}</p>
              </EditorialRow>
            ))}
          </ul>

          <FadeUp delay={0.1}>
            <p className="mt-10 text-lg font-semibold leading-relaxed md:text-xl">
              Get those right and nobody needs to be told to show up.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What we do — signal red */}
      <section
        aria-labelledby="practice-title"
        className="bg-[hsl(var(--signal))] py-24 text-white md:py-36"
      >
        <div className="page-shell">
          <FadeUp>
            <h2 id="practice-title" className={cn(declaration, "max-w-[12ch]")}>
              What we do
            </h2>
          </FadeUp>

          <ul className="mt-12 border-t border-white/24 md:mt-16">
            {practice.map((line, index) => (
              <EditorialRow
                key={line}
                index={index}
                className="py-7 md:py-9"
                ruleClassName="bg-white/24 group-hover:bg-white/45"
              >
                <p className="max-w-[52rem] text-lg leading-relaxed transition-transform duration-200 group-hover:translate-x-1.5 md:text-[1.375rem]">
                  {line}
                </p>
              </EditorialRow>
            ))}
          </ul>
        </div>
      </section>

      {/* Close — near-black */}
      <section
        aria-label="In short"
        className="bg-[hsl(var(--foreground))] py-28 text-white md:py-40"
      >
        <div className="page-shell">
          <FadeUp>
            <p className="max-w-[46rem] text-lg leading-relaxed text-white/70 md:text-xl">
              Get the room right and everything else follows. So we start with the room: obsessed
              people, high bar, real work, and a place that’s actually fun to be in.
            </p>
            <p className={cn(declaration, "mt-10 max-w-[12ch]")}>That’s the whole thing.</p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <SectionLink
                className={cn(buttonVariants({ variant: "red" }), "sm:min-w-52")}
                href="/#apply"
              >
                Apply with your work
              </SectionLink>
              <a
                className={cn(buttonVariants({ variant: "line" }))}
                href={discordInviteUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <DiscordMark className="h-4 w-4" />
                Join the Discord
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
