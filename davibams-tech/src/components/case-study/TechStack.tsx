import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

interface TechStackProps {
  technologies: string[];
}

export default function TechStack({
  technologies,
}: TechStackProps) {
  return (
    <Section className="bg-slate-50">

      <Container>

        <SectionHeading
          eyebrow="TECHNOLOGY"
          title="Tools & Technologies Used"
          description="Modern technologies selected to create a reliable, scalable, and maintainable solution."
        />


        <div className="flex flex-wrap justify-center gap-4">

          {technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {technology}
            </div>
          ))}

        </div>


      </Container>

    </Section>
  );
}