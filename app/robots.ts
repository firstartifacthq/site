import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * Prefer allowing search + AI retrieval while signaling no training use.
 * Cloudflare AI Crawl Control may still inject managed rules at the edge;
 * keep that panel aligned with this file (allow GPTBot/ClaudeBot/Google-Extended/CCBot
 * if you want citations and web-graph visibility; keep training opt-out via Content-Signal).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
