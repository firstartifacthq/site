import { FadeUp } from "@/components/fade-up";

const answers = [
  {
    id: "what-is-first-artifact",
    question: "What is First Artifact?",
    answer:
      "First Artifact is a private club for proven, high-agency builders and founders. The premise is that obsession beats talent, and the proof is the artifact — the shipped thing that makes the claim real. Most rooms reward talk; this one is for people who move from uncertainty to a working product, then keep compounding with peers who care about the same hard problems. It is a membership community, not a funding accelerator, and it is not affiliated with Founders, Inc. Artifact or any similarly named program.",
  },
  {
    id: "who-gets-in",
    question: "Who gets in?",
    answer:
      "Membership is earned through evidence of building — not interest, aspiration, credentials, or talk alone. We look for high agency (you move work without waiting to be managed), obsession (a personal reason you return to the same problem), and traction (something real already moving: a shipped product, users, revenue, or public weight). The bar is high on the way in and stays high. One weak yes lowers the ceiling for everyone, so scarcity is part of what keeps the room worth being in.",
  },
  {
    id: "what-formats",
    question: "What formats does the club run?",
    answer:
      "The intended formats are hacker houses, hackathons, buildathons, and member gatherings — structures meant to turn loose ambition into concentrated work and make progress feel like play. They are shaped so participation feels worthwhile rather than like another recurring obligation. These formats are not past events yet; no public dates have been announced. Until then, the on-ramps are applying with shipped work or joining the Discord to meet the room while you keep building.",
  },
] as const;

export function ClubAnswers() {
  return (
    <section
      aria-labelledby="answers-title"
      className="section-anchor section-fill bg-white py-24 text-[hsl(var(--foreground))] md:py-36"
      id="answers"
    >
      <div className="page-shell">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/54">
            Straight answers
          </p>
          <h2
            id="answers-title"
            className="font-display text-balance mt-5 max-w-[14ch] text-[clamp(3rem,6.5vw,5.25rem)] leading-[0.9] tracking-[-0.03em]"
          >
            What you need to know
          </h2>
        </FadeUp>

        <ul className="mt-14 border-t border-black/12">
          {answers.map((item) => (
            <li key={item.id} className="border-b border-black/12 py-8 md:py-10">
              <h3 className="max-w-[28ch] text-2xl font-semibold tracking-[-0.02em] md:text-[1.75rem]">
                {item.question}
              </h3>
              <p className="mt-4 max-w-[46rem] text-base leading-relaxed text-black/72 md:text-lg">
                {item.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
