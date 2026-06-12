import { HeroSection } from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import SocialProof from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";

import { metadataForRoute } from "@/lib/metadata";

export const metadata = metadataForRoute("/");

export default function Home() {
  return (
    <div className="flex flex-col md:gap-0 gap-[5vh]">
      <HeroSection />
      <SocialProof />
      <Projects />
      <Process />
      <Services />
      <Testimonials />
      <Skills />
      <About />
    </div>
  );
}
