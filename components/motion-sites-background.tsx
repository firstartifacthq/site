"use client";

import { useReducedMotion } from "framer-motion";

/** Motionsites preview loop — https://motionsites.ai/backgrounds */
export const motionSitesBackgroundUrl =
  "https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/avideo%20preview/Digital%20Pulse.mp4";

export function MotionSitesBackground({ src = motionSitesBackgroundUrl }: { src?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <video
      aria-hidden="true"
      autoPlay
      className="absolute inset-0 h-full w-full object-cover"
      loop
      muted
      playsInline
      preload="metadata"
      src={src}
      tabIndex={-1}
    />
  );
}
