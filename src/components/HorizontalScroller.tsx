"use client";

import { Children, useEffect, useRef, useState } from "react";

export function HorizontalScroller({
  children,
  showArrows = true,
  onActiveChange,
  controlsOnlyOnMobile = false,
  scrollerClassName,
  hideControls = false,
  wheelHijack = false,
  snap = true,
}: {
  children: React.ReactNode;
  showArrows?: boolean;
  onActiveChange?: (index: number) => void;
  /** Skip the overflow check and only ever show arrows/dots below the sm breakpoint. */
  controlsOnlyOnMobile?: boolean;
  /** Extra classes merged onto the scroll track — e.g. more edge/vertical padding for tilted cards. */
  scrollerClassName?: string;
  /** Never render the arrows/dots row, regardless of overflow. */
  hideControls?: boolean;
  /** Convert vertical wheel scroll into horizontal scroll while hovered, releasing to normal page scroll once a boundary is reached. */
  wheelHijack?: boolean;
  /** Scroll-snap each card into place. Set false for a free, continuous scroll. */
  snap?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [overflowing, setOverflowing] = useState(false);
  const count = Children.count(children);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      // Compare against each card's offsetLeft clamped to the actual
      // scrollable range. With heavily overlapping (negative-margin)
      // cards, a later card's natural offsetLeft can exceed the max
      // possible scrollLeft entirely — left unclamped, it would never
      // be "closest" and could never become active.
      const maxScroll = el.scrollWidth - el.clientWidth;
      const cards = Array.from(el.children) as HTMLElement[];
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((c, i) => {
        const target = Math.min(c.offsetLeft, maxScroll);
        const dist = Math.abs(target - el.scrollLeft);
        // <= (not <): when two cards share the same clamped target (heavy
        // overlap can compress several cards onto the same scroll-end
        // position), prefer the later one — the one actually scrolled to.
        if (dist <= minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
      onActiveChange?.(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onActiveChange]);

  // Convert vertical wheel scroll into horizontal scroll while the cursor
  // is over the strip, releasing to normal page scroll once a boundary
  // (start or end) is reached.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !wheelHijack) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;
      if ((goingDown && !atEnd) || (goingUp && !atStart)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [wheelHijack]);

  // Hide the arrows/dots entirely once every card already fits on screen —
  // there's nothing left to scroll to.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const resizeObserver = new ResizeObserver(() => {
      setOverflowing(el.scrollWidth > el.clientWidth + 1);
    });
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div>
      <div
        ref={scrollerRef}
        className={`flex gap-6 overflow-x-auto no-scrollbar pt-6 pb-12 -mx-6 px-6 md:-mx-16 md:px-16 ${
          snap ? "snap-x-strip" : ""
        } ${scrollerClassName ?? ""}`}
      >
        {children}
      </div>
      {!hideControls && (controlsOnlyOnMobile || overflowing) && (
        <div
          className={`flex items-center justify-center gap-5 mt-8 ${
            controlsOnlyOnMobile ? "sm:hidden" : ""
          }`}
        >
          {showArrows && (
            <button
              onClick={() => scrollToIndex(Math.max(0, active - 1))}
              aria-label="Previous card"
              disabled={active === 0}
              className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-soft cursor-pointer transition-colors hover:border-coral hover:text-coral disabled:opacity-30 disabled:cursor-default disabled:hover:border-hairline disabled:hover:text-ink-soft"
            >
              ‹
            </button>
          )}
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to card ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === active ? "w-6 bg-coral" : "w-2 bg-ink-faint"
                }`}
              />
            ))}
          </div>
          {showArrows && (
            <button
              onClick={() => scrollToIndex(Math.min(count - 1, active + 1))}
              aria-label="Next card"
              disabled={active === count - 1}
              className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-soft cursor-pointer transition-colors hover:border-coral hover:text-coral disabled:opacity-30 disabled:cursor-default disabled:hover:border-hairline disabled:hover:text-ink-soft"
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
}
