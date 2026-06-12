"use client";

import { SectionScreenCut } from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  LayoutDashboard,
  Wrench,
  Gauge,
  Triangle,
  Atom,
  Wind,
  Code,
  Paintbrush,
  GitBranch,
  GitPullRequest,
  PenTool,
  TerminalSquare,
  Zap,
  BarChart2,
  Activity,
  Image,
  Layers,
  Database,
} from "lucide-react";

const skillsList = [
  {
    skillHeading: "Front-end",
    skillIcon: LayoutDashboard,
    skillStack: [
      { name: "Next.js", icon: Triangle },
      { name: "React", icon: Atom },
      { name: "Tailwind", icon: Wind },
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Paintbrush },
    ],
  },
  {
    skillHeading: "Tooling",
    skillIcon: Wrench,
    skillStack: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitPullRequest },
      { name: "Figma", icon: PenTool },
      { name: "VS Code", icon: TerminalSquare },
      { name: "Vercel", icon: Zap },
    ],
  },
  {
    skillHeading: "Performance",
    skillIcon: Gauge,
    skillStack: [
      { name: "Lighthouse", icon: BarChart2 },
      { name: "Web Vitals", icon: Activity },
      { name: "Img optim.", icon: Image },
      { name: "Lazy load", icon: Layers },
      { name: "Caching", icon: Database },
    ],
  },
];

const NUM_DOTS = 6;

function ParticleBurst({ active }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: NUM_DOTS }).map((_, i) => {
        const angle = (i / NUM_DOTS) * Math.PI * 2;
        const dist = 22;
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist;
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/70"
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={
              active
                ? {
                    x: `calc(-50% + ${x}px)`,
                    y: `calc(-50% + ${y}px)`,
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.3],
                  }
                : { x: "-50%", y: "-50%", opacity: 0 }
            }
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.03 }}
          />
        );
      })}
    </div>
  );
}

const headerCardMotionDivClassName =
  "relative flex items-center justify-center gap-1.5 rounded-2xl px-2 md:px-3 w-[30vw] md:w-[14vw] h-[6vh] md:h-[6vh] bg-primary/80 text-background text-[14]px] md:text-[16px] font-semibold cursor-pointer shadow-[0_4px_16px_rgba(26,63,203,0.22)] overflow-visible shrink-0";

const skillCardMotionDivClassName =
  "flex items-center justify-center gap-1.5 rounded-[12px] px-2 md:px-3 w-[26vw] md:w-[12vw] h-[5vh] md:h-[5vh] bg-lighter text-primary text-[13px] md:text-[16px] font-medium cursor-default select-none shrink-0";

function HeaderCard({ icon: Icon, label, open, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ boxShadow: "0 8px 28px rgba(26,63,203,0.38)" }}
      whileTap={{ scale: 0.97 }}
      className={headerCardMotionDivClassName}
    >
      <div className="relative w-[20px] h-[20px] md:w-[28px] md:h-[28px] flex items-center justify-center shrink-0">
        <ParticleBurst active={hovered} />
        <motion.div
          animate={
            hovered ? { scale: 1.35, rotate: -12 } : { scale: 1, rotate: 0 }
          }
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Icon className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
        </motion.div>
      </div>

      <span className="truncate leading-tight text-center">{label}</span>

      <motion.span
        className="text-[8px] md:text-[11px] opacity-70 flex-shrink-0"
        animate={{ rotate: open ? 0 : -90 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        ▼
      </motion.span>
    </motion.button>
  );
}

function SkillCard({ icon: Icon, name }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={skillCardMotionDivClassName}
    >
      <motion.div
        whileHover={{ scale: 1.3, rotate: 6 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="flex-shrink-0"
      >
        <Icon className="w-[13px] h-[13px] md:w-[16px] md:h-[16px]" />
      </motion.div>
      <span className="truncate">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [openCols, setOpenCols] = useState([0, 1, 2]);

  const toggle = (i) =>
    setOpenCols((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  return (
    <SectionScreenCut
      eyebrow="tech stack"
      heading="tools i work with"
      subheading="Modern, fast, and built to scale — everything I use is production-ready."
    >
      <div className="flex flex-row justify-center  min-h:h-[30vh] h-[40vh]  gap-2 md:gap-2.5 items-start">
        {skillsList.map((group, i) => {
          const isOpen = openCols.includes(i);
          return (
            <div
              key={group.skillHeading}
              className="flex flex-col gap-2 md:gap-2.5 items-center"
            >
              <HeaderCard
                icon={group.skillIcon}
                label={group.skillHeading}
                open={isOpen}
                onClick={() => toggle(i)}
              />
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="items"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-2 md:gap-2.5 items-center overflow-hidden"
                  >
                    {group.skillStack.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        icon={skill.icon}
                        name={skill.name}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionScreenCut>
  );
}
