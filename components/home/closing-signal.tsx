import Link from "next/link";

import { DiscordMark } from "@/components/discord-mark";
import { HlsBackground } from "@/components/hls-background";
import { buttonVariants } from "@/components/ui/button";
import { discordInviteUrl } from "@/lib/site-links";
import { cn } from "@/lib/utils";

export function ClosingSignal() {
  return (
    <section className="signal-field relative isolate overflow-hidden py-28 text-white md:py-40">
      <HlsBackground />
      <div className="absolute inset-0 z-[1] bg-[hsl(var(--signal)/0.94)]" />
      <div className="page-shell relative z-10 text-center">
        <div aria-hidden="true" className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-white/64"><span className="h-4 w-4 rounded-full border border-white/74" /></div>
        <h2 className="font-display text-balance mx-auto mt-8 max-w-[12ch] text-[clamp(3.4rem,8vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]">Bring the work. Find the room.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white">If you have already shipped and you cannot stop, we want to see the artifact.</p>
        <div className="mx-auto mt-9 flex max-w-xl flex-col justify-center gap-3 sm:flex-row">
          <Link href="#apply" className={cn(buttonVariants({ variant: "primary" }), "focus-ring")}>Apply now</Link>
          <Link href="#standard" className={cn(buttonVariants({ variant: "line" }), "focus-ring")}>See the standard</Link>
          <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "line" }), "focus-ring")}><DiscordMark className="h-4 w-4 shrink-0" />Join the Discord</a>
        </div>
      </div>
    </section>
  );
}
