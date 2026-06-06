"use client";

import Spline from "@splinetool/react-spline";
import { PrimaryButton } from "../ui/Buttons";

const SPLINE_SCENE =
  "https://prod.spline.design/isLz4-62pA2ya-Md/scene.splinecode";

function setSplineZoom(zoom) {
  return (spline) => {
    spline.setZoom(zoom);
  };
}

export function HeroSection() {
  return (
    <>
      {/* NOT MOBILE */}
      <section className="md:sectionLayout hidden">
        <div className="grid grid-cols-10  h-full w-full items-center">
          <div className="col-span-5  text-left flex flex-col  gap-[20px]">
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
          <div className="col-span-4 h-full w-full ">
            <Spline
              className="hidden md:block"
              scene={SPLINE_SCENE}
              onLoad={setSplineZoom(3)}
            ></Spline>
          </div>
        </div>
      </section>

      {/*  MOBILE */}
      <section className="md:hidden mobileSectionLayout grid grid-rows-10 items-center justify-between ">
        <div className="row-span-5 h-full w-full ">
          <Spline
            className="block h-full w-full hidden md:hidden"
            scene={SPLINE_SCENE}
            onLoad={setSplineZoom(2)}
          ></Spline>
        </div>

        <div className="flex flex-col justify-center text-center h-full w-full row-span-4">
          <div className="gap-[8px]  flex flex-col    ">
            <h2 className="font-jakarta text-[40px] tracking-[-0.02em] leading-[1.1] capitalize font-extrabold text-heading">
              I build landing pages that turn visitors into paying clients
            </h2>

            <p className="font-jakarta text-[14px] tracking-widest font-semibold text-subtext">
              Fast, professional marketing sites for small businesses - designed
              to convert and built to last
            </p>
            <div className="flex w-full justify-center">
              {" "}
              <PrimaryButton />
            </div>
          </div>
        </div>
        <div className="row-span-1 h-full w-full "></div>
      </section>
    </>
  );
}
