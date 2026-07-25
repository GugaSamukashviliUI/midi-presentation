import Image from "next/image";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";

const steps = [
  "Scan the QR code",
  "Open in Safari (iPhone) or Chrome (Android)",
  "Tap Add to Home Screen",
  "Explore Tbilisi",
];

export function Section03Demo() {
  return (
    <Section
      id="demo"
      index="03"
      title="Live Demo + QR Code"
      className="min-h-[680px] flex flex-col justify-center py-16 md:py-0"
      background={
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <Image
            src="/demo/scene-08.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center scale-110 blur-xl opacity-40"
          />
          <div className="absolute inset-0 bg-bg/60" />
        </div>
      }
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <RevealItem>
            <h2 className="font-bold text-5xl md:text-6xl leading-[0.95]">
              Try it yourself.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-coral text-lg md:text-xl mt-3">
              Scan. Install. Explore.
            </p>
          </RevealItem>
          <RevealItem>
            <ol className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-card border border-coral/40 text-coral text-sm flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <span className="text-ink-soft pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </RevealItem>
        </div>

        <RevealItem className="flex flex-col items-center gap-6">
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
            <span className="absolute inset-0 rounded-2xl border-2 border-coral animate-pulse-ring" />
            <div className="relative w-full h-full rounded-2xl bg-white flex items-center justify-center p-4">
              <Image src="/demo/qr-code.svg" alt="QR code linking to midi-app-nine.vercel.app" width={200} height={200} className="w-full h-full" />
            </div>
          </div>
          <a
            href="https://midi-app-nine.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-card border border-coral/40 px-5 py-2.5 text-sm text-coral-light tracking-wide hover:border-coral hover:text-coral transition-colors"
          >
            midi-app-nine.vercel.app
          </a>
        </RevealItem>
      </div>
    </Section>
  );
}
