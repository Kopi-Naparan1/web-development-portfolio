import Image from "next/image";
import { PrimaryButton } from "../ui/Buttons";
import heroFallback from "../../../public/important-assets/homepage/hero/hero.webp";

const HERO_ALT = "3D hero visual";

const HeadingText = ({ className }) => (
  <h1
    className={`font-jakarta tracking-[-0.02em] leading-[1.1] capitalize font-extrabold text-heading ${className}`}
  >
    I build landing pages that turn visitors into paying clients
  </h1>
);

const SubText = ({ className }) => (
  <p className={`font-jakarta font-semibold text-subtext ${className}`}>
    Fast, professional marketing sites for small businesses — designed to
    convert and built to last
  </p>
);

export function HeroSection({ sectionID }) {
  return (
    <>
      {/* DESKTOP */}
      <section
        className="sectionLayout md:h-[95vh] hidden md:flex"
        id={sectionID}
      >
        <div className="grid grid-cols-10 h-full w-full items-center">
          <div className="col-span-5 text-left flex flex-col gap-5">
            <HeadingText className="text-[60px]" />
            <SubText className="text-[18px] tracking-widest" />
            <div className="flex">
              <PrimaryButton />
            </div>
          </div>

          <div className="col-span-1" />

          <div className="col-span-4 h-full w-full flex items-center justify-center">
            <Image
              src={heroFallback}
              alt={HERO_ALT}
              className="w-full h-auto object-contain"
              sizes="40vw"
            />
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="md:hidden mobileSectionLayout h-[95vh]">
        <div className="flex-[1]" />
        <div className="flex-[5] w-full min-h-0 flex items-center justify-center">
          <Image
            src={heroFallback}
            alt={HERO_ALT}
            className="w-full h-auto object-contain"
            priority
            sizes="100vw"
          />
        </div>
        <div className="flex-[4] flex flex-col justify-center text-center w-full min-h-0">
          <div className="gap-2 flex flex-col">
            <HeadingText className="text-[30px]" />
            <SubText className="text-[13px] tracking-wide" />
            <div className="flex w-full justify-center">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
