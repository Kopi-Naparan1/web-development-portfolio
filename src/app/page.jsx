import { HeroSection } from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import SocialProof from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

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
