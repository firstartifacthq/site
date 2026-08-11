import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { applyFormUrl, discordInviteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How First Artifact handles application and site data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacy policy">
      <p>Last updated: August 11, 2026.</p>
      <p>
        First Artifact (“we”, “us”) operates https://firstartifact.org. This policy explains what
        information we collect when you use the site or apply to the club, and how that information
        is used.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Information you provide
      </h2>
      <p>
        Membership applications are submitted through an external Google Form (
        <Link className="font-semibold text-[hsl(var(--signal))] underline-offset-2 hover:underline" href={applyFormUrl} rel="noopener noreferrer" target="_blank">
          apply form
        </Link>
        ). Responses you enter there — such as your name, contact details, links to work, and answers
        about your building history — are collected and stored by Google on our behalf under Google’s
        terms and privacy policy. We use that information only to evaluate membership and communicate
        about your application.
      </p>
      <p>
        If you join our Discord (
        <Link className="font-semibold text-[hsl(var(--signal))] underline-offset-2 hover:underline" href={discordInviteUrl} rel="noopener noreferrer" target="_blank">
          community invite
        </Link>
        ), Discord processes account and message data under Discord’s own policies.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Information collected automatically
      </h2>
      <p>
        Like most websites, our hosting and CDN providers (including Cloudflare) may process technical
        logs such as IP address, user agent, referrer, and request timing to operate, secure, and
        debug the site. We may also use privacy-oriented analytics (for example Cloudflare Web
        Analytics) that do not rely on invasive cross-site advertising profiles.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        How we use information
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Review applications and operate the membership process</li>
        <li>Communicate about club updates you request</li>
        <li>Keep the website reliable and secure</li>
      </ul>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Sharing
      </h2>
      <p>
        We do not sell personal information. Application data may be visible to founding operators
        reviewing membership. Infrastructure providers process data as needed to host forms, Discord,
        and the website.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Retention and your choices
      </h2>
      <p>
        We retain application information as long as needed for membership decisions and club
        operations, then delete or minimize it when it is no longer required. To request access or
        deletion of application data we control, contact the operators via the Discord or the email
        address used in your application correspondence.
      </p>
      <h2 className="pt-4 font-sans text-2xl font-semibold tracking-[-0.02em] text-black">
        Changes
      </h2>
      <p>
        We may update this policy as the club’s tooling changes. The “Last updated” date above will
        change when we do. Continued use of the site after an update means you accept the revised
        policy.
      </p>
    </LegalPage>
  );
}
