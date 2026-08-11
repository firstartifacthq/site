import { cn } from "@/lib/utils";

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

/**
 * The working model for fun, shared by the home band and the manifesto.
 *
 * Operators carry their own trailing space so every term keeps a wrap
 * opportunity; without it the line cannot break on narrow viewports.
 */
export function FunFormula({
  className,
  operatorClassName = "text-[hsl(var(--signal))]",
}: {
  className?: string;
  /** Operators must change colour on a signal-red field, where red vanishes. */
  operatorClassName?: string;
}) {
  return (
    <>
      <p className="sr-only">
        Fun is approximately agency multiplied by progress, multiplied by optimal challenge,
        multiplied by feedback.
      </p>

      <p
        aria-hidden="true"
        className={cn(
          "text-[clamp(1.75rem,4.6vw,3.25rem)] font-semibold leading-[1.2] tracking-[-0.02em]",
          className,
        )}
      >
        {parts.map((part, index) => (
          <span
            key={`${part}-${index}`}
            className={operators.has(part) ? operatorClassName : undefined}
          >
            {part}
            {index < parts.length - 1 ? " " : null}
          </span>
        ))}
      </p>
    </>
  );
}
