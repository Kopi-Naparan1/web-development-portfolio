"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { SectionScreen } from "../ui/Section";
import { caseStudyProjects } from "@/data/project";

// ============================================================
// Layout constants
// ============================================================

const GAP_PER_STEP = 120;
const ANIMATION_SCROLL_SPAN = 600; // px of scroll the spread-out animation takes
const CARD_HEIGHT = "min(50vh, 480px)";
const CARD_WIDTH = "min(24vw, 340px)";

// Mobile card width shrinks from a base value across the whole stack.
// The *total* shrink stays fixed regardless of step count, so a 3-step
// and an 8-step process look like the same family of cards instead of
// the later one collapsing toward 0vw.
const MOBILE_BASE_WIDTH_VW = 68;
const MOBILE_WIDTH_RANGE_VW = 6;

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

// Clamp long descriptions instead of giving each card its own nested
// scrollbar — a scrollable box inside a page that's also being scrolled
// is a fight touch users always lose.
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

function useMobileCardMotion({ index, count, normalized, reducedMotion }) {
  const segment = 1 / count;
  const start = index * segment;
  const end = start + segment;

  const y = useTransform(
    normalized,
    [start, end],
    reducedMotion ? [0, 0] : [220, 0],
  );
  const textY = useTransform(
    normalized,
    [start, end],
    reducedMotion ? [0, 0] : [20, 0],
  );
  // Legible by default. The old range (0 → 0.3) depended on a hover boost
  // to ever reach a readable opacity — but touch devices never fire hover,
  // so the description was effectively invisible on every phone.
  const opacity = useTransform(normalized, [start, end], [0.55, 0.95]);
  const pegY = useTransform(
    normalized,
    [start, end],
    reducedMotion ? [0, 0] : [10, 0],
  );

  return { y, textY, opacity, pegY };
}

function MobileProcessCard({
  process,
  index,
  normalized,
  count,
  reducedMotion,
}) {
  const [isActive, setIsActive] = useState(false);
  const { y, textY, opacity, pegY } = useMobileCardMotion({
    index,
    count,
    normalized,
    reducedMotion,
  });
  const Icon = process.icon;

  const widthVw =
    MOBILE_BASE_WIDTH_VW -
    (count > 1 ? (index / (count - 1)) * MOBILE_WIDTH_RANGE_VW : 0);

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
        zIndex: count - index + 6, // was a flat `10 - index`; matches it exactly at count=4, never goes negative beyond that
        y,
        width: `${widthVw}vw`,
      }}
    >
      <motion.div className="flex justify-evenly" style={{ y: pegY }}>
        <LegoPegs />
      </motion.div>

      <div
        className={`border-2 border-primary flex flex-col justify-evenly rounded-[8px] depth h-full bg-lighter transition-shadow duration-300 ${
          isActive ? "shadow-md" : ""
        }`}
      >
        <h3 className="card-heading text-center">{process.title}</h3>

        <div className="flex justify-center my-2">
          <StepIcon Icon={Icon} />
        </div>

        {/* style (not animate) so this stays bound to the live scroll
            value instead of snapshotting opacity.get() once per render */}
        <motion.p
          style={{ opacity: isActive ? 0.95 : opacity, y: textY }}
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

// Spread offsets indexed generically — works for any step count, not just 4
function getStartX(index, total) {
  const mid = (total - 1) / 2;
  const offsetSteps = index - mid;
  return offsetSteps * GAP_PER_STEP * 2;
}

function useDesktopCardSpreadX({
  index,
  total,
  scrollProgressPx,
  reducedMotion,
}) {
  const startX = useMemo(() => getStartX(index, total), [index, total]);
  const x = useMotionValue(reducedMotion ? 0 : startX);

  useEffect(() => {
    if (reducedMotion) {
      x.set(0);
      return;
    }

    const syncNow = (latestPx) => {
      let t = latestPx / ANIMATION_SCROLL_SPAN;
      t = Math.max(0, Math.min(1, t));
      const eased = t < 1 ? t + Math.sin(t * Math.PI) * 0.18 * (1 - t) : 1;
      x.set(startX * (1 - eased));
    };

    syncNow(scrollProgressPx.get());
    return scrollProgressPx.on("change", syncNow);
  }, [scrollProgressPx, startX, x, reducedMotion]);

  return x;
}

function DesktopCardSideDesign({ side, process }) {
  if (side === "left") {
    return process.leftSideDesign ? (
      <div className={leftDesignClass} aria-hidden="true" />
    ) : null;
  }

  if (!process.rightSideDesign) return null;
  return (
    <div
      className="col-start-10 col-end-11 row-start-1 row-end-12 grid grid-rows-11 -mr-[8px]"
      aria-hidden="true"
    >
      <div className={rightTopClass} />
      <div className={rightBottomClass} />
    </div>
  );
}

function DesktopProcessCard({
  process,
  index,
  total,
  scrollProgressPx,
  reducedMotion,
}) {
  const x = useDesktopCardSpreadX({
    index,
    total,
    scrollProgressPx,
    reducedMotion,
  });
  const y = useMotionValue(0);
  const Icon = process.icon;
  const isLast = index === total - 1;

  return (
    <motion.li
      style={{ x, y, height: CARD_HEIGHT, width: CARD_WIDTH }}
      tabIndex={0}
      className={`
        group list-none grid grid-cols-10 grid-rows-11 grid-flow-row flex-shrink-0
        rounded-lg ${FOCUS_RING}
        ${index !== 0 ? "-ml-[2vw]" : ""}
      `}
    >
      <DesktopCardSideDesign side="left" process={process} />

      <div
        className={`${isLast ? "rounded-lg" : "rounded-l-lg"}
          col-start-2 col-end-10 row-start-1 row-end-12
          border-2 border-primary bg-lighter flex flex-col
          transition-[transform,box-shadow] duration-300 ease-out
          group-hover:-translate-y-1 group-hover:shadow-xl
          group-focus-visible:-translate-y-1 group-focus-visible:shadow-xl`}
      >
        <div className="flex flex-col justify-between h-full gap-3 my-3 mx-2 overflow-hidden">
          <div className="flex items-center justify-center flex-col flex-shrink-0">
            <p className="text-[clamp(12px,1vw,15px)] text-heading">
              {process.step}
            </p>
            <h3 className="card-heading text-center text-[clamp(18px,1.6vw,26px)]">
              {process.title}
            </h3>
          </div>

          <div className="flex justify-center flex-shrink-0">
            <StepIcon Icon={Icon} size="h-[6vh] w-[6vh]" />
          </div>

          <p
            className={`card-description text-[clamp(13px,1.1vw,17px)] leading-relaxed px-2 ${CLAMP_5}`}
          >
            {process.description}
          </p>
        </div>
      </div>

      <DesktopCardSideDesign side="right" process={process} />
    </motion.li>
  );
}

// ============================================================
// Layout groups (mobile list / desktop row)
// ============================================================

function MobileProcessList({ process, normalized, reducedMotion }) {
  return (
    <ol
      className="md:hidden flex flex-col items-center list-none m-0 p-0"
      aria-label="Our process"
    >
      {process.map((item, index) => (
        <MobileProcessCard
          key={`${item.step}-${index}`}
          process={item}
          index={index}
          normalized={normalized}
          count={process.length}
          reducedMotion={reducedMotion}
        />
      ))}
    </ol>
  );
}

function DesktopProcessRow({ process, scrollProgressPx, reducedMotion }) {
  return (
    <ol
      className="hidden md:flex flex-row items-center justify-center w-full list-none m-0 p-0"
      aria-label="Our process"
    >
      {process.map((item, index) => (
        <DesktopProcessCard
          key={`${item.step}-${index}`}
          process={item}
          index={index}
          total={process.length}
          scrollProgressPx={scrollProgressPx}
          reducedMotion={reducedMotion}
        />
      ))}
    </ol>
  );
}

// ============================================================
// Scroll-scrub wrapper
// Cards finish spreading by the time the section's middle hits viewport center.
// ============================================================

function ScrollScrubStage({ children }) {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"], // done animating once section middle reaches viewport center
  });

  // Mobile card-by-card reveal wants a 0→1 normalized value — scrollYProgress
  // already is one, no need to pass it through an identity transform.
  const normalized = scrollYProgress;

  // Desktop spread wants a px-ish progress value.
  const scrollProgressPx = useTransform(
    scrollYProgress,
    [0, 1],
    [0, ANIMATION_SCROLL_SPAN],
  );

  return (
    <div
      ref={sectionRef}
      className="w-full flex items-center justify-center py-[4vh]"
    >
      {children({ normalized, scrollProgressPx, reducedMotion })}
    </div>
  );
}

// ============================================================
// Main export
// ============================================================

export default function HowIWork({ slug }) {
  const project = caseStudyProjects.find((item) => item.slug === slug);
  const process = project?.process ?? [];

  if (process.length === 0) return null;

  return (
    <SectionScreen
      className="!h-auto !max-h-none !overflow-visible"
      childrenClassName="!h-auto !mt-[4vh]"
      eyebrow="how i work"
      heading="Simple, clear, No Surpises"
      subheading="From first message to launch day, here's what working with me looks like"
    >
      <ScrollScrubStage>
        {({ normalized, scrollProgressPx, reducedMotion }) => (
          <>
            <MobileProcessList
              process={process}
              normalized={normalized}
              reducedMotion={reducedMotion}
            />
            <DesktopProcessRow
              process={process}
              scrollProgressPx={scrollProgressPx}
              reducedMotion={reducedMotion}
            />
          </>
        )}
      </ScrollScrubStage>
    </SectionScreen>
  );
}
