import Image from "next/image";

import { FadeUp } from "@/components/fade-up";
import { founders } from "@/lib/site";

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
    <section
      aria-labelledby="team-title"
      className="section-anchor section-fill bg-white py-24 md:py-36"
      id="team"
    >
      <div className="page-shell">
        <FadeUp>
          <h2
            id="team-title"
            className="font-display text-balance max-w-[11ch] text-[clamp(3.4rem,7vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]"
          >
            Meet the team
          </h2>
        </FadeUp>
        <ul
          aria-label="Founding members"
          className="mt-16 grid gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5"
        >
          {founders.map((profile, index) => (
            <li
              key={profile.slug}
              className={`grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-4 sm:block ${index % 2 ? "lg:mt-16" : ""}`}
            >
              <MemberPortrait src={profile.image} />
              <div className="min-w-0">
                <p className="text-sm font-semibold sm:mt-4">{profile.name}</p>
                <p className="mt-1 text-sm text-black/54">
                  Currently building{" "}
                  {profile.building.href ? (
                    <a
                      className="focus-ring rounded-sm font-medium text-black underline decoration-black/25 underline-offset-2 transition-colors hover:decoration-black"
                      href={profile.building.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {profile.building.label}
                    </a>
                  ) : (
                    <span>{profile.building.label}</span>
                  )}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{profile.bio}</p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.06em]">
                  {profile.links.map((link) => (
                    <a
                      key={link.href}
                      className="focus-ring rounded-sm text-black/70 transition-colors hover:text-black"
                      href={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
