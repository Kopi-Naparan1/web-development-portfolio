import Spline from "@splinetool/react-spline";
import { PrimaryButton } from "../ui/Buttons";

export function HeroSection() {
  return (
    <section className="sectionLayout flex-row">
      <div className="grid grid-cols-10  h-full w-full items-center">
        <div className="col-span-5  text-left flex flex-col  gap-2">
          {/* <p className="font-jakarta text-[13px] tracking-widest uppercase font-semibold text-subtext ">
            BASED IN THE PHILIPPINES
          </p> */}

          <h2 className="font-jakarta text-[60px] tracking-[-0.02em] leading-[1.1] capitalize font-extrabold text-heading">
            I build landing pages that turn visitors into paying clients
          </h2>

          <p className="font-jakarta text-[18px] tracking-widest font-semibold text-subtext">
            Fast, professional marketing sites for small businesses - designed
            to convert and built to last
          </p>
          <div className="flex">
            {" "}
            <PrimaryButton />
          </div>
        </div>
        <div className="col-span-1 h-full w-full"></div>
        <div className="col-span-4 h-full w-full">
          <Spline scene="https://prod.spline.design/isLz4-62pA2ya-Md/scene.splinecode"></Spline>
        </div>
      </div>
    </section>
  );
}
