"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeUp({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`fade-up ${className ?? ""}`}
      initial={{ y: 12, filter: "blur(1px)" }}
      whileInView={{ y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
