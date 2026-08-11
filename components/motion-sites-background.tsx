"use client";

import { useReducedMotion } from "framer-motion";

/** Closing CTA atmosphere loop. Decorative only; copy and actions must stand alone. */
export const closingCtaVideoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

export function MotionSitesBackground({ src = closingCtaVideoUrl }: { src?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <video
      aria-hidden="true"
      autoPlay
      className="absolute inset-0 h-full w-full object-cover"
      data-testid="closing-cta-video"
      loop
      muted
      playsInline
      preload="metadata"
      src={src}
      tabIndex={-1}
    />
  );
}
