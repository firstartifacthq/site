import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist on First Artifact.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-28 text-[hsl(var(--foreground))]"
    >
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/54">404</p>
        <h1 className="font-display mt-4 text-[clamp(3rem,8vw,5rem)] leading-[0.9] tracking-[-0.03em]">
          Page not found
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-black/70">
          That route is not part of First Artifact. Head home to read the manifesto, standard, and
          team.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[hsl(var(--foreground))] px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
