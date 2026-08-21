"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/fade-up";

/**
 * "Are you in the top 1%?"
 *
 * A four-tier funnel of AI usage, drawn as proportional bars so the collapse
 * from "everyone chats with AI" to "almost nobody builds with it" is visible at
 * a glance. Every figure is a real, citable number; the sources are printed
 * under the chart, not hidden in a footnote.
 *
 * The bars are honest about scale: the first tier is a global population, the
 * rest are shares of the developer population (Stack Overflow 2025). The label
 * on each bar says which population it is, so the tiers are never read as one
 * continuous percentage.
 */

type Tier = {
  index: string;
  /** The headline figure, as it should be read aloud. */
  figure: string;
  /** One line of what the tier actually measures. */
  label: string;
  /** The population the figure is a share of, plus its source. */
  population: string;
  /** Bar width as a percentage of the track. Tier 1 is the full track. */
  width: number;
  /** True for the tier the club is built for. */
  frontier?: boolean;
};

const tiers: Tier[] = [
  {
    index: "01",
    figure: "900M",
    label: "people talk to AI every week",
    population: "ChatGPT weekly active users · OpenAI, Feb 2026",
    width: 100,
  },
  {
    index: "02",
    figure: "84%",
    label: "of developers use or plan to use AI tools",
    population: "Stack Overflow Developer Survey 2025",
    width: 84,
  },
  {
    index: "03",
    figure: "14.1%",
    label: "use AI agents at work, daily",
    population: "Stack Overflow Developer Survey 2025",
    width: 14.1,
  },
  {
    index: "04",
    figure: "16.3%",
    label: "say their work changed to a great extent",
    population: "Stack Overflow Developer Survey 2025",
    width: 16.3,
    frontier: true,
  },
];

/** The gap, stated as a single comparison. */
const gap = {
  big: "900M chat. 70,000 build.",
  body: "Against 900 million weekly ChatGPT users, developers shipped just over 70,000 new public generative-AI projects in 2024. Talking to a model is table stakes. Building the thing that runs is the top 1%.",
  sources: [
    "70,000+ new public gen-AI projects, 2024 · GitHub Octoverse 2024",
    "98% year-over-year growth in gen-AI projects · GitHub Octoverse 2024",
  ],
};

const ease = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, margin: "-60px" } as const;

function FunnelBar({ tier, index }: { tier: Tier; index: number }) {
  const reduceMotion = useReducedMotion();
  const delay = reduceMotion ? 0 : index * 0.08;

  return (
    <motion.div
      className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-4 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-x-6"
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay, ease }}
    >
      <span
        aria-hidden="true"
        className="text-sm font-semibold tabular-nums tracking-[0.08em] text-white/54"
      >
        {tier.index}
      </span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span
            className={`font-display text-[clamp(2.25rem,6vw,4rem)] leading-none tracking-[-0.03em] ${
              tier.frontier ? "text-white" : "text-white/88"
            }`}
          >
            {tier.figure}
          </span>
          <span className="max-w-[26ch] text-base leading-snug text-white/72 md:text-lg">
            {tier.label}
          </span>
          {tier.frontier ? (
            <span className="ml-auto hidden border border-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:inline-block">
              you are here
            </span>
          ) : null}
        </div>

        <div aria-hidden="true" className="mt-4 h-2 w-full overflow-hidden bg-white/12">
          <motion.div
            className={`h-full origin-left ${tier.frontier ? "bg-white" : "bg-white/55"}`}
            style={{ width: `${tier.width}%` }}
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: delay + 0.1, ease }}
          />
        </div>

        <p className="mt-3 text-xs leading-relaxed tracking-[0.02em] text-white/48">
          {tier.population}
        </p>
      </div>
    </motion.div>
  );
}

export function TopPercent() {
  return (
    <section
      aria-labelledby="top-percent-title"
      className="section-anchor section-fill bg-[hsl(var(--foreground))] py-24 text-white md:py-36"
      id="top-percent"
    >
      <div className="page-shell">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/54">
            The numbers
          </p>
          <h2
            id="top-percent-title"
            className="font-display text-balance mt-5 max-w-[13ch] text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] tracking-[-0.03em]"
          >
            Are you in the top 1%?
          </h2>
          <p className="mt-7 max-w-[38rem] text-lg leading-relaxed text-white/70">
            Almost everyone uses AI. Almost nobody builds with it. The distance between those two
            sentences is the whole club.
          </p>
        </FadeUp>

        <div className="mt-16 space-y-12 border-t border-white/16 pt-12 md:space-y-14">
          {tiers.map((tier, index) => (
            <FunnelBar key={tier.index} tier={tier} index={index} />
          ))}
        </div>

        <FadeUp>
          <div className="mt-16 grid gap-8 border-t border-white/16 pt-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
            <p className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.02em]">
              {gap.big}
            </p>
            <div>
              <p className="max-w-[40rem] leading-relaxed text-white/72">{gap.body}</p>
              <ul className="mt-6 space-y-2">
                {gap.sources.map((source) => (
                  <li key={source} className="text-xs leading-relaxed tracking-[0.02em] text-white/48">
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
