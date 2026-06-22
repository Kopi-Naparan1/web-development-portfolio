import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import SocialProof from "@/components/home/SocialProof";

// import Process from "@/components/home/Process";
// import Services from "@/components/home/Services";
// import Testimonials from "@/components/home/Testimonials";
// import Skills from "@/components/home/Skills";
// import About from "@/components/home/About";
// import Contact from "@/components/home/Contact";

const Process = dynamic(() => import("@/components/home/Process"));
const Services = dynamic(() => import("@/components/home/Services"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const Skills = dynamic(() => import("@/components/home/Skills"));
const About = dynamic(() => import("@/components/home/About"));
const Contact = dynamic(() => import("@/components/home/Contact"));

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
    <div className="flex flex-col md:gap-0 gap-[5vh]">
      {sections.map(({ Component, sectionID }) => (
        <Component key={sectionID} sectionID={sectionID} />
      ))}
    </div>
  );
}
