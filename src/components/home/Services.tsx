import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { services } from "@/data/home/services";

export default function Services() {
  return (
    <Section className="bg-slate-50">
      <Container>

        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Technology Solutions That Help Businesses Move Faster"
          description="Every business has unique challenges. We design and build software solutions that help you work smarter, serve customers better, and grow with confidence."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 rounded-xl bg-slate-100 p-4">
                  <span className="font-semibold text-slate-900">
                    Best for:
                  </span>

                  <p className="mt-2 text-slate-600">
                    {service.bestFor}
                  </p>
                </div>

              </div>

            );

          })}

        </div>

      </Container>
    </Section>
  );
}