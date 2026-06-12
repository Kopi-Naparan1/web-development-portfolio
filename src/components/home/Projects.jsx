"use client";

import Image from "next/image";
import { SectionScreen } from "../ui/Section";
import { projects } from "../../data/project";
import { useState, useRef, useEffect } from "react";
import { CardPrimaryButton, CardSecondaryButton } from "../ui/Buttons";

function ProjectCard({ project, mobile = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const timerRef = useRef(null);
  const tooltipTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(tooltipTimerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    setHasHovered(true);
    setIsHovered(true);
    clearTimeout(timerRef.current);
    tooltipTimerRef.current = setTimeout(() => setShowTooltip(true), 500);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setIsHovered(false), 50);
    setShowTooltip(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-[16px] border-2 shadow-lg border-primary card-dim ${
          mobile ? "w-[40vw] h-[32vh]" : "w-[26vw] h-[65vh]"
        }`}
      >
        {/* Video — only mounts after first hover */}
        <div
          className={`absolute inset-0 transition-opacity duration-100 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ willChange: "opacity" }}
        >
          {hasHovered && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full rounded-[16px]"
              src={project.vid}
            />
          )}
        </div>

        {/* Mobile gradient overlay */}
        {mobile && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-secondary/40 to-black/20" />
        )}

        <div className={`card-dim z-20 ${isHovered ? "card-dim-hover" : ""}`} />
        <div className={`z-20 ${isHovered ? "card-overlay" : ""}`} />

        {/* Static image */}
        <div className="absolute inset-0 z-10">
          <Image
            fill
            src={project.static}
            alt={project.alt}
            sizes={mobile ? "40vw" : "26vw"}
            className={`object-cover rounded-[16px] transition-opacity duration-100 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Tooltip */}
        <div
          className={`absolute inset-x-0 bottom-4 z-40 flex flex-col items-center px-4 gap-1 transition-opacity duration-300 ${
            showTooltip ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3
            className={`font-semibold text-[12px] text-center px-2 py-0.5 rounded-[4px] ${
              mobile ? "text-background" : "text-heading bg-secondary"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-[10px] font-jakarta text-center px-2 py-1 rounded-[4px] ${
              mobile ? "text-background/90" : "text-heading bg-secondary/90"
            }`}
          >
            {project.result}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div
        className={`flex w-full gap-2 mt-4 ${
          mobile ? "flex-col gap-0.5 mb-2 mt-0" : "flex-row"
        }`}
      >
        <CardPrimaryButton className="flex flex-1 justify-center" />
        <CardSecondaryButton className="flex flex-1 justify-center" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <SectionScreen
      eyebrow="SELECTED WORKS"
      heading="Projects that deliver results"
      subheading="A few things I've built — each one designed with a clear goal in mind"
      childrenClassName="w-full h-full"
    >
      {/* Desktop */}
      <div className="hidden md:flex flex-row justify-evenly">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center h-full justify-evenly">
        <ProjectCard key={projects[0].slug} project={projects[0]} mobile />
        <div className="flex gap-4 justify-center">
          <ProjectCard key={projects[1].slug} project={projects[1]} mobile />
          <ProjectCard key={projects[2].slug} project={projects[2]} mobile />
        </div>
      </div>
    </SectionScreen>
  );
}
