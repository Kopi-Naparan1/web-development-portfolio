import nextDynamic from "next/dynamic";

export const dynamic = "force-static";

import { HeroSection } from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import SocialProof from "@/components/home/SocialProof";

const Process = nextDynamic(() => import("@/components/home/Process"));
const Services = nextDynamic(() => import("@/components/home/Services"));
const Testimonials = nextDynamic(
  () => import("@/components/home/Testimonials"),
);
const Skills = nextDynamic(() => import("@/components/home/Skills"));
const About = nextDynamic(() => import("@/components/home/About"));
const Contact = nextDynamic(() => import("@/components/home/Contact"));

import { metadataForRoute } from "@/lib/metadata";

export const metadata = metadataForRoute("/");

const sections = [
  { Component: HeroSection, sectionID: "home" },
  { Component: SocialProof, sectionID: "social-proof" },
  { Component: Projects, sectionID: "works" },
  { Component: Process, sectionID: "process" },
  { Component: Services, sectionID: "services" },
  { Component: Testimonials, sectionID: "testimonials" },
  { Component: Skills, sectionID: "skills" },
  { Component: About, sectionID: "about" },
  { Component: Contact, sectionID: "contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col md:gap-0 gap-[10vh]">
      {sections.map(({ Component, sectionID }) => (
        <Component key={sectionID} sectionID={sectionID} />
      ))}
    </div>
  );
}
