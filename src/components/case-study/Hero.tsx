import Image from "next/image";

import Badge from "@/components/shared/Badge";
import Container from "@/components/shared/Container";

interface HeroProps {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function Hero({
  title,
  category,
  description,
  image,
  technologies,
}: HeroProps) {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div>

            <Badge>
              {category}
            </Badge>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {description}
            </p>


            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <Badge key={technology}>
                  {technology}
                </Badge>
              ))}
            </div>

          </div>


          {/* Project Image */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            <Image
              src={image}
              alt={title}
              width={900}
              height={700}
              className="h-auto w-full object-cover"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}