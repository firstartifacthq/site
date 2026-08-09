import { ManifestoVideo } from "@/components/home/manifesto-video";

function ManifestoLogo() {
  return (
    <svg aria-hidden="true" className="mt-10 mb-12 h-20 w-20" fill="none" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="relative z-10 flex min-h-screen w-full scroll-mt-24 flex-col overflow-hidden bg-[hsl(var(--signal))] text-white" id="manifesto">
      <div className="flex flex-1 flex-col items-center px-8 pt-[100px] md:pt-[400px]">
        <div className="relative z-20 mx-auto flex h-auto w-full max-w-[900px] flex-col items-center text-center md:h-[620px]">
          <h2 id="manifesto-title" className="sr-only">First Artifact manifesto</h2>
          <ManifestoLogo />

          <p className="mb-[40px] h-auto w-full max-w-[400px] font-sans text-[16px] uppercase leading-[1.6] tracking-wider text-white">
            We make room for people who build until the idea becomes an artifact.
          </p>

          <div className="mb-[32px] font-display text-[120px] leading-none text-white">F.A.</div>

          <div className="mb-[100px] flex w-full flex-col items-center font-sans font-light leading-[1.6] md:mb-24">
            <p className="mb-[24px] w-[400px] max-w-full text-center text-[16px]">
              I was tired of rooms that rewarded talking more than shipping. First Artifact is built for people who move from uncertainty to an artifact.
            </p>
            <p className="w-[400px] max-w-full text-center text-[16px]">
              Your work should compound with the right people around it. Bring the thing you built, the question you cannot drop, and make the next move together.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full shrink-0">
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-10 h-[100px] w-full bg-gradient-to-b from-[hsl(var(--signal))] to-transparent" />
        <ManifestoVideo />
      </div>
    </section>
  );
}
