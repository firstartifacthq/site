import type { Metadata } from "next";

import { DiscordMark } from "@/components/discord-mark";
import { EditorialRow } from "@/components/editorial-row";
import { FadeUp } from "@/components/fade-up";
import {
  aboutHeroVideoUrl,
  MotionSitesBackground,
} from "@/components/motion-sites-background";
import { SectionLink } from "@/components/section-link";
import { buttonVariants } from "@/components/ui/button";
import { absoluteUrl, applyFormUrl, discordInviteUrl, siteName } from "@/lib/site";
import { cn } from "@/lib/utils";

const aboutDescription =
  "First Artifact is a private club for proven, high-agency builders and founders. Obsession beats talent, and the proof is the artifact.";

export const metadata: Metadata = {
  title: "About",
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${siteName}`,
    description: aboutDescription,
    url: "/about",
  },
  twitter: {
    title: `About · ${siteName}`,
    description: aboutDescription,
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": absoluteUrl("/about#webpage"),
  url: absoluteUrl("/about"),
  name: `About · ${siteName}`,
  description: aboutDescription,
  isPartOf: { "@id": absoluteUrl("/#website") },
  about: { "@id": absoluteUrl("/#organization") },
  mainEntity: {
    "@type": "Club",
    "@id": absoluteUrl("/#organization"),
    name: siteName,
    description: aboutDescription,
  },
};

const filterRows = [
  {
    title: "Proven builders",
    body: "The room is for founders and builders who already ship. Interest, aspiration, and talk are not enough.",
  },
  {
    title: "Evidence first",
    body: "Membership is earned through shipped work, obsession, and traction, not interest, aspiration, credentials, or talk alone.",
  },
  {
    title: "Not that Artifact",
    body: "First Artifact is not a funding accelerator, not an open Discord growth play, and not affiliated with Founders, Inc. Artifact or any similarly named program.",
  },
] as const;

const formatRows = [
  "Hacker houses",
  "Hackathons",
  "Buildathons",
  "Member gatherings",
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <section className="relative isolate flex min-h-[calc(100svh-var(--anchor-offset))] flex-col justify-end overflow-hidden bg-[hsl(var(--signal))] pt-[calc(var(--anchor-offset)+1.5rem)] text-white">
        <MotionSitesBackground
          src={aboutHeroVideoUrl}
          load="idle"
          testId="about-hero-video"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-[hsl(var(--signal)/0.72)]" />
          <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgb(255_255_255_/_0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.18)_1px,transparent_1px)]" />
        </div>

        <div className="page-shell relative z-10 pb-16 md:pb-24">
          <h1 className="font-display max-w-[9ch] text-balance text-[clamp(4.5rem,14vw,9rem)] lowercase leading-[0.84] tracking-[-0.035em]">
            what this is
          </h1>
          <p className="mt-8 max-w-[28rem] text-[clamp(1.125rem,2.4vw,1.5rem)] font-semibold leading-[1.35] tracking-[-0.02em]">
            A private club for proven, high-agency builders and founders.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 text-[hsl(var(--foreground))] md:py-36">
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-24">
            <FadeUp>
              <h2 className="max-w-[12ch] text-balance text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
                Obsession beats talent
              </h2>
              <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-black/70">
                and the proof is the artifact.
              </p>
            </FadeUp>

            <FadeUp delay={0.08} className="space-y-6 text-base leading-relaxed text-black/75 md:text-lg">
              <p>
                Most rooms reward conversation. This one is for people who move from uncertainty to a
                shipped thing, then keep going with peers who compound both the work and the question
                behind it.
              </p>
              <p>
                The filter is evidence of building: shipped work, obsession, and traction. Not
                interest, aspiration, credentials, or talk alone.
              </p>
              <p>
                Apply with the work. If you are still early, the Discord is the softer on-ramp while
                you keep shipping.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-filter-title"
        className="bg-[hsl(var(--foreground))] py-24 text-white md:py-36"
      >
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
            <FadeUp>
              <h2
                id="about-filter-title"
                className="max-w-[10ch] text-balance text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
              >
                The filter
              </h2>
              <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/70">
                Evidence of building is the door. Interest, aspiration, and talk alone stay outside.
              </p>
            </FadeUp>

            <ul className="border-t border-white/16">
              {filterRows.map((row, index) => (
                <EditorialRow
                  key={row.title}
                  index={index}
                  className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-10 md:py-10"
                  ruleClassName="bg-white/16 group-hover:bg-white/40"
                >
                  <h3 className="text-xl font-semibold leading-tight transition-transform duration-200 group-hover:translate-x-1.5 md:text-[1.375rem]">
                    {row.title}
                  </h3>
                  <p className="max-w-[38rem] leading-relaxed text-white/70">{row.body}</p>
                </EditorialRow>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-formats-title"
        className="border-y border-black/10 bg-white py-24 text-[hsl(var(--foreground))] md:py-32"
      >
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <FadeUp>
              <h2
                id="about-formats-title"
                className="max-w-[14ch] text-balance text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
              >
                Formats we intend
              </h2>
              <p className="mt-8 max-w-[36rem] text-lg leading-relaxed text-black/70">
                Designed around momentum. These are intended formats, not past events, and no dates
                have been announced yet.
              </p>
              <SectionLink
                href="/#formats"
                className="focus-ring mt-8 inline-flex min-h-12 items-center border border-black/20 px-5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors hover:border-[hsl(var(--signal))] hover:text-[hsl(var(--signal))]"
              >
                See the formats
              </SectionLink>
            </FadeUp>

            <ul className="border-t border-black/12">
              {formatRows.map((title, index) => (
                <EditorialRow
                  key={title}
                  index={index}
                  className="py-7 md:py-8"
                  ruleClassName="bg-black/12 group-hover:bg-[hsl(var(--signal))]"
                >
                  <p className="text-xl font-semibold leading-tight tracking-[-0.02em] transition-transform duration-200 group-hover:translate-x-1.5 md:text-[1.375rem]">
                    {title}
                  </p>
                </EditorialRow>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-close-title"
        className="relative isolate overflow-hidden bg-[hsl(var(--signal))] py-28 text-white md:py-40"
      >
        <MotionSitesBackground />
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[hsl(var(--signal)/0.28)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgb(255_255_255_/_0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.18)_1px,transparent_1px)]" />
        </div>

        <div className="page-shell relative z-10">
          <FadeUp>
            <div className="flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
              <div>
                <h2
                  id="about-close-title"
                  className="font-display text-[clamp(4rem,10vw,6rem)] lowercase leading-[0.84] tracking-[-0.035em]"
                >
                  your move
                </h2>
                <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-white/90">
                  Already shipping? Apply with the work, or join the Discord and meet the room.
                </p>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
                <a
                  className={cn(
                    buttonVariants({ variant: "primary" }),
                    "sm:min-w-44 focus-visible:ring-offset-[hsl(var(--signal))]",
                  )}
                  href={applyFormUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Apply
                </a>
                <a
                  className={cn(
                    buttonVariants({ variant: "line" }),
                    "focus-visible:ring-offset-[hsl(var(--signal))]",
                  )}
                  href={discordInviteUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <DiscordMark className="h-4 w-4" />
                  Join the Discord
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
