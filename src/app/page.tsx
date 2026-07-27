import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Process from "@/components/home/Process";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <FeaturedProjects />
      <Process />
      <Contact />
    </>
  );
}