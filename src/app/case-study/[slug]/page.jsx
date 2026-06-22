// my-app\src\app\case-study\[slug]\page.jsx

import { caseStudyProjects } from "@/data/project";
import { metadataForRoute } from "@/lib/metadata";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import HowIWork from "@/components/case-study/HowIWork";

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
    <main>
      <CaseStudyHero project={project}></CaseStudyHero>
      <HowIWork slug={slug}></HowIWork>
      <CaseStudyHero project={project}></CaseStudyHero>
    </main>
  );
}
