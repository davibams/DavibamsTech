import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";

import { featuredProjects } from "@/data/home/projects";

export default function FeaturedProjects() {
  return (
    <Section>
      <Container>

        <SectionHeading
          eyebrow="CASE STUDIES"
          title="Software We've Built"
          description="Explore a selection of projects that demonstrate how we solve real business problems with modern software."
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