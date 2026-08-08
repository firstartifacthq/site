import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";

import { RouteHero } from "@/components/route-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "FAQ" };

const questions = [
  ["Who is First Artifact for?", "Proven builders and founders with high agency: people who have shipped something real and want to keep building around others who do the same."],
  ["Does my work need to be in AI?", "No. You should understand what is moving in technology, but your strongest work does not need to be an AI product."],
  ["What counts as shipped work?", "A live product, repository, launch, system, published project, or case study that lets us understand what exists and what you contributed."],
  ["How many members are there?", "There are five founding members today. Their public profiles are pending approved names, photos, and biographies."],
  ["What does membership cost?", "Pricing has not been announced. We will not invent a fee or ask you to commit without clear terms."],
  ["When will events happen?", "No dates or locations are announced yet. Hacker houses, hackathons, buildathons, and member gatherings are intended formats, not past-event claims."],
  ["What happens after I apply?", "The site currently validates and preserves your application locally, but submissions are not connected to a backend yet. Response timing will be published when that workflow exists."],
] as const;

export default function FaqPage() {
  return (
    <main id="main-content">
      <RouteHero title="Straight answers." description="The club is early. Where a decision has not been made, we say so instead of manufacturing certainty." />
      <section className="bg-white py-24 md:py-36">
        <div className="page-shell grid gap-14 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <h2 className="font-display max-w-[10ch] text-[clamp(3.2rem,6vw,5.5rem)] lowercase leading-[0.9] tracking-[-0.03em]">What we know now.</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-black/62">This page will grow as operating details become real.</p>
          </div>
          <div className="border-t border-black/18">
            {questions.map(([question, answer]) => (
              <details key={question} className="group border-b border-black/18">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-6 text-lg font-semibold">
                  {question}
                  <Plus aria-hidden="true" className="shrink-0 transition-transform duration-200 group-open:rotate-45" size={21} />
                </summary>
                <p className="max-w-2xl pb-7 pr-10 text-base leading-relaxed text-black/62">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black py-24 text-white md:py-32">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-[12ch] text-[clamp(3.2rem,6vw,5.5rem)] lowercase leading-[0.9] tracking-[-0.03em]">Still feel the signal?</h2>
          <Link href="/#apply" className={cn(buttonVariants({ variant: "primary" }), "focus-ring shrink-0")}>Apply with your work</Link>
        </div>
      </section>
    </main>
  );
}
