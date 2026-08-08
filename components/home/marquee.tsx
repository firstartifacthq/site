export const marqueeCopy = "obsess · build · ship · prove · agency · evolve · purpose · artifact · ";

export function Marquee() {
  return (
    <section aria-label="First Artifact principles" className="relative z-[60] w-full overflow-hidden bg-white py-4 md:py-5">
      <div aria-hidden="true" className="marquee-track flex whitespace-nowrap">
        {Array.from({ length: 4 }, (_, index) => (
          <span
            key={index}
            className="font-display shrink-0 select-none lowercase text-[hsl(var(--signal))]"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
              lineHeight: 1,
              paddingRight: "0.25em",
            }}
          >
            {marqueeCopy}
          </span>
        ))}
      </div>
    </section>
  );
}
