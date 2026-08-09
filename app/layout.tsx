import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { gocake, sourceSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "First Artifact — Obsession beats talent",
    template: "%s — First Artifact",
  },
  description: "A private club for proven, high-agency builders and founders.",
  icons: { icon: "/brand/first-artifact-logo.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ef0000",
};

const directionContract = `<!-- IMPECCABLE DIRECTION CONTRACT
THESIS: Obsession appears larger than life, then resolves into a rigorous community story instead of a generic exclusive-club pitch.
OWN-WORLD: A vivid signal-red character tableau with stacked GoCake type; downstream signal red and white, lowercase GoCake declarations, Source Sans UI, sparse line grid, no glass effects.
STORY: Visitors recognize the belief, read a red manifesto transmission, see a high bar and five founding placeholders, then apply with shipped work.
FIRST VIEWPORT: Fixed signal-red navigation above oversized stacked OBSESS lettering, a vivid character portrait, scroll-resolving principle words, and a compact marquee.
FORM: Centered Signal Portal, composition 1, seed 85348e02.
FINISH: Tight groups, generous section space, crisp 1px lines, solid surfaces, visible focus, reduced-motion fallback, no invented proof.
-->`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${gocake.variable}`}>
        <template data-impeccable-contract dangerouslySetInnerHTML={{ __html: directionContract }} />
        <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
