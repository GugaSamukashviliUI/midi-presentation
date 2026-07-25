"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";
import { Placeholder } from "@/components/Placeholder";
import { FilterOverlayPreview } from "@/components/FilterOverlayPreview";
import { PostOverlayPreview } from "@/components/PostOverlayPreview";
import { AIChatPreview } from "@/components/AIChatPreview";

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

      <RevealItem
        className="mt-14"
        style={{ perspective: "1600px", width: "100vw", marginLeft: "calc(50% - 50vw)" }}
      >
        <div className="flex flex-nowrap justify-center overflow-x-hidden px-10 py-4 -my-4">
          {features.map((f, i) => {
            const isActive = i === activeIndex;
            const rotate = (i - activeIndex) * 3;
            return (
              <div
                key={f.title}
                onClick={() => setActiveIndex(i)}
                className={`w-[368px] shrink-0 rounded-2xl border border-hairline p-7 flex flex-col cursor-pointer transition-[transform,filter,opacity] duration-500 ease-out ${
                  i === 0 ? "" : "-ml-44 sm:-ml-36 md:-ml-16 lg:ml-6"
                }`}
                style={{
                  background: "color-mix(in srgb, var(--color-card) 55%, transparent)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  zIndex: isActive ? 20 : i,
                  transform: isActive
                    ? "scale(1.04) rotate(0deg)"
                    : `scale(0.94) rotate(${rotate}deg)`,
                  opacity: isActive ? 1 : 0.7,
                  filter: isActive ? "none" : "blur(1.5px)",
                  boxShadow: isActive
                    ? "0 32px 56px -16px rgba(0,0,0,0.4)"
                    : "0 14px 28px -12px rgba(0,0,0,0.25)",
                }}
              >
              <p className="font-bold text-2xl">{f.title}</p>
              <p className="text-ink-soft mt-3 leading-relaxed">{f.visible}</p>
              <Expandable trigger="read more">
                <p>{f.expanded}</p>
              </Expandable>
              {f.title === "Smart Filter" ? (
                <FilterOverlayPreview />
              ) : f.title === "Informative Posts" ? (
                <PostOverlayPreview />
              ) : f.title === "Date Flow AI Chat" ? (
                <AIChatPreview />
              ) : (
                <Placeholder
                  label="App screenshot"
                  note="midi-app-nine.vercel.app"
                  className="mt-6"
                  aspect="aspect-[4/5]"
                />
              )}
              </div>
            );
          })}
        </div>
      </RevealItem>
    </Section>
  );
}
