import { SectionScreen } from "../ui/Section";
import { caseStudyProjects } from "@/data/project";
import Image from "next/image";

function SolutionImage({ src, alt, mobile = false }) {
  if (mobile) {
    return (
      <Image
        alt={alt}
        fill
        src={src}
        className=" rounded-xl shadow-md object-cover"
      />
    );
  }
  return (
    <Image
      fill
      className="object-contain object-top rounded-xl"
      alt={alt}
      src={src}
    />
  );
}

function InfoColumn({ heading, items }) {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-[11px] uppercase tracking-widest text-muted mb-5 font-semibold">
        {heading}
      </h3>
      <ol className="space-y-5">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-left group">
            <span className="text-muted font-mono text-[12px] pt-[2px] shrink-0 w-5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[14px] leading-relaxed text-foreground/80">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function HowItCameTogether({ slug }) {
  const project = caseStudyProjects.find((item) => item.slug === slug);
  const data = project?.howItCameTogetherSection ?? {};

  return (
    <SectionScreen
      className="bg-secondary/15"
      eyebrowClassName="items-start"
      eyebrow="OVERVIEW"
      heading="How it Came Together"
      childrenClassName="h-full"
    >
      <div className="flex flex-col md:flex-row w-full h-full gap-10 mt-[5vh]">
        {/* Left: Text columns */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-10 md:w-[55%]">
          <InfoColumn heading="Problem" items={data.problem ?? []} />
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <InfoColumn heading="My Role" items={data.myRole ?? []} />
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px bg-border shrink-0" />

        {/* Right: Solution image */}
        <div className="flex flex-col md:w-[40%]">
          <h3 className="text-[11px] uppercase tracking-widest text-muted mb-5 font-semibold">
            Solution
          </h3>
          <div className="block relative md:hidden w-full h-[30vh]">
            <SolutionImage
              src={data.solutionURLMobile}
              alt="Mobile solution preview"
              mobile
            />
          </div>
          <div className="hidden md:block relative w-full h-[65vh] rounded-xl overflow-hidden shadow-sm border border-heading/5">
            <SolutionImage
              src={data.solutionURLDesktop}
              alt="Desktop solution preview"
            />
          </div>
        </div>
      </div>
    </SectionScreen>
  );
}
