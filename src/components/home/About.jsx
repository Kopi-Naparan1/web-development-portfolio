import { SectionScreen } from "../ui/Section";
import { PrimaryButton } from "../ui/Buttons";
import AboutImage from "../../../public/important-assets/homepage/about/about.webp";
import Image from "next/image";

const paragraphList = [
  {
    order: 1,
    p: "I'm a freelance web developer based in the Philippines, specializing in landing pages and marketing sites for small businesses. I build with Next.js and React — fast, clean, and conversion-focused.",
  },
  {
    order: 2,
    p: "I believe a great website isn't just about how it looks — it's about what it does. Every decision I make, from layout to load time, is made with one goal in mind: helping your business grow.",
  },
  {
    order: 3,
    p: "When I'm not building sites, I'm probably learning something new, exploring design trends, or looking for the best coffee in Bukidnon. ",
  },
];

export default function About() {
  return (
    <SectionScreen
      eyebrow={"about me"}
      heading={"A developer who thinks like a marketer"}
    >
      <div className="flex flex-col justify-center items-center  h-full ">
        <div className="  relative w-[90%] h-[clamp(250px,50%,650px)] ">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={AboutImage}
            className="object-fit"
            alt="Kopi Anan Naparan Profile Picture"
          ></Image>
        </div>
        <div className="flex flex-col gap-6 text-[16px] text-center  w-[70vw] mt-[2%]">
          {paragraphList.map((paragraph) => (
            <p key={paragraph.order}>
              {" "}
              {paragraph.order !== 3 ? paragraph.p : ""}
            </p>
          ))}
        </div>
        <div className=" flex flex-col items-center mt-[2%] ">
          <p className="text-[12px] opacity-60">Want a website?</p>
          <PrimaryButton mt="1" />
        </div>
      </div>
    </SectionScreen>
  );
}
