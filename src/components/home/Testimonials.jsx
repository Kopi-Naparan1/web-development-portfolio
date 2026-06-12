"use client";
import { SectionScreen } from "../ui/Section";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const testimonialList = [
  {
    name: "Phyrshah ",
    profilePic: "",
    description:
      "The website looked exactly how we envisioned it. What impressed me most was how he kept us informed every step of the way through a detailed progress file. Nothing felt rushed or overlooked.",
    date: "October 14, 2025",
    facebookUrl: "",
    isShouldBeAdded: true,
  },
  {
    name: "Harris",
    profilePic: "",
    description:
      "I was honestly surprised by how fast and smooth the website ran. Every page loaded quickly and worked perfectly on both mobile and desktop. It was clear a lot of thought went into the technical side of things.",
    date: "January 23, 2026",
    facebookUrl: "",
    isShouldBeAdded: true,
  },
  {
    name: "Jhon",
    profilePic: "",
    description:
      "He was very easy to work with and always responded promptly. The handover process was smooth — he walked us through everything and made sure we understood how to manage the site.",
    date: "February 15, 2026",
    facebookUrl: "",
    isShouldBeAdded: true,
  },
  {
    name: "Benedict",
    profilePic: "",
    description:
      "The design was clean, modern, and well-organized. It felt professional right away. He took our ideas seriously and translated them into something we were genuinely proud to present.",
    date: "March 11, 2026",
    facebookUrl: "",
    isShouldBeAdded: true,
  },

  {
    name: "Ken",
    profilePic: "",
    description:
      "From the first meeting to the final delivery, the whole process was well-managed. The updates through the Excel file were a nice touch — it made the progress feel transparent and organized.",
    date: "April 3, 2026",
    facebookUrl: "",
    isShouldBeAdded: false,
  },

  {
    name: "Shawn",
    profilePic: "",
    description:
      "The website performed beyond our expectations. It was responsive, well-structured, and delivered on time. He communicated clearly throughout and made the whole experience stress-free.",
    date: "May 22, 2026",
    facebookUrl: "",
    isShouldBeAdded: false,
  },
];

function MobileCardMaker({ testimonial, index }) {
  if (testimonial.isShouldBeAdded) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`md:hidden block w-[85%] rounded-xl bg-lighter shadow-md ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
      >
        <p className="text-[13px] pt-2 px-2">{testimonial.description}</p>

        <div className="mt-4 flex flex-row items-center gap-1 bg-secondary pl-2 pb-2 pt-1 rounded-b-2xl">
          <div className="bg-yellow-300 w-10 h-10"></div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-[14px] font-semibold">{testimonial.name}</h3>
            <p className="text-[10px] opacity-80">{testimonial.date}</p>
          </div>
        </div>
      </motion.div>
    );
  }
}
function DesktopRowMaker({ left, right, rowIndex }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "center 90%"],
  });

  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const easedProgress = useSpring(smoothProgress, {
    stiffness: 30,
    damping: 10,
  });

  const spreadMap = [18, 12, 4];
  const spread = spreadMap[rowIndex];

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const xLeft = useTransform(easedProgress, [0, 1], ["0vw", `-${spread}vw`]);
  const xRight = useTransform(easedProgress, [0, 1], ["0vw", `${spread}vw`]);

  return (
    <div ref={ref} className="w-full flex flex-row justify-center gap-4">
      <motion.div
        style={{ x: xLeft, y, opacity, scale }}
        className="w-[28%] rounded-xl bg-lighter shadow-md"
      >
        <p className="text-[15px] pt-2 px-2">{left.description}</p>
        <div className="mt-4 flex flex-row items-center gap-1 bg-secondary pl-2 pb-2 pt-1 rounded-b-2xl">
          <div className="bg-yellow-300 w-10 h-10"></div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-[16px] font-semibold">{left.name}</h3>
            <p className="text-[12px] opacity-80">{left.date}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ x: xRight, y, opacity, scale }}
        className="w-[28%] rounded-xl bg-lighter shadow-md"
      >
        <p className="text-[15px] pt-2 px-2">{right.description}</p>
        <div className="mt-4 flex flex-row items-center gap-1 bg-secondary pl-2 pb-2 pt-1 rounded-b-2xl">
          <div className="bg-yellow-300 w-10 h-10"></div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-[16px] font-semibold">{right.name}</h3>
            <p className="text-[12px] opacity-80">{right.date}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default function Testimonials() {
  const pairs = [
    testimonialList.slice(0, 2),
    testimonialList.slice(2, 4),
    testimonialList.slice(4, 6),
  ];
  return (
    <SectionScreen
      eyebrow={"kind words"}
      heading={"Don't just take my word for it"}
    >
      <div className="w-full h-full items-center justify-evenly md:hidden flex flex-col   gap-2">
        {testimonialList.map((testimonial, index) => (
          <MobileCardMaker
            key={testimonial.name}
            testimonial={testimonial}
            index={index}
          ></MobileCardMaker>
        ))}
      </div>
      <div className="w-full hidden md:flex flex-col items-center gap-4">
        {pairs.map((row, rowIndex) => (
          <DesktopRowMaker
            key={rowIndex}
            left={row[0]}
            right={row[1]}
            rowIndex={rowIndex}
          />
        ))}
      </div>
    </SectionScreen>
  );
}
