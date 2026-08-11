"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionLink } from "@/components/section-link";
import { useRef } from "react";

import { BrandMark } from "@/components/brand-mark";
import { DiscordMark } from "@/components/discord-mark";
import { discordInviteUrl } from "@/lib/site-links";

const socialActions = [
  {
    label: "Apply now",
    href: "/#apply",
    external: false,
    icon: ArrowUpRight,
  },
  {
    label: "Join the Discord",
    href: discordInviteUrl,
    external: true,
    icon: DiscordMark,
  },
] as const;

const landmarkSrc = "/footer/bengaluru-tech-landmark.png";

const linkColumns = [
  {
    title: "Club",
    links: [
      { label: "Manifesto", href: "/manifesto" },
      { label: "Standard", href: "/#standard" },
      { label: "Team", href: "/#team" },
      { label: "Formats", href: "/#formats" },
    ],
  },
  {
    title: "Join",
    links: [
      { label: "Apply", href: "/#apply" },
      { label: "Discord", href: discordInviteUrl, external: true },
    ],
  },
  {
    title: "Signal",
    links: [
      { label: "Home", href: "/" },
      { label: "Obsession", href: "/#manifesto" },
      { label: "Apply with work", href: "/#apply" },
    ],
  },
] as const;

export function SiteFooter() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <footer className="bg-white">
      <section
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-[hsl(var(--signal))]"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.28)_1px,transparent_1px)]" />
          <div className="absolute inset-0 bg-[hsl(var(--signal))] [mask-image:radial-gradient(ellipse_at_center,transparent_42%,black_94%)]" />
        </div>

        <div className="absolute top-0 z-30 w-full px-4 pt-12 md:px-10 md:pt-24 lg:pt-12">
          <motion.div
            className="mx-auto max-w-7xl overflow-hidden rounded-sm border border-black/10 bg-white"
            initial={reduceMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col justify-between gap-10 px-6 py-8 md:flex-row md:gap-12 md:px-10 md:py-10">
              <div className="flex shrink-0 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[hsl(var(--signal))] p-2 md:h-12 md:w-12">
                  <BrandMark className="h-full w-full text-white" strokeWidth={56} />
                </div>
                <span className="font-sans text-2xl font-semibold lowercase leading-none tracking-tighter text-[hsl(var(--foreground))] md:text-3xl">
                  first artifact
                </span>
              </div>

              <div className="flex flex-wrap gap-10 md:gap-16">
                {linkColumns.map((column) => (
                  <div key={column.title} className="min-w-[7rem]">
                    <p className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--foreground))]">
                      {column.title}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {column.links.map((link) => (
                        <li key={`${column.title}-${link.label}`}>
                          {"external" in link && link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="focus-ring rounded-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--signal))]"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <SectionLink
                              href={link.href}
                              className="focus-ring rounded-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--signal))]"
                            >
                              {link.label}
                            </SectionLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-[hsl(var(--border))] bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-10">
              <p className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
                © 2026 First Artifact. Built by people who ship.
              </p>
              <div className="flex items-center gap-3">
                {socialActions.map((action) => {
                  const Icon = action.icon;
                  const className =
                    "focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--foreground))] transition-all duration-300 hover:border-[hsl(var(--signal))] hover:bg-[hsl(var(--signal))] hover:text-white";

                  if (action.external) {
                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={action.label}
                        className={className}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  }

                  return (
                    <SectionLink key={action.label} href={action.href} aria-label={action.label} className={className}>
                      <Icon className="h-5 w-5" />
                    </SectionLink>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-full"
          style={{ y: reduceMotion ? 0 : parallaxY }}
        >
          <Image
            alt=""
            className="h-full w-full origin-bottom object-contain object-bottom"
            height={1024}
            src={landmarkSrc}
            unoptimized
            width={1536}
          />
        </motion.div>
      </section>
    </footer>
  );
}
