import { SectionScreen } from "../ui/Section";

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
    <div className="  flex w-[30vw] md:w-[28vw] min-h-[6.5vh] max-h-[10vh] md:min-h-[8vh]  depth ">
      <div className="flex-[3.5] md:flex-[1.6] bg-secondary/80  flex justify-center items-center rounded-l-lg  md:text-[24px] text-[14px] transition-all duration-300 ease-out font-semibold group-hover:bg-secondary     group-hover:text-bg-background  ">
        {data.numbers}
      </div>

      <div className="flex-[6.5] bg-lighter/90  px-[2%] flex items-center rounded-r-lg text-left md:text-[22px] text-[11px] font-regular group-hover:bg-lighter    transition-colors duration-300 ease-out  ">
        {data.description}
      </div>
    </div>
  );
}

export default function SocialProof({ sectionID }) {
  return (
    <SectionScreen
      minHeightClass="min-h-[20vh]"
      childrenClassName={" flex flex-row justify-between"}
    >
      {SocialProofData.map((data, index) => (
        <CardMaker key={index} data={data} className=""></CardMaker>
      ))}
    </SectionScreen>
  );
}
