import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import { CaseStudyPrimary } from "../ui/Buttons";
import { CaseStudySecondary } from "../ui/Buttons";

export default function CaseStudyHero({ project }) {
  return (
    <div className="md:caseStudySectionLayout mobileSectionLayout flex flex-col items-center text-center bg-yellow-300">
      {/* Laptop mockup image */}
      <div className="relative w-full h-full bg-green-300">
        <Image
          src={project.heroImage}
          alt={project.alt || project.title}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex bg-pink-300 flex-col  w-full">
        {" "}
        {/* Eyebrow, title, subheading */}
        <div className="flex flex-col items-center gap-1  bg-red-300 h-full">
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
        {/* CTAs */}
        <div className="flex flex-row gap-3 items-center justify-center">
          <CaseStudySecondary></CaseStudySecondary>
          <CaseStudyPrimary
            liveSiteUrl={project.liveSiteUrl}
          ></CaseStudyPrimary>
        </div>
      </div>
    </div>
  );
}
