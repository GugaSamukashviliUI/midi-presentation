import Image from "next/image";
import { Reveal, RevealItem } from "@/components/Reveal";
import { ScrollHint } from "@/components/ScrollHint";

function MidiLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 702 341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="midi"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M216.383 61.9439L297.204 142.766L359.148 80.822L278.326 -1.76642e-06L216.383 61.9439Z"
        fill="#E94844"
      />
      <path
        d="M123.562 278.416L262.989 139.227L201.045 77.2833L0.085978 278.416L123.562 278.416Z"
        fill="currentColor"
      />
      <path
        d="M154.444 278.45L279.579 278.415L216.978 215.917L154.444 278.45Z"
        fill="#E94844"
      />
      <path
        d="M278.331 154.564L309.253 185.15L339.685 154.564L370.362 185.241L293.669 261.933L232.316 200.579L278.331 154.564Z"
        fill="currentColor"
      />
      <path
        d="M339.898 123.552L355.296 108.267L526.45 278.162L495.653 278.162L339.898 123.552Z"
        fill="currentColor"
      />
      <rect x="656.266" y="109.932" width="44.9724" height="168.23" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M409.752 209.038V278.162H454.724V253.68L409.752 209.038ZM454.724 188.72V109.932H409.752V144.078L454.724 188.72Z"
        fill="currentColor"
      />
      <path
        d="M519.683 94.9417C543.538 94.9417 566.416 104.593 583.283 121.774C600.151 138.954 609.628 162.255 609.628 186.552C609.628 210.848 600.152 234.15 583.284 251.33C566.416 268.511 543.538 278.162 519.683 278.162L519.683 247.836C535.641 247.836 550.946 241.38 562.23 229.886C573.514 218.393 579.853 202.806 579.853 186.552C579.853 170.298 573.514 154.71 562.23 143.217C550.946 131.724 535.641 125.268 519.683 125.268L519.683 94.9417Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Section01Cover() {
  return (
    <section
      id="cover"
      className="relative w-full min-h-screen flex items-center overflow-hidden px-6 md:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-coral blur-[140px] animate-glow-pulse"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <Reveal>
          <RevealItem>
            <MidiLogoMark className="text-ink w-[68vw] max-w-[360px] md:w-[380px] h-auto -ml-1" />
          </RevealItem>
          <RevealItem>
            <p className="text-coral text-xl md:text-2xl mt-4 font-medium">
              go where you belong.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="text-ink-muted text-sm md:text-base mt-6 tracking-wide">
              Guga Samukashvili &nbsp;·&nbsp; Diploma Project 2026
            </p>
          </RevealItem>
        </Reveal>
      </div>

      {/* Anchored to the section's own edge (not the max-w-6xl content
          column) so it hugs the true right edge of the viewport at every
          width, independent of how much the centered content is inset. */}
      <Reveal className="absolute right-0 bottom-0 w-[85vw] max-w-[420px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[760px] xl:max-w-[880px]">
        <RevealItem>
          <Image
            src="/hero/smartphone-mockup.png"
            alt="Midi app shown on a phone held in hand, displaying the Date Flow AI chat screen"
            width={2000}
            height={1390}
            priority
            sizes="(min-width: 1280px) 880px, (min-width: 1024px) 760px, (min-width: 768px) 600px, 85vw"
            className="w-full h-auto"
          />
        </RevealItem>
      </Reveal>

      <ScrollHint />
    </section>
  );
}
