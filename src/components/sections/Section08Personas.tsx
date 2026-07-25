"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";
import { HorizontalScroller } from "@/components/HorizontalScroller";

const personas = [
  {
    name: "Nino, 19",
    role: "The Newcomer",
    bio: "Moved to Tbilisi from Kutaisi to study architecture. Knows nobody yet. Spends most time between uni and home. Saves places on Instagram, never actually goes.",
    usage:
      "Solo + Low Budget + Cozy → finds quiet bookshop cafe 800m from her dorm she never knew existed.",
  },
  {
    name: "Luka, 22",
    role: "The Social Planner",
    bio: "Third year student, knows the city okay but always ends up at the same places. Planning a first date and stressed about it.",
    usage:
      "Opens AI Chat, types the situation → gets a full plan: walking route, cafe, what to order, florist on the way.",
  },
  {
    name: "Marco, 31",
    role: "The Passing Traveler",
    bio: "Italian tourist, 4 days in Tbilisi. Wants local authentic experiences, not tourist traps. Doesn't speak Georgian.",
    usage:
      "Scenic + Walking + Free → finds Dedaena Park at golden hour from a real local's post.",
  },
];

// Playing-card fan lift below the lg breakpoint — center card sits
// highest, the two side cards drop slightly. No tilt: all horizontal.
const FAN_ROTATE = ["rotate-0", "rotate-0", "rotate-0"];
const FAN_LIFT = ["translate-y-2", "translate-y-0", "translate-y-2"];

export function Section08Personas() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      id="personas"
      index="08"
      title="Target Audience + Personas"
      className="min-h-[760px] py-16 md:py-32"
    >
      <div className="max-w-3xl">
        <RevealItem>
          <h2 className="font-bold text-4xl md:text-6xl leading-[0.95]">
            Built for anyone who&apos;s ever said
            <br />
            <span className="text-coral">
              &quot;I don&apos;t know, where do you want to go?&quot;
            </span>
          </h2>
        </RevealItem>
        <RevealItem>
          <Expandable trigger="meet the users">
            <p>
              Primary audience: Students — newly arrived, unfamiliar with the
              city, limited budget, looking for connection and real
              experiences.
            </p>
            <p>
              Secondary audience: Tourists wanting authentic local experiences
              beyond the tourist trail. Urban explorers and roamers who treat
              their city as a place to constantly rediscover.
            </p>
          </Expandable>
        </RevealItem>
      </div>

      <RevealItem className="mt-14">
        <HorizontalScroller
          onActiveChange={setActiveIndex}
          controlsOnlyOnMobile
          scrollerClassName="scroll-pl-10 scroll-pr-10"
        >
          {personas.map((p, i) => (
            <div
              key={p.name}
              className={`snap-card shrink-0 w-[78vw] sm:w-[320px] lg:w-[380px] rounded-2xl border border-hairline p-7 flex flex-col transition-transform duration-300 ${
                i === 0 ? "ml-10 lg:ml-0" : "-ml-28 sm:-ml-16 md:-ml-10 lg:ml-0"
              } ${i === personas.length - 1 ? "mr-10 lg:mr-0" : ""} ${FAN_ROTATE[i]} ${FAN_LIFT[i]} lg:rotate-0 lg:translate-y-0`}
              style={{
                background: "color-mix(in srgb, var(--color-card) 40%, transparent)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                zIndex: i === activeIndex ? 20 : i,
                transition: "z-index 0s, transform 300ms ease-out",
              }}
            >
              <p className="font-bold text-3xl">{p.name}</p>
              <p className="text-coral text-sm mt-1 tracking-wide uppercase">
                {p.role}
              </p>
              <p className="text-ink-soft mt-4 leading-relaxed">{p.bio}</p>
              <div className="mt-6 pt-5 border-t border-hairline">
                <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-2">
                  How she/he uses Midi
                </p>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {p.usage}
                </p>
              </div>
            </div>
          ))}
        </HorizontalScroller>
      </RevealItem>
    </Section>
  );
}
