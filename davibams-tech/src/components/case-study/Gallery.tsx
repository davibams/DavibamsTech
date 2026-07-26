import Image from "next/image";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

interface GalleryProps {
  images: string[];
  title: string;
}

export default function Gallery({
  images,
  title,
}: GalleryProps) {
  return (
    <Section>

      <Container>

        <SectionHeading
          eyebrow="PROJECT GALLERY"
          title="Screenshots & Visuals"
          description="A closer look at the interface and experience created for this solution."
        />


        <div className="grid gap-8 md:grid-cols-2">

          {images.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={image}
                alt={`${title} screenshot`}
                width={900}
                height={600}
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>


      </Container>

    </Section>
  );
}