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

    category: "AI Learning Platform · In development",

    description:
      "An AI-powered academic platform designed to help university students study smarter through personalized learning resources and CBT practice.",

    challenge:
      "Students relied on scattered learning materials and lacked a centralized platform for exam preparation.",

    solution:
      "Built a modern learning platform with AI-assisted study tools, CBT practice, payments, authentication, and dashboards.",

    image: "/images/projects/ballpoints-dashboard.webp",
    gallery: ["/images/projects/ballpoints-register.webp"],

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

    featured: true,

    technologies: [
      "TensorFlow",
      "Flutter",
      "Python",
      "Next.js",
    ],
  },
{"id": 3, "slug": "vee-classic-beauty-world", "title": "VEE Classic Beauty World", "category": "Client website", "description": "Beauty and fashion product showcase with direct customer enquiries and WhatsApp ordering.", "challenge": "A beauty business needed a professional online presence.", "solution": "Designed a responsive product and service website with direct ordering enquiries.", "image": "/images/projects/vee-classic.webp", "featured": true, "technologies": [], "liveUrl": "https://veeclassicbeautyworld.com/"},
{"id": 5, "slug": "ais", "title": "Academic Intelligence System (AIS)", "category": "School software · In development", "description": "School management software for attendance, results, academic administration and reporting.", "challenge": "Schools need coordinated academic records and workflows.", "solution": "Developing a unified system for school staff with role-based access and offline-capable native clients.", "image": "/images/projects/ais.webp", "featured": true, "technologies": []},
{"id": 6, "slug": "academic-typer", "title": "Davibams Academic Typer", "category": "Desktop software", "description": "Windows typing utility for academic text and mathematical notation.", "challenge": "Academic text entry can be repetitive.", "solution": "Built a desktop utility with adjustable typing speed and pause controls.", "image": "/images/projects/academic-typer.webp", "featured": true, "technologies": []},
];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}