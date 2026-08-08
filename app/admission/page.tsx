import type { Metadata } from "next";
import Link from "next/link";

import { RouteHero } from "@/components/route-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Admission" };

const evidence = [
  ["Something exists", "Share evidence of shipped work that we can inspect: a live product, repository, launch, system, or case study."],
  ["Your part is clear", "Tell us what you personally moved from uncertain to real. Specific decisions matter more than broad claims."],
  ["The drive is durable", "Show the problem, craft, or technology you keep returning to even when nobody is assigning the next task."],
  ["You add momentum", "The room works when members offer context, precise feedback, and energy instead of waiting to be entertained."],
] as const;

export default function AdmissionPage() {
  return (
    <main id="main-content">
      <RouteHero title="Show us what you shipped." description="Admission is for proven builders and founders. Potential is welcome everywhere; this room filters for evidence, agency, and sustained engagement." />
      <section className="bg-white py-24 md:py-36">
        <div className="page-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="font-display text-balance max-w-[10ch] text-[clamp(3.2rem,6vw,5.5rem)] lowercase leading-[0.9] tracking-[-0.03em]">A hard filter, clearly stated.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-black/62">We are protecting density, not performing exclusivity. A clear no is better than a loose bar that makes the room less useful for everyone.</p>
          </div>
          <ol className="border-t border-black/18">
            {evidence.map(([title, description]) => (
              <li key={title} className="grid gap-3 border-b border-black/18 py-7 sm:grid-cols-[0.42fr_1fr] sm:gap-8">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="max-w-2xl text-base leading-relaxed text-black/62">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-black py-24 text-white md:py-32">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display max-w-[10ch] text-[clamp(3.2rem,6vw,5.5rem)] lowercase leading-[0.9] tracking-[-0.03em]">If it exists, show it.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/64">There is no acceptance rate or response-time promise to publish yet. The application asks only for what we can evaluate honestly.</p>
          </div>
          <Link href="/#apply" className={cn(buttonVariants({ variant: "primary", size: "default" }), "focus-ring shrink-0")}>Apply with your work</Link>
        </div>
      </section>
    </main>
  );
}
