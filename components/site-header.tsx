import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { buttonVariants } from "@/components/ui/button";
import { discordInviteUrl } from "@/lib/site-links";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "/"],
  ["Standard", "/#standard"],
  ["Team", "/#team"],
  ["Formats", "/#formats"],
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-white/18 bg-[hsl(var(--signal))] px-4 py-4 text-white md:px-10">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4">
        <Link href="/" aria-label="First Artifact home" className="focus-ring flex shrink-0 items-center gap-3 rounded-sm">
          <BrandMark className="h-8 w-8 shrink-0 text-white" strokeWidth={56} />
          <span className="hidden font-sans text-xl font-semibold leading-none lowercase tracking-[-0.02em] sm:inline">First Artifact</span>
        </Link>

        <nav aria-label="Primary" className="hidden border-y border-white/55 px-5 py-3 md:block">
          <ul className="flex items-center gap-4 text-sm font-semibold">
            {links.map(([label, href], index) => (
              <li key={href} className="flex items-center gap-4">
                {index > 0 ? <span aria-hidden="true" className="text-white/42">•</span> : null}
                <Link href={href} className="focus-ring rounded-sm text-white transition-opacity hover:opacity-78">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <details className="relative md:hidden">
            <summary className="focus-ring flex min-h-10 cursor-pointer list-none items-center border border-white/60 px-4 text-xs font-semibold uppercase tracking-[0.08em]">Menu</summary>
            <nav aria-label="Mobile" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl bg-black p-2 text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              {links.map(([label, href]) => <Link key={href} href={href} className="focus-ring block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-white/10">{label}</Link>)}
              <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer" className="focus-ring mt-1 block rounded-xl border-t border-white/20 px-3 py-3 text-sm font-semibold hover:bg-white/10">Join the Discord</a>
            </nav>
          </details>
          <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer" className="focus-ring hidden min-h-10 items-center border border-white/60 px-3 text-xs font-semibold uppercase tracking-[0.08em] sm:inline-flex">Join the Discord</a>
          <Link href="/#apply" className={cn(buttonVariants({ variant: "primary", size: "compact" }), "focus-ring")}>Apply</Link>
        </div>
      </div>
    </header>
  );
}
