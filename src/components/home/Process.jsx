"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { SectionScreen } from "../ui/Section";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
  useInView,
  animate,
} from "framer-motion";

// ============================================================
// Content
// ============================================================

const processList = [
  {
    step: "Step 1",
    title: "Discovery",
    description:
      "We talk about your business, your goals, and what success looks like for your project.",
    icon: Search,
    leftSideDesign: false,
    rightSideDesign: true,
  },
  {
    step: "Step 2",
    title: "Design",
    description:
      "I map out the layout and structure before writing a single line of code.",
    icon: PenTool,
    leftSideDesign: true,
    rightSideDesign: true,
  },
  {
    step: "Step 3",
    title: "Build",
    description:
      "I develop your site with clean code, fast load times, and mobile-first design.",
    icon: Code,
    leftSideDesign: true,
    rightSideDesign: true,
  },
  {
    step: "Step 4",
    title: "Launch",
    description:
      "We review, refine, and go live — with everything tested and ready to perform.",
    icon: Rocket,
    leftSideDesign: true,
    rightSideDesign: false,
  },
];

// ============================================================
// Layout constants
// ============================================================

const GAP_PER_STEP = 120;

const MOBILE_BASE_WIDTH_VW = 68;
const MOBILE_WIDTH_RANGE_VW = 6;

const DESKTOP_CARD_HEIGHT = "min(clamp(36vh, 38vh, 40vh), 420px)";
const DESKTOP_CARD_WIDTH = "min(20vw, 300px)";

// How long the one-time reveal animation takes once triggered
const REVEAL_DURATION = 0.6;
const REVEAL_STAGGER = 0.12;

// ============================================================
// Shared style fragments
// ============================================================

const leftDesignClass =
  "col-start-1 col-end-2 row-start-7 row-end-10 bg-secondary border-t-2 border-l-2 border-b-2 border-primary";
const rightTopClass =
  "bg-secondary row-start-1 row-end-7 rounded-tr-lg border-t-2 border-r-2 border-b-2 border-primary";
const rightBottomClass =
  "bg-secondary row-start-10 row-end-12 rounded-br-lg border-t-2 border-r-2 border-b-2 border-primary";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2";

const CLAMP_4 =
  "[display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical] overflow-hidden";
const CLAMP_5 =
  "[display:-webkit-box] [-webkit-line-clamp:5] [-webkit-box-orient:vertical] overflow-hidden";

// ============================================================
// Small presentational pieces
// ============================================================

function StepIcon({ Icon, size = "h-[4vh] w-[4vh]" }) {
  if (!Icon) return null;
  return (
    <div className="p-[1.2vh] rounded-full bg-primary/10 border border-primary/20 depth hoverLift">
      <Icon className={`${size} text-heading/70`} aria-hidden="true" />
    </div>
  );
}

function LegoPegs() {
  return (
    <>
      <div
        className="w-[20%] bg-secondary border-t-2 border-x-2 h-[3vh] rounded-t-2xl"
        aria-hidden="true"
      />
      <div
        className="w-[20%] bg-secondary border-t-2 border-x-2 h-[3vh] rounded-t-2xl"
        aria-hidden="true"
      />
    </>
  );
}

// ============================================================
// Mobile card
// ============================================================

function MobileProcessCard({
  process,
  index,
  count,
  hasEntered,
  reducedMotion,
}) {
  const [isActive, setIsActive] = useState(false);
  const Icon = process.icon;

  const widthVw =
    MOBILE_BASE_WIDTH_VW -
    (count > 1 ? (index / (count - 1)) * MOBILE_WIDTH_RANGE_VW : 0);

  // Same visual motion as before (slide up + fade in), but driven by a
  // one-shot "hasEntered" flag instead of live scroll position — so once
  // it plays, it stays in its resting state regardless of scroll direction.
  const initial = reducedMotion
    ? { y: 0, opacity: 0.95 }
    : { y: 220, opacity: 0.55 };
  const resting = { y: 0, opacity: 0.95 };

  return (
    <motion.li
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      className={`list-none flex flex-col h-[23vh] rounded-[8px] ${FOCUS_RING}`}
      style={{
        marginTop: index === 0 ? 0 : "-3vh",
        zIndex: count - index + 6,
        width: `${widthVw}vw`,
      }}
      initial={initial}
      animate={hasEntered ? resting : initial}
      transition={{
        duration: REVEAL_DURATION,
        delay: index * REVEAL_STAGGER,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="flex justify-evenly"
        initial={reducedMotion ? { y: 0 } : { y: 10 }}
        animate={hasEntered ? { y: 0 } : reducedMotion ? { y: 0 } : { y: 10 }}
        transition={{
          duration: REVEAL_DURATION,
          delay: index * REVEAL_STAGGER,
          ease: "easeOut",
        }}
      >
        <LegoPegs />
      </motion.div>

      <div
        className={`border-2 border-primary flex flex-col justify-evenly rounded-[8px] depth h-full bg-lighter transition-shadow duration-300 ${
          isActive ? "shadow-md" : ""
        }`}
      >
        <div className="my-[1vh]">
          <p className="text-[clamp(12px,1vw,14px)] text-center text-heading">
            {process.step}
          </p>
          <h3 className="card-heading text-center">{process.title}</h3>
        </div>

        <div className="flex justify-center my-2">
          <StepIcon Icon={Icon} />
        </div>

        <motion.p
          initial={reducedMotion ? { y: 0 } : { y: 20 }}
          animate={hasEntered ? { y: 0 } : reducedMotion ? { y: 0 } : { y: 20 }}
          transition={{
            duration: REVEAL_DURATION,
            delay: index * REVEAL_STAGGER,
            ease: "easeOut",
          }}
          style={{ opacity: isActive ? 0.95 : undefined }}
          className={`card-description mb-[2px] p-1 ${CLAMP_4}`}
        >
          {process.description}
        </motion.p>
      </div>
    </motion.li>
  );
}

// ============================================================
// Desktop card
// ============================================================

function getStartX(index, total) {
  const mid = (total - 1) / 2;
  const offsetSteps = index - mid;
  return offsetSteps * GAP_PER_STEP * 2;
}

function DesktopProcessCard({
  process,
  index,
  total,
  hasEntered,
  reducedMotion,
}) {
  const Icon = process.icon;
  const isLast = index === total - 1;

  const startX = useMemo(() => getStartX(index, total), [index, total]);

  const x = useMotionValue(reducedMotion ? 0 : startX);
  const y = useMotionValue(0);

  useEffect(() => {
    if (reducedMotion) {
      x.set(0);
      return;
    }

    // Animate from the spread-out start position to 0 (resting/overlapped)
    // once, when hasEntered flips true. No live scroll binding, no reverse.
    const controls = animate(x, hasEntered ? 0 : startX, {
      duration: REVEAL_DURATION + 0.2,
      delay: hasEntered ? index * REVEAL_STAGGER : 0,
      ease: [0.16, 1, 0.3, 1], // smooth deceleration, keeps the "settle into place" feel
    });

    return () => controls.stop();
  }, [hasEntered, startX, x, reducedMotion, index]);

  return (
    <motion.li
      style={{ x, y, height: DESKTOP_CARD_HEIGHT, width: DESKTOP_CARD_WIDTH }}
      tabIndex={0}
      className={`
        group list-none grid grid-cols-10 grid-rows-11 grid-flow-row flex-shrink-0
        rounded-lg ${FOCUS_RING}
        ${index !== 0 ? "-ml-[2vw]" : ""}
      `}
    >
      {process.leftSideDesign && (
        <div className={leftDesignClass} aria-hidden="true" />
      )}
      <div
        className={`${isLast ? "rounded-lg" : "rounded-l-lg"}
          col-start-2 col-end-10 row-start-1 row-end-12
          border-2 border-primary bg-lighter flex flex-col
          transition-[transform,box-shadow] duration-300 ease-out
          group-hover:-translate-y-1 group-hover:shadow-xl
          group-focus-visible:-translate-y-1 group-focus-visible:shadow-xl`}
      >
        <div className="flex flex-col justify-between h-full my-2 mx-1 overflow-hidden">
          <div className="flex items-center justify-center flex-col">
            <h3 className="card-heading text-center text-[clamp(18px,1.6vw,24px)]">
              {process.title}
            </h3>
            <p className="text-[clamp(12px,1vw,14px)] text-heading">
              {process.step}
            </p>
          </div>

          <div className="flex justify-center my-2">
            <StepIcon Icon={Icon} size="h-[7vh] w-[7vh]" />
          </div>

          <p
            className={`card-description text-[clamp(13px,1.1vw,16px)] mb-[2px] ${CLAMP_5}`}
          >
            {process.description}
          </p>
        </div>
      </div>
      {process.rightSideDesign && (
        <div
          className="col-start-10 col-end-11 row-start-1 row-end-12 grid grid-rows-11 -mr-[8px]"
          aria-hidden="true"
        >
          <div className={rightTopClass} />
          <div className={rightBottomClass} />
        </div>
      )}
    </motion.li>
  );
}

// ============================================================
// Main export
// ============================================================

export default function Process({ sectionID }) {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const count = processList.length;

  // Fires true once the section is sufficiently in view, and stays true
  // forever after (default useInView behavior — once: false here, but we
  // never let hasEntered go back to false below).
  const isInView = useInView(sectionRef, {
    amount: 0.35,
    once: true,
  });

  return (
    <SectionScreen
      id={sectionID}
      ref={sectionRef}
      eyebrow={"how i work"}
      heading={"Simple, clear, No Surpises"}
      subheading={
        "From first message to launch day, here's what working with me looks like"
      }
      minHeightClass={"h-[75vh]"}
      childrenClassName="w-full h-full"
    >
      <ol
        className="md:hidden flex flex-col items-center list-none m-0 p-0"
        aria-label="Our process"
      >
        {processList.map((process, index) => (
          <MobileProcessCard
            key={process.step}
            process={process}
            index={index}
            count={count}
            hasEntered={isInView}
            reducedMotion={reducedMotion}
          />
        ))}
      </ol>
      <ol
        className="hidden md:flex flex-row h-full items-center justify-center w-full list-none m-0 p-0"
        aria-label="Our process"
      >
        {processList.map((process, index) => (
          <DesktopProcessCard
            key={process.step}
            process={process}
            index={index}
            total={count}
            hasEntered={isInView}
            reducedMotion={reducedMotion}
          />
        ))}
      </ol>
    </SectionScreen>
  );
}
