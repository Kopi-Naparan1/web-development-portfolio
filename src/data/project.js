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
import { Telescope, LayoutTemplate, Layers, Send } from "lucide-react";
import CafeSaBukidHeroMobile from "../../public/important-assets/case-study-page/cafe-sa-bukid-mobile.avif";
import KalikasHeroMobile from "../../public/important-assets/case-study-page/kalikas-mobile.avif";
import LakeApoHeroMobile from "../../public/important-assets/case-study-page/lake-view-mobile.avif";
import Step1 from "../../public/important-assets/case-study-page/step1.avif";
import Step2 from "../../public/important-assets/case-study-page/step2.avif";
import Step3 from "../../public/important-assets/case-study-page/step3.avif";
import Step4 from "../../public/important-assets/case-study-page/step4.avif";

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
    howItCameTogetherSection: {
      problem: [
        "Cafe sa Bukid had built a loyal following since 2017, but their old website was outdated and hard to navigate on mobile.",
        "The site didn't reflect the warmth of their farm-to-table concept.",
        "Most customers were finding them through word of mouth instead of search.",
        "Visitors had no clear way to view the menu or plan a visit.",
      ],
      myRole: [
        "Handled the full process end-to-end — research, wireframing, design, and development.",
        "Worked directly with the owners to understand their brand and hospitality.",
        "Translated their in-person warmth into a welcoming online experience.",
      ],
      solutionURLMobile: CafeSaBukidHero,
      solutionURLDesktop: CafeSaBukidHeroMobile,
    },

    process: [
      {
        step: "Step 1",
        title: "Brief and Research",
        description: [
          "Started with a short discovery call to understand the brand's story and dining experience.",
          "Looked into similar farm-to-table restaurants to see how they presented menus and location info.",
          "Mapped out the must-have pages: home, menu, and visit-us details.",
        ],
        icon: Telescope,
        supportingImage: Step1,
        leftSideDesign: false,
        rightSideDesign: true,
      },
      {
        step: "Step 2",
        title: "Wireframes and Structure",
        description: [
          "Sketched a simple structure prioritizing the menu and visit information above the fold.",
          "Kept navigation to three core actions: View Menu, Visit Us, and a photo gallery of the space.",
        ],
        icon: LayoutTemplate,
        supportingImage: Step2,
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 3",
        title: "Design and Build",
        description: [
          "Built the site in Next.js with a warm, earthy color palette to match the cafe's rustic setting.",
          "Used large food photography as the visual anchor throughout.",
          "Made the menu readable and scannable on mobile, since most visitors check it on their phones before heading out.",
        ],
        icon: Layers,
        supportingImage: Step3,
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 4",
        title: "Review and Launch",
        description: [
          "Ran the site by the owners for a content review and made copy adjustments based on their feedback.",
          "Tested across devices before launch.",
          "Monitored loading speed and mobile usability in the first two weeks post-launch.",
        ],
        icon: Send,
        supportingImage: Step4,
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
    howItCameTogetherSection: {
      problem: [
        "Lake Apo Nature Park offers a scenic lakeside escape with a cafe and resthouse.",
        "Their previous website loaded slowly and scored poorly on performance audits — undercutting first impressions for visitors.",
        "No clear path for guests to get directions, browse the cafe, or check resthouse details.",
      ],
      myRole: [
        "Led a full redesign and performance overhaul of the site.",
        "Focused on visual storytelling to reflect the park's relaxing atmosphere.",
        "Optimized technical performance so the site loads fast and scores well on audits.",
      ],
      solutionURLMobile: LakeApoHero,
      solutionURLDesktop: LakeApoHeroMobile,
    },

    process: [
      {
        step: "Step 1",
        title: "Brief and Research",
        description: [
          "Audited the existing site's performance bottlenecks — oversized images and unoptimized assets were the main culprits.",
          "Researched how other nature park and resort sites balanced rich visuals with fast load times.",
        ],
        supportingImage: Step1,
        icon: Telescope,
        leftSideDesign: false,
        rightSideDesign: true,
      },
      {
        step: "Step 2",
        title: "Wireframes and Structure",
        description: [
          "Prioritized three clear actions above the fold: Get Directions, Explore Cafe, and View Resthouse.",
          "Wireframed a single-page scroll structure to keep the experience simple for guests planning a visit on mobile.",
        ],
        supportingImage: Step2,
        icon: LayoutTemplate,
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 3",
        title: "Design and Build",
        description: [
          "Rebuilt the site in Next.js with optimized, responsive images and lazy loading for below-the-fold content.",
          "Used a calm, natural color palette and large lake photography to set the tone before guests even arrive.",
        ],
        supportingImage: Step3,
        icon: Layers,
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 4",
        title: "Review and Launch",
        description: [
          "Ran Lighthouse audits before and after launch to confirm the performance gains.",
          "Reviewed the live site with the park's management team to make sure cafe and resthouse info stayed accurate.",
        ],
        supportingImage: Step4,
        icon: Send,
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

    howItCameTogetherSection: {
      problem: [
        "The students behind Kalikas had a curated collection exploring nature through painting, calligraphy, photography, and animation.",
        "No way to present it as a cohesive exhibition outside of a physical gallery space.",
        "They needed something that felt like walking through a gallery, not just a folder of images.",
      ],
      myRole: [
        "Designed and built the digital exhibition from the ground up.",
        "Worked closely with the curators to understand the narrative each section needed to tell.",
        "Covered diverse themes — from landscapes to harvest scenes to mythology-inspired pieces.",
      ],
      solutionURLMobile: KalikasHero,
      solutionURLDesktop: KalikasHeroMobile,
    },
    process: [
      {
        step: "Step 1",
        title: "Brief and Research",
        description: [
          "Reviewed the full collection and grouped works by theme rather than by medium.",
          "Curators wanted visitors to feel an emotional arc rather than just browse categories.",
          "Looked at how online museums and digital galleries structure viewing sequences for inspiration.",
        ],
        supportingImage: Step1,
        icon: Telescope,
        leftSideDesign: false,
        rightSideDesign: true,
      },
      {
        step: "Step 2",
        title: "Wireframes and Structure",
        description: [
          "Structured the site as a sequential journey — opening with labor and landscape pieces, moving into harvest and mythology themes.",
          "Wireframed a gallery-style grid that could flex between mediums without feeling inconsistent.",
        ],
        supportingImage: Step2,
        icon: LayoutTemplate,
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 3",
        title: "Design and Build",
        description: [
          "Built a minimal, gallery-inspired layout in Next.js with generous white space so each artwork could stand on its own.",
          "Added smooth scroll-triggered transitions between exhibit sections to mimic moving through a physical gallery.",
        ],
        supportingImage: Step3,
        icon: Layers,
        leftSideDesign: true,
        rightSideDesign: true,
      },
      {
        step: "Step 4",
        title: "Review and Launch",
        description: [
          "Walked through the live site with the curators and contributing artists to confirm each piece was presented as envisioned.",
          "Made final adjustments to image quality and section pacing before the exhibition went live.",
        ],
        supportingImage: Step4,
        icon: Send,
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
