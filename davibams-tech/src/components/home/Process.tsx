import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { process } from "@/data/home/process";

export default function Process() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="A Clear Path From Idea to Launch"
          description="Every successful project starts with understanding your goals. Our development process keeps you involved from the first conversation to long-term support."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.step}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-blue-600">
                    {item.step}
                  </span>

                  <div className="rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                    <Icon
                      size={28}
                      className="text-blue-600 transition group-hover:text-white"
                    />
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}