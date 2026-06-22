"use client";

import Image from "next/image";
import { SectionScreen } from "../ui/Section";
import { PrimaryButton } from "../ui/Buttons";

const servicesList = [
  {
    title: "Performance Optimization",
    price: "₱10,000 - ₱20,000+",
    description:
      "Slow site killing your conversions? I'll audit and rebuild your front end for speed, SEO, and a better user experience.",
    isRoundTop: true,
    isRoundBottom: false,
    image: "/important-assets/homepage/services/performance-optimization1.webp",
  },
  {
    title: "Marketing Sites",
    price: "₱25,000 - ₱50,000+",
    description:
      "Multi-section websites for small businesses that need a professional online presence that actually brings in clients.",
    isRoundTop: false,
    isRoundBottom: false,
    image: "/important-assets/homepage/services/landing-pages1.webp",
  },
  {
    title: "Landing Page",
    price: "₱10,000 - ₱25,000+",
    description:
      "A focused, high-converting single page built to capture leads, promote a product, or launch an idea — fast.",
    isRoundTop: false,
    isRoundBottom: true,
    image: "/important-assets/homepage/services/marketing-sites1.webp",
  },
];

function ServiceCard({ service, mobile = false }) {
  const borderRadius = mobile
    ? service.isRoundTop
      ? "rounded-t-2xl"
      : service.isRoundBottom
        ? "rounded-b-2xl"
        : ""
    : "rounded-lg";

  return (
    <div
      className={`group relative overflow-hidden border-2 border-primary ${
        mobile ? "h-[25vh] w-[75%]" : "h-[45vh] w-[32%]"
      } ${borderRadius}`}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes={mobile ? "75vw" : "32vw"}
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70 transition-colors duration-200 ease-in-out group-hover:from-black group-hover:via-secondary/40 group-hover:to-black/90" />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center text-center justify-between h-full text-background p-3">
        <div>
          <h3
            className={`font-semibold ${
              mobile ? "text-[24px]" : "text-[24px] md:text-[26px]"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`opacity-80 ${mobile ? "text-[12px]" : "text-[12px] md:text-[14px]"}`}
          >
            {service.price}
          </p>
        </div>

        <p
          className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ${
            mobile ? "text-[14px]" : "text-[14px] md:text-[16px]"
          }`}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function Services({ sectionID }) {
  return (
    <SectionScreen
      minHeightClass="min-h-[80vh] md:mih-h-[70vh]"
      id={sectionID}
      className={"bg-secondary/15"}
      eyebrow="What i offer"
      heading="Everything you need to go live and grow"
      subheading="I specialize in one thing and do it well — building marketing sites that work."
    >
      {/* Mobile */}
      <div className="w-full h-full flex md:hidden flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-2 flex-1 w-full justify-center">
          {servicesList.map((service) => (
            <ServiceCard key={service.title} service={service} mobile />
          ))}
        </div>
        <PrimaryButton />
      </div>

      {/* Desktop */}
      <div className="w-full flex-1 md:flex flex-col hidden justify-between items-center">
        <div className="w-full flex-1 flex flex-row justify-between items-center">
          {servicesList.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <PrimaryButton />
      </div>
    </SectionScreen>
  );
}
