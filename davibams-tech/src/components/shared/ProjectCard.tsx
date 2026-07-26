import Image from "next/image";
import Link from "next/link";

import Badge from "./Badge";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  href: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-5 p-8">
        <Badge>{category}</Badge>

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="leading-7 text-slate-600">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <Link
          href={href}
          className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View Case Study →
        </Link>
      </div>
    </article>
  );
}