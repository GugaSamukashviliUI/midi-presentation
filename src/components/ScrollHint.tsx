"use client";

import { useEffect, useState } from "react";

export function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setVisible(false);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-ink-muted text-xs tracking-[0.2em] uppercase animate-scroll-hint">
      <span aria-hidden="true">↓</span>
      <span>scroll</span>
    </div>
  );
}
