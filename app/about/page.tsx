import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { applyFormUrl, discordInviteUrl, siteDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: siteDescription,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <LegalPage eyebrow="About" title="What First Artifact is">
      <p>
        First Artifact is a private club for proven, high-agency builders and founders. The filter is
        evidence of building — shipped work, obsession, and traction — not interest, aspiration,
        credentials, or talk alone.
      </p>
      <p>
        The belief is simple: obsession beats talent, and the proof is the artifact. Most rooms
        reward conversation. This one is for people who move from uncertainty to a shipped thing,
        then keep going with peers who compound both the work and the question behind it.
      </p>
      <p>
        First Artifact is not a funding accelerator, not an open Discord growth play, and not
        affiliated with Founders, Inc. Artifact or any similarly named program. Apply with the work.
        If you are still early, the Discord is the softer on-ramp while you keep shipping.
      </p>
      <p>
        Formats we intend to host — hacker houses, hackathons, buildathons, and member gatherings —
        are designed around momentum. They are not past events until dates are announced.
      </p>
      <p>
        <Link className="font-semibold text-[hsl(var(--signal))] underline-offset-2 hover:underline" href={applyFormUrl} rel="noopener noreferrer" target="_blank">
          Apply with your work
        </Link>
        {" · "}
        <Link className="font-semibold text-[hsl(var(--signal))] underline-offset-2 hover:underline" href={discordInviteUrl} rel="noopener noreferrer" target="_blank">
          Join the Discord
        </Link>
        {" · "}
        <Link className="font-semibold text-[hsl(var(--signal))] underline-offset-2 hover:underline" href="/#standard">
          Read the standard
        </Link>
      </p>
    </LegalPage>
  );
}
