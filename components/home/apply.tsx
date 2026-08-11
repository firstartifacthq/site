import { ApplicationForm } from "@/components/application-form";
import { FadeUp } from "@/components/fade-up";

export function Apply() {
  return (
    <section
      aria-labelledby="apply-title"
      className="scroll-mt-8 bg-[hsl(var(--signal))] py-24 md:py-36"
      id="apply"
    >
      <div className="page-shell">
        <FadeUp>
          <div className="max-w-[44rem] text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.08em]">Apply</p>
            <h2
              id="apply-title"
              className="font-display text-balance mt-5 max-w-[13ch] text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.03em]"
            >
              Apply with your work
            </h2>
            <p className="mt-7 text-lg leading-relaxed">
              The first filter is simple: show us what exists, what you did, and the problem you
              keep returning to.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-12 bg-white p-6 sm:p-10 md:mt-16 md:p-14">
            <ApplicationForm />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
