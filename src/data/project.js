import staticCafeSaBukid from "../../public/important-assets/homepage/projects/static-cafe-sa-bukid.avif";
import staticLakeView from "../../public/important-assets/homepage/projects/static-lake-view.avif";
import staticKalikas from "../../public/important-assets/homepage/projects/static-kalikas.avif";

export const projects = [
  {
    slug: "cafe-sa-bukid",
    title: "Cafe sa Bukid",
    alt: "Cafe sa bukid website preview",
    result:
      "Built a brand-new website that boosted the business's online traction by 20%",
    static: staticCafeSaBukid,
    vid: "/important-assets/homepage/projects/cafe-sa-bukid.mp4",
  },
  {
    slug: "lake-view",
    title: "Lake View",
    alt: "Lake view website preview",
    result:
      "Redesigned the website and pushed its performance score from 60 to 92 — a 39% improvement",
    static: staticLakeView,
    vid: "/important-assets/homepage/projects/lake-view.mp4",
  },
  {
    slug: "kalikas",
    title: "Kalikas",
    alt: "Kalikas website preview",
    result:
      "Built a digital exhibition showcasing 9 student artists online — earning a perfect 100% project score",
    static: staticKalikas,
    vid: "/important-assets/homepage/projects/kalikas.mp4",
  },
];
import CafeSaBukidHero from "../../public/important-assets/case-study-page/cafe-sa-bukid.avif";
import KalikasHero from "../../public/important-assets/case-study-page/kalikas.avif";
import LakeApoHero from "../../public/important-assets/case-study-page/lake-apo.avif";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import CafeSaBukidHeroMobile from "../../public/important-assets/case-study-page/cafe-sa-bukid-mobile.avif";
import KalikasHeroMobile from "../../public/important-assets/case-study-page/kalikas-mobile.avif";
import LakeApoHeroMobile from "../../public/important-assets/case-study-page/lake-view-mobile.avif";

export const caseStudyProjects = [
  {
    slug: "cafe-sa-bukid",
    websiteDescriptionReadThisAI:
      "Since 2017 Cafe sa Bukid Great food. BUKID experience! — where every meal tastes like it was grown right outside your window.View Menu Visit Us",
    heroImage: CafeSaBukidHero,
    mobileHeroImage: CafeSaBukidHeroMobile,
    eyebrow: "Restaurant Website",
    title: "Cafe sa Bukid",
    alt: "Cafe sa Bukid website hero image",
    subHeading:
      "Bringing a farm-to-table dining experience online for a restaurant that had outgrown its old web presence.",
    problem:
      "Cafe sa Bukid had built a loyal following since 2017, but their old website was outdated, hard to navigate on mobile, and didn't reflect the warmth of their farm-to-table concept. Most customers were finding them through word of mouth instead of search, and the existing site gave visitors no clear way to view the menu or plan a visit.",
    myRole:
      "I handled the full process end-to-end — research, wireframing, design, and development. I worked directly with the owners to translate their in-person hospitality into something that felt just as welcoming online.",
    solutionURL: "",
    process: [
      {
        step: "Step 1",
        title: "Brief and Research",
        description:
          "Started with a short discovery call to understand the brand's story and dining experience. Looked into similar farm-to-table restaurants to see how they presented menus and location info, then mapped out the must-have pages: home, menu, and visit-us details.",
        icon: Search,
        supportingImage: "", //Picture of email sent asking questions
        leftSideDesign: false,
        rightSideDesign: true,
      },
      {
        step: "Step 2 ",
        title: "Wireframes and Structre",
        description:
          "Sketched a simple structure prioritizing the menu and visit information above the fold, since that's what most visitors were searching for. Kept the navigation to three core actions: View Menu, Visit Us, and a way to see the space itself through photos.",
        icon: PenTool,
        supportingImage: "",
        leftSideDesign: true, // ss of portfolio website wireframe
        rightSideDesign: true,
      },
      {
        step: "Step 3",
        title: "Design and Build",
        description:
          "Built the site in Next.js with a warm, earthy color palette to match the cafe's rustic setting. Used large, appetizing food photography as the visual anchor and made sure the menu was readable and scannable on mobile, since most visitors check it on their phones before heading out.",
        icon: Code,
        supportingImage: "", //ss of dev pics code
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 4",
        title: "Review and Launch",
        description:
          "Ran the site by the owners for a content review, made small copy adjustments based on their feedback, then tested across devices before launch. Monitored loading speed and mobile usability in the first two weeks post-launch.",

        icon: Rocket,
        supportingImage: "", // ss of vercel upload or deploy note: icon hovered, that image will show in the bg
        leftSideDesign: true,
        rightSideDesign: false,
      },
    ],

    firstResultNumeric: "20%",
    secondResultNumeric: "3x",
    thirdResultNumeric: "1.8s",
    fourthResultNumeric: "100%",
    firstResultDescription:
      "Increase in overall online traction within the first month of launch",
    secondResultDescription:
      "More visitors viewing the menu page compared to the previous site",
    thirdResultDescription:
      "Average page load time, keeping visitors from bouncing before they see the menu",
    fourthResultDescription:
      "Mobile-friendly score, ensuring a smooth experience for on-the-go diners",
    liveSiteUrl: "",
    isLast: false,
    Icon: "",
  },
  {
    slug: "lake-view",
    websiteDescriptionReadThisAI:
      "Bukidnon Nature Escape & Tourist Spot Lake Apo Nature Park - Cafe and Resthouse in Bukidnon Relax by scenic lake views, enjoy local food, and stay overnight in Bukidnon's peaceful natural retreat. Get Directions Explore Cafe View Resthouse",
    heroImage: LakeApoHero,
    mobileHeroImage: LakeApoHeroMobile,
    eyebrow: "Tourism & Hospitality",
    title: "Lake View",
    alt: "Lake View website hero image",
    subHeading:
      "Redesigning a nature park's online presence to match the peaceful experience guests find on-site.",
    problem:
      "Lake Apo Nature Park offers a scenic lakeside escape with a cafe and resthouse, but their previous website loaded slowly and scored poorly on performance audits — undercutting first impressions for visitors researching a getaway. There was also no clear path for guests to get directions, browse the cafe, or check resthouse details.",
    myRole:
      "I led a full redesign and performance overhaul, focusing on both visual storytelling and technical optimization so the site felt as relaxing to browse as the park is to visit.",
    solutionURL: "",

    process: [
      {
        step: "Step 1",
        title: "Brief and Research",
        description:
          "Audited the existing site's performance bottlenecks — oversized images and unoptimized assets were the main culprits. Researched how other nature park and resort sites balanced rich visuals with fast load times.",
        supportingImage: "", //Picture of email sent asking questions
        icon: Search,
        leftSideDesign: false,
        rightSideDesign: true,
      },
      {
        step: "Step 2 ",
        title: "Wireframes and Structre",
        description:
          "Prioritized three clear actions above the fold: Get Directions, Explore Cafe, and View Resthouse, since these mirrored what most visitors were searching for. Wireframed a single-page scroll structure to keep the experience simple for guests planning a visit on mobile.",
        supportingImage: "",
        icon: PenTool,
        leftSideDesign: true, // ss of portfolio website wireframe
        rightSideDesign: true,
      },
      {
        step: "Step 3",
        title: "Design and Build",
        description:
          "Rebuilt the site in Next.js with optimized, responsive images and lazy loading for below-the-fold content. Used a calm, natural color palette and large lake photography to immediately set the tone before guests even arrive.",
        icon: Code,
        supportingImage: "", //ss of dev pics code
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 4",
        title: "Review and Launch",
        description:
          "Ran Lighthouse audits before and after launch to confirm the performance gains, then reviewed the live site with the park's management team to make sure the cafe and resthouse info stayed accurate and up to date.",

        icon: Rocket,
        supportingImage: "", // ss of vercel upload or deploy note: icon hovered, that image will show in the bg
        leftSideDesign: true,
        rightSideDesign: false,
      },
    ],

    firstResultNumeric: "92",
    secondResultNumeric: "39%",
    thirdResultNumeric: "2.1s",
    fourthResultNumeric: "60%",
    firstResultDescription:
      "Performance score after the redesign, up from a starting score of 60",
    secondResultDescription:
      "Improvement in overall site performance following optimization",
    thirdResultDescription:
      "Reduction in average load time, down from over 5 seconds",
    fourthResultDescription:
      "Drop in bounce rate within the first month after relaunch",
    liveSiteUrl: "",
    isLast: true,
  },
  {
    slug: "kalikas",
    websiteDescriptionReadThisAI:
      "Student Showcase KALIKAS A curated exhibition of student works exploring nature through painting, drawing, calligraphy, photography, paper art, and animation. View the Gallery Featuring landscapes, harvest scenes, and works shaped by mythology and place. Exhibit Focus The opening sequence foregrounds artworks that examine nature through labor, landscape, and folklore.",
    heroImage: KalikasHero,
    mobileHeroImage: KalikasHeroMobile,
    eyebrow: "Digital Art Exhibition",
    title: "Kalikas",
    alt: "Kalikas website hero image",
    subHeading:
      "A digital exhibition giving 9 student artists a gallery-quality space to showcase their work online.",
    problem:
      "The students behind Kalikas had a curated collection exploring nature through painting, calligraphy, photography, and animation — but no way to present it as a cohesive exhibition outside of a physical gallery space. They needed something that felt like walking through a gallery, not just a folder of images.",
    myRole:
      "I was responsible for designing and building the digital exhibition, working closely with the curators to understand the narrative they wanted each section to tell, from landscapes to harvest scenes to mythology-inspired pieces.",
    solutionURL: "",

    process: [
      {
        step: "Step 1",
        title: "Brief and Research",
        description:
          "Reviewed the full collection and grouped works by theme rather than by medium, since the curators wanted visitors to feel an emotional arc rather than just browse categories. Looked at how online museums and digital galleries structure viewing sequences for inspiration.",
        supportingImage: "", //Picture of email sent asking questions
        icon: Search,
        leftSideDesign: false,
        rightSideDesign: true,
      },
      {
        step: "Step 2 ",
        title: "Wireframes and Structre",
        description:
          "Structured the site as a sequential journey — opening with labor and landscape pieces, moving into harvest and mythology themes. Wireframed a gallery-style grid that could flex between mediums (paintings, photography, paper art) without feeling inconsistent.",
        leftSideDesign: true, // ss of portfolio website wireframe
        supportingImage: "",
        icon: PenTool,
        rightSideDesign: true,
      },
      {
        step: "Step 3",
        title: "Design and Build",
        description:
          "Built a minimal, gallery-inspired layout in Next.js with generous white space so each artwork could stand on its own. Added smooth scroll-triggered transitions between exhibit sections to mimic the feeling of moving through a physical gallery space.",
        icon: Code,
        supportingImage: "", //ss of dev pics code
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 4",
        title: "Review and Launch",
        description:
          "Walked through the live site with the curators and a few contributing artists to confirm each piece was presented the way they envisioned. Made final adjustments to image quality and section pacing before the exhibition went live.",

        icon: Rocket,
        supportingImage: "", // ss of vercel upload or deploy note: icon hovered, that image will show in the bg
        leftSideDesign: true,
        rightSideDesign: false,
      },
    ],

    firstResultNumeric: "100%",
    secondResultNumeric: "9",
    thirdResultNumeric: "100%",
    fourthResultNumeric: "0",
    firstResultDescription:
      "Final project score awarded for the digital exhibition",
    secondResultDescription:
      "Student artists featured with their own dedicated showcase space",
    thirdResultDescription:
      "Of submitted artworks successfully presented online without quality loss",
    fourthResultDescription:
      "Revisions needed after the final curator walkthrough before launch",
    liveSiteUrl: "",
    isLast: false,
  },
];
