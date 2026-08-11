import { EditorialRow } from "@/components/editorial-row";
import { FadeUp } from "@/components/fade-up";
import type { ReactNode } from "react";

type Format = {
  title: string;
  description: string;
  mark: ReactNode;
};

function FormatMark({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center text-white/72 transition-colors duration-200 group-hover:text-white"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        focusable="false"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </span>
  );
}

const formats: Format[] = [
  {
    title: "Hacker houses",
    description: "Live together long enough to turn loose ambition into concentrated work.",
    mark: (
      <FormatMark>
        <path d="M4 20V10.5L12 4l8 6.5V20" />
        <path d="M9 20v-6h6v6" />
      </FormatMark>
    ),
  },
  {
    title: "Hackathons",
    description: "Short, sharp constraints with a working artifact at the other end.",
    mark: (
      <FormatMark>
        <path d="M13 3 7 13h5l-1 8 6-10h-5z" />
      </FormatMark>
    ),
  },
  {
    title: "Buildathons",
    description: "Longer runs for products that need more than a weekend and less than a committee.",
    mark: (
      <FormatMark>
        <path d="M4 18h4V14H4z" />
        <path d="M10 18h4V10h-4z" />
        <path d="M16 18h4V6h-4z" />
      </FormatMark>
    ),
  },
  {
    title: "Member gatherings",
    description: "Meet the people behind the work, exchange context, and leave with the next move.",
    mark: (
      <FormatMark>
        <path d="M5 7h5v5H5z" />
        <path d="M14 7h5v5h-5z" />
        <path d="M9.5 14h5v5h-5z" />
        <path d="M10 9.5h4M10.5 12v2M13.5 12v2" />
      </FormatMark>
    ),
  },
];

export function CommunityFormats() {
  return (
    <section
      aria-labelledby="formats-title"
      className="section-anchor section-fill bg-[hsl(var(--signal))] py-24 text-white md:py-36"
      id="formats"
    >
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-24">
          <FadeUp className="lg:sticky lg:top-[calc(var(--anchor-offset)+1.5rem)]">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/54">
              Intended formats
            </p>
            <h2
              id="formats-title"
              className="font-display text-balance mt-5 max-w-[12ch] lowercase text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.03em]"
            >
              Make progress feel like play
            </h2>
            <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/72">
              Formats we intend to host. They are not past events, and no dates have been announced
              yet.
            </p>
          </FadeUp>

          <ul className="border-t border-white/24">
            {formats.map((format, index) => (
              <EditorialRow
                key={format.title}
                index={index}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 py-7 md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-5 md:py-9"
                ruleClassName="bg-white/24 group-hover:bg-white/50"
              >
                {format.mark}
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-tight transition-transform duration-200 group-hover:translate-x-1.5">
                    {format.title}
                  </h3>
                  <p className="mt-2 max-w-[38rem] leading-relaxed text-white/72 md:mt-3">
                    {format.description}
                  </p>
                </div>
              </EditorialRow>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
