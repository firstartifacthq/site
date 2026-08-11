import Image from "next/image";

import { ManifestoVideo } from "@/components/home/manifesto-video";

const creed = [
  {
    title: "Who we’re for",
    items: [
      ["Builders and founders", "who ship, not people who talk about shipping."],
      ["High-agency people", "who just keep going — no permission, no roadmap, no waiting."],
      ["People who’ve already built something good", "proven, not aspiring."],
      ["People who live in the space", "and actually care where it’s heading. Doesn’t have to be AI."],
    ],
    note: "The test: is this the thing you think about all the time?",
  },
  {
    title: "The bar",
    items: [
      ["High to get in, and it stays high", "no loose filter, no “close enough.”"],
      ["Built, not interesting", "you get in by having built, not by being interesting in a room."],
      ["No weak yeses", "one weak yes lowers the ceiling for everyone."],
      ["Scarcity earns the room", "a hard filter keeps the room worth being in."],
    ],
  },
  {
    title: "What it feels like",
    items: [
      ["Agency", "you own what you’re doing."],
      ["Progress", "you can see yourself moving."],
      ["Optimal challenge", "hard enough to matter, not so hard you stall."],
      ["Feedback", "you find out fast whether it worked."],
    ],
    note: "Get those right and nobody needs to be told to show up.",
  },
  {
    title: "What we do",
    items: [
      ["Put the obsessed in the same room", "and get out of the way."],
      ["Run events that build momentum", "hacker houses, hackathons, buildathons."],
      ["Stay genuinely different", "if it already exists, we’re not building it."],
    ],
  },
] as const;

function RoseVine({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 z-[15] w-[min(72vw,38rem)] -translate-y-1/2 overflow-hidden md:w-[min(48vw,42rem)] ${isLeft ? "left-0" : "right-0"}`}
    >
      <div className={`relative aspect-[16/9] w-full ${isLeft ? "" : "-scale-x-100"}`}>
        <Image
          alt=""
          className="object-contain object-left opacity-[0.92]"
          fill
          sizes="(max-width: 768px) 72vw, 42rem"
          src="/manifesto/rose-vine.webp"
        />
      </div>
    </div>
  );
}

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="relative z-10 flex min-h-screen w-full scroll-mt-24 flex-col overflow-hidden bg-[hsl(var(--signal))] text-white" id="manifesto">
      <div className="relative flex min-h-0 flex-1 flex-col">
        <RoseVine side="left" />
        <RoseVine side="right" />

        <div className="relative z-20 mx-auto flex w-full max-w-[52rem] flex-1 flex-col items-center justify-center px-6 py-16 text-center md:justify-end md:px-10 md:pb-8 md:pt-28">
          <h2 id="manifesto-title" className="max-w-[18ch] font-sans text-balance text-[clamp(2rem,7vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Obsession beats talent everytime
          </h2>
          <p className="mt-4 max-w-[28ch] font-sans text-[clamp(1.05rem,2.4vw,1.375rem)] font-normal leading-[1.45] text-white/78">
            and the proof is the artifact.
          </p>

          <div className="mt-8 flex w-full max-w-[38rem] flex-col items-center gap-5 font-sans text-[clamp(1.125rem,2.4vw,1.375rem)] font-normal leading-[1.55] text-white">
            <p>
              Most rooms reward talk. First Artifact is for builders who move from uncertainty to a shipped thing.
            </p>
            <p>
              Bring the work, the question you cannot drop, and find peers who compound both.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full shrink-0 border-t border-white/24">
        <div className="page-shell py-14 md:py-20">
          <ul>
            {creed.map(({ title, items, ...rest }) => {
              const note = "note" in rest ? rest.note : undefined;

              return (
                <li
                  key={title}
                  className="grid gap-4 border-b border-white/24 py-7 md:grid-cols-[minmax(0,0.26fr)_minmax(0,0.74fr)] md:gap-10"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">{title}</h3>

                  <div>
                    <ul className="grid gap-2.5 leading-snug">
                      {items.map(([lead, rest]) => (
                        <li key={lead} className="max-w-[52rem]">
                          <span className="font-semibold">{lead}</span>
                          {" — "}
                          {rest}
                        </li>
                      ))}
                    </ul>

                    {note ? <p className="mt-4 font-semibold">{note}</p> : null}
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 text-lg font-semibold md:mt-12 md:text-xl">
            That’s the whole thing.
          </p>
        </div>
      </div>

      <div className="relative w-full shrink-0">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[hsl(var(--signal))] to-transparent" />
        <ManifestoVideo />
      </div>
    </section>
  );
}
