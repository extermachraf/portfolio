export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  role?: string;
  highlights?: string[];
};

export const projectsData: Project[] = [
  {
    title: "LoveYouTravel",
    description:
      "Contributed to building LoveYouTravel, a travel website showcasing destinations and enabling users to explore services and travel packages.",
    technologies: ["Spring Boot", "Angular", "stripe", "Tailwind CSS", "Mysql"],
    image: "/projects/loveYouTravel.png",
    liveUrl: "https://loveyoutravel.it/home",
    category: "Travel Website",
  },
  {
    title: "Vicini di Casi",
    description:
      "Vicini di Casi is a platform dedicated to helping people resolve condominium-related issues through three main services: an AI assistant trained to provide quick and detailed answers, a specialized lawyer who offers personalized legal advice in compliance with regulations, and videoconference consultations for in-depth, real-time discussions with legal experts.",
    technologies: [
      "Spring Boot",
      "Angular",
      "Java",
      "Firebase",
      "AI integration",
    ],
    image: "/projects/vicinidicasi.png",
    liveUrl: "https://vicinidicasi.it/",
    category: "Juridique platform",
  },
  {
    title: "WinkWing",
    description:
      "Contributed to WinkWing, a comprehensive rental apartment platform that helps users easily find apartments near them. Developed features to aggregate listings from 950+ websites, provide instant alerts for new properties, and deliver a seamless mobile-first apartment hunting experience.",
    technologies: [
      "Next.js",
      "Nest.js",
      "JavaScript",
      "SASS",
      "RESTful APIs",
      "Real-time Notifications",
    ],
    image: "/projects/winkwing.png",
    liveUrl: "https://www.winkwing.com/en",
    category: "Real Estate Platform",
    role: "Frontend Developer",
    highlights: [
      "Built responsive apartment listing and detail pages",
      "Implemented advanced filtering and search functionality for properties",
      "Created real-time notification system for new listings",
      "Optimized mobile experience for apartment hunting on-the-go",
      "Developed multi-language support for international users",
    ],
  },
  {
    title: "Achieve",
    description:
      "Worked with Achieve, a company specializing in designing and optimizing online marketing campaigns aimed at driving business growth. Contributed to developing their digital platform that helps increase website traffic, generate high-quality leads, and boost revenue through data-driven marketing strategies.",
    technologies: [
      "Nextjs",
      "TypeScript",
      "WordPress",
      "Tailwind CSS",
      "Google Analytics",
      "HubSpot Integration",
    ],
    image: "/projects/achieve.png",
    liveUrl: "https://www.achieve.nl/",
    category: "Digital Marketing Platform",
    role: "Frontend Developer & Marketing Tech Integration",
    highlights: [
      "Developed interactive data visualization dashboards for marketing metrics",
      "Built responsive landing page templates optimized for conversion",
      "Integrated marketing automation tools and analytics platforms",
      "Implemented A/B testing framework for campaign optimization",
      "Created custom WordPress components for the marketing team",
    ],
  },
];
