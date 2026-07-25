"use client";

import { useEffect, useRef } from "react";

export function HorizontalWheelScroll({
  children,
  className,
  lockScroll = false,
}: {
  children: React.ReactNode;
  className?: string;
  /** When true, wheel scroll always stays horizontal and never releases to page scroll, even at the boundaries. */
  lockScroll?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      if (lockScroll) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        return;
      }
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
  }, [lockScroll]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
