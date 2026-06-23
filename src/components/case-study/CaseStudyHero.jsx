import Image from "next/image";

import { CaseStudyPrimary } from "../ui/Buttons";
import { CaseStudySecondary } from "../ui/Buttons";
export default function CaseStudyHero({ project }) {
  return (
    <div className="md:caseStudySectionLayout mobileSectionLayout min-h-[95vh] flex flex-col items-center justify-evenly text-center bg-green-300">
      <div className="relative w-full h-[70vh] md:h-[80vh] bg-pink-300">
        <Image
          src={project.mobileHeroImage || project.heroImage}
          alt={project.alt || project.title}
          fill
          className="object-cover md:hidden"
          priority
        />
        <Image
          src={project.heroImage}
          alt={project.alt || project.title}
          fill
          className="object-contain hidden md:block"
          priority
        />
      </div>

      <div className="flex flex-col w-full bg-red-300">
        <div className="flex flex-col items-center gap-1 h-full">
          <p className="mobileEyebrow md:eyebrow">
            WEB DESIGN {project.year || "2026"}
          </p>
          <h1 className="mobileTitle md:title">{project.title}</h1>
          {project.subHeading && (
            <p className="mobileSubheading md:subheading w-full">
              {project.subHeading}
            </p>
          )}
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <CaseStudySecondary />
          <CaseStudyPrimary liveSiteUrl={project.liveSiteUrl} />
        </div>
      </div>
    </div>
  );
}
