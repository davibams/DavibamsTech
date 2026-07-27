import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";

import { featuredProjects } from "@/data/home/projects";

export default function ProjectsGrid() {
  return (
    <Section>

      <Container>

        <SectionHeading
          eyebrow="OUR WORK"
          title="Case Studies"
          description="Explore a selection of software solutions we've designed and developed for businesses, organisations, and startups."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {featuredProjects.map((project) => (

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