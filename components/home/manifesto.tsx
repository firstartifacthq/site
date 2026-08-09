import Image from "next/image";

import { ManifestoVideo } from "@/components/home/manifesto-video";

function RoseVine({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 z-[15] w-[min(72vw,38rem)] -translate-y-1/2 overflow-hidden md:w-[min(48vw,42rem)] ${isLeft ? "left-0" : "right-0"}`}
    >
      <div className={`relative aspect-[16/9] w-full ${isLeft ? "" : "-scale-x-100"}`}>
        <Image
          alt=""
          className="object-contain object-left opacity-[0.92]"
          fill
          sizes="(max-width: 768px) 72vw, 42rem"
          src="/manifesto/rose-vine.webp"
        />
      </div>
    </div>
  );
}

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="relative z-10 flex min-h-screen w-full scroll-mt-24 flex-col overflow-hidden bg-[hsl(var(--signal))] text-white" id="manifesto">
      <div className="relative flex min-h-0 flex-1 flex-col">
        <RoseVine side="left" />
        <RoseVine side="right" />

        <div className="relative z-20 mx-auto flex w-full max-w-[52rem] flex-1 flex-col items-center justify-center px-6 py-16 text-center md:justify-end md:px-10 md:pb-8 md:pt-28">
          <h2 id="manifesto-title" className="max-w-[18ch] font-sans text-balance text-[clamp(2rem,7vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Obsession beats talent everytime
          </h2>
          <p className="mt-4 max-w-[28ch] font-sans text-[clamp(1.05rem,2.4vw,1.375rem)] font-normal leading-[1.45] text-white/78">
            and the proof is the artifact.
          </p>

          <div className="mt-8 flex w-full max-w-[38rem] flex-col items-center gap-5 font-sans text-[clamp(1.125rem,2.4vw,1.375rem)] font-normal leading-[1.55] text-white">
            <p>
              Most rooms reward talk. First Artifact is for builders who move from uncertainty to a shipped thing.
            </p>
            <p>
              Bring the work, the question you cannot drop, and find peers who compound both.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full shrink-0">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[hsl(var(--signal))] to-transparent" />
        <ManifestoVideo />
      </div>
    </section>
  );
}
