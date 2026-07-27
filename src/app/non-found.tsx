/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-extrabold text-slate-900">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        Page Not Found
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </main>
  );
}