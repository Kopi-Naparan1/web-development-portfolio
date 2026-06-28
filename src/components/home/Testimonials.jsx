import { SectionScreen } from "../ui/Section";
import Image from "next/image";
import { Quote } from "lucide-react";
import BenPic from "../../../public/important-assets/homepage/testimonials/ben.webp";
import HarrisPic from "../../../public/important-assets/homepage/testimonials/harris.webp";
import JhonPic from "../../../public/important-assets/homepage/testimonials/jhon.webp";
import KenPic from "../../../public/important-assets/homepage/testimonials/ken.webp";
import PryshahPic from "../../../public/important-assets/homepage/testimonials/prysh.webp";
import ShawnPic from "../../../public/important-assets/homepage/testimonials/shawn.webp";

const testimonialList = [
  {
    name: "Phyrshah",
    profilePic: PryshahPic,
    description:
      "The website looked exactly how we envisioned it. What impressed me most was how he kept us informed every step of the way through a detailed progress file. Nothing felt rushed or overlooked.",
    date: "October 14, 2025",
  },
  {
    name: "Harris",
    profilePic: HarrisPic,
    description:
      "I was honestly surprised by how fast and smooth the website ran. Every page loaded quickly and worked perfectly on both mobile and desktop. It was clear a lot of thought went into the technical side of things.",
    date: "January 23, 2026",
  },
  {
    name: "Jhon",
    profilePic: JhonPic,
    description:
      "He was very easy to work with and always responded promptly. The handover process was smooth — he walked us through everything and made sure we understood how to manage the site.",
    date: "February 15, 2026",
  },
  {
    name: "Benedict",
    profilePic: BenPic,
    description:
      "The design was clean, modern, and well-organized. It felt professional right away. He took our ideas seriously and translated them into something we were genuinely proud to present.",
    date: "March 11, 2026",
  },
  {
    name: "Ken",
    profilePic: KenPic,
    description:
      "From the first meeting to the final delivery, the whole process was well-managed. The updates through the Excel file were a nice touch — it made the progress feel transparent and organized.",
    date: "April 3, 2026",
  },
  {
    name: "Shawn",
    profilePic: ShawnPic,
    description:
      "The website performed beyond our expectations. It was responsive, well-structured, and delivered on time. He communicated clearly throughout and made the whole experience stress-free.",
    date: "May 22, 2026",
  },
];

const SPREAD_MAP = [18, 12, 4];

// ============================================================
// Shared card
// ============================================================

function TestimonialCard({ testimonial, translateX = 0 }) {
  return (
    <div
      style={{ transform: `translateX(${translateX}vw)` }}
      className="w-[28%] rounded-xl bg-lighter shadow-sm flex flex-col
        transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
    >
      {/* Quote icon */}
      <div className="px-4 pt-4 pb-2">
        <Quote className="w-4 h-4 text-primary/40 mb-2" aria-hidden="true" />
        <p className="text-[14px] leading-relaxed text-foreground/80">
          {testimonial.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto flex flex-row items-center gap-3 border-t border-heading/10 px-4 py-3">
        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
          <Image
            alt={`${testimonial.name} profile picture`}
            className="object-cover"
            fill
            sizes="72px"
            src={testimonial.profilePic}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[13px] font-semibold leading-tight">
            {testimonial.name}
          </h3>
          <p className="text-[11px] text-muted">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Mobile card
// ============================================================

function MobileTestimonialCard({ testimonial, index }) {
  return (
    <div
      className={`w-[85%] rounded-xl bg-lighter   shadow-sm flex flex-col
        ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
    >
      <div className="px-4 pt-4 pb-2">
        <Quote className="w-4 h-4 text-primary/40 mb-2" aria-hidden="true" />
        <p className="text-[13px] leading-relaxed text-foreground/80">
          {testimonial.description}
        </p>
      </div>
      <div className="mt-auto flex flex-row items-center gap-3 border-t border-heading/10  px-4 py-3">
        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
          <Image
            sizes="72px"
            alt={`${testimonial.name} profile picture`}
            className="object-cover"
            fill
            src={testimonial.profilePic}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[13px] font-semibold leading-tight">
            {testimonial.name}
          </h3>
          <p className="text-[11px] text-muted">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Desktop row (keeps stagger)
// ============================================================

function DesktopRowMaker({ left, right, rowIndex }) {
  const spread = SPREAD_MAP[rowIndex] ?? 0;

  return (
    <div className="w-full flex flex-row justify-center items-stretch gap-4">
      <TestimonialCard testimonial={left} translateX={-spread} />
      <TestimonialCard testimonial={right} translateX={spread} />
    </div>
  );
}

// ============================================================
// Main export
// ============================================================

export default function Testimonials({ sectionID }) {
  const pairs = [
    testimonialList.slice(0, 2),
    testimonialList.slice(2, 4),
    testimonialList.slice(4, 6),
  ];

  return (
    <SectionScreen
      eyebrow="kind words"
      minHeightClass="min-h-[75vh] md:min-h-screen"
      id={sectionID}
      heading="Don't just take my word for it"
    >
      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center gap-3 w-full">
        {testimonialList.map((testimonial, index) => (
          <MobileTestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col items-center gap-4 w-full">
        {pairs.map((row, rowIndex) => (
          <DesktopRowMaker
            key={rowIndex}
            left={row[0]}
            right={row[1]}
            rowIndex={rowIndex}
          />
        ))}
      </div>
    </SectionScreen>
  );
}
