import { FadeUp } from "@/components/fade-up";

const notes = [
  {
    title: "High agency",
    body: "You notice what needs doing and move it. Nobody manufactures momentum for you.",
  },
  {
    title: "Obsession",
    body: "Why you build — the personal story that keeps you returning to the same problem.",
  },
  {
    title: "Traction",
    body: "Something real is already moving: a shipped product, users, revenue, or public weight.",
  },
] as const;

export function AdmissionStandard() {
  return (
    <section
      aria-labelledby="standard-title"
      className="scroll-mt-8 bg-[hsl(var(--foreground))] py-24 text-white md:py-36"
      id="standard"
    >
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/54">
              The standard
            </p>
            <h2
              id="standard-title"
              className="font-display text-balance mt-5 max-w-[11ch] text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.03em]"
            >
              What we look for
            </h2>
            <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/70">
              Membership is earned through evidence of building — not interest, aspiration,
              credentials, or talk.
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="border-t border-white/16">
              {notes.map((note, index) => (
                <li
                  key={note.title}
                  className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-5 border-b border-white/16 py-7 md:grid-cols-[4rem_minmax(0,1fr)] md:py-9"
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 text-sm font-semibold tabular-nums tracking-[0.08em] text-white/54"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-tight md:text-[1.375rem]">
                      {note.title}
                    </h3>
                    <p className="mt-3 max-w-[38rem] leading-relaxed text-white/70">{note.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
