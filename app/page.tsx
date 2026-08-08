import { ApplicationForm } from "@/components/application-form";
import { AdmissionStandard } from "@/components/home/admission-standard";
import { ClosingSignal } from "@/components/home/closing-signal";
import { CommunityFormats } from "@/components/home/community-formats";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Manifesto } from "@/components/home/manifesto";
import { Members } from "@/components/home/members";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Marquee />
      <Manifesto />
      <AdmissionStandard />
      <Members />
      <CommunityFormats />
      <section id="apply" aria-labelledby="apply-title" className="signal-field relative scroll-mt-8 overflow-hidden py-24 text-white md:py-36">
        <div className="page-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <h2 id="apply-title" className="font-display text-balance max-w-[10ch] text-[clamp(3.4rem,7vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]">Apply with your work.</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white">The first filter is simple: show us what exists, what you did, and the problem you keep returning to.</p>
            </div>
            <div className="border border-white/64 bg-white p-5 text-black md:p-8">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>
      <ClosingSignal />
    </main>
  );
}
