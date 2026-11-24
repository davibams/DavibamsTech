import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Contact from '@/components/home/Contact';
import { Globe, MonitorSmartphone, Cog, Code2 } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Business websites & online stores', text: 'Showcase your business, attract customers and make enquiries or orders easier.' },
  { icon: Code2, title: 'Custom business & school software', text: 'Manage records, operations and reporting with software built around your needs.' },
  { icon: MonitorSmartphone, title: 'Web, mobile & desktop applications', text: 'Turn your idea into a practical application for your customers or team.' },
  { icon: Cog, title: 'AI, automation & digital visibility', text: 'Simplify repetitive work and improve your online presence with SEO and Google Business Profile setup.' },
];
export default function Home() {
  return <><Hero /><section id="services" className="mx-auto max-w-7xl px-6 py-16 md:py-24"><p className="text-sm font-bold uppercase tracking-widest text-blue-700">What we do</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Technology that works for your business.</h2><div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{services.map(({icon: Icon,title,text}) => <article key={title} className="border-t border-slate-200 pt-6"><Icon className="text-blue-600" size={28}/><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></article>)}</div></section><FeaturedProjects/><Contact/></>;
}
