"use client";

import { useRef, useEffect, useMemo } from "react";
import { SectionScreen } from "../ui/Section";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

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
    step: "Step 2 ",
    title: "Design",
    description:
      " I map out the layout and structure before writing a single line of code. ",
    icon: PenTool,
    leftSideDesign: true,
    rightSideDesign: true,
  },
  {
    step: "Step 3",
    title: "Build",
    description:
      "  I develop your site with clean code, fast load times, and mobile-first design.",
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

function MobileProcessCard({ process, index, normalized }) {
  const count = processList.length;
  const segment = 1 / count;
  const start = index * segment;
  const end = start + segment;

  const y = useTransform(normalized, [start, end], [220, 0]);

  const textY = useTransform(normalized, [start, end], [20, 0]);

  const opacity = useTransform(normalized, [start, end], [0, 1]);

  const pegY = useTransform(normalized, [start, end], [10, 0]);
  const Icon = process.icon;
  return (
    <motion.div
      className="flex flex-col h-[23vh] "
      style={{
        marginTop: index === 0 ? 0 : "-3vh",
        zIndex: 10 - index,
        y,
        width: `${68 - index * 2}vw`,
      }}
    >
      {/* 2 blocks represents the lego's bulgy thing to insert */}
      <motion.div className="flex justify-evenly" style={{ y: pegY }}>
        <div className="w-[15vw] bg-secondary border-t-2  border-x-2 h-[3vh] rounded-t-2xl"></div>
        <div className="w-[15vw] bg-secondary border-t-2 border-x-2 h-[3vh] rounded-t-2xl"></div>
      </motion.div>

      <div className="border-2 border-primary flex flex-col justify-evenly rounded-[8px] depth h-full bg-lighter  ">
        <h3 className="card-heading text-center">{process.title}</h3>
        <div className="flex justify-center my-2">
          <div className="p-[1.2vh] rounded-full bg-primary/10 border border-primary/20 depth hoverLift">
            <Icon className="h-[4vh] w-[4vh] text-heading/70" />
          </div>
        </div>
        <motion.p
          className="card-description mb-[2px]"
          style={{
            opacity,
            y: textY,
          }}
        >
          {process.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function DesktopProcessCard({ process, index, scrollYProgress }) {
  const Icon = process.icon;

  const leftDesignClass =
    "col-start-1 col-end-2 row-start-7 row-end-10 bg-secondary   border-t-2 border-l-2 border-b-2 border-primary";
  const rightTopClass =
    "bg-secondary row-start-1 row-end-7 rounded-tr-lg border-t-2 border-r-2 border-b-2 border-primary";

  const rightBottomClass =
    "bg-secondary row-start-10 row-end-12 rounded-br-lg border-t-2 border-r-2 border-b-2 border-primary";
  const { cardStart, cardEnd, startX } = useMemo(() => {
    const count = processList.length;
    const scrollStart = 0.1;
    const scrollEnd = 0.5;
    const scrollSpan = scrollEnd - scrollStart;

    const cardStart = scrollStart;
    const cardEnd = scrollEnd;

    // The extra spread beyond the resting overlap
    // Cards 0,1 spread further left; cards 2,3 spread further right
    const gapPerStep = 120;

    let startX;
    if (index === 0) startX = -gapPerStep * 3;
    if (index === 1) startX = -gapPerStep * 1;
    if (index === 2) startX = gapPerStep * 1;
    if (index === 3) startX = gapPerStep * 3;

    return { cardStart, cardEnd, startX };
  }, [index]);

  const x = useMotionValue(startX);
  const y = useMotionValue(0); // no vertical movement

  useEffect(() => {
    const syncNow = (latest) => {
      let t = (latest - cardStart) / (cardEnd - cardStart);
      t = Math.max(0, Math.min(1, t));
      const eased = t < 1 ? t + Math.sin(t * Math.PI) * 0.18 * (1 - t) : 1;
      x.set(startX * (1 - eased));
    };

    syncNow(scrollYProgress.get());
    return scrollYProgress.on("change", syncNow);
  }, [scrollYProgress, cardStart, cardEnd, startX]);

  return (
    <motion.div
      style={{ x, y }}
      className={`
      h-[clamp(36vh,38vh,40vh)] 
      grid grid-cols-10 grid-rows-11 grid-flow-row
      w-[20vw]
      ${index !== 0 ? "-ml-[2vw]" : ""}
    `}
    >
      {process.leftSideDesign && <div className={leftDesignClass} />}
      <div
        className={`${index === 3 ? "rounded-lg" : "rounded-l-lg"}
          col-start-2 col-end-10 row-start-1 row-end-12
          border-2 border-primary bg-lighter flex flex-col`}
      >
        <div className="flex flex-col justify-between h-full my-2 mx-1">
          <h3 className="card-heading text-center text-[24px]">
            {process.title}
          </h3>
          <div className="flex justify-center my-2">
            <div className="p-[2.5vh] rounded-full bg-primary/10 border border-primary/20 depth hoverLift">
              <Icon className="h-[7vh] w-[7vh] text-heading/70" />
            </div>
          </div>
          <p className="card-description text-[16px] mb-[2px]">
            {process.description}
          </p>
        </div>
      </div>
      {process.rightSideDesign && (
        <div className="col-start-10 col-end-11 row-start-1 row-end-12 grid grid-rows-11  -mr-[8px]">
          <div className={rightTopClass} />
          <div className={rightBottomClass} />
        </div>
      )}
    </motion.div>
  );
}

export default function Process() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const normalized = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  return (
    <SectionScreen
      ref={sectionRef}
      heading={"Simple, clear, No Surpises"}
      subheading={
        "From first message to launch day, here's what working with me looks like"
      }
      childrenClassName="w-full h-full "
    >
      <div className="md:hidden flex flex-col items-center">
        {processList.map((process, index) => (
          <MobileProcessCard
            key={process.step}
            process={process}
            index={index}
            normalized={normalized}
          ></MobileProcessCard>
        ))}
      </div>
      <div className="hidden md:flex flex-row h-full  items-center justify-center w-full">
        {processList.map((process, index) => (
          <DesktopProcessCard
            key={process.step}
            process={process}
            scrollYProgress={scrollYProgress}
            index={index}
          ></DesktopProcessCard>
        ))}
      </div>
    </SectionScreen>
  );
}
