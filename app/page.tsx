import { AdmissionStandard } from "@/components/home/admission-standard";
import { Apply } from "@/components/home/apply";
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
      <Apply />
      <ClosingSignal />
    </main>
  );
}
