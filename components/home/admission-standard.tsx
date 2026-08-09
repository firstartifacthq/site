import { FadeUp } from "@/components/fade-up";

const standards = [
  ["Evidence", "You have shipped something real: a product, system, repository, launch, or body of work people can inspect."],
  ["Agency", "You notice what needs doing and move it forward. You do not need a community manager to manufacture momentum for you."],
  ["Engagement", "You want to contribute to the room, ask precise questions, share useful feedback, and build alongside other members."],
  ["Context", "You are familiar with what is moving in technology. The work can be AI or something else entirely."],
] as const;

export function AdmissionStandard() {
  return (
    <section aria-labelledby="standard-title" className="scroll-mt-8 bg-black py-24 text-white md:py-36" id="standard">
      <div className="page-shell">
        <FadeUp>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 id="standard-title" className="font-display text-balance max-w-[10ch] text-[clamp(3.4rem,7vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]">The bar is shipped work.</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/64">This is for builders and founders who have already crossed the distance between an idea and an artifact.</p>
            </div>
            <ol className="border-t border-white/22">
              {standards.map(([title, description]) => (
                <li key={title} className="grid gap-3 border-b border-white/22 py-6 sm:grid-cols-[0.35fr_1fr] sm:gap-8">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="max-w-2xl text-base leading-relaxed text-white/64">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
