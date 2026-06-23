import { SectionScreen } from "../ui/Section";
import Image from "next/image";
import BenPic from "../../../public/important-assets/homepage/testimonials/ben.webp";
import HarrisPic from "../../../public/important-assets/homepage/testimonials/harris.webp";
import JhonPic from "../../../public/important-assets/homepage/testimonials/jhon.webp";
import KenPic from "../../../public/important-assets/homepage/testimonials/ken.webp";
import PryshahPic from "../../../public/important-assets/homepage/testimonials/prysh.webp";
import ShawnPic from "../../../public/important-assets/homepage/testimonials/shawn.webp";
// Why does the rounded profile picture doesnt show
const testimonialList = [
  {
    name: "Phyrshah ",
    profilePic: PryshahPic,
    description:
      "The website looked exactly how we envisioned it. What impressed me most was how he kept us informed every step of the way through a detailed progress file. Nothing felt rushed or overlooked.",
    date: "October 14, 2025",
    facebookUrl: "",
    isShouldBeAdded: true,
  },
  {
    name: "Harris",
    profilePic: HarrisPic,
    description:
      "I was honestly surprised by how fast and smooth the website ran. Every page loaded quickly and worked perfectly on both mobile and desktop. It was clear a lot of thought went into the technical side of things.",
    date: "January 23, 2026",
    facebookUrl: "",
    isShouldBeAdded: true,
  },
  {
    name: "Jhon",
    profilePic: JhonPic,
    description:
      "He was very easy to work with and always responded promptly. The handover process was smooth — he walked us through everything and made sure we understood how to manage the site.",
    date: "February 15, 2026",
    facebookUrl: "",
    isShouldBeAdded: true,
  },
  {
    name: "Benedict",
    profilePic: BenPic,
    description:
      "The design was clean, modern, and well-organized. It felt professional right away. He took our ideas seriously and translated them into something we were genuinely proud to present.",
    date: "March 11, 2026",
    facebookUrl: "",
    isShouldBeAdded: true,
  },
  {
    name: "Ken",
    profilePic: KenPic,
    description:
      "From the first meeting to the final delivery, the whole process was well-managed. The updates through the Excel file were a nice touch — it made the progress feel transparent and organized.",
    date: "April 3, 2026",
    facebookUrl: "",
    isShouldBeAdded: false,
  },
  {
    name: "Shawn",
    profilePic: ShawnPic,
    description:
      "The website performed beyond our expectations. It was responsive, well-structured, and delivered on time. He communicated clearly throughout and made the whole experience stress-free.",
    date: "May 22, 2026",
    facebookUrl: "",
    isShouldBeAdded: false,
  },
];

function MobileCardMaker({ testimonial, index }) {
  if (!testimonial.isShouldBeAdded) return null;

  return (
    <div
      className={`md:hidden block w-[85%] rounded-lg bg-lighter shadow-md ${
        index % 2 === 0 ? "mr-auto" : "ml-auto"
      }`}
    >
      <p className="text-[13px] pt-2 px-2">{testimonial.description}</p>

      <div className="mt-4 flex flex-row items-center gap-1 bg-secondary pl-2 pb-2 pt-1 rounded-b-lg">
        <div className="relative w-10 h-10">
          <Image
            sizes="(max-width:796px) 100vw, 50vw"
            alt={`${testimonial.name} profile picture`}
            className="object-cover"
            fill
            src={testimonial.profilePic}
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-[14px] font-semibold">{testimonial.name}</h3>
          <p className="text-[10px] opacity-80">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

const SPREAD_MAP = [18, 12, 4];

function DesktopRowMaker({ left, right, rowIndex }) {
  const spread = SPREAD_MAP[rowIndex];

  return (
    <div className="w-full flex flex-row justify-center items-stretch gap-4">
      <div
        style={{ transform: `translateX(-${spread}vw)` }}
        className="w-[28%] rounded-lg bg-lighter shadow-md flex flex-col h-full"
      >
        <p className="text-[18px] pt-2 px-2 flex-1 leading-8">
          {left.description}
        </p>
        <div className="mt-4 flex flex-row items-center gap-1 bg-secondary pl-2 pb-2 pt-1 rounded-b-lg">
          <div className="relative w-10 h-10">
            <Image
              alt={`${left.name} profile picture`}
              className="object-cover rounded-sm"
              fill
              sizes="(max-width:796px) 100vw, 50vw"
              src={left.profilePic}
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-[20px] font-semibold">{left.name}</h3>
            <p className="text-[12px] opacity-80">{left.date}</p>
          </div>
        </div>
      </div>

      <div
        style={{ transform: `translateX(${spread}vw)` }}
        className="w-[28%] rounded-lg bg-lighter shadow-md flex flex-col h-full"
      >
        <p className="text-[18px] pt-2 px-2 flex-1 leading-8">
          {right.description}
        </p>
        <div className="mt-4 flex flex-row items-center gap-1 bg-secondary pl-2 pb-2 pt-1 rounded-b-lg">
          <div className="relative w-10 h-10">
            <Image
              alt={`${right.name} profile picture`}
              className="object-cover rounded-sm"
              fill
              sizes="(max-width:796px) 100vw, 50vw"
              src={right.profilePic}
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-[20px] font-semibold">{right.name}</h3>
            <p className="text-[12px] opacity-80">{right.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ sectionID }) {
  const pairs = [
    testimonialList.slice(0, 2),
    testimonialList.slice(2, 4),
    testimonialList.slice(4, 6),
  ];

  return (
    <SectionScreen
      eyebrow={"kind words"}
      minHeightClass={"min-h-[75vh] md:min-h-screen"}
      id={sectionID}
      heading={"Don't just take my word for it"}
    >
      <div className="w-full h-full items-center justify-evenly md:hidden flex flex-col gap-2">
        {testimonialList.map((testimonial, index) => (
          <MobileCardMaker
            key={testimonial.name}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
      <div className="w-full hidden md:flex flex-col items-center gap-4">
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
