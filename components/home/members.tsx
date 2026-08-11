import Image from "next/image";

import { FadeUp } from "@/components/fade-up";

type MemberProfile = {
  slug: string;
  name: string;
  image: string;
  /** `href` is omitted until the project's public URL is confirmed. */
  building: { label: string; href?: string };
  bio: string;
  links: { label: string; href: string }[];
};

type MemberSlot =
  | { kind: "profile"; profile: MemberProfile }
  /** `image` appears once an approved portrait arrives but the name and
   *  biography are still outstanding; the slot stays labelled by index. */
  | { kind: "pending"; index: number; image?: string };

const members: MemberSlot[] = [
  {
    kind: "profile",
    profile: {
      slug: "aryan-iyappan",
      name: "Aryan Iyappan",
      image: "/members/aryan-iyappan.webp",
      building: { label: "lamina.dev", href: "https://lamina.dev" },
      bio: "Building and shipping software since 13. Turned down a standing Pinterest offer at 17 to go all in on a startup. Built marketplaces and led OSS communities before.",
      links: [
        { label: "Portfolio", href: "https://aryaniyappan.com" },
        { label: "X", href: "https://x.com/aryaniyaps" },
        { label: "Instagram", href: "https://instagram.com/aryaniyaps" },
        { label: "LinkedIn", href: "https://linkedin.com/in/aryaniyaps" },
      ],
    },
  },
  {
    kind: "profile",
    profile: {
      slug: "gokul-ravi",
      name: "Gokul Ravi",
      image: "/members/gokul-ravi.webp",
      building: { label: "BountyKai", href: "https://bountykai.com/" },
      bio: "Coding since 15. Started building and shipping products early, eventually going deep into AI and cybersecurity. Now fully focused on BountyKai, building an autonomous AI pentesting platform and exploring what AI-native security can look like.",
      links: [
        { label: "X", href: "https://x.com/gokul_r_14" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/gokulravi333/" },
      ],
    },
  },
  {
    kind: "profile",
    profile: {
      slug: "yash-kulkarni",
      name: "Yash Kulkarni",
      image: "/members/yash-kulkarni.webp",
      building: { label: "PurpleRain", href: "https://purplerain.tech" },
      bio: "18-year-old technical founder, cybersecurity engineer, and student entrepreneur. Founder of PurpleRain and Codorra, focused on cybersecurity, infrastructure, and automation. Self-taught programmer who learned by breaking, rebuilding, and shipping.",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/yashkulkarni08" },
        { label: "Instagram", href: "https://instagram.com/quantum.cypher" },
        { label: "Cal", href: "https://cal.com/0day-yash/" },
      ],
    },
  },
  {
    kind: "profile",
    profile: {
      slug: "michael-abejo",
      name: "Michael Abejo",
      image: "/members/michael-abejo.webp",
      building: { label: "Capsul" },
      bio: "Software engineer with 5+ years building product solutions to real-world problems. Tech enthusiast, driven by curiosity.",
      links: [
        { label: "X", href: "https://x.com/_NoNameWrath" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/abejomichael/" },
      ],
    },
  },
  { kind: "pending", index: 5, image: "/members/founding-member-05.webp" },
];

function MemberSignal() {
  return (
    <div aria-hidden="true" className="relative h-18 w-18 overflow-hidden bg-[hsl(var(--signal))] sm:aspect-square sm:h-auto sm:w-full">
      <div className="absolute inset-y-0 left-1/2 border-l border-white/36" />
      <div className="absolute inset-x-0 top-1/2 border-t border-white/36" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </div>
  );
}

function MemberPortrait({ src }: { src: string }) {
  return (
    <div className="relative h-18 w-18 overflow-hidden bg-[hsl(var(--signal))] sm:aspect-square sm:h-auto sm:w-full">
      <Image
        alt=""
        className="object-cover"
        fill
        sizes="(max-width: 640px) 4.5rem, (max-width: 1024px) 40vw, 12vw"
        src={src}
      />
    </div>
  );
}

export function Members() {
  return (
    <section aria-labelledby="team-title" className="section-anchor section-fill bg-white py-24 md:py-36" id="team">
      <div className="page-shell">
        <FadeUp>
          <h2 id="team-title" className="font-display text-balance max-w-[11ch] text-[clamp(3.4rem,7vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]">Meet the team</h2>
        </FadeUp>
        <ul aria-label="Founding members" className="mt-16 grid gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
          {members.map((member, index) => {
            if (member.kind === "pending") {
              return (
                <li key={`pending-${member.index}`} className={index % 2 ? "lg:mt-16" : ""}>
                  {member.image ? <MemberPortrait src={member.image} /> : <MemberSignal />}
                  <p className="sr-only">Founding member {String(member.index).padStart(2, "0")}</p>
                </li>
              );
            }

            const { profile } = member;

            return (
              <li key={profile.slug} className={`grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-4 sm:block ${index % 2 ? "lg:mt-16" : ""}`}>
                <MemberPortrait src={profile.image} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold sm:mt-4">{profile.name}</p>
                  <p className="mt-1 text-sm text-black/54">
                    Currently building{" "}
                    {profile.building.href ? (
                      <a className="focus-ring rounded-sm font-medium text-black underline decoration-black/25 underline-offset-2 transition-colors hover:decoration-black" href={profile.building.href} rel="noreferrer" target="_blank">
                        {profile.building.label}
                      </a>
                    ) : (
                      <span>{profile.building.label}</span>
                    )}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{profile.bio}</p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.06em]">
                    {profile.links.map((link) => (
                      <a key={link.href} className="focus-ring rounded-sm text-black/70 transition-colors hover:text-black" href={link.href} rel="noreferrer" target="_blank">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
