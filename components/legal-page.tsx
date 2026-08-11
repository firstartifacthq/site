import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="bg-white px-6 py-28 text-[hsl(var(--foreground))] md:px-10 md:py-36">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/54">{eyebrow}</p>
        <h1 className="font-display mt-4 text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.92] tracking-[-0.03em]">
          {title}
        </h1>
        <div className="prose-legal mt-10 space-y-6 text-base leading-relaxed text-black/75 md:text-lg">
          {children}
        </div>
      </article>
    </main>
  );
}
