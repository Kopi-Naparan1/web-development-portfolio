export const metadata = metadataForRoute("/caseStudy");
import { metadataForRoute } from "@/lib/metadata";
import { projects } from "@/data/projects";
import notFound from "next/navigation";

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
