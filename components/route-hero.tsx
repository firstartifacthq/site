export function RouteHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="signal-field relative flex min-h-[64svh] items-end overflow-hidden pb-16 pt-32 text-white md:pb-24">
      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute inset-y-0 left-[8%] border-l border-white/16" />
        <span className="absolute inset-y-0 left-1/2 border-l border-white/16" />
        <span className="absolute inset-y-0 right-[8%] border-r border-white/16" />
        <span className="absolute inset-x-0 bottom-24 border-t border-white/16" />
      </div>
      <div className="page-shell relative z-10">
        <h1 className="font-display text-balance max-w-[12ch] text-[clamp(3.6rem,9vw,6rem)] lowercase leading-[0.86] tracking-[-0.03em]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white md:text-xl">{description}</p>
      </div>
    </section>
  );
}
