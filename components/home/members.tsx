import { FadeUp } from "@/components/fade-up";

const members = [1, 2, 3, 4, 5];

export function Members() {
  return (
    <section aria-labelledby="team-title" className="scroll-mt-8 bg-white py-24 md:py-36" id="team">
      <div className="page-shell">
        <FadeUp>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 id="team-title" className="font-display text-balance max-w-[11ch] text-[clamp(3.4rem,7vw,6rem)] lowercase leading-[0.88] tracking-[-0.03em]">Meet the team.</h2>
            <p className="max-w-md text-lg leading-relaxed text-black/62">Five founding members are already here. Profiles will appear as names, photos, and biographies are approved.</p>
          </div>
        </FadeUp>
        <ul aria-label="Founding members" className="mt-16 grid gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
          {members.map((member, index) => (
            <li key={member} className={`grid grid-cols-[4.5rem_1fr] items-center gap-4 sm:block ${index % 2 ? "lg:mt-16" : ""}`}>
              <div aria-hidden="true" className="relative h-18 w-18 overflow-hidden bg-[hsl(var(--signal))] sm:aspect-square sm:h-auto sm:w-full">
                <div className="absolute inset-y-0 left-1/2 border-l border-white/36" />
                <div className="absolute inset-x-0 top-1/2 border-t border-white/36" />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>
              <div>
                <p className="text-sm font-semibold sm:mt-4">Founding member {String(member).padStart(2, "0")}</p>
                <p className="mt-1 text-sm text-black/54">Profile pending</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
