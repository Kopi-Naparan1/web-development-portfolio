"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAdaptiveLoading } from "../hook/useAdaptiveLoading";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const SPLINE_SCENE =
  "https://prod.spline.design/isLz4-62pA2ya-Md/scene.splinecode?v=2";

const HERO_ALT = "3D hero visual";

export function SplineOrFallback({
  zoom,
  className,
  fallbackSrc,
  priority = false,
}) {
  const [splineReady, setSplineReady] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "100px" });
  const shouldLoadHeavy = useAdaptiveLoading(); // moved here — no longer in parent

  useEffect(() => {
    const timer = setTimeout(() => setLoadSpline(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const forceFallback = !shouldLoadHeavy;
  const shouldAttemptSpline = !forceFallback && inView && loadSpline;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Fallback image — renders on server via Next.js Image, fades out when Spline loads */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          splineReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src={fallbackSrc}
          alt={HERO_ALT}
          fill
          className="object-contain"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {shouldAttemptSpline && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            splineReady ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!splineReady}
        >
          <Spline
            scene={SPLINE_SCENE}
            onLoad={(spline) => {
              spline.setZoom(zoom);
              setSplineReady(true);
            }}
          />
        </div>
      )}
    </div>
  );
}
