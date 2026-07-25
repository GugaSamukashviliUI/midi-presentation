import Image from "next/image";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { HorizontalScroller } from "@/components/HorizontalScroller";

const stories = [
  {
    name: "Giorgi, 20",
    role: "The Introvert's Afternoon",
    photo: "/stories/giorgi.png",
    narrative:
      "Solo + Peaceful + Free → finds a hidden riverside bench with a view of the old city. He had walked past it dozens of times without knowing it was there. He goes. Sits for two hours. Takes one photo. Posts it. It gets saved by 14 people. Someone comments “I found this because of your post.”",
    quote: "First time since arriving I felt like I belonged somewhere in this city.",
  },
  {
    name: "Tamara, 21",
    role: "The Broke Student Date",
    photo: "/stories/tamara.png",
    narrative:
      "Duo + Romantic + Free → Mtatsminda park at sunset, a specific bench with a city view, a cheap churchkhela stall nearby rated highly by other users. They spend three hours there. It costs less than 10 GEL total.",
    quote: "You don't need money for a good time, just the right app.",
  },
  {
    name: "Marco, 31",
    role: "The Tourist Who Went Local",
    photo: "/stories/marco.png",
    narrative:
      "Scenic + Solo → Fabrika, Narikala at dusk, a rooftop bar in the old town with no English signage but 40 Midi posts saying it's worth finding. Four days feeling like a local. On his last night he posts his first ever travel post.",
    quote: "4 days in Tbilisi. 0 tourist traps. Midi.",
  },
];

export function Section09Stories() {
  return (
    <Section
      id="stories"
      index="09"
      title="User Stories"
      className="min-h-[680px] py-16 md:py-32"
    >
      <RevealItem>
        <h2 className="font-bold text-4xl md:text-6xl leading-[0.95] max-w-2xl">
          Real problems. Real people. Real places found.
        </h2>
      </RevealItem>

      <RevealItem className="mt-14">
        <HorizontalScroller hideControls>
          {stories.map((s) => (
            <div
              key={s.name}
              className="snap-card shrink-0 w-[85vw] sm:w-[420px] rounded-2xl bg-card border border-hairline overflow-hidden flex flex-col"
            >
              <div className="relative h-40 bg-veil border-b border-hairline">
                <Image
                  src={s.photo}
                  alt={`${s.name} — ${s.role}`}
                  fill
                  sizes="(min-width: 640px) 420px, 85vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="font-bold text-2xl">{s.name}</p>
                <p className="text-coral text-sm mt-1 tracking-wide uppercase">
                  {s.role}
                </p>
                <p className="text-ink-soft text-sm mt-4 leading-relaxed flex-1">
                  {s.narrative}
                </p>
                <blockquote className="mt-5 pt-5 border-t border-hairline text-ink text-lg font-medium leading-snug">
                  &quot;{s.quote}&quot;
                </blockquote>
              </div>
            </div>
          ))}
        </HorizontalScroller>
      </RevealItem>
    </Section>
  );
}
