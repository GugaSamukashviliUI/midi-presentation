"use client";

import { useRef, useState } from "react";
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

function FeaturePreview({ title }: { title: string }) {
  if (title === "Smart Filter") return <FilterOverlayPreview />;
  if (title === "Informative Posts") return <PostOverlayPreview />;
  if (title === "Date Flow AI Chat") return <AIChatPreview />;
  return (
    <Placeholder label="App screenshot" note="midi-app-nine.vercel.app" className="mt-6" aspect="aspect-[4/5]" />
  );
}

const MOBILE_STACK_HEIGHT = 700;
const CARD_W = 368;
// Elements that should handle their own drag/tap instead of paging the stack
// (sliders, buttons, links, inputs, and anything with its own horizontal
// scroller like the chat suggestion rows).
const INTERACTIVE_SELECTOR = 'input, button, a, textarea, select, [role="slider"], .overflow-x-auto, .overflow-y-auto';

export function Section12Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);

  const handleStackPointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(INTERACTIVE_SELECTOR)) {
      swipeStart.current = null;
      return;
    }
    swipeStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleStackPointerUp = (e: React.PointerEvent) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        setActiveIndex((i) => Math.min(features.length - 1, i + 1));
      } else {
        setActiveIndex((i) => Math.max(0, i - 1));
      }
    }
  };

  const scrollDesktopTo = (i: number) => {
    const el = desktopTrackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    const target = card.offsetLeft - el.clientWidth / 2 + card.clientWidth / 2;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const handleDesktopScroll = () => {
    const el = desktopTrackRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const cardCenter = c.offsetLeft + c.clientWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  return (
    <Section
      id="features"
      index="12"
      title="Key Features"
      className="min-h-[980px] py-16 md:py-32 overflow-x-hidden"
    >
      <RevealItem>
        <h2 className="font-bold text-4xl md:text-6xl leading-[0.95] max-w-2xl">
          Three features that change how you discover.
        </h2>
      </RevealItem>

      {/* Desktop / tablet: real horizontal scroll, snaps the active card to
          center. Padding on both sides equals half a card width so the
          first and last card can also reach dead center. Vertical room is
          generous so the active card's scale-up never clips. */}
      <RevealItem className="mt-14 hidden sm:block" style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
        <div
          ref={desktopTrackRef}
          onScroll={handleDesktopScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar py-14"
          style={{ paddingLeft: `calc(50% - ${CARD_W / 2}px)`, paddingRight: `calc(50% - ${CARD_W / 2}px)` }}
        >
          {features.map((f, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={f.title}
                onClick={() => scrollDesktopTo(i)}
                className="rounded-2xl border border-hairline p-7 flex flex-col cursor-pointer transition-[transform,filter,opacity] duration-500 ease-out shrink-0"
                style={{
                  width: CARD_W,
                  scrollSnapAlign: "center",
                  background: "color-mix(in srgb, var(--color-card) 55%, transparent)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  zIndex: isActive ? 20 : 1,
                  transform: isActive ? "scale(1.06)" : "scale(0.92)",
                  opacity: isActive ? 1 : 0.6,
                  filter: isActive ? "none" : "blur(2px)",
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
                <FeaturePreview title={f.title} />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {features.map((f, i) => (
            <button
              key={f.title}
              onClick={() => scrollDesktopTo(i)}
              aria-label={`Show ${f.title}`}
              className="h-2 rounded-full transition-all cursor-pointer"
              style={{
                width: i === activeIndex ? 24 : 8,
                background: i === activeIndex ? "var(--color-coral)" : "var(--color-ink-faint)",
              }}
            />
          ))}
        </div>
      </RevealItem>

      {/* Mobile: zero-gap stack. Swipe anywhere on the section (except controls
          like sliders/buttons/inputs, which keep their own touch behavior)
          to switch which card is on top, or tap a dot. */}
      <RevealItem className="mt-14 sm:hidden">
        <div
          className="relative"
          style={{ height: MOBILE_STACK_HEIGHT, touchAction: "pan-y" }}
          onPointerDown={handleStackPointerDown}
          onPointerUp={handleStackPointerUp}
        >
          {features.map((f, i) => {
            const isActive = i === activeIndex;
            const rotate = (i - activeIndex) * 6;
            return (
              <div
                key={f.title}
                className="absolute inset-x-0 top-0 rounded-2xl border border-hairline flex flex-col transition-[transform,filter,opacity] duration-500 ease-out"
                style={{
                  background: "color-mix(in srgb, var(--color-card) 55%, transparent)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  zIndex: isActive ? 10 : 10 - Math.abs(i - activeIndex),
                  transform: isActive ? "scale(1) rotate(0deg)" : `scale(0.94) rotate(${rotate}deg)`,
                  opacity: isActive ? 1 : 0.75,
                  filter: isActive ? "none" : "blur(1px)",
                  pointerEvents: isActive ? "auto" : "none",
                  boxShadow: isActive
                    ? "0 32px 56px -16px rgba(0,0,0,0.4)"
                    : "0 14px 28px -12px rgba(0,0,0,0.25)",
                }}
              >
                <div className="p-7 pb-0">
                  <p className="font-bold text-2xl">{f.title}</p>
                  <p className="text-ink-soft mt-3 leading-relaxed">{f.visible}</p>
                </div>
                <div className="px-7 pb-7">
                  <Expandable trigger="read more">
                    <p>{f.expanded}</p>
                  </Expandable>
                  <FeaturePreview title={f.title} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {features.map((f, i) => (
            <button
              key={f.title}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show ${f.title}`}
              className="h-2 rounded-full transition-all cursor-pointer"
              style={{
                width: i === activeIndex ? 24 : 8,
                background: i === activeIndex ? "var(--color-coral)" : "var(--color-ink-faint)",
              }}
            />
          ))}
        </div>
      </RevealItem>
    </Section>
  );
}
