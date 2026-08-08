import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-10 text-white md:px-10">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-5 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 First Artifact. Built by people who ship.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          <Link href="/admission" className="focus-ring rounded-sm hover:text-white">Admission</Link>
          <Link href="/events" className="focus-ring rounded-sm hover:text-white">Events</Link>
          <Link href="/faq" className="focus-ring rounded-sm hover:text-white">FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
