"use client";
import { SectionScreen } from "../ui/Section";
import { caseStudyProjects } from "@/data/project";
import { useState } from "react";
import Image from "next/image";
// ============================================================
// Step connector (desktop only)
// ============================================================

function StepConnector() {
  return (
    <div
      className="hidden md:flex items-center shrink-0 w-8"
      aria-hidden="true"
    >
      <div className="w-full h-px bg-primary/30" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 -ml-1" />
    </div>
  );
}

// ============================================================
// Icon
// ============================================================

function StepIcon({ Icon }) {
  if (!Icon) return null;
  return (
    <div className="p-3 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto transition-transform duration-200 group-hover:scale-110">
      <Icon className="h-6 w-6 text-heading/70" aria-hidden="true" />
    </div>
  );
}

// ============================================================
// Card (shared mobile + desktop)
// ============================================================

function ProcessCard({
  process,
  onCardClick,
  isMobile = false,
  isActive,
  onClose,
}) {
  const Icon = process.icon;

  return (
    <li
      onClick={isActive ? onClose : onCardClick}
      className={`
    list-none cursor-pointer group flex flex-col bg-lighter border-2 border-primary rounded-xl relative overflow-hidden
    ${
      isMobile
        ? `w-[72vw] h-[360px] gap-3 ${isActive ? "p-0" : "px-4 py-5"}`
        : `w-[280px] h-[400px] gap-4 ${isActive ? "p-0" : "px-5 py-6"}`
    }
  `}
    >
      {isActive && process.supportingImage ? (
        <div className="absolute inset-0">
          <Image
            src={process.supportingImage}
            alt={process.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      ) : (
        <>
          <p className="text-[11px] uppercase tracking-widest text-muted font-semibold">
            {process.step}
          </p>
          <StepIcon Icon={Icon} />
          <h3 className="text-[15px] font-semibold text-heading text-center leading-snug">
            {process.title}
          </h3>
          <ol className="flex flex-col gap-2">
            {process.description.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-muted font-mono text-[12px] pt-[2px] shrink-0 w-5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] leading-relaxed text-foreground/80">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </>
      )}
    </li>
  );
}
// ============================================================
// Mobile list
// ============================================================

function MobileProcessList({ process, activeImage, setActiveImage }) {
  return (
    <ol
      className="md:hidden flex flex-col items-center gap-3 list-none m-0 p-0 w-full"
      aria-label="Process steps"
    >
      {process.map((item, index) => (
        <ProcessCard
          key={`${item.step}-${index}`}
          isActive={activeImage === item.supportingImage}
          onCardClick={() => setActiveImage(item.supportingImage)}
          onClose={() => setActiveImage(null)}
          process={item}
          index={index}
          isMobile
        />
      ))}
    </ol>
  );
}

// ============================================================
// Desktop row
// ============================================================

function DesktopProcessRow({ process, activeImage, setActiveImage }) {
  return (
    <ol
      className="hidden md:flex flex-row items-stretch justify-center w-full list-none m-0 p-0"
      aria-label="Process steps"
    >
      {process.map((item, index) => (
        <div key={`${item.step}-${index}`} className="flex items-center">
          <ProcessCard
            isActive={activeImage === item.supportingImage}
            onCardClick={() => setActiveImage(item.supportingImage)}
            onClose={() => setActiveImage(null)}
            process={item}
            index={index}
          />
          {index < process.length - 1 && <StepConnector />}
        </div>
      ))}
    </ol>
  );
}

// ============================================================
// Main export
// ============================================================

export default function HowIWork({ slug }) {
  const project = caseStudyProjects.find((item) => item.slug === slug);
  const process = project?.process ?? [];
  const [activeImage, setActiveImage] = useState(null);

  if (process.length === 0) return null;

  return (
    <SectionScreen
      minHeightClass="min-h-[70vh]"
      className="!h-auto !max-h-none !overflow-visible"
      childrenClassName="!h-auto !mt-[4vh]"
      eyebrow="how i work"
      heading="Simple, Clear, No Surprises"
      subheading="From first message to launch day, here's what working with me looks like"
    >
      <div className="w-full flex items-center justify-center py-[4vh]">
        <MobileProcessList
          process={process}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <DesktopProcessRow
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          process={process}
        />
      </div>
    </SectionScreen>
  );
}
