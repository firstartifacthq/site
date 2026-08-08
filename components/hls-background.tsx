"use client";

import { useEffect, useRef } from "react";

const source = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

export function HlsBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let destroyed = false;
    let hls: import("hls.js").default | undefined;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
    } else {
      void import("hls.js").then(({ default: Hls }) => {
        if (destroyed || !Hls.isSupported()) return;
        hls = new Hls({ enableWorker: true });
        hls.loadSource(source);
        hls.attachMedia(video);
      });
    }

    return () => {
      destroyed = true;
      hls?.destroy();
    };
  }, []);

  return <video ref={videoRef} aria-hidden="true" tabIndex={-1} muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover opacity-22 mix-blend-luminosity" />;
}
