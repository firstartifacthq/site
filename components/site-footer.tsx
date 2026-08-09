import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-10 text-white md:px-10">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-5 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 First Artifact. Built by people who ship.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          <Link href="/#standard" className="focus-ring rounded-sm hover:text-white">Standard</Link>
          <Link href="/#team" className="focus-ring rounded-sm hover:text-white">Team</Link>
          <Link href="/#formats" className="focus-ring rounded-sm hover:text-white">Formats</Link>
        </nav>
      </div>
    </footer>
  );
}
