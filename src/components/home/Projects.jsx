"use client";

import Image from "next/image";
import { SectionScreen } from "../ui/Section";
import { projects } from "../../data/project";
import { useState, useRef, useEffect } from "react";
import { CardPrimaryButton } from "../ui/Buttons";
import { HiCursorClick } from "react-icons/hi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useAdaptiveLoading } from "../hook/useAdaptiveLoading";
import Link from "next/link";

// ---------- Small building blocks ----------

function DimOverlay({ isActive }) {
  return (
    <div
      className={`absolute inset-0 z-20 bg-black/40 transition-opacity duration-200 ${
        isActive ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}

function HoverHintIcon({ isActive }) {
  return (
    <div
      className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-200 ${
        isActive ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-background/30 backdrop-blur-sm rounded-full p-3">
        <HiCursorClick className="text-background text-2xl" />
      </div>
    </div>
  );
}

function Vignette({ isActive, isLoading }) {
  return (
    <>
      <div
        className={`absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/15 to-black/50 transition-opacity duration-200 ${
          isActive && !isLoading ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/35 to-black/60 backdrop-blur-[1px] transition-opacity duration-200 ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}

function CardVideo({ hasPlayed, isActive, isVideoPlaying, src, onPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) videoRef.current.play();
    else videoRef.current.pause();
  }, [isActive]);

  return (
    <div
      className={`absolute inset-0 z-0 transition-opacity duration-200 ${
        isVideoPlaying ? "opacity-100" : "opacity-0"
      }`}
    >
      {hasPlayed && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          onPlaying={onPlaying}
          className="object-cover w-full h-full rounded-lg"
          src={src}
        />
      )}
    </div>
  );
}

function CardStaticImage({ project, mobile, isVideoPlaying }) {
  return (
    <div className="absolute inset-0 z-10">
      <Image
        fill
        src={project.static}
        alt={project.alt}
        sizes={mobile ? "40vw" : "26vw"}
        className={`object-cover rounded-lg transition-opacity duration-300 ${
          isVideoPlaying ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

function MobileTitleRow({ project, isActive, onStopPropagation }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onStopPropagation}
      className={`absolute top-3 inset-x-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center px-4 transition-opacity duration-200 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <span />
      <h3 className="font-semibold text-[14px] text-center text-background border-b border-background">
        {project.title}
      </h3>
      <HiArrowTopRightOnSquare className="text-background text-sm justify-self-start ml-1.5" />
    </a>
  );
}

function DesktopTitleBlock({ project, isActive, liveUrl, onStopPropagation }) {
  return (
    <div
      className={`absolute inset-x-0 bottom-4 z-30 flex flex-col items-center px-4 gap-1 transition-opacity duration-200 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onStopPropagation}
        className="flex items-center gap-1.5 group"
      >
        <h3 className="font-semibold text-[20px] text-center text-background border-b border-transparent group-hover:border-background transition-colors duration-200">
          {project.title}
        </h3>
        <HiArrowTopRightOnSquare className="text-background text-lg" />
      </a>
      <p className="text-[15px] text-center text-background/90">
        {project.result}
      </p>
    </div>
  );
}

// ---------- Main card ----------

function ProjectCard({ project, mobile = false }) {
  const [isActive, setIsActive] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const shouldLoadVideo = useAdaptiveLoading();
  const cardRef = useRef(null);

  useEffect(() => {
    if (!mobile) return;

    function handleOutsideClick(e) {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsActive(false);
      }
    }

    if (isActive) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isActive, mobile]);

  function handleDesktopEnter() {
    if (shouldLoadVideo) setHasPlayed(true);
    setIsActive(true);
  }

  // Toggle on second tap so users can dismiss without outside click
  function handleMobileTap() {
    if (shouldLoadVideo) setHasPlayed(true);
    setIsActive((prev) => !prev);
  }

  function handleDesktopLeave() {
    setIsActive(false);
    setIsVideoPlaying(false);
  }

  function handleVideoPlaying() {
    setIsVideoPlaying(true);
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  const isLoading = isActive && shouldLoadVideo && !isVideoPlaying;

  return (
    <div className="flex flex-col items-center" ref={cardRef}>
      <div
        onMouseEnter={!mobile ? handleDesktopEnter : undefined}
        onMouseLeave={!mobile ? handleDesktopLeave : undefined}
        onClick={mobile ? handleMobileTap : undefined}
        className={`relative overflow-hidden rounded-lg shadow-lgcursor-pointer ${
          mobile ? "w-[40vw] h-[32vh]" : "w-[26vw] h-[65vh]"
        }`}
      >
        <DimOverlay isActive={isActive} />
        <CardVideo
          hasPlayed={hasPlayed}
          isActive={isActive}
          isVideoPlaying={isVideoPlaying}
          src={project.vid}
          onPlaying={handleVideoPlaying}
        />
        <CardStaticImage
          project={project}
          mobile={mobile}
          isVideoPlaying={isVideoPlaying}
        />
        <HoverHintIcon isActive={isActive} />
        <Vignette isActive={isActive} isLoading={isLoading} />

        {mobile ? (
          <>
            <MobileTitleRow
              project={project}
              isActive={isActive}
              onStopPropagation={stopPropagation}
            />
            <Link
              href={`/case-study/${project.slug}`}
              onClick={stopPropagation}
              className={`absolute bottom-3 inset-x-2 z-30 transition-all duration-200 ${
                isActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              <CardPrimaryButton
                as="span"
                textSize="12px"
                mt="0"
                className="w-full justify-center"
              />
            </Link>
          </>
        ) : (
          <DesktopTitleBlock
            project={project}
            isActive={isActive}
            liveUrl={project.liveUrl}
            onStopPropagation={stopPropagation}
          />
        )}
      </div>

      {!mobile && (
        <div className="flex w-full gap-2 mt-4">
          <Link href={`/case-study/${project.slug}`} className="flex flex-1">
            <CardPrimaryButton
              as="span"
              className="flex flex-1 justify-center"
            />
          </Link>
        </div>
      )}
    </div>
  );
}

// ---------- Section ----------

export default function Projects({ sectionID }) {
  const [first, ...rest] = projects;

  return (
    <SectionScreen
      id={sectionID}
      minHeightClass="min-h-[85vh] md:min-h-screen"
      className="bg-secondary/15 py-[8vh]"
      eyebrow="SELECTED WORKS"
      heading="Projects that deliver results"
      // subheading="A few things I've built — each one designed with a clear goal in mind"
      childrenClassName="w-full h-full"
    >
      {/* Desktop */}
      <div className="hidden md:flex flex-row justify-evenly">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Mobile — first card full width, rest in a row */}
      <div className="md:hidden flex flex-col items-center h-full justify-center gap-12">
        <ProjectCard project={first} mobile />
        <div className="flex gap-4 justify-center">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} mobile />
          ))}
        </div>
      </div>
    </SectionScreen>
  );
}
