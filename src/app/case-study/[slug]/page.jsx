import { projects } from "@/data/project";
import { metadataForRoute } from "@/lib/metadata";
import { notFound } from "next/navigation";

export const metadata = metadataForRoute("/case-study");

export default function CaseStudyPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </main>
  );
}
