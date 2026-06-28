import { SectionScreen } from "../ui/Section";
import { caseStudyProjects } from "@/data/project";
import { CaseStudySecondary, PrimaryButton } from "../ui/Buttons";

import Image from "next/image";
import Link from "next/link";

function CardMaker({ slug, desktopHero, mobileHero, title, alt }) {
  return (
    <div className="border border-heading/5 rounded-lg p-2 shadow-sm flex flex-col justify-center">
      <h3 className="text-[15px]    font-semibold text-heading text-center leading-snug">
        {title}
      </h3>
      <Link href={`/case-study/${slug}`}>
        <div className="relative w-[40vw] h-[40vh] md:w-[40vw] md:h-[40vh]  rounded-lg hover:scale-105 transition-transform cursor-pointer duration-200 ease-in-out ">
          <Image
            alt={alt}
            fill
            className="md:hidden block object-cover"
            src={mobileHero}
          ></Image>
          <Image
            fill
            alt={alt}
            className="md:block hidden object-cover"
            src={desktopHero}
          ></Image>
        </div>
      </Link>
    </div>
  );
}

export default function NextCTA({ slug }) {
  const otherProject = caseStudyProjects.filter((item) => item.slug !== slug);
  return (
    <SectionScreen
      minHeightClass="min-h-[65vh] md:min-h-[75vh]"
      eyebrow={"next project"}
      heading={"Choose a New Case Study"}
    >
      <div className="flex flex-row w-full justify-evenly mt-[4vh]">
        {otherProject.map((project) => (
          <CardMaker
            key={project.title}
            desktopHero={project.heroImage}
            mobileHero={project.mobileHeroImage}
            title={project.title}
            alt={project.alt}
            slug={project.slug}
          ></CardMaker>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 my-[5vh]">
        {" "}
        <CaseStudySecondary className="py-1"></CaseStudySecondary>
        <PrimaryButton textSize="12px"></PrimaryButton>
      </div>
    </SectionScreen>
  );
}
