import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/data/home/projects";
import Hero from "@/components/case-study/Hero";
import Overview from "@/components/case-study/Overview";
import Challenge from "@/components/case-study/Challenge";
import Solution from "@/components/case-study/Solution";
import TechStack from "@/components/case-study/TechStack";
import Gallery from "@/components/case-study/Gallery";
import CTA from "@/components/case-study/CTA";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
  <main>
    <Hero
  title={project.title}
  category={project.category}
  description={project.description}
  image={project.image}
  technologies={project.technologies}
/>

<Overview
  description={project.description}
  challenge={project.challenge}
  solution={project.solution}
/>

<Challenge
  challenge={project.challenge}
/>

<Solution
  solution={project.solution}
/>

<TechStack
  technologies={project.technologies}
/>

{project.gallery && (
  <Gallery
    images={project.gallery}
    title={project.title}
  />
)}

<CTA />
  </main>
);
}