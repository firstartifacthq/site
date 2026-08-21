import { AdmissionStandard } from "@/components/home/admission-standard";
import { ClosingSignal } from "@/components/home/closing-signal";
import { ClubAnswers } from "@/components/home/club-answers";
import { CommunityFormats } from "@/components/home/community-formats";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Manifesto } from "@/components/home/manifesto";
import { Members } from "@/components/home/members";
import { TopPercent } from "@/components/home/top-percent";
import { WorkingModel } from "@/components/home/working-model";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Marquee />
      <Manifesto />
      <AdmissionStandard />
      <Members />
      <TopPercent />
      <CommunityFormats />
      <WorkingModel />
      <ClubAnswers />
      <ClosingSignal />
    </main>
  );
}
