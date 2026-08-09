"use client";

import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

export const manifestoVideoSource = "/video/manifesto.mp4";
export const manifestoVideoFallback = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

export function ManifestoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fallbackStarted = useRef(false);
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion !== false) {
      if (video.readyState > 0) video.pause();
      return;
    }

    let hls: Hls | null = null;

    const startFallback = () => {
      if (fallbackStarted.current) return;
      fallbackStarted.current = true;

      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true });
        hls.loadSource(manifestoVideoFallback);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => undefined);
        });
        return;
      }

      video.src = manifestoVideoFallback;
      video.play().catch(() => undefined);
    };

    video.addEventListener("error", startFallback);
    return () => {
      video.removeEventListener("error", startFallback);
      hls?.destroy();
    };
  }, [reduceMotion]);

  const shouldAnimate = reduceMotion === false;

  return (
    <video aria-hidden="true" ref={videoRef} tabIndex={-1} autoPlay={shouldAnimate} className="block h-auto w-full object-contain" loop muted playsInline preload={shouldAnimate ? "auto" : "none"}>
      <source data-testid="manifesto-video" src={manifestoVideoSource} type="video/mp4" />
      <source data-testid="manifesto-video-fallback" src={manifestoVideoFallback} type="application/vnd.apple.mpegurl" />
    </video>
  );
}
