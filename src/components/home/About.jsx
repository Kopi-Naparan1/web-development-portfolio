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
    p: "When I'm not building sites, I'm probably learning various musical instruments, reading non-fiction books, or training for an upcoming marathon.",
  },
];

function StaticItem({ children, index }) {
  const shift = index * 2;
  const shrink = index * 8;

  return (
    <div style={{ marginLeft: `${shift}vw`, width: `${100 - shrink}%` }}>
      {children}
    </div>
  );
}

export default function About({ sectionID }) {
  return (
    <SectionScreen
      id={sectionID}
      eyebrow="about me"
      heading="A developer who thinks like a marketer"
    >
      <div className="flex flex-col md:flex-row justify-center items-center flex-1">
        {/* Image */}
        <div className="relative w-[90%] h-[clamp(250px,50vh,650px)] md:h-[clamp(550px,75vh,850px)] md:w-[70%]">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={AboutImage}
            className="object-contain"
            alt="Kopi Anan Naparan Profile Picture"
          />
        </div>

        {/* Mobile paragraphs — all three */}
        <div className="flex flex-col gap-8 text-[14px] text-center md:hidden w-[70vw] mt-[2%]">
          {paragraphList.map((paragraph) => (
            <p key={paragraph.order}>{paragraph.p}</p>
          ))}
        </div>

        {/* Desktop paragraphs */}
        <div className="hidden md:flex flex-col text-[16px] text-left w-full mt-[2%]">
          <div className="flex flex-col gap-[3vh]">
            {paragraphList.map((paragraph, index) => (
              <StaticItem key={paragraph.order} index={index}>
                <p>{paragraph.p}</p>
              </StaticItem>
            ))}
          </div>

          <StaticItem index={paragraphList.length}>
            <div className="flex mt-[3vh]">
              <div className="flex flex-col">
                <p className="text-[12px] opacity-60">Want a website?</p>
                <PrimaryButton />
              </div>
            </div>
          </StaticItem>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden flex flex-col items-center mt-[5%]">
          <p className="text-[12px] opacity-60">Want a website?</p>
          <PrimaryButton mt="1" />
        </div>
      </div>
    </SectionScreen>
  );
}
