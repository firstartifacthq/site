import { DiscordMark } from "@/components/discord-mark";
import { FadeUp } from "@/components/fade-up";
import { MotionSitesBackground } from "@/components/motion-sites-background";
import { buttonVariants } from "@/components/ui/button";
import { applyFormUrl, discordInviteUrl } from "@/lib/site-links";
import { cn } from "@/lib/utils";

export function ClosingSignal() {
  return (
    <section
      aria-labelledby="closing-title"
      className="relative isolate overflow-hidden bg-[hsl(var(--signal))] py-28 text-white md:py-40"
    >
      <MotionSitesBackground />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[hsl(var(--signal)/0.28)]"
      />

      <div className="page-shell relative z-10">
        <FadeUp>
          <div className="flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
            <div>
              <h2
                id="closing-title"
                className="font-display text-[clamp(4rem,10vw,6rem)] leading-[0.84] tracking-[-0.035em]"
              >
                Your move
              </h2>
              <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-white/90">
                Already shipping? Apply with the work, or join the Discord and meet the room.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "sm:min-w-44 focus-visible:ring-offset-[hsl(var(--signal))]",
                )}
                href={applyFormUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Apply
              </a>
              <a
                className={cn(
                  buttonVariants({ variant: "line" }),
                  "focus-visible:ring-offset-[hsl(var(--signal))]",
                )}
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
