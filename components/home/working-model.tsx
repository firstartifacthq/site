import { FadeUp } from "@/components/fade-up";
import { FunFormula } from "@/components/fun-formula";

export function WorkingModel() {
  return (
    <section aria-label="Our working model for fun" className="bg-white py-20 md:py-28">
      <div className="page-shell">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/54">
            The working model
          </p>

          <FunFormula className="mt-6" />

          <p className="mt-7 max-w-[42rem] leading-relaxed text-black/70">
            Participation should feel worthwhile, not like another recurring obligation. The formats
            above are shaped around that.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
