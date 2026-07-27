import Link from "next/link";

interface LogoProps {
  dark?: boolean;
}

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
        D
      </div>

      <div>
        <p
          className={`text-lg font-bold ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Davibams Tech
        </p>

        <p
          className={`text-xs ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Digital Solutions
        </p>
      </div>
    </Link>
  );
}