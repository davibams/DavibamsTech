import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";

import { featuredProjects } from "@/data/home/projects";

export default function FeaturedProjects() {
  return (
    <Section id="projects">
      <Container>

        <SectionHeading
          eyebrow="CASE STUDIES"
          title="Selected Projects"
          description="Client websites and software products, including projects currently in development."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                href={`/projects/${project.slug}`}
              />
            ))}
        </div>

      </Container>
    </Section>
  );
}