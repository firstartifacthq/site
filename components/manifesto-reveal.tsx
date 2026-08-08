"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({ word, index, total, progress, reduce }: { word: string; index: number; total: number; progress: MotionValue<number>; reduce: boolean | null }) {
  const start = index / total;
  const opacity = useTransform(progress, [start * 0.78, Math.min(1, start * 0.78 + 0.16)], [0.5, 1]);
  return <motion.span style={{ opacity: reduce ? 1 : opacity }} className="manifesto-word inline-block">{word}&nbsp;</motion.span>;
}

export function ManifestoReveal({ text }: { text: string }) {
  const target = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start 80%", "end 35%"] });
  const words = text.split(" ");

  return (
    <p ref={target} className="text-balance max-w-[24ch] text-[clamp(2rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em]">
      {words.map((word, index) => <Word key={`${word}-${index}`} word={word} index={index} total={words.length} progress={scrollYProgress} reduce={reduce} />)}
    </p>
  );
}
