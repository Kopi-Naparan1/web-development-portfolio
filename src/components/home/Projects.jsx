"use client";

import Image from "next/image";
import { SectionScreen } from "../ui/Section";
import { projects } from "../../data/project";
import { useState, useRef } from "react";
import { CardPrimaryButton, CardSecondaryButton } from "../ui/Buttons";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setIsHovered(true);
    tooltipTimerRef.current = setTimeout(() => setShowTooltip(true), 500); // show after 600ms
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
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        className="relative w-[26vw]  h-[65vh] overflow-hidden rounded-[16px] border-2 shadow-lg border-primary card-dim"
      >
        <div
          className={`absolute inset-0 transition-opacity duration-100 ${isHovered ? "opacity-100" : "opacity-0"}`}
          style={{ willChange: "opacity" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-[16px]"
            src={project.vid}
          />
        </div>
        <div className={`card-dim z-20 ${isHovered ? "card-dim-hover" : ""}`} />
        <div className={` z-20 ${isHovered ? "card-overlay" : ""}`} />
        <div
          style={{ willChange: "opacity" }}
          className="absolute inset-0 z-10  "
        >
          <Image
            fill
            src={project.static}
            alt={project.alt}
            className={`object-cover rounded-[16px] ${isHovered ? "opacity-0" : "opacity-100"}   transition-opacity   duration-100  `}
          />
        </div>

        <div
          className={`absolute inset-x-0 bottom-4 z-40 flex flex-col items-center px-4 gap-1 transition-opacity duration-300 ${showTooltip ? "opacity-100" : "opacity-0"}`}
        >
          <h3 className="text-heading font-semibold text-[12px] text-center px-2 bg-secondary py-0.5 rounded-[4px]">
            {project.title}
          </h3>
          <p className="text-[10px] font-jakarta text-heading text-center px-2 bg-secondary/90 py-1 rounded-[4px]">
            {project.result}
          </p>
        </div>
      </div>

      <div className="flex flex-row w-full gap-2 mt-4">
        <CardPrimaryButton className="flex flex-1 justify-center" />
        <CardSecondaryButton className="flex flex-1 justify-center" />
      </div>
    </div>
  );
}

function MobileProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setIsHovered(true);
    tooltipTimerRef.current = setTimeout(() => setShowTooltip(true), 200); // show after 600ms
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
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        className="relative w-[40vw]  h-[32vh] overflow-hidden rounded-[16px] border-2 shadow-lg border-primary card-dim"
      >
        <div
          className={`absolute inset-0 transition-opacity duration-100 ${isHovered ? "opacity-100" : "opacity-0"}`}
          style={{ willChange: "opacity" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-[16px]"
            src={project.vid}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-secondary/40 to-black/20" />
        <div className={`card-dim z-20 ${isHovered ? "card-dim-hover" : ""}`} />
        <div className={` z-20 ${isHovered ? "card-overlay" : ""}`} />
        <div
          style={{ willChange: "opacity" }}
          className="absolute inset-0 z-10  "
        >
          <Image
            fill
            src={project.static}
            alt={project.alt}
            className={`object-cover rounded-[16px] ${isHovered ? "opacity-0" : "opacity-100"}   transition-opacity   duration-100  `}
          />
        </div>

        <div
          className={`absolute inset-x-0 bottom-4 z-40 flex flex-col items-center px-4 gap-1 transition-opacity duration-200 ${showTooltip ? "opacity-100" : "opacity-0"}`}
        >
          <h3 className="text-background font-semibold  text-[12px] text-center px-2 py-0.5 rounded-[4px]">
            {project.title}
          </h3>
          <p className="text-[10px] font-jakarta text-background/90 text-center px-[1%]  py-.5 rounded-[4px]">
            {project.result}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-.5 mb-2">
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
      subheading=" A few things I've built — each one designed with a clear goal in mind"
      childrenClassName=" w-full h-full"
    >
      <div className="hidden md:flex  flex-row justify-evenly ">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="md:hidden flex flex-col items-center h-full justify-evenly">
        <MobileProjectCard key={projects[0].id} project={projects[0]} />
        {/* Bottom row */}
        <div className="flex gap-4 justify-center">
          <MobileProjectCard key={projects[1].slug} project={projects[1]} />
          <MobileProjectCard key={projects[2].slug} project={projects[2]} />
        </div>
      </div>
    </SectionScreen>
  );
}
