import { SectionScreen } from "../ui/Section";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const processList = [
  {
    step: "Step 1",
    title: "Discovery",
    description:
      "We talk about your business, your goals, and what success looks like for your project.",
    icon: Search,
  },
  {
    step: "Step 2",
    title: "Design",
    description:
      "I map out the layout and structure before writing a single line of code.",
    icon: PenTool,
  },
  {
    step: "Step 3",
    title: "Build",
    description:
      "I develop your site with clean code, fast load times, and mobile-first design.",
    icon: Code,
  },
  {
    step: "Step 4",
    title: "Launch",
    description:
      "We review, refine, and go live — with everything tested and ready to perform.",
    icon: Rocket,
  },
];

// ============================================================
// Connector (desktop only)
// ============================================================

function StepConnector() {
  return (
    <div
      className="hidden md:flex items-center w-8 shrink-0"
      aria-hidden="true"
    >
      <div className="w-full h-px bg-primary/30" />
      <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0 -ml-1" />
    </div>
  );
}

// ============================================================
// Icon
// ============================================================

function StepIcon({ Icon }) {
  if (!Icon) return null;
  return (
    <div className="p-3 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto">
      <Icon className="h-6 w-6 text-heading/70" aria-hidden="true" />
    </div>
  );
}

// ============================================================
// Single card (mobile + desktop share this)
// ============================================================

function ProcessCard({ process, isMobile = false }) {
  const Icon = process.icon;

  return (
    <li
      className={`
        list-none flex flex-col bg-lighter border-2 border-primary rounded-xl
        transition-transform duration-300 ease-out
        hover:-translate-y-2 hover:shadow-lg
        ${isMobile ? "w-full px-5 py-5 gap-3" : "flex-1 min-w-[160px] max-w-[260px] px-5 py-6 gap-4"}
      `}
    >
      {/* Step label */}
      <p className="text-[11px] uppercase tracking-widest text-muted font-semibold text-center">
        {process.step}
      </p>

      {/* Icon */}
      <StepIcon Icon={Icon} />

      {/* Title */}
      <h3 className="text-[15px] md:text-[clamp(15px,1.3vw,20px)] font-semibold text-heading text-center leading-snug">
        {process.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] md:text-[clamp(12px,1vw,15px)] leading-relaxed text-foreground/75 text-center">
        {process.description}
      </p>
    </li>
  );
}

// ============================================================
// Main export
// ============================================================

export default function Process({ sectionID }) {
  return (
    <SectionScreen
      id={sectionID}
      eyebrow="how i work"
      heading="Simple, Clear, No Surprises"
      subheading="From first message to launch day, here's what working with me looks like"
      minHeightClass="min-h-[65vh] md:h-auto"
      childrenClassName="w-full h-full"
    >
      {/* Mobile: vertical stack, full width cards */}
      <ol
        className="md:hidden flex flex-col items-center gap-4 list-none m-0 p-0 w-full px-4"
        aria-label="Process steps"
      >
        {processList.map((process, index) => (
          <ProcessCard key={process.step} process={process} isMobile />
        ))}
      </ol>

      {/* Desktop: horizontal row with connectors */}
      <ol
        className="hidden md:flex flex-row items-stretch justify-center w-full list-none m-0 p-0 py-[4vh]"
        aria-label="Process steps"
      >
        {processList.map((process, index) => (
          <div key={process.step} className="flex items-center">
            <ProcessCard process={process} />
            {index < processList.length - 1 && <StepConnector />}
          </div>
        ))}
      </ol>
    </SectionScreen>
  );
}
