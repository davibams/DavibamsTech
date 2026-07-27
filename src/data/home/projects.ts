export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;

  challenge: string;
  solution: string;

  image: string;
  
  gallery?: string[];

  featured: boolean;

  technologies: string[];

  liveUrl?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    slug: "ballpoints",

    title: "Ballpoints",

    category: "AI Learning Platform",

    description:
      "An AI-powered academic platform designed to help university students study smarter through personalized learning resources and CBT practice.",

    challenge:
      "Students relied on scattered learning materials and lacked a centralized platform for exam preparation.",

    solution:
      "Built a modern learning platform with AI-assisted study tools, CBT practice, payments, authentication, and dashboards.",

    image: "/images/projects/ballpoints/hero.webp",

    featured: true,

    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "OpenAI",
      "Paystack",
    ],
  },

  {
    id: 2,

    slug: "chicksense-ai",

    title: "ChickSense AI",

    category: "Artificial Intelligence",

    description:
      "Machine learning platform for identifying the sex of day-old chicks using audio analysis.",

    challenge:
      "Manual chick sexing requires specialized expertise and can be time-consuming.",

    solution:
      "Developed an AI-powered classification system that analyzes chick vocalizations to assist poultry operations.",

    image: "/images/projects/chicksense/login.webp",

    featured: false,

    technologies: [
      "TensorFlow",
      "Flutter",
      "Python",
      "Next.js",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}