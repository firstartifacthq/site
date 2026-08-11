import { EditorialRow } from "@/components/editorial-row";
import { FadeUp } from "@/components/fade-up";

const formats = [
  ["Hacker houses", "Live together long enough to turn loose ambition into concentrated work."],
  ["Hackathons", "Short, sharp constraints with a working artifact at the other end."],
  ["Buildathons", "Longer runs for products that need more than a weekend and less than a committee."],
  ["Member gatherings", "Meet the people behind the work, exchange context, and leave with the next move."],
] as const;

export function CommunityFormats() {
  return (
    <section
      aria-labelledby="formats-title"
      className="scroll-mt-8 bg-[hsl(var(--signal))] py-24 text-white md:py-36"
      id="formats"
    >
      <div className="page-shell">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.08em]">Intended formats</p>
          <h2
            id="formats-title"
            className="font-display text-balance mt-5 max-w-[14ch] text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.03em]"
          >
            Make progress feel like play
          </h2>
          <p className="mt-7 max-w-[40rem] text-lg leading-relaxed">
            Formats we intend to host. They are not past events, and no dates have been announced
            yet.
          </p>
        </FadeUp>

        <ul className="mt-14 border-t border-white/24 md:mt-20">
          {formats.map(([title, description], index) => (
            <EditorialRow
              key={title}
              index={index}
              className="grid gap-2 py-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12 md:py-9"
              ruleClassName="bg-white/24 group-hover:bg-white/45"
            >
              <h3 className="text-xl font-semibold leading-tight transition-transform duration-200 group-hover:translate-x-1.5 md:text-[1.5rem]">
                {title}
              </h3>
              <p className="max-w-[44rem] leading-relaxed">{description}</p>
            </EditorialRow>
          ))}
        </ul>
      </div>
    </section>
  );
}
