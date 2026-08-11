import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { applyFormUrl, discordInviteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the First Artifact website and applying to the club.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Terms" title="Terms of use">
      <p>Last updated: August 11, 2026.</p>
      <p>
        By using https://firstartifact.org, applying to First Artifact, or joining related community
        channels, you agree to these terms.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        The club
      </h2>
      <p>
        First Artifact is a selective private club for proven builders and founders. Submission of an
        application does not guarantee membership. We may accept, decline, or pause applications at
        our discretion based on the published standard and the needs of the room.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Accurate information
      </h2>
      <p>
        When you
        {" "}
        <Link className="font-semibold text-[hsl(var(--signal))] underline-offset-2 hover:underline" href={applyFormUrl} rel="noopener noreferrer" target="_blank">
          apply
        </Link>
        , you agree to provide accurate information about your work. Misrepresentation is grounds for
        rejection or removal.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Community conduct
      </h2>
      <p>
        Discord and future in-person formats are for people who ship and treat peers with respect. We
        may remove access for harassment, spam, bad-faith behavior, or anything that lowers the
        ceiling of the room. Discord’s own terms also apply when you use that platform via our
        {" "}
        <Link className="font-semibold text-[hsl(var(--signal))] underline-offset-2 hover:underline" href={discordInviteUrl} rel="noopener noreferrer" target="_blank">
          invite
        </Link>
        .
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Site content
      </h2>
      <p>
        Site copy, branding, and media are provided for informational purposes. Do not scrape the
        site for model training where our robots and Content-Signal instructions disallow it. Do not
        present First Artifact as affiliated with unrelated “Artifact” programs or accelerators.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        No warranties
      </h2>
      <p>
        The website and community are provided as-is. We do not guarantee funding, employment,
        outcomes, or uninterrupted access. Participation should feel worthwhile; it is not a
        substitute for your own judgment about legal, financial, or technical decisions.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Changes
      </h2>
      <p>
        We may update these terms as the club evolves. Continued use after an update constitutes
        acceptance of the revised terms.
      </p>
    </LegalPage>
  );
}
