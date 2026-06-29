import Link from "next/link";
import { HiArrowLeft, HiArrowUpRight, HiArrowRight } from "react-icons/hi2";

export function PrimaryButton({ textSize = "16px", mt = "2", className = "" }) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <Link
      href={"/#contact"}
      className={`flex flex-row group justify-center items-center bg-primary font-jakarta text-background depth   font-semibold py-1 px-4 rounded-lg hover:bg-secondary shadow-md hover:text-heading/80 border-2 border-transparent hover:border-primary transition-colors duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      Lets Chat
      <HiArrowRight className="  group-hover:translate-x-1 transition duration-100 ease-in-out" />
    </Link>
  );
}

export function CardPrimaryButton({
  textSize = "12px",
  mt = "2",
  className = "",
}) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <button
      className={`group justify-center items-center flex flex-row bg-lighter/70 border-2 border-secondary/60 hover:border-primary font-jakarta text-heading font-semibold py-1 px-2 rounded-lg hover:bg-secondary/70  hover:text-heading/80 transition-colors ease-in-out duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      View Case Study
      <HiArrowRight className="text-[12px] ml-1 group-hover:translate-x-1 transition duration-100 ease-in-out" />
    </button>
  );
}

export function CardSecondaryButton({
  textSize = "12px",
  mt = "2",
  className = "",
}) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <button
      className={`bg-transparent font-jakarta text-heading font-medium py-1  border-secondary shadow-md border px-4 rounded-lg  hover:bg-secondary/30  transition-colors duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      Live Site ↗
    </button>
  );
}

export function CaseStudyPrimary({
  liveSiteUrl,
  textSize = "12px",
  mt = "2",
  className = "",
  text = "",
}) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <a
      href={liveSiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex  group :flex-row gap-1 justify-center items-center bg-primary/30 border-2 border-secondary/60 hover:border-primary font-jakarta text-heading font-semibold py-1 px-4 rounded-lg hover:bg-primary/50  hover:text-heading/80 transition-colors ease-in-out duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      Live site
      <HiArrowUpRight className="text-[12px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ease-in-out duration-100 transition" />
    </a>
  );
}

export function CaseStudySecondary({
  textSize = "12px",
  mt = "2",
  className = "",
  text = "",
}) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <Link
      href="/#works"
      className={`flex group flex-row gap-1 justify-center items-center bg-lighter/70 border-2 border-secondary/60  hover:border-primary font-jakarta text-heading font-semibold py-1 px-4 rounded-lg hover:bg-secondary/70  hover:text-heading/80 transition-colors ease-in-out duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      <HiArrowLeft className="text-[12px]  group-hover:-translate-x-1 ease-in-out duration-100 transition " />
      Back to works
    </Link>
  );
}
