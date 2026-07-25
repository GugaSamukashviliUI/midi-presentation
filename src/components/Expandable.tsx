"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Expandable({
  trigger,
  closeLabel = "close",
  children,
}: {
  trigger: string;
  closeLabel?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (open && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
    setOpen((o) => !o);
  };

  const toggleSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = contentRef.current?.textContent ?? "";
    if (!text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={toggleOpen}
          aria-expanded={open}
          className="inline-flex items-center gap-2 text-coral-light text-sm font-medium tracking-wide cursor-pointer transition-opacity hover:opacity-80"
        >
          <span
            className="inline-flex w-4 h-4 items-center justify-center text-base leading-none transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
          {open ? closeLabel : trigger}
        </button>
        {open && (
          <button
            onClick={toggleSpeech}
            aria-label={speaking ? "Stop reading this aloud" : "Read this aloud"}
            className="w-7 h-7 shrink-0 rounded-full bg-coral text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            {speaking ? <Waveform /> : <SpeakerIcon />}
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div
              ref={contentRef}
              className="mt-4 rounded-2xl bg-card p-6 md:p-8 text-ink-soft space-y-4 text-base leading-relaxed"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SpeakerIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Waveform() {
  const bars = [3, 7, 11, 7, 3];
  return (
    <span className="flex items-end gap-[2px] h-3" aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[2px] bg-white rounded-full animate-tts-bar"
          style={{
            height: h,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </span>
  );
}