export const siteUrl = "https://firstartifact.org" as const;

export const siteName = "First Artifact" as const;

export const siteTagline = "Obsession beats talent" as const;

export const siteDescription =
  "A private club for the top 1% of builders and founders building with AI. Membership is earned through evidence of building, not interest, aspiration, or talk." as const;

export const discordInviteUrl = "https://discord.gg/3nqumWTuHb" as const;

/** External membership application form. */
export const applyFormUrl = "https://forms.gle/FGJtVdbWxTLgVsKA9" as const;

export type FounderProfile = {
  slug: string;
  name: string;
  image: string;
  building: { label: string; href?: string };
  /** One line of what the artifact took, for the Artifact Wall. */
  artifact: { note: string };
  bio: string;
  links: { label: string; href: string }[];
};

export const founders: FounderProfile[] = [
  {
    slug: "aryan-iyappan",
    name: "Aryan Iyappan",
    image: "/members/aryan-iyappan.webp",
    building: { label: "lamina.dev", href: "https://lamina.dev" },
    artifact: { note: "Shipping since 13. Turned down a standing Pinterest offer at 17 to go all in on a startup." },
    bio: "Building and shipping software since 13. Turned down a standing Pinterest offer at 17 to go all in on a startup. Built marketplaces and led OSS communities before.",
    links: [
      { label: "Portfolio", href: "https://aryaniyappan.com" },
      { label: "X", href: "https://x.com/aryaniyaps" },
      { label: "Instagram", href: "https://instagram.com/aryaniyaps" },
      { label: "LinkedIn", href: "https://linkedin.com/in/aryaniyaps" },
    ],
  },
  {
    slug: "gokul-ravi",
    name: "Gokul Ravi",
    image: "/members/gokul-ravi.webp",
    building: { label: "BountyKai", href: "https://bountykai.com/" },
    artifact: { note: "An autonomous AI pentesting platform, built by someone who has been shipping since 15." },
    bio: "Coding since 15. Started building and shipping products early, eventually going deep into AI and cybersecurity. Now fully focused on BountyKai, building an autonomous AI pentesting platform and exploring what AI-native security can look like.",
    links: [
      { label: "X", href: "https://x.com/gokul_r_14" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gokulravi333/" },
    ],
  },
  {
    slug: "yash-kulkarni",
    name: "Yash Kulkarni",
    image: "/members/yash-kulkarni.webp",
    building: { label: "PurpleRain", href: "https://purplerain.tech" },
    artifact: { note: "Two shipped companies, learned by breaking things, rebuilding them, and shipping anyway." },
    bio: "18-year-old technical founder, cybersecurity engineer, and student entrepreneur. Founder of PurpleRain and Codorra, focused on cybersecurity, infrastructure, and automation. Self-taught programmer who learned by breaking, rebuilding, and shipping.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yashkulkarni08" },
      { label: "Instagram", href: "https://instagram.com/quantum.cypher" },
      { label: "Cal", href: "https://cal.com/0day-yash/" },
    ],
  },
  {
    slug: "michael-abejo",
    name: "Michael Abejo",
    image: "/members/michael-abejo.webp",
    building: { label: "Capsul" },
    artifact: { note: "Five years of shipped product, now making software tangible." },
    bio: "Software engineer with 5+ years shipping product solutions to real-world problems. Currently building Capsul, driven by curiosity about what software can make tangible.",
    links: [
      { label: "X", href: "https://x.com/_NoNameWrath" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/abejomichael/" },
    ],
  },
  {
    slug: "advaith-vaithianathan",
    name: "Advaith Vaithianathan",
    image: "/members/advaith-vaithianathan.webp",
    building: { label: "Hydra Fund", href: "https://www.hydrafund.ch/" },
    artifact: { note: "An AI-native fund at 16, with research engineering on the FLARE+ CubeSat mission behind it." },
    bio: "16-year-old builder working across AI and capital. General partner of Hydra Fund, an AI-native fund. Background in full-stack and deterministic LLM systems, with NASA citizen-science work and research engineering on the FLARE+ CubeSat mission.",
    links: [
      { label: "GitHub", href: "https://github.com/cosmic-hydra" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/advaithvaithianathan/" },
    ],
  },
];

export const aboutPageDescription =
  "First Artifact is a private club for the top 1% of builders and founders building with AI. Obsession beats talent, and the proof is the artifact.";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, siteUrl).toString();
}
