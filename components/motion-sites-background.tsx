"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Closing CTA atmosphere loop. Decorative only; copy and actions must stand alone. */
export const closingCtaVideoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

/** About hero atmosphere loop. Local, compressed, muted; solid signal red is the fallback. */
export const aboutHeroVideoUrl = "/video/about-hero.mp4";

type ConnectionLike = {
  saveData?: boolean;
  effectiveType?: string;
};

function shouldSkipDecorativeVideo() {
  if (typeof navigator === "undefined") return false;
  const connection = (navigator as Navigator & { connection?: ConnectionLike }).connection;
  if (connection?.saveData) return true;
  if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") return true;
  return false;
}

/**
 * Decorative background video.
 *
 * - `idle`: attach after first paint (hero). Solid section background remains the LCP surface.
 * - `visible`: attach when near the viewport (below-fold CTAs).
 */
export function MotionSitesBackground({
  src = closingCtaVideoUrl,
  load = "visible",
  testId = "closing-cta-video",
}: {
  src?: string;
  load?: "idle" | "visible";
  testId?: string;
}) {
  const reduceMotion = useReducedMotion();
  const hostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  useEffect(() => {
    if (reduceMotion || shouldSkipDecorativeVideo()) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let observer: IntersectionObserver | undefined;

    const arm = () => {
      if (!cancelled) setActiveSrc(src);
    };

    const scheduleIdle = () => {
      const ric = (
        window as Window & {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback;
      if (typeof ric === "function") {
        idleId = ric(() => arm(), { timeout: 1600 });
      } else {
        timeoutId = setTimeout(arm, 350);
      }
    };

    if (load === "idle") {
      scheduleIdle();
    } else {
      const node = hostRef.current;
      if (!node) return;
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer?.disconnect();
          scheduleIdle();
        },
        { rootMargin: "240px 0px" },
      );
      observer.observe(node);
    }

    return () => {
      cancelled = true;
      const cic = (
        window as Window & { cancelIdleCallback?: (id: number) => void }
      ).cancelIdleCallback;
      if (idleId !== undefined && typeof cic === "function") cic(idleId);
      if (timeoutId) clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [load, reduceMotion, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;
    video.play().catch(() => undefined);
  }, [activeSrc]);

  if (reduceMotion) return null;

  return (
    <div ref={hostRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {activeSrc ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          data-testid={testId}
          loop
          muted
          playsInline
          preload="none"
          src={activeSrc}
          tabIndex={-1}
        />
      ) : null}
    </div>
  );
}
