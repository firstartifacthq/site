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
      <section id="apply" aria-labelledby="apply-title">
        <h2 id="apply-title">Apply with your work</h2>
        <p>The first filter is simple: show us what exists, what you did, and the problem you keep returning to.</p>
        <ApplicationForm />
      </section>
      <ClosingSignal />
    </main>
  );
}
