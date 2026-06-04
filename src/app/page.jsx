import { HeroSection } from "@/components/home/Hero";
import { metadataForRoute } from "@/lib/metadata";

export const metadata = metadataForRoute("/");

export default function Home() {
  return <HeroSection />;
}
