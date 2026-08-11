import { FadeUp } from "@/components/fade-up";

const parts = [
  "fun",
  "≈",
  "agency",
  "×",
  "progress",
  "×",
  "optimal challenge",
  "×",
  "feedback",
] as const;

const operators = new Set(["≈", "×"]);

export function WorkingModel() {
  return (
    <section aria-label="Our working model for fun" className="bg-white py-20 md:py-28">
      <div className="page-shell">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-black/54">
            The working model
          </p>

          <p className="sr-only">
            Fun is approximately agency multiplied by progress, multiplied by optimal challenge,
            multiplied by feedback.
          </p>

          {/* Operators carry their own trailing space so every term keeps a wrap opportunity. */}
          <p
            aria-hidden="true"
            className="mt-6 text-[clamp(1.75rem,4.6vw,3.25rem)] font-semibold leading-[1.2] tracking-[-0.02em]"
          >
            {parts.map((part, index) => (
              <span
                key={`${part}-${index}`}
                className={operators.has(part) ? "text-[hsl(var(--signal))]" : undefined}
              >
                {part}
                {index < parts.length - 1 ? " " : null}
              </span>
            ))}
          </p>

          <p className="mt-7 max-w-[42rem] leading-relaxed text-black/70">
            Participation should feel worthwhile, not like another recurring obligation. The formats
            above are shaped around that.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
