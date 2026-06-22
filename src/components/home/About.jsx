"use client";

import { SectionScreen } from "../ui/Section";
import { PrimaryButton } from "../ui/Buttons";
import AboutImage from "../../../public/important-assets/homepage/about/about.webp";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const paragraphList = [
  {
    order: 1,
    p: "I'm a freelance web developer based in the Philippines, specializing in landing pages and marketing sites for small businesses. I build with Next.js and React — fast, clean, and conversion-focused.",
  },
  {
    order: 2,
    p: "I believe a great website isn't just about how it looks — it's about what it does. Every decision I make, from layout to load time, is made with one goal in mind: helping your business grow.",
  },
  {
    order: 3,
    p: "When I'm not building sites, I'm probably learning varius musical instruments, reading non-fiction books, or training for an upcoming marathon.",
  },
];

function AnimatedItem({ children, index }) {
  const ref = useRef(null);
  // once: true — plays the slide/shrink reveal a single time, then holds
  // its final position regardless of further scrolling
  const isInView = useInView(ref, { margin: "-80px", once: true });

  const shift = index * 4;
  const shrink = index * 10;

  return (
    <motion.div
      ref={ref}
      initial={{ x: 0, opacity: 0.4, width: "100%" }}
      animate={
        isInView
          ? { x: `${shift}rem`, opacity: 1, width: `${100 - shrink}%` }
          : { x: 0, opacity: 0.4, width: "100%" }
      }
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About({ sectionID }) {
  return (
    <SectionScreen
      id={sectionID}
      eyebrow={"about me"}
      heading={"A developer who thinks like a marketer"}
    >
      <div className="flex flex-col md:flex-row justify-center items-center flex-1">
        {/* Image */}
        <div className="relative w-[90%] h-[clamp(250px,50vh,650px)] md:h-[clamp(550px,75vh,850px)] md:w-[70%]">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={AboutImage}
            className="object-contain"
            alt="Kopi Anan Naparan Profile Picture"
          />
        </div>

        {/* Mobile paragraphs */}
        <div className="flex flex-col gap-6 text-[14px] text-center md:hidden w-[70vw] mt-[2%]">
          {paragraphList.map(
            (paragraph) =>
              paragraph.order !== 3 && (
                <p key={paragraph.order}>{paragraph.p}</p>
              ),
          )}
        </div>

        {/* Desktop paragraphs with animation */}
        <div className="hidden md:flex flex-col text-[20px] text-left w-full mt-[2%]">
          <div className="flex flex-col gap-[3vh]">
            {paragraphList.map((paragraph, index) => (
              <AnimatedItem key={paragraph.order} index={index}>
                <p>{paragraph.p}</p>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedItem index={paragraphList.length}>
            <div className="flex mt-[3vh]">
              <div className="flex flex-col">
                <p className="text-[12px] opacity-60">Want a website?</p>
                <PrimaryButton />
              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden flex flex-col items-center mt-[5%]">
          <p className="text-[12px] opacity-60">Want a website?</p>
          <PrimaryButton mt="1" />
        </div>
      </div>
    </SectionScreen>
  );
}
