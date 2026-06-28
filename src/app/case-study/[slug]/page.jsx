// my-app\src\app\case-study\[slug]\page.jsx

import { caseStudyProjects } from "@/data/project";
import { metadataForRoute } from "@/lib/metadata";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import HowIWork from "@/components/case-study/HowIWork";
import HowItCameTogether from "@/components/case-study/HowItCameTogether";
import TheOutcome from "@/components/case-study/TheOutcome";
import NextCTA from "@/components/case-study/NextCTA";

export const metadata = metadataForRoute("/case-study");

export async function generateStaticParams() {
  return caseStudyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }
  const process = project.process;
  return (
    <main className="flex flex-col gap-[10vh] md:gap-0">
      <CaseStudyHero project={project}></CaseStudyHero>

      <HowItCameTogether slug={slug}></HowItCameTogether>
      <HowIWork slug={slug}></HowIWork>
      <TheOutcome slug={slug}></TheOutcome>
      <NextCTA slug={slug}></NextCTA>
    </main>
  );
}
