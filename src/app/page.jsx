import { HeroSection } from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import { metadataForRoute } from "@/lib/metadata";

export const metadata = metadataForRoute("/");

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Process />
      <Services />
    </>
  );
}
