import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/
          case-study/${project.slug}`}
        >
          {project.title}
        </Link>
      ))}
    </section>
  );
}
