import Link from "next/link";

import { DiscordMark } from "@/components/discord-mark";
import { FadeUp } from "@/components/fade-up";
import { buttonVariants } from "@/components/ui/button";
import { discordInviteUrl } from "@/lib/site-links";
import { cn } from "@/lib/utils";

export function ClosingSignal() {
  return (
    <section
      aria-labelledby="closing-title"
      className="border-t border-white/24 bg-[hsl(var(--signal))] py-28 text-white md:py-40"
    >
      <div className="page-shell">
        <FadeUp>
          <div className="flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
            <div>
              <h2
                id="closing-title"
                className="font-display text-[clamp(4rem,10vw,6rem)] leading-[0.84] tracking-[-0.035em]"
              >
                Your move
              </h2>
              <p className="mt-6 max-w-[34ch] text-lg leading-relaxed">
                Already shipping? Apply with the work, or join the Discord and meet the room.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Link
                className={cn(buttonVariants({ variant: "primary" }), "sm:min-w-44")}
                href="#apply"
              >
                Apply
              </Link>
              <a
                className={cn(buttonVariants({ variant: "line" }))}
                href={discordInviteUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <DiscordMark className="h-4 w-4" />
                Join the Discord
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
