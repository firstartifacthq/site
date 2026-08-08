import { ArrowDownRight } from "lucide-react";

const formats = [
  ["Hacker houses", "Live together long enough to turn loose ambition into concentrated work."],
  ["Hackathons", "Short, sharp constraints with a working artifact at the other end."],
  ["Buildathons", "Longer runs for products that need more than a weekend and less than a committee."],
  ["Member gatherings", "Meet the people behind the work, exchange context, and leave with the next move."],
] as const;

export function CommunityFormats() {
  return (
    <section className="signal-field relative overflow-hidden py-24 text-white md:py-36">
      <div className="page-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="font-display text-balance max-w-[11ch] text-[clamp(3.4rem,7vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]">Make progress feel like play.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white">Formats we intend to host. They are not past events, and no dates have been announced yet.</p>
          </div>
          <div className="border-t border-white/34">
            {formats.map(([title, description]) => (
              <article key={title} className="grid gap-3 border-b border-white/34 py-6 sm:grid-cols-[0.55fr_1fr_auto] sm:items-start sm:gap-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="max-w-xl leading-relaxed text-white">{description}</p>
                <ArrowDownRight aria-hidden="true" className="hidden sm:block" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
