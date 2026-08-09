import Image from "next/image";

import { FadeUp } from "@/components/fade-up";

const notes = [
  {
    title: "High agency",
    body: "You notice what needs doing and move it. Nobody manufactures momentum for you.",
    tilt: "-rotate-[2.5deg]",
    offset: "sm:mt-8",
  },
  {
    title: "Obsession",
    body: "Why you build — the personal story that keeps you returning to the same problem.",
    tilt: "rotate-[1.75deg]",
    offset: "sm:mt-0",
  },
  {
    title: "Traction",
    body: "Something real is already moving: a shipped product, users, revenue, or public weight.",
    tilt: "-rotate-[1.25deg]",
    offset: "sm:mt-12",
  },
] as const;

export function AdmissionStandard() {
  return (
    <section
      aria-labelledby="standard-title"
      className="relative scroll-mt-8 overflow-hidden bg-[hsl(var(--signal))] py-24 text-white md:py-36"
      id="standard"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[92%] sm:w-[78%] lg:w-[64%]"
      >
        <Image
          alt=""
          className="absolute -left-[38%] top-[4%] w-[195%] max-w-none -rotate-[30deg] drop-shadow-[0_48px_90px_rgba(0,0,0,0.4)] sm:-left-[30%] sm:top-0 sm:w-[175%] sm:-rotate-[34deg] lg:-left-[26%] lg:-top-[4%] lg:w-[160%]"
          height={363}
          sizes="(max-width: 1024px) 140vw, 80vw"
          src="/images/standard-keyboard.png"
          width={1019}
        />
      </div>

      <div className="page-shell relative z-10">
        <FadeUp>
          <h2
            id="standard-title"
            className="font-display text-balance relative max-w-[14ch] text-[clamp(3.4rem,7vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]"
          >
            What we look for
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <ul className="mt-14 flex flex-col gap-5 sm:mt-16 sm:flex-row sm:justify-end sm:gap-4 md:mt-20 md:gap-5 lg:mt-10 lg:min-h-[22rem] lg:items-center">
            {notes.map((note) => (
              <li
                key={note.title}
                className={`bg-white p-6 text-black shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:w-[11.25rem] sm:shrink-0 sm:p-7 md:w-[13rem] lg:w-[14.5rem] ${note.tilt} ${note.offset}`}
              >
                <h3 className="text-lg font-semibold tracking-[-0.015em] md:text-xl">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/64">{note.body}</p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
