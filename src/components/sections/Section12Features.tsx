"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";
import { Placeholder } from "@/components/Placeholder";
import { FilterOverlayPreview } from "@/components/FilterOverlayPreview";
import { PostOverlayPreview } from "@/components/PostOverlayPreview";
import { AIChatPreview } from "@/components/AIChatPreview";
import { HorizontalScroller } from "@/components/HorizontalScroller";

const features = [
  {
    title: "Smart Filter",
    visible:
      "Find your kind of place, even when you don't know what you're looking for.",
    expanded:
      "Most apps make you search for something specific. Midi works the other way. Tell it your mood, your budget, how you're getting there, and who you're with — and it builds your options around you. Can't put it into words? Type how you're feeling and the AI generates vibe tokens that do the filtering for you. Calm. Sunset. Low effort. Walkable. The right place finds you.",
  },
  {
    title: "Date Flow AI Chat",
    visible: "Your personal journey planner. Ask it anything.",
    expanded:
      "Planning a first date, a solo walk, or a group outing is stressful. Date Flow takes your situation and turns it into a full plan. It tells you the best route to take, what to bring, what to expect when you get there, what to order, and which florist to stop at on the way. It doesn't just find the place — it prepares you for the whole experience.",
  },
  {
    title: "Informative Posts",
    visible: "Every post already knows where you are — and what time it is.",
    expanded:
      "Posts aren't static. Each one carries live context built around your location and the moment: how far it is from where you're standing, the average budget to expect, and whether it's realistically walkable. It even shows how crowded the place is right now, the best time to go, and what the weather looks like there — because if it's far enough away, the climate might be completely different from where you are.",
  },
];

function FeaturePreview({ title }: { title: string }) {
  if (title === "Smart Filter") return <FilterOverlayPreview />;
  if (title === "Informative Posts") return <PostOverlayPreview />;
  if (title === "Date Flow AI Chat") return <AIChatPreview />;
  return (
    <Placeholder label="App screenshot" note="midi-app-nine.vercel.app" className="mt-6" aspect="aspect-[4/5]" />
  );
}

// Playing-card fan lift below the lg breakpoint — center card sits
// highest, the two side cards drop slightly. No tilt: all horizontal.
const FAN_ROTATE = ["rotate-0", "rotate-0", "rotate-0"];
const FAN_LIFT = ["translate-y-2", "translate-y-0", "translate-y-2"];

export function Section12Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      id="features"
      index="12"
      title="Key Features"
      className="min-h-[980px] py-16 md:py-32"
    >
      <RevealItem>
        <h2 className="font-bold text-4xl md:text-6xl leading-[0.95] max-w-2xl">
          Three features that change how you discover.
        </h2>
      </RevealItem>

      <RevealItem className="mt-14">
        <HorizontalScroller
          onActiveChange={setActiveIndex}
          scrollerClassName="scroll-pl-10 scroll-pr-10"
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`snap-card shrink-0 w-[80vw] sm:w-[340px] lg:w-[380px] rounded-2xl border border-hairline p-7 flex flex-col transition-transform duration-300 ${
                i === 0 ? "ml-10 lg:ml-0" : "-ml-28 sm:-ml-16 md:-ml-10 lg:ml-0"
              } ${i === features.length - 1 ? "mr-10 lg:mr-0" : ""} ${FAN_ROTATE[i]} ${FAN_LIFT[i]} lg:rotate-0 lg:translate-y-0`}
              style={{
                background: "color-mix(in srgb, var(--color-card) 40%, transparent)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                zIndex: i === activeIndex ? 20 : i,
                transition: "z-index 0s, transform 300ms ease-out",
              }}
            >
              <p className="font-bold text-2xl">{f.title}</p>
              <p className="text-ink-soft mt-3 leading-relaxed">{f.visible}</p>
              <Expandable trigger="read more">
                <p>{f.expanded}</p>
              </Expandable>
              <FeaturePreview title={f.title} />
            </div>
          ))}
        </HorizontalScroller>
      </RevealItem>
    </Section>
  );
}
