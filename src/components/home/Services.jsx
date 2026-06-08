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
    imageUrl:
      "/important-assets/homepage/services/performance-optimization.png",
    hoveredImage:
      "/important-assets/homepage/services/performance-optimization1.png",
  },
  {
    title: "Marketing Sites",
    price: "₱25,000 - ₱50,000+",
    description:
      "Multi-section websites for small businesses that need a professional online presence that actually brings in clients.",
    isRoundTop: false,
    isRoundBottom: false,
    imageUrl: "/important-assets/homepage/services/landing-pages.png",
    hoveredImage: "/important-assets/homepage/services/landing-pages1.png",
  },
  {
    title: "Landing Page",
    price: "₱10,000 - ₱25,000+",
    description:
      "A focused, high-converting single page built to capture leads, promote a product, or launch an idea — fast.",
    isRoundTop: false,
    isRoundBottom: true,
    imageUrl: "/important-assets/homepage/services/marketing-sites.png",
    hoveredImage: "/important-assets/homepage/services/marketing-sites1.png",
  },
];

function DesktopCardMaker({ service }) {
  return (
    <div
      className={`group relative h-[90%] w-[32%] overflow-hidden   border-2 border-primary  rounded-2xl `}
    >
      {/* IMAGE LAYER (ONLY THIS MOVES) */}
      {/* DEFAULT IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0 animate-drift-image"
        style={{
          backgroundImage: `url(${service.imageUrl})`,
        }}
      />
      {/* HOVER IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-500 group-hover:opacity-100  animate-drift-image"
        style={{
          backgroundImage: `url(${service.hoveredImage})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t transition-colors duration-200 ease-in-out from-black/90 via-black/40 to-black/70 group-hover:from-black via secondary/40 to-black/90" />

      {/* TEXT LAYER */}
      <div className=" group relative z-10 flex flex-col items-center text-center p-3 justify-between h-full text-background">
        <div>
          <h3 className="text-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-[26px] text-[24px] font-semibold">
            {service.title}
          </h3>
          <p className="md:text-[14px] text-[12px] opacity-80">
            {service.price}
          </p>
        </div>

        <p className="text-[14px] md:text-[16px] opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out">
          {service.description}
        </p>
      </div>
    </div>
  );
}

function MobileCardMaker({ service }) {
  return (
    <div
      className={`group relative h-[30.5%] w-[75%] overflow-hidden   border-2 border-primary    ${
        service.isRoundTop
          ? "rounded-t-2xl"
          : service.isRoundBottom
            ? "rounded-b-2xl"
            : ""
      }`}
    >
      {/* IMAGE LAYER (ONLY THIS MOVES) */}
      {/* DEFAULT IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0 animate-drift-image"
        style={{
          backgroundImage: `url(${service.imageUrl})`,
        }}
      />
      {/* HOVER IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-500 group-hover:opacity-100  animate-drift-image"
        style={{
          backgroundImage: `url(${service.hoveredImage})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t transition-colors duration-200 ease-in-out from-black/90 via-black/40 to-black/70 group-hover:from-black via secondary/40 to-black/90" />

      {/* TEXT LAYER */}
      <div className=" group relative z-10 flex flex-col items-center text-center p-2 justify-between h-full text-background">
        <div>
          <h3 className="text-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-[24px] font-semibold">
            {service.title}
          </h3>
          <p className="text-[12px] opacity-80">{service.price}</p>
        </div>

        <p className="text-[14px]  opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <SectionScreen
      eyebrow={"What i offer"}
      heading={"Everything you need to go live and grow"}
      subheading={
        "I specialize in one thing and do it well — building marketing sites that work."
      }
    >
      <div className="w-full h-full flex md:hidden flex-col items-center">
        {servicesList.map((service, index) => (
          <MobileCardMaker
            key={service.title}
            service={service}
            index={index}
          ></MobileCardMaker>
        ))}
        <PrimaryButton className="md:hidden"></PrimaryButton>
      </div>

      <div className="w-full h-full md:flex flex-col hidden justify-center items-center">
        <div className="w-full h-full flex flex-row justify-between items-center">
          {servicesList.map((service, index) => (
            <DesktopCardMaker
              key={service.title}
              service={service}
              index={index}
            ></DesktopCardMaker>
          ))}
        </div>

        <PrimaryButton className="md:block hidden"></PrimaryButton>
      </div>
    </SectionScreen>
  );
}
