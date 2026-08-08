import Image from "next/image";

import { ManifestoReveal } from "@/components/manifesto-reveal";

const beliefs = [
  ["Obsession beats talent", "Return longer."],
  ["Proof over promise", "Show the work."],
  ["Agency over permission", "Move first."],
  ["Build when nobody watches", "Earn the pattern."],
  ["Progress should feel fun", "Keep momentum playful."],
  ["Protect the density", "Keep the room rare."],
] as const;

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="relative overflow-hidden bg-black py-24 text-white md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute inset-y-0 left-[9%] border-l border-white/10" />
        <span className="absolute inset-y-0 right-[9%] border-r border-white/10" />
        <span className="absolute inset-x-0 top-[42%] border-t border-white/10" />
      </div>

      <div className="page-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <h2 id="manifesto-title" className="font-display text-balance max-w-[12ch] text-[clamp(3.4rem,8vw,6rem)] lowercase leading-[0.88] tracking-[-0.035em]">
            Talent is everywhere. Obsession is rare.
          </h2>

          <div aria-hidden="true" className="relative grid min-h-64 place-items-center overflow-hidden border-y border-white/20 md:min-h-[28rem]">
            <span className="absolute inset-y-0 left-1/2 border-l border-white/20" />
            <span className="absolute inset-x-0 top-1/2 border-t border-white/20" />
            <span className="absolute left-[12%] top-[12%] h-2 w-2 bg-[hsl(var(--signal))]" />
            <span className="absolute bottom-[12%] right-[12%] h-2 w-2 bg-[hsl(var(--signal))]" />
            <Image alt="" className="relative h-auto w-[min(64%,20rem)]" height={1254} src="/brand/first-artifact-logo.png" width={1254} />
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <ManifestoReveal text="A dense room where shipped work turns individual obsession into momentum." />

          <ul aria-label="Manifesto beliefs" className="grid border-t border-white/24 sm:grid-cols-2">
            {beliefs.map(([title, description], index) => (
              <li key={title} className={`flex min-h-28 gap-4 border-b border-white/24 py-5 ${index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"}`}>
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-[hsl(var(--signal))]" />
                <div>
                  <strong className="text-base font-semibold">{title}</strong>
                  <p className="mt-1 text-sm leading-relaxed text-white/64">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
