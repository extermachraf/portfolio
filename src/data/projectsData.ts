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
      "Contributed to building LoveYouTravel, a responsive travel website showcasing destinations and enabling users to explore services and travel packages. I worked on UI components, responsive layouts, and interaction/animation details to improve the user experience.",
    technologies: ["Spring Boot", "Angular", "stripe", "Tailwind CSS", "Mysql"],
    image: "/projects/loveYouTravel.png",
    liveUrl: "https://loveyoutravel.it/home",
    category: "Travel Website",
    role: "Frontend contributor (UI & animations)",
    highlights: [
      "Built responsive UI components and layouts",
      "Implemented animations and interactive elements",
      "Optimized performance and image loading",
    ],
  },
  {
    title: "Vicini di Casi",
    description:
      "Vicini di Casi is a platform dedicated to helping people resolve condominium-related issues through three main services: an AI assistant trained to provide quick and detailed answers, a specialized lawyer who offers personalized legal advice in compliance with regulations, and videoconference consultations for in-depth, real-time discussions with legal experts.",
    technologies: [
      "Spring Boot",
      "Angular",
      "Java",
      "CSS",
      "Firebase",
      "AI integration",
    ],
    image: "/projects/vicinidicasi.png",
    liveUrl: "https://vicinidicasi.it/",
    category: "Juridique platform",
    role: "Frontend Developer",
    highlights: [
      "Implemented responsive property listing components",
      "Built advanced search and filtering functionality",
      "Integrated Google Maps for property location visualization",
      "Optimized loading performance for property listings",
    ],
  },
  {
    title: "WinkWing",
    description:
      "Contributed to WinkWing, an innovative e-commerce platform specializing in beauty and wellness products. Developed key features to enhance the shopping experience, including product browsing, filtering, and a seamless checkout process.",
    technologies: [
      "Next.js",
      "Nest.js",
      "JavaScript",
      "SASS",
      "RESTful APIs",
      "Stripe Integration",
    ],
    image: "/projects/winkwing.png",
    liveUrl: "https://www.winkwing.com/en",
    category: "Real Estate Platform",
    role: "Frontend Developer",
    highlights: [
      "Built responsive product catalog and detail pages",
      "Implemented dynamic filtering and search functionality",
      "Created smooth checkout experience with Stripe integration",
      "Optimized website performance and loading times",
      "Developed multi-language support for international customers",
    ],
  },
  {
    title: "Achieve",
    description:
      "Worked with Achieve, a company specializing in designing and optimizing online marketing campaigns aimed at driving business growth. Contributed to developing their digital platform that helps increase website traffic, generate high-quality leads, and boost revenue through data-driven marketing strategies.",
    technologies: [
      "React",
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
