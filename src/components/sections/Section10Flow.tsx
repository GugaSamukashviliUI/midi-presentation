import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { FlowDiagram } from "@/components/FlowDiagram";
import { HorizontalWheelScroll } from "@/components/HorizontalWheelScroll";

export function Section10Flow() {
  return (
    <Section
      id="user-flow"
      index="10"
      title="User Flow"
      className="min-h-[600px] py-16 md:py-32"
    >
      <RevealItem>
        <h2 className="font-bold text-4xl md:text-6xl leading-[0.95] max-w-2xl">
          From first tap to first memory.
        </h2>
      </RevealItem>
      <RevealItem>
        <p className="text-ink-muted text-sm mt-3">
          Hover or tap a screen to trace its path through the app.
        </p>
      </RevealItem>
      <RevealItem>
        <div className="flex items-center gap-2 mt-2 text-xs text-ink-muted">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-coral shadow-[0_0_10px_2px_rgba(232,99,90,0.7)]" />
          <span>Glowing coral = a key feature of the app</span>
        </div>
      </RevealItem>

      <RevealItem className="mt-14">
        <HorizontalWheelScroll className="overflow-x-auto no-scrollbar -mx-6 px-6 md:-mx-16 md:px-16">
          <FlowDiagram />
        </HorizontalWheelScroll>
      </RevealItem>
    </Section>
  );
}
