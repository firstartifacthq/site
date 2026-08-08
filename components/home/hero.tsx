"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const characterUrl =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260801_104316_80b428ea-dc99-4399-afb3-8ccb7b34b2d0.png&w=1280&q=85";

const leftWords = ["build", "imagine", "evolve", "render"];
const rightWords = ["ship", "genesis", "purpose", "ignite"];

type Side = "left" | "right";

export function getSideWordStyle(side: Side, index: number, progress: number, isMobile: boolean) {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  const scaleFactor = isMobile ? 0.5 : 1;
  const distance = (60 + index * 40) * scaleFactor * (1 - clampedProgress);

  return {
    x: side === "left" ? -distance : distance,
    opacity: 0.35 + clampedProgress * 0.65,
  };
}

function WordColumn({ side, words, progress, isMobile }: { side: Side; words: string[]; progress: number; isMobile: boolean }) {
  return (
    <div className={`flex flex-col gap-1 md:gap-2 ${side === "right" ? "items-end" : ""}`}>
      {words.map((word, index) => {
        const style = getSideWordStyle(side, index, progress, isMobile);

        return (
          <span
            key={word}
            className={`beyond-side-word select-none lowercase ${side === "right" ? "text-right" : ""}`}
            style={{
              color: "rgb(255 255 255)",
              fontFamily: "var(--font-source-sans), sans-serif",
              fontSize: "clamp(1.6rem, 7vw, 9rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              opacity: style.opacity,
              transform: `translateX(${style.x}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);

      if (reduceMotion) {
        setProgress(1);
        return;
      }

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollRange = section.offsetHeight - window.innerHeight;
      const nextProgress = scrollRange > 0 ? -rect.top / scrollRange : 0;
      setProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative z-[60] w-full overflow-hidden"
      style={{ backgroundColor: "hsl(var(--signal))", height: "120vh" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        <Image
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 block w-auto max-w-none -translate-x-1/2"
          height={1280}
          priority
          src={characterUrl}
          style={{ filter: "grayscale(1) contrast(1.08)", height: "115%", maxHeight: "115%", minHeight: "80%" }}
          unoptimized
          width={1280}
        />
      </div>

      <div className="sticky top-0 z-[5] h-screen w-full">
        <div className="absolute inset-0 flex items-start justify-center pt-[2vh] md:pt-[3vh]">
          <span aria-hidden="true" data-title-layer className="beyond-title absolute select-none text-white/45 [transform:translateY(18px)] md:[transform:translateY(36px)]">
            obsess
          </span>
          <span aria-hidden="true" data-title-layer className="beyond-title absolute select-none text-[hsl(var(--signal))] [transform:translateY(12px)] md:[transform:translateY(24px)]">
            obsess
          </span>
          <span aria-hidden="true" data-title-layer className="beyond-title absolute select-none text-white/72 [transform:translateY(6px)] md:[transform:translateY(12px)]">
            obsess
          </span>
          <h1 className="beyond-title relative select-none text-white">obsess</h1>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-end justify-between px-[3vw] md:px-[6vw]" style={{ bottom: "-8vh" }}>
          <WordColumn side="left" words={leftWords} progress={progress} isMobile={isMobile} />
          <WordColumn side="right" words={rightWords} progress={progress} isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}
