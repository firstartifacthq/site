import type { Metadata } from "next";
import Link from "next/link";

import { RouteHero } from "@/components/route-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Events" };

const formats = [
  ["Hacker houses", "Focused time together for members who want immersion, proximity, and a serious run at the work."],
  ["Hackathons", "A sharp problem, a short clock, and working artifacts instead of slide decks."],
  ["Buildathons", "Longer collaborative runs with enough time for testing, iteration, and useful feedback."],
  ["Member gatherings", "Small conversations for exchanging context, meeting collaborators, and finding the next move."],
] as const;

export default function EventsPage() {
  return (
    <main id="main-content">
      <RouteHero title="Build in the same room." description="The community should create momentum you can feel: shared constraints, fast feedback, visible progress, and enough play to make people want another round." />
      <section className="bg-white py-24 md:py-36">
        <div className="page-shell">
          <div className="max-w-3xl border-y border-black/18 py-6">
            <p className="text-lg font-semibold">No events are announced yet.</p>
            <p className="mt-2 leading-relaxed text-black/62">The formats below describe what we intend to host. They are not a record of past events, partners, dates, or locations.</p>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <h2 className="font-display max-w-[10ch] text-[clamp(3.2rem,6vw,5.5rem)] lowercase leading-[0.9] tracking-[-0.03em]">Events with an output.</h2>
            <div className="border-t border-black/18">
              {formats.map(([title, description]) => (
                <article key={title} className="grid gap-3 border-b border-black/18 py-7 sm:grid-cols-[0.44fr_1fr] sm:gap-8">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="max-w-xl leading-relaxed text-black/62">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="signal-field relative py-24 text-white md:py-32">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-[12ch] text-[clamp(3.2rem,6vw,5.5rem)] lowercase leading-[0.9] tracking-[-0.03em]">The first room starts with the first members.</h2>
          <Link href="/#apply" className={cn(buttonVariants({ variant: "primary" }), "focus-ring shrink-0")}>Apply with your work</Link>
        </div>
      </section>
    </main>
  );
}
