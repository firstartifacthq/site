import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { gocake, sourceSans } from "@/lib/fonts";
import { buildOrganizationJsonLd } from "@/lib/json-ld";
import { siteDescription, siteName, siteTagline, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName}: Private club for the top 1% building with AI`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName}: ${siteTagline}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName}: ${siteTagline}`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ef0000",
};

const directionContract = `<!-- IMPECCABLE DIRECTION CONTRACT
THESIS: Obsession appears larger than life, then resolves into a rigorous community story for the top 1% building with AI instead of a generic exclusive-club pitch.
OWN-WORLD: A vivid signal-red character tableau with stacked GoCake type; downstream signal red and white, lowercase GoCake declarations, Source Sans UI, sparse line grid, no glass effects.
STORY: Visitors recognize the belief, read a red manifesto transmission, see a high bar and founding members, then apply through the external form.
FIRST VIEWPORT: Fixed signal-red navigation above oversized stacked OBSESS lettering, a vivid character portrait, scroll-resolving principle words, and a compact marquee.
FORM: Centered Signal Portal, composition 1, seed 85348e02.
FINISH: Tight groups, generous section space, crisp 1px lines, solid surfaces, visible focus, reduced-motion fallback, no invented proof.
-->`;

const jsonLd = buildOrganizationJsonLd();

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${gocake.variable}`}>
        <template data-impeccable-contract dangerouslySetInnerHTML={{ __html: directionContract }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
