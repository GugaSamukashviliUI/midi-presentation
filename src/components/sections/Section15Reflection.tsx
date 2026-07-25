import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";

const nextSteps = [
  "Real backend with full authentication and cross-device sync",
  "Integration with live map data and real place APIs",
  "Physical installations — Midi benches and phone holders in public spaces",
  "Accessibility features and documentation for people with mobility challenges",
  "Expansion beyond Tbilisi",
];

export function Section15Reflection() {
  return (
    <Section
      id="reflection"
      index="15"
      title="Reflection & Next Steps"
      className="min-h-[720px] py-16 md:py-32"
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <RevealItem>
            <h2 className="font-bold text-4xl md:text-6xl leading-[0.95]">
              Midi isn&apos;t finished.
              <br />
              It&apos;s just getting started.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-coral text-2xl md:text-3xl mt-6 font-bold">
              მიდი
            </p>
          </RevealItem>
          <RevealItem>
            <Expandable trigger="the full reflection">
              <p>
                Midi started as a solution to one awkward evening and grew
                into a product I genuinely believe in. The process taught me
                that the best design problems are the ones you&apos;ve lived
                yourself — because you never stop caring about getting the
                solution right.
              </p>
              <p>
                Building Midi showed me how much friction exists between a
                person and a good experience. Not because good places
                don&apos;t exist — but because the tools we have to find them
                weren&apos;t built with real human behavior in mind.
              </p>
            </Expandable>
          </RevealItem>
        </div>

        <RevealItem>
          <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-5">
            Next Steps
          </p>
          <ul className="space-y-4">
            {nextSteps.map((step) => (
              <li key={step} className="flex gap-3 text-ink-soft leading-relaxed">
                <span className="text-coral shrink-0">→</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </RevealItem>
      </div>

      <RevealItem className="mt-24 pt-16 border-t border-hairline text-center">
        <p className="font-bold text-3xl md:text-4xl text-coral">მიდი</p>
        <p className="text-ink-muted mt-2">yeah, go for it.</p>
        <p className="text-ink-muted text-sm mt-4 tracking-wide">
          midi-app-nine.vercel.app
        </p>
      </RevealItem>
    </Section>
  );
}
