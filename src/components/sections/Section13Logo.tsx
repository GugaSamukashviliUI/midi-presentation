"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";

const EVOLUTION = [
  { src: "/logo-showcase/not-logo-yet.jpg", label: "Not logo yet.", mode: "photo" as const },
  { src: "/logo-showcase/almost-logo.jpg", label: "Almost logo.", mode: "photo" as const },
  { src: "/logo-showcase/logo-final.svg", label: "Logo.", mode: "mark" as const },
];

// Real sketchbook photos from the logo design process.
const VARIATIONS = [
  { src: "/logo-showcase/logo-variation-1.jpg", label: "Variation 1", rotate: -9, x: -108, y: -132, needsRotation: true },
  { src: "/logo-showcase/logo-variation-2.jpg", label: "Variation 2", rotate: 4, x: 0, y: -168, needsRotation: true },
  { src: "/logo-showcase/logo-variation-3.jpg", label: "Variation 3", rotate: 10, x: 108, y: -132, needsRotation: false },
];

// The two sketchbook photos above were shot with the notebook turned on
// its side — this rotates just those two 90° clockwise in the lightbox
// so the sketches read upright, using swapped pre-rotation dimensions so
// the rotated content fills the box with no cropping or letterboxing.
const LIGHTBOX_H = "min(78vh, 900px)";

export function Section13Logo() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((i) => (i === null ? i : (i + 1) % VARIATIONS.length));
      if (e.key === "ArrowLeft") setSelected((i) => (i === null ? i : (i - 1 + VARIATIONS.length) % VARIATIONS.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) {
      touchStart.current = null;
      return;
    }
    touchStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    if ((e.target as HTMLElement).closest("button")) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        setSelected((i) => (i === null ? i : (i + 1) % VARIATIONS.length));
      } else {
        setSelected((i) => (i === null ? i : (i - 1 + VARIATIONS.length) % VARIATIONS.length));
      }
    } else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      setSelected(null);
    }
  };

  return (
    <Section
      id="logo"
      index="13"
      title="Logo"
      className="min-h-[680px] py-16 md:py-32"
    >
      <RevealItem>
        <h2 className="font-bold text-4xl md:text-6xl leading-[0.95] max-w-2xl">
          From pencil sketches to a mark that sticks.
        </h2>
      </RevealItem>

      <RevealItem className="mt-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {EVOLUTION.map((step, i) => (
            <div key={step.src} className="flex items-center gap-4 md:gap-6">
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`relative w-[220px] md:w-[240px] aspect-[3/2] rounded-2xl overflow-hidden border border-hairline ${
                    step.mode === "mark" ? "bg-card flex items-center justify-center p-8" : ""
                  }`}
                >
                  <Image
                    src={step.src}
                    alt={step.label}
                    fill
                    sizes="240px"
                    unoptimized={step.mode === "mark"}
                    className={step.mode === "mark" ? "object-contain" : "object-cover"}
                  />
                </div>
                <p className="text-sm text-ink-soft">{step.label}</p>
              </div>
              {i < EVOLUTION.length - 1 && (
                <span className="text-2xl text-ink-faint rotate-90 md:rotate-0">→</span>
              )}
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem className="mt-24 md:mt-28 flex flex-col items-center">
        <div className="relative" style={{ width: 260, height: 320 }}>
          {VARIATIONS.map((v, i) => (
            <button
              key={v.src}
              onClick={() => open && setSelected(i)}
              aria-label={`Open ${v.label} full size`}
              tabIndex={open ? 0 : -1}
              className="absolute left-1/2 top-[64px] rounded-xl overflow-hidden border border-white/70 bg-white shadow-2xl transition-all ease-out cursor-pointer hover:scale-[1.06]"
              style={{
                width: 128,
                aspectRatio: "4 / 3",
                marginLeft: -64,
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1.4, 0.36, 1)",
                zIndex: open ? 20 : 1,
                opacity: open ? 1 : 0,
                pointerEvents: open ? "auto" : "none",
                transform: open
                  ? `translate(${v.x}px, ${v.y}px) rotate(${v.rotate}deg) scale(1)`
                  : "translate(0px, 24px) rotate(0deg) scale(0.55)",
              }}
            >
              <div className="relative w-full h-full">
                <Image src={v.src} alt={v.label} fill sizes="128px" className="object-cover" />
              </div>
            </button>
          ))}

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close the folder" : "Open the folder to see logo sketches"}
            className="absolute inset-0 cursor-pointer"
          >
            {/* Folder back tab */}
            <div
              className="absolute left-0 top-[54px] w-[112px] h-[46px] rounded-t-2xl"
              style={{
                background: "linear-gradient(135deg, #7ea2f7 0%, #3f66dd 100%)",
                clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)",
                zIndex: 2,
              }}
            />
            {/* Folder back body */}
            <div
              className="absolute inset-x-0 top-[84px] bottom-[18px] rounded-2xl"
              style={{
                background: "linear-gradient(160deg, #7ea2f7 0%, #4d76e8 100%)",
                zIndex: 3,
              }}
            />
            {/* Folder front — glass morphism */}
            <div
              className="absolute inset-x-0 top-[108px] bottom-0 rounded-2xl border border-white/50 transition-transform duration-500 ease-out"
              style={{
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.55) 0%, rgba(150,180,255,0.22) 100%)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow:
                  "0 24px 48px -16px rgba(60,100,230,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
                zIndex: 10,
                transform: open ? "translateY(6px) scale(1.02)" : "translateY(0) scale(1)",
              }}
            />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="text-sm text-ink-soft">
            {open ? "Tap a sketch to see it full size." : "Tap the folder — it's full of sketches and early tries."}
          </p>
          {open && (
            <div className="flex gap-8 mt-1">
              {VARIATIONS.map((v) => (
                <span key={v.src} className="text-[11px] text-ink-faint uppercase tracking-wide">
                  {v.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </RevealItem>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 p-6"
          style={{ background: "rgba(0,0,0,0.85)", touchAction: "none" }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white cursor-pointer border border-white/30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected((i) => (i === null ? i : (i - 1 + VARIATIONS.length) % VARIATIONS.length));
            }}
            aria-label="Previous sketch"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white/80 hover:text-white cursor-pointer border border-white/30 bg-white/5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected((i) => (i === null ? i : (i + 1) % VARIATIONS.length));
            }}
            aria-label="Next sketch"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white/80 hover:text-white cursor-pointer border border-white/30 bg-white/5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {VARIATIONS[selected].needsRotation ? (
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
              style={{ height: LIGHTBOX_H, width: `calc(${LIGHTBOX_H} * 3 / 4)`, maxWidth: "92vw" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: LIGHTBOX_H,
                  height: `calc(${LIGHTBOX_H} * 3 / 4)`,
                  transform: "translate(-50%, -50%) rotate(90deg)",
                }}
              >
                <Image
                  src={VARIATIONS[selected].src}
                  alt={VARIATIONS[selected].label}
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </div>
            </div>
          ) : (
            <div
              className="rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={VARIATIONS[selected].src}
                alt={VARIATIONS[selected].label}
                width={1200}
                height={900}
                sizes="92vw"
                className="block object-contain"
                style={{ height: LIGHTBOX_H, width: "auto", maxWidth: "92vw" }}
              />
            </div>
          )}

          <div className="flex items-center gap-3">
            {VARIATIONS.map((v, i) => (
              <button
                key={v.src}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(i);
                }}
                aria-label={`Show ${v.label}`}
                aria-current={i === selected}
                className="h-2 rounded-full transition-all cursor-pointer"
                style={{
                  width: i === selected ? 24 : 8,
                  background: i === selected ? "var(--color-coral)" : "rgba(255,255,255,0.35)",
                }}
              />
            ))}
          </div>
          <p className="text-white/70 text-sm uppercase tracking-wide">{VARIATIONS[selected].label}</p>
        </div>
      )}
    </Section>
  );
}
