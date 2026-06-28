"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { PrimaryButton } from "../ui/Buttons";
import heroFallback from "../../../public/important-assets/homepage/hero/hero.webp";
import { useInView } from "react-intersection-observer";
import { useAdaptiveLoading } from "../hook/useAdaptiveLoading";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const SPLINE_SCENE =
  "https://prod.spline.design/isLz4-62pA2ya-Md/scene.splinecode?v=2";

const HERO_ALT = "3D hero visual";

function SplineOrFallback({
  zoom,
  className,
  fallbackSrc,
  priority = false,
  forceFallback = false,
}) {
  const [splineReady, setSplineReady] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "100px" });

  // Combined mount + grace period in one effect
  useEffect(() => {
    const timer = setTimeout(() => setLoadSpline(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const shouldAttemptSpline = !forceFallback && inView && loadSpline;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Fallback image */}
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

const HeadingText = ({ className }) => (
  <h1
    className={`font-jakarta tracking-[-0.02em] leading-[1.1] capitalize font-extrabold text-heading ${className}`}
  >
    I build landing pages that turn visitors into paying clients
  </h1>
);

const SubText = ({ className }) => (
  <p className={`font-jakarta font-semibold text-subtext ${className}`}>
    Fast, professional marketing sites for small businesses — designed to
    convert and built to last
  </p>
);

export function HeroSection({ sectionID }) {
  const shouldLoadHeavy = useAdaptiveLoading();

  return (
    <>
      {/* DESKTOP */}
      <section
        className="sectionLayout md:h-[95vh] hidden md:block"
        id={sectionID}
      >
        <div className="grid grid-cols-10 h-full w-full items-center">
          <div className="col-span-5 text-left flex flex-col gap-5">
            <HeadingText className="text-[60px]" />
            <SubText className="text-[18px] tracking-widest" />
            <div className="flex">
              <PrimaryButton />
            </div>
          </div>

          <div className="col-span-1" />

          <div className="col-span-4 h-full w-full">
            <SplineOrFallback
              zoom={6}
              className="h-full w-full"
              fallbackSrc={heroFallback}
              priority
              forceFallback={!shouldLoadHeavy}
            />
          </div>
        </div>
      </section>

      {/* MOBILE — always static, Spline never attempted */}
      <section className="md:hidden mobileSectionLayout h-[95vh]">
        <div className="flex-[1]" />
        <div className="flex-[5] w-full min-h-0 relative">
          <Image
            src={heroFallback}
            alt={HERO_ALT}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
        <div className="flex-[4] flex flex-col justify-center text-center w-full min-h-0">
          <div className="gap-2 flex flex-col">
            <HeadingText className="text-[30px]" />
            <SubText className="text-[13px] tracking-wide" />
            <div className="flex w-full justify-center">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
