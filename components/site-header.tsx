import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "/"],
  ["Admission", "/admission"],
  ["Events", "/events"],
  ["FAQ", "/faq"],
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-white/18 bg-[hsl(var(--signal))] px-4 py-4 text-white md:px-10">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4">
        <Link href="/" aria-label="First Artifact home" className="focus-ring flex shrink-0 items-center gap-3 rounded-sm">
          <BrandMark className="h-12 w-12 shrink-0 text-white" strokeWidth={56} />
          <span className="font-display hidden text-[1.75rem] leading-none lowercase tracking-[-0.02em] sm:inline">First Artifact</span>
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
            </nav>
          </details>
          <Link href="/#apply" className={cn(buttonVariants({ variant: "primary", size: "compact" }), "focus-ring")}>Apply</Link>
        </div>
      </div>
    </header>
  );
}
