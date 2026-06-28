import { FlexibleSectionScreen } from "../ui/Section";

const SocialProofData = [
  {
    numbers: "4",
    description: "Websites Delivered",
  },
  {
    numbers: "98%",
    description: "Average Lighthouse Score",
  },
  {
    numbers: "14",
    description: "Days Average Delivery",
  },
];

function CardMaker({ data }) {
  return (
    <div className="  flex w-[30vw] md:w-[28vw] h-[6.5vh] md:h-[8vh] depth ">
      <div className="flex-[3.5] md:flex-[1.6] bg-secondary/80  flex justify-center items-center rounded-l-lg p-[2%] md:text-[24px] text-[14px] transition-all duration-300 ease-out font-semibold group-hover:bg-secondary     group-hover:text-bg-background  ">
        {data.numbers}
      </div>

      <div className="flex-[6.5] bg-lighter/90  pl-[2%] flex items-center rounded-r-lg text-left md:text-[22px] text-[11px] font-regular group-hover:bg-lighter    transition-colors duration-300 ease-out  ">
        {data.description}
      </div>
    </div>
  );
}

export default function SocialProof({ sectionID }) {
  return (
    <FlexibleSectionScreen className="flex flex-row  items-center justify-between h-[11vh] md:h-[13vh] mb-[3vh] ">
      {SocialProofData.map((data, index) => (
        <CardMaker key={index} data={data} className=""></CardMaker>
      ))}
    </FlexibleSectionScreen>
  );
}
