import Link from "next/link";

import { DiscordMark } from "@/components/discord-mark";
import { discordInviteUrl } from "@/lib/site-links";

export function ClosingSignal() {
  return (
    <section aria-labelledby="closing-title">
      <h2 id="closing-title">Your move</h2>
      <p>Already shipping? Apply with the work, or join the Discord and meet the room.</p>
      <div>
        <Link href="#apply">Apply</Link>
        <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer">
          <DiscordMark className="h-4 w-4" />
          Join the Discord
        </a>
      </div>
    </section>
  );
}
