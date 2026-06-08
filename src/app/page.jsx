import { HeroSection } from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import SocialProof from "@/components/home/SocialProof";
import { metadataForRoute } from "@/lib/metadata";

export const metadata = metadataForRoute("/");

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <Projects />
      <Process />
      <Services />
    </>
  );
}
