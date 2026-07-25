"use client";

import { useMemo, useState } from "react";

type Zone = "auth" | "core";

type FlowNode = {
  id: string;
  label: string;
  level: number;
  track: number;
  zone: Zone;
  keyFeature?: boolean;
};

type FlowEdge = {
  from: string;
  to: string;
};

const NODES: FlowNode[] = [
  { id: "splash", label: "Splash", level: 0, track: 2, zone: "auth" },

  { id: "signup", label: "Sign Up", level: 1, track: 0.5, zone: "auth" },
  { id: "login", label: "Log In", level: 1, track: 3.5, zone: "auth" },

  { id: "password", label: "Password", level: 2, track: 0.5, zone: "auth" },
  { id: "phone", label: "Phone", level: 3, track: 0.5, zone: "auth" },
  { id: "otp", label: "OTP", level: 4, track: 0.5, zone: "auth" },

  { id: "profile-setup", label: "Profile Setup", level: 5, track: 1.5, zone: "auth" },
  { id: "onboarding", label: "Onboarding", level: 6, track: 1.5, zone: "auth" },
  { id: "q1", label: "Q1 Activity", level: 7, track: 1.5, zone: "auth" },
  { id: "q2", label: "Q2 Company", level: 8, track: 1.5, zone: "auth" },
  { id: "q3", label: "Q3 Vibe", level: 9, track: 1.5, zone: "auth" },

  { id: "home", label: "Home Feed", level: 10, track: 2.5, zone: "core" },

  { id: "explore", label: "Explore", level: 11, track: 0, zone: "core" },
  { id: "map", label: "Map", level: 11, track: 1.2, zone: "core" },
  { id: "chat", label: "Chat Inbox", level: 11, track: 2.4, zone: "core" },
  { id: "profile", label: "Profile", level: 11, track: 4, zone: "core" },
  { id: "create-post", label: "Create Post", level: 11, track: 5.2, zone: "core" },

  { id: "post-detail", label: "Post Detail", level: 12, track: 0, zone: "core" },
  {
    id: "filter",
    label: "Filter",
    level: 12,
    track: 0.7,
    zone: "core",
    keyFeature: true,
  },
  { id: "place-overlay", label: "Place Overlay", level: 12, track: 1.4, zone: "core" },
  { id: "edit-profile", label: "Edit Profile", level: 12, track: 3.6, zone: "core" },
  { id: "settings", label: "Settings", level: 12, track: 4.2, zone: "core" },
  { id: "legacy", label: "Legacy", level: 12, track: 4.8, zone: "core" },

  {
    id: "ai-chat",
    label: "AI Chat",
    level: 13,
    track: 0.9,
    zone: "core",
    keyFeature: true,
  },
  { id: "change-avatar", label: "Change Avatar", level: 13, track: 3.6, zone: "core" },
];

const EDGES: FlowEdge[] = [
  { from: "splash", to: "signup" },
  { from: "splash", to: "login" },

  { from: "signup", to: "password" },
  { from: "signup", to: "profile-setup" },
  { from: "password", to: "phone" },
  { from: "phone", to: "otp" },
  { from: "otp", to: "profile-setup" },

  { from: "profile-setup", to: "onboarding" },
  { from: "onboarding", to: "q1" },
  { from: "q1", to: "q2" },
  { from: "q2", to: "q3" },
  { from: "q3", to: "home" },
  { from: "login", to: "home" },

  { from: "home", to: "explore" },
  { from: "home", to: "map" },
  { from: "home", to: "chat" },
  { from: "home", to: "profile" },
  { from: "home", to: "create-post" },

  { from: "explore", to: "post-detail" },
  { from: "explore", to: "filter" },
  { from: "map", to: "filter" },
  { from: "map", to: "place-overlay" },
  { from: "profile", to: "edit-profile" },
  { from: "profile", to: "settings" },
  { from: "profile", to: "legacy" },

  { from: "post-detail", to: "ai-chat" },
  { from: "place-overlay", to: "ai-chat" },
  { from: "chat", to: "ai-chat" },
  { from: "edit-profile", to: "change-avatar" },
];

const COL_WIDTH = 144;
const ROW_HEIGHT = 84;
const BOX_W = 122;
const BOX_H = 38;
const PAD_X = 28;
const PAD_Y = 32;

export function FlowDiagram() {
  const [active, setActive] = useState<string | null>(null);

  const { parents, children, maxLevel, maxTrack } = useMemo(() => {
    const parents = new Map<string, string[]>();
    const children = new Map<string, string[]>();
    NODES.forEach((n) => {
      parents.set(n.id, []);
      children.set(n.id, []);
    });
    EDGES.forEach((e) => {
      parents.get(e.to)?.push(e.from);
      children.get(e.from)?.push(e.to);
    });
    const maxLevel = Math.max(...NODES.map((n) => n.level));
    const maxTrack = Math.max(...NODES.map((n) => n.track));
    return { parents, children, maxLevel, maxTrack };
  }, []);

  const highlighted = useMemo(() => {
    if (!active) return null;
    const set = new Set<string>([active]);

    const upStack = [active];
    while (upStack.length) {
      const cur = upStack.pop()!;
      for (const p of parents.get(cur) ?? []) {
        if (!set.has(p)) {
          set.add(p);
          upStack.push(p);
        }
      }
    }

    const downStack = [active];
    while (downStack.length) {
      const cur = downStack.pop()!;
      for (const c of children.get(cur) ?? []) {
        if (!set.has(c)) {
          set.add(c);
          downStack.push(c);
        }
      }
    }

    return set;
  }, [active, parents, children]);

  const nodePos = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    NODES.forEach((n) => {
      map.set(n.id, {
        x: PAD_X + n.level * COL_WIDTH,
        y: PAD_Y + n.track * ROW_HEIGHT,
      });
    });
    return map;
  }, []);

  const width = PAD_X * 2 + (maxLevel + 1) * COL_WIDTH;
  const height = PAD_Y * 2 + (maxTrack + 1) * ROW_HEIGHT;

  return (
    <div
      className="relative"
      style={{ width, height }}
      onMouseLeave={() => setActive(null)}
    >
      <svg
        width={width}
        height={height}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {EDGES.map((e) => {
          const from = nodePos.get(e.from)!;
          const to = nodePos.get(e.to)!;
          const x1 = from.x + BOX_W / 2;
          const y1 = from.y;
          const x2 = to.x - BOX_W / 2;
          const y2 = to.y;
          const dx = (x2 - x1) * 0.5;
          const isOn = highlighted
            ? highlighted.has(e.from) && highlighted.has(e.to)
            : false;
          const dim = highlighted ? !isOn : false;
          return (
            <path
              key={`${e.from}-${e.to}`}
              d={`M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`}
              fill="none"
              stroke={isOn ? "#E8635A" : "currentColor"}
              strokeWidth={isOn ? 2 : 1.5}
              strokeDasharray="1 6"
              strokeLinecap="round"
              className={
                isOn
                  ? "text-coral transition-all duration-300"
                  : "text-ink-faint transition-all duration-300"
              }
              style={{ opacity: dim ? 0.15 : 1 }}
            />
          );
        })}
      </svg>

      {NODES.map((n) => {
        const pos = nodePos.get(n.id)!;
        const isOn = highlighted ? highlighted.has(n.id) : false;
        const dim = highlighted ? !isOn : false;
        const isSource = active === n.id;
        return (
          <button
            key={n.id}
            onMouseEnter={() => setActive(n.id)}
            onFocus={() => setActive(n.id)}
            onClick={() => setActive((cur) => (cur === n.id ? null : n.id))}
            style={{
              left: pos.x,
              top: pos.y,
              width: BOX_W,
              height: BOX_H,
              transform: "translate(-50%, -50%)",
              opacity: dim ? (n.keyFeature ? 0.55 : 0.3) : 1,
            }}
            className={`absolute flex items-center justify-center gap-1 rounded-xl border px-2 text-center text-[11.5px] whitespace-nowrap cursor-pointer transition-all duration-300 ${
              isSource
                ? "border-coral bg-coral text-white font-medium shadow-[0_0_24px_-4px_rgba(232,99,90,0.7)]"
                : isOn
                  ? "border-coral text-ink bg-card"
                  : n.keyFeature
                    ? "border-coral bg-coral/15 text-ink font-medium shadow-[0_0_16px_-2px_rgba(232,99,90,0.8)] animate-pulse-glow"
                    : n.zone === "auth"
                      ? "border-teal/40 text-teal bg-card"
                      : "border-coral/30 text-coral-light bg-card"
            }`}
          >
            {n.keyFeature && !isSource && !isOn && (
              <span aria-hidden="true" className="text-coral">
                ★
              </span>
            )}
            {n.label}
          </button>
        );
      })}
    </div>
  );
}
