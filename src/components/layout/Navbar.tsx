import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import { navigation } from "@/data/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button href="https://wa.me/2347013177039">
            Chat on WhatsApp
          </Button>
        </div>

        {/* Mobile menu comes next */}
      </div>
    </header>
  );
}