"use client";

import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { HorizontalWheelScroll } from "@/components/HorizontalWheelScroll";

const NAV_ITEMS = [
  { label: "Midi", href: "#cover" },
  { label: "Demo", href: "#demo" },
  { label: "Problem", href: "#problem" },
  { label: "Story", href: "#story" },
  { label: "Solution", href: "#solution" },
  { label: "Social Mission", href: "#mission" },
  { label: "Audience", href: "#personas" },
  { label: "User Stories", href: "#stories" },
  { label: "User Flow", href: "#user-flow" },
  { label: "Design System", href: "#design-system" },
  { label: "Features", href: "#features" },
  { label: "Logo", href: "#logo" },
  { label: "Results", href: "#ui-results" },
  { label: "Reflection", href: "#reflection" },
];

export function SectionNavStrip() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [pinned, setPinned] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);

  // Once the sentinel (sitting right above the bar, in its natural
  // in-flow spot) scrolls above the viewport, the bar switches from
  // static-in-flow to position:fixed so it stays stuck for the rest
  // of the page instead of scrolling away with its short parent.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPinned(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Reserve layout space equal to the bar's collapsed height while pinned,
  // so switching to fixed positioning doesn't jump the rest of the page.
  useLayoutEffect(() => {
    if (pinned && navRef.current) {
      setSpacerHeight(navRef.current.offsetHeight);
    }
  }, [pinned]);

  const expanded = !pinned;

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      {pinned && <div style={{ height: spacerHeight }} aria-hidden="true" />}
      <nav
        ref={navRef}
        className={`${
          pinned ? "fixed top-0 left-0 right-0 px-3 md:px-6" : "relative"
        } z-40 transition-colors duration-300`}
        style={{
          background: pinned ? "color-mix(in srgb, var(--color-bg) 90%, transparent)" : "transparent",
          backdropFilter: pinned ? "blur(12px)" : "none",
          WebkitBackdropFilter: pinned ? "blur(12px)" : "none",
          borderBottom: pinned ? "1px solid var(--color-hairline)" : "1px solid transparent",
        }}
      >
        <HorizontalWheelScroll
          lockScroll
          className={`no-scrollbar flex items-center justify-center gap-x-6 gap-y-2 md:gap-x-10 overflow-x-auto transition-[padding,opacity] duration-300 ease-out ${
            expanded ? "py-6 opacity-100" : "py-2 opacity-70"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`shrink-0 font-bold uppercase tracking-wide text-ink hover:text-coral transition-colors duration-300 ${
                expanded ? "text-sm md:text-lg" : "text-[10px] md:text-xs"
              }`}
            >
              {item.label}
            </a>
          ))}
        </HorizontalWheelScroll>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 z-10"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 z-10"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
        />
      </nav>
    </>
  );
}
