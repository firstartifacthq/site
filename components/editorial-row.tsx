"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, margin: "-60px" } as const;

/**
 * One line-separated editorial row.
 *
 * The bottom rule is a scaled element rather than a border, because a border
 * cannot be drawn from the left. Content and rule both resolve to their final
 * state under reduced motion, and `.reveal` carries a no-JavaScript fallback so
 * a failed hydration can never strand a row at opacity 0.
 */
export function EditorialRow({
  children,
  index,
  className,
  ruleClassName,
}: {
  children: ReactNode;
  index: number;
  className?: string;
  ruleClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const delay = reduceMotion ? 0 : index * 0.07;

  return (
    <motion.li
      className={`reveal group relative ${className ?? ""}`}
      initial={reduceMotion ? { y: 0, opacity: 1 } : { y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={viewport}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay, ease }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className={`reveal absolute inset-x-0 bottom-0 h-px origin-left transition-colors duration-200 ${ruleClassName ?? ""}`}
        initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: reduceMotion ? 0 : 0.7, delay: delay + 0.05, ease }}
      />
    </motion.li>
  );
}
