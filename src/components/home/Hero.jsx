"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { PrimaryButton } from "../ui/Buttons";
import heroFallback from "../../../public/important-assets/homepage/hero/hero.webp";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

const SPLINE_SCENE =
  "https://prod.spline.design/isLz4-62pA2ya-Md/scene.splinecode";

function setSplineZoom(zoom) {
  return (spline) => spline.setZoom(zoom);
}

function SplineOrFallback({ zoom, className, fallbackSrc, priority = false }) {
  const [splineReady, setSplineReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Wait until the container actually has non-zero dimensions
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setMounted(true);
          observer.disconnect();
        }
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Fallback image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          splineReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src={fallbackSrc}
          alt="3D hero visual"
          fill
          className="object-contain"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {/* Spline only mounts once container has real pixel dimensions */}
      {mounted && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            splineReady ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!splineReady}
        >
          <Spline
            scene={SPLINE_SCENE}
            onLoad={(spline) => {
              setSplineZoom(zoom)(spline);
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
  <p
    className={`font-jakarta tracking-widest font-semibold text-subtext ${className}`}
  >
    Fast, professional marketing sites for small businesses — designed to
    convert and built to last
  </p>
);

export function HeroSection() {
  return (
    <>
      {/* DESKTOP */}
      <section className="md:sectionLayout hidden md:block">
        <div className="grid grid-cols-10 h-full w-full items-center">
          <div className="col-span-5 text-left flex flex-col gap-5">
            <HeadingText className="text-[60px]" />
            <SubText className="text-[18px]" />
            <div className="flex">
              <PrimaryButton />
            </div>
          </div>

          <div className="col-span-1" />

          <div className="col-span-4 h-full w-full">
            <SplineOrFallback
              zoom={3}
              className="h-full w-full"
              fallbackSrc={heroFallback}
              priority
            />
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="md:hidden mobileSectionLayout">
        <div className="flex-[1]" /> {/* spacer */}
        <div className="flex-[5] w-full min-h-0">
          <SplineOrFallback
            zoom={2}
            className="h-full w-full"
            fallbackSrc={heroFallback}
          />
        </div>
        <div className="flex-[4] flex flex-col justify-center text-center w-full min-h-0">
          <div className="gap-2 flex flex-col">
            <HeadingText className="text-[40px]" />
            <SubText className="text-[14px]" />
            <div className="flex w-full justify-center">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
