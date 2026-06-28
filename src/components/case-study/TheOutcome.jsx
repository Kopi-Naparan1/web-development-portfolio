import { SectionScreen } from "../ui/Section";
import { caseStudyProjects } from "@/data/project";

function StatCard({ number, description, index, className }) {
  const match = number?.match(/^([\d.]+)(.*)$/);
  const numeric = match ? match[1] : number;
  const unit = match ? match[2] : "";

  return (
    <div className={`flex flex-col text-left md:text-left ${className}`}>
      <span className="font-mono text-[11px] tracking-widest text-foreground/40 mb-4 text-center md:text-left">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="text-[40px] md:text-[52px] font-medium leading-none tracking-tight text-heading mb-3 text-center md:text-left">
        {numeric}
        {unit && (
          <span className="text-[22px] md:text-[28px] text-foreground/40 tracking-tight">
            {unit}
          </span>
        )}
      </div>
      <span className="text-[13px] leading-relaxed text-foreground/50 max-w-[160px] text-center md:text-left mx-auto md:mx-0">
        {description}
      </span>
    </div>
  );
}

export default function TheOutcome({ slug }) {
  const project = caseStudyProjects.find((item) => item.slug === slug);

  const stats = [
    {
      number: project?.firstResultNumeric,
      description: project?.firstResultDescription,
    },
    {
      number: project?.secondResultNumeric,
      description: project?.secondResultDescription,
    },
    {
      number: project?.thirdResultNumeric,
      description: project?.thirdResultDescription,
    },
    {
      number: project?.fourthResultNumeric,
      description: project?.fourthResultDescription,
    },
  ].filter((s) => s.number);

  const tags = [
    { label: "Built fast", icon: "bolt" },
    { label: "Built to last", icon: "shield-check" },
    { label: "Built to convert", icon: "trending-up" },
  ];

  return (
    <SectionScreen
      minHeightClass="md:min-h-[60vh] min-h-[90vh]"
      eyebrow="The Outcome"
      childrenClassName="mb-[5vh] md:mb-0"
      heading="Numbers Don't Lie"
      className="bg-secondary/15 "
    >
      {/* Mobile: single col, md: 2×2 grid, lg: 4 cols */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.number}
            index={index}
            number={stat.number}
            description={stat.description}
            className={`
        py-8
        border-t border-heading/30 first:border-t-0
        md:border-t-0
        lg:px-10 lg:first:pl-0 lg:last:pr-0
        ${index === 0 ? "md:pr-8 md:pl-0" : ""}
        ${index === 1 ? "md:pl-8 md:pr-0 md:border-l md:border-heading/30" : ""}
        ${index === 2 ? "md:pl-0 md:pr-8 md:border-t md:border-heading/30 lg:border-t-0 lg:border-l lg:border-heading/30" : ""}
        ${index === 3 ? "md:pl-8 md:pr-0 md:border-t md:border-heading/30 md:border-l lg:border-t-0" : ""}
        ${index === 1 ? "lg:border-l lg:border-heading/30" : ""}
      `}
          />
        ))}
      </div>

      <div className="border-t border-border mt-10 pt-8 flex flex-col items-center md:flex-row gap-2 flex-wrap">
        <span className="text-[12px] text-foreground/30 md:mr-1">
          Delivered
        </span>
        {tags.map((tag) => (
          <span
            key={tag.label}
            className="flex items-center gap-1.5 text-[12px] px-3.5 py-1.5 rounded-full border border-heading/30 text-foreground/50 bg-secondary/30 tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="opacity-60"
            >
              {tag.icon === "bolt" && (
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              )}
              {tag.icon === "shield-check" && (
                <>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </>
              )}
              {tag.icon === "trending-up" && (
                <>
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </>
              )}
            </svg>
            {tag.label}
          </span>
        ))}
      </div>
    </SectionScreen>
  );
}
