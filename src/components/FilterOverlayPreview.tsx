"use client";

import { useState } from "react";
import { SegmentedTabs, AccessButtons } from "@/components/DesignSystemInteractive";

// Real filter overlay from the app's #map-filter-overlay — Duo/Solo/Group,
// distance/city toggle, access, budget, points of interest, mood chips,
// and the AI "describe the vibe" generator.

const MOODS = ["Cozy", "Chill", "Romantic", "Scenic", "Low Effort", "Active", "Social"];

export function FilterOverlayPreview() {
  const [km, setKm] = useState(24);
  const [byCity, setByCity] = useState(false);
  const [budget, setBudget] = useState("");
  const [activeMoods, setActiveMoods] = useState<Set<string>>(new Set());
  const [vibeText, setVibeText] = useState("");
  const [generatedChips, setGeneratedChips] = useState<string[]>([]);

  const toggleMood = (m: string) => {
    setActiveMoods((prev) => {
      const next = new Set(prev);
      if (next.has(m)) next.delete(m);
      else next.add(m);
      return next;
    });
  };

  const generateTokens = () => {
    if (!vibeText.trim()) return;
    const words = vibeText
      .split(/[,.]+/)
      .map((w) => w.trim())
      .filter(Boolean)
      .slice(0, 5);
    setGeneratedChips(words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)));
  };

  return (
    <div
      className="mt-6 w-full rounded-2xl border border-hairline p-5 flex flex-col gap-5 max-h-[440px] overflow-y-auto"
      style={{ background: "var(--app-bg)" }}
    >
      <SegmentedTabs />

      <div>
        <div className="flex items-center justify-between text-xs font-semibold" style={{ color: "var(--app-ink)" }}>
          <span>{byCity ? "Search Location" : "Min-Max Distance"}</span>
          <span className="font-normal" style={{ color: "var(--app-ink-muted)" }}>
            {km} km.
          </span>
        </div>
        <div className="flex items-start justify-between gap-3 mt-2.5">
          {byCity ? (
            <input
              key="city-input"
              type="text"
              placeholder="e.g. Tbilisi, Georgia"
              className="app-input flex-1 min-w-0 rounded-lg px-3 py-2 text-xs"
            />
          ) : (
            <input
              key="distance-range"
              type="range"
              min={0}
              max={100}
              value={km}
              onChange={(e) => setKm(Number(e.target.value))}
              className="ds-range flex-1 min-w-0"
              aria-label="Distance"
            />
          )}
          <button
            onClick={() => setByCity((v) => !v)}
            aria-pressed={byCity}
            aria-label="Toggle search by city"
            className="shrink-0 flex flex-col items-end gap-1 cursor-pointer"
          >
            <span
              className="w-9 h-5 rounded-full relative transition-colors"
              style={{ background: byCity ? "var(--app-red)" : "var(--app-track-off)" }}
            >
              <span
                className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all"
                style={{ left: byCity ? "18px" : "2px" }}
              />
            </span>
            <span className="text-[10px]" style={{ color: "var(--app-ink-muted)" }}>
              By City
            </span>
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--app-ink)" }}>
            Access
          </p>
          <AccessButtons />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--app-ink)" }}>
            Budget
          </p>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="$-"
            className="app-input w-full rounded-lg px-3 py-2 text-sm font-semibold"
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold mb-2" style={{ color: "var(--app-ink)" }}>
          Points Of Interest
        </p>
        <button
          className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left cursor-pointer"
          style={{ background: "var(--app-surface-2)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0" style={{ color: "var(--app-ink-muted)" }}>
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="flex-1 min-w-0">
            <span className="block text-xs font-semibold" style={{ color: "var(--app-ink)" }}>
              What Are You Looking For?
            </span>
            <span className="block text-[11px]" style={{ color: "var(--app-ink-muted)" }}>
              gyms, cafes, museums...
            </span>
          </span>
          <span style={{ color: "var(--app-ink-muted)" }}>›</span>
        </button>
      </div>

      <div>
        <p className="text-xs font-semibold mb-2" style={{ color: "var(--app-ink)" }}>
          Choose The Mood
        </p>
        <div className="flex flex-wrap gap-2">
          {MOODS.map((m) => {
            const active = activeMoods.has(m);
            return (
              <button
                key={m}
                onClick={() => toggleMood(m)}
                className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer"
                style={{
                  background: active ? "var(--app-red)" : "var(--app-surface-2)",
                  color: active ? "white" : "var(--app-ink-secondary)",
                }}
              >
                {m}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 text-[10px] font-semibold" style={{ color: "var(--app-ink-muted)" }}>
        <span className="flex-1 h-px" style={{ background: "var(--app-border)" }} />
        OR
        <span className="flex-1 h-px" style={{ background: "var(--app-border)" }} />
      </div>

      <div className="rounded-xl p-3" style={{ background: "var(--app-surface-2)" }}>
        <p className="text-xs font-semibold flex items-center gap-2 mb-2" style={{ color: "var(--app-ink)" }}>
          Describe The Vibe
          <span
            className="text-[9px] px-1.5 py-0.5 rounded font-bold"
            style={{ background: "var(--app-red)", color: "white" }}
          >
            AI POWERED
          </span>
        </p>
        <textarea
          value={vibeText}
          onChange={(e) => setVibeText(e.target.value)}
          placeholder='"Something calm, outside, sunset, not too expensive"'
          rows={2}
          className="app-input w-full rounded-lg px-3 py-2 text-xs resize-none"
        />
        <button
          onClick={generateTokens}
          className="mt-2 w-full rounded-lg py-2 text-xs font-bold text-white cursor-pointer"
          style={{ background: "var(--app-red)" }}
        >
          Generate Mood Tokens
        </button>
        {generatedChips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {generatedChips.map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="rounded-full px-2 py-1 text-[10px] font-medium"
                style={{ background: "var(--app-red)", color: "white" }}
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      <button
        className="rounded-xl py-3 text-sm font-bold text-white cursor-pointer"
        style={{ background: "var(--app-red)" }}
      >
        Apply Filters
      </button>
    </div>
  );
}
