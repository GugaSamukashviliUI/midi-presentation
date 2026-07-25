import { Reveal, RevealItem } from "@/components/Reveal";
import { SectionNavStrip } from "@/components/SectionNavStrip";

const SKILLS = [
  "UI/UX Design",
  "Interactive Prototyping",
  "User Research",
  "Iconography",
  "Visual Design",
  "Wireframing",
  "User Flows",
  "Typography & Color Theory",
];

export function Section02Skills() {
  return (
    <section id="skills" className="relative w-full px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <RevealItem className="flex items-center gap-3 mb-10 text-sm tracking-[0.2em] font-body">
            <span className="text-coral font-semibold">02</span>
            <span className="h-px w-8 bg-hairline" />
            <span className="uppercase text-ink-muted">Skills &amp; Approach</span>
          </RevealItem>

          <RevealItem>
            <p className="text-coral font-semibold text-sm tracking-wide uppercase mb-5">
              midi mobile app
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="font-bold text-4xl md:text-6xl leading-[1.05] max-w-4xl">
              Go Past The Glass Horizon
              <span className="text-ink-faint">;</span>{" "}
              <span className="text-ink-faint font-medium">
                stop being a passive observer,
              </span>{" "}
              Create A Story Worth Telling.
            </h2>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap gap-3 mt-10 max-w-3xl">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-[4px] border border-coral/25 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-coral"
                  style={{ background: "color-mix(in srgb, var(--color-coral) 12%, var(--color-card))" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </RevealItem>

          <RevealItem>
            <p className="text-ink-faint text-sm mt-10">Guga Samukashvili</p>
          </RevealItem>
        </Reveal>
      </div>

      <div className="mt-20 md:mt-28">
        <SectionNavStrip />
      </div>
    </section>
  );
}
