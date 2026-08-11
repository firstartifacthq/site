import {
  absoluteUrl,
  applyFormUrl,
  discordInviteUrl,
  founders,
  siteDescription,
  siteName,
  siteTagline,
  siteUrl,
} from "@/lib/site";

export function buildOrganizationJsonLd() {
  const organizationId = absoluteUrl("/#organization");
  const websiteId = absoluteUrl("/#website");
  const webpageId = absoluteUrl("/#webpage");

  const people = founders.map((founder) => {
    const personId = absoluteUrl(`/#person-${founder.slug}`);
    const sameAs = [
      ...(founder.building.href ? [founder.building.href] : []),
      ...founder.links.map((link) => link.href),
    ];

    return {
      "@type": "Person" as const,
      "@id": personId,
      name: founder.name,
      image: absoluteUrl(founder.image),
      description: founder.bio,
      ...(founder.links[0] ? { url: founder.links[0].href } : {}),
      worksFor: { "@id": organizationId },
      sameAs,
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Club"],
        "@id": organizationId,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/brand/favicon.svg"),
        },
        description: siteDescription,
        slogan: siteTagline,
        sameAs: [discordInviteUrl],
        member: people.map((person) => ({ "@id": person["@id"] })),
        potentialAction: {
          "@type": "JoinAction",
          name: "Apply",
          target: applyFormUrl,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: { "@id": organizationId },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: siteUrl,
        name: `${siteName} — ${siteTagline}`,
        description: siteDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/brand/favicon.svg"),
        },
      },
      ...people,
    ],
  };
}
