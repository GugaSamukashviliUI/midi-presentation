"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Real Date Flow AI Chat screen, sourced from the app's own
// #screen-ai-chat markup (header, pinned destination, message thread,
// suggestion cards) — messages scroll, the input bar stays fixed.

type ChatCard = { img: string; name: string; desc: string; meta: string };

const WALK_OPTIONS: ChatCard[] = [
  { img: "/chat/lakeside-path.jpg", name: "Lakeside Path", desc: "flat, quiet, easy to talk", meta: "10 mins" },
  { img: "/chat/tree-lined-trail.jpg", name: "Tree-Lined Trail", desc: "shaded, calm, less people", meta: "6 mins" },
  { img: "/chat/old-quarter.jpg", name: "Old Quarter", desc: "charming, scenic streets", meta: "8 mins" },
];

const FOOD_OPTIONS: ChatCard[] = [
  { img: "/chat/strawberry-cake.jpg", name: "Strawberry Cake", desc: "sweet, shareable", meta: "400 kcal" },
  { img: "/chat/yellow-tea.jpg", name: "Yellow Tea", desc: "calming, warm", meta: "10 mins" },
];

function SuggestItem({ icon, text, sub }: { icon: React.ReactNode; text: string; sub: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: "var(--app-surface-2)" }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold" style={{ color: "var(--app-ink)" }}>
          {text}
        </p>
        <p className="text-[9px]" style={{ color: "var(--app-ink-muted)" }}>
          {sub}
        </p>
      </div>
    </div>
  );
}

function ChatCardRow({ cards }: { cards: ChatCard[] }) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1">
      {cards.map((c) => (
        <div key={c.name} className="shrink-0 w-[110px] rounded-xl overflow-hidden border border-hairline bg-card">
          <div className="relative w-full h-[70px]">
            <Image src={c.img} alt={c.name} fill sizes="110px" className="object-cover" />
          </div>
          <div className="p-2">
            <p className="text-[11px] font-bold text-ink leading-tight">{c.name}</p>
            <p className="text-[9px] text-ink-muted mt-0.5 leading-snug">{c.desc}</p>
            <p className="text-[9px] text-coral mt-1">• {c.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AIChatPreview() {
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!draft.trim()) return;
    setSent((prev) => [...prev, draft.trim()]);
    setDraft("");
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    });
  };

  return (
    <div
      className="mt-6 w-full rounded-2xl border border-hairline flex flex-col overflow-hidden"
      style={{ background: "var(--app-bg)", height: 440 }}
    >
      <div className="shrink-0 px-4 py-3 border-b border-hairline">
        <p className="text-sm font-bold" style={{ color: "var(--app-ink)" }}>
          Date Flow AI chat
        </p>
        <p className="text-[11px]" style={{ color: "var(--app-ink-muted)" }}>
          AI-powered planner
        </p>
      </div>

      <div className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-hairline">
        <div className="flex-1 min-w-0">
          <p className="text-[9px] uppercase tracking-wide" style={{ color: "var(--app-ink-muted)" }}>
            📍 Pinned Destination
          </p>
          <p className="text-xs font-bold mt-0.5" style={{ color: "var(--app-ink)" }}>
            THE GLASS HOUSE
          </p>
          <div className="flex gap-1 mt-1">
            {["Cozy", "Chill"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] px-1.5 py-0.5 rounded-full"
                style={{ background: "var(--app-surface-2)", color: "var(--app-ink-secondary)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
          <Image src="/chat/glass-house.jpg" alt="The Glass House" fill sizes="48px" className="object-cover" />
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-xs" style={{ background: "var(--app-red)", color: "white" }}>
          it&apos;s my first date and i want to create chill relaxing experience for both of us, what do u suggest to do?
        </div>

        <div
          className="self-start max-w-[90%] rounded-2xl rounded-bl-sm px-3 py-2 text-xs leading-relaxed"
          style={{ background: "var(--app-surface-2)", color: "var(--app-ink)" }}
        >
          Good call — for a first date, relaxed beats impressive.
          <br />
          <br />
          Keep the start easy: arrive nearby, take a short walk, then settle in. It gives you both time to ease into
          the vibe instead of jumping straight into sitting and talking.
          <br />
          <br />
          Simple, flexible plans work best — no rushing, no pressure.
          <br />
          <br />
          I can help you with:
          <br />
          • where to walk first
          <br />
          • what to bring
          <br />
          • what to order
          <br />
          <br />
          Just pick one.
        </div>

        <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-xs" style={{ background: "var(--app-red)", color: "white" }}>
          tell me all three
        </div>

        <div
          className="self-start w-full rounded-2xl rounded-bl-sm px-3 py-2.5 text-xs leading-relaxed flex flex-col gap-2.5"
          style={{ background: "var(--app-surface-2)", color: "var(--app-ink)" }}
        >
          <p>
            Alright — here&apos;s a smooth way to start.
            <br />
            <br />
            Arrive by car, park near the lower entrance, then walk up together. It gives you a natural warm-up and
            avoids the awkward &quot;what now?&quot; moment.
          </p>

          <p className="text-[10px] font-bold uppercase tracking-wide mt-1" style={{ color: "var(--app-ink-muted)" }}>
            Good walking options
          </p>
          <ChatCardRow cards={WALK_OPTIONS} />

          <p className="text-[10px] font-bold uppercase tracking-wide mt-1" style={{ color: "var(--app-ink-muted)" }}>
            what to bring
          </p>
          <p className="text-[11px]" style={{ color: "var(--app-ink-secondary)" }}>
            towards the end of the day the temperature might drop so...
          </p>
          <SuggestItem
            icon={
              <svg width="17" height="14" viewBox="16 19 29 23" fill="none">
                <path d="M17.824 27.0141H33.9859C35.9112 27.0141 37.4719 25.4534 37.4719 23.5282V23.065C37.4719 21.3956 36.1185 20.0422 34.4491 20.0422C32.7797 20.0422 31.4264 21.3956 31.4264 23.065V23.3697" stroke="#8FC4FF" strokeWidth="2" strokeLinecap="round" />
                <path d="M17.824 34.6197H28.2817C30.0319 34.6197 31.4507 36.0386 31.4507 37.7887V38.2275C31.4507 39.7354 30.2284 40.9578 28.7205 40.9578C27.2126 40.9578 25.9903 39.7354 25.9903 38.2275V37.9328" stroke="#8FC4FF" strokeWidth="2" strokeLinecap="round" />
                <path d="M17.824 30.8169H40.6409C42.3911 30.8169 43.8099 32.2357 43.8099 33.9859V34.345C43.8099 35.8969 42.5519 37.1549 41 37.1549" stroke="#8FC4FF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
            text="A light jacket"
            sub="for the evening breeze"
          />
          <SuggestItem
            icon={
              <svg width="15" height="16" viewBox="16 15 30 32" fill="none">
                <path d="M31.2227 16C33.4862 16 35.3464 17.7249 35.5625 19.9316C37.5817 19.0151 40.0058 19.7643 41.1377 21.7246C42.2696 23.6851 41.7059 26.1588 39.9023 27.4492C41.7059 28.7396 42.2696 31.2133 41.1377 33.1738C40.0057 35.1343 37.5818 35.8826 35.5625 34.9658C35.3468 37.173 33.4865 38.8984 31.2227 38.8984C28.9588 38.8984 27.0975 37.1731 26.8818 34.9658C24.8627 35.8819 22.4394 35.134 21.3076 33.1738C20.1759 31.2136 20.739 28.7398 22.542 27.4492C20.739 26.1587 20.1759 23.6849 21.3076 21.7246C22.4393 19.7645 24.8628 19.0158 26.8818 19.9316C27.0979 17.7248 28.9591 16 31.2227 16ZM31.2227 22.9492C28.7374 22.9492 26.7227 24.9639 26.7227 27.4492C26.7227 29.9345 28.7374 31.9492 31.2227 31.9492C33.7079 31.9492 35.7227 29.9345 35.7227 27.4492C35.7227 24.9639 33.7079 22.9492 31.2227 22.9492Z" fill="#FF9191" />
                <path d="M35.7577 37.6807C37.6389 36.0807 43.27 33.9303 44.2118 34.9996C45.1537 36.0689 41.8306 41.5336 40.299 42.8361C38.7674 44.1387 32.444 46.1973 31.8449 45.5172C31.2458 44.8371 33.8764 39.2806 35.7577 37.6807Z" fill="#FF9191" />
                <path d="M22.157 42.8166C20.2758 41.2166 17.3026 36.0491 18.2446 34.9799C19.1866 33.9107 25.1671 36.3588 26.6986 37.6614C28.2301 38.964 31.2102 44.818 30.6111 45.4981C30.012 46.1781 24.0382 44.4167 22.157 42.8166Z" fill="#FF9191" />
              </svg>
            }
            text="A small bouquet"
            sub="from the florist on the way"
          />
          <div className="rounded-xl overflow-hidden border border-hairline bg-card flex items-center gap-2 p-2">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
              <Image src="/chat/florist-photo.jpg" alt="Bloom & Stem Florist" fill sizes="48px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-ink truncate">Bloom &amp; Stem Florist</p>
              <p className="text-[9px] text-ink-muted">0.2 km · Open until 8 pm · ❤ 4.0 (12)</p>
            </div>
          </div>
          <p className="text-[11px]" style={{ color: "var(--app-ink-secondary)" }}>
            a classic and thoughtful idea is to bring her some beautiful flowers. you can grab some on the way
          </p>

          <p className="text-[10px] font-bold uppercase tracking-wide mt-1" style={{ color: "var(--app-ink-muted)" }}>
            what to order
          </p>
          <ChatCardRow cards={FOOD_OPTIONS} />
          <p className="text-[11px]" style={{ color: "var(--app-ink-secondary)" }}>
            Sweet, shareable things are great for breaking that first bit of awkwardness. Sharing something small
            makes the moment feel lighter and more familiar without forcing intimacy.
          </p>
        </div>

        {sent.map((msg, i) => (
          <div
            key={i}
            className="self-end max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-xs"
            style={{ background: "var(--app-red)", color: "white" }}
          >
            {msg}
          </div>
        ))}
      </div>

      <div className="shrink-0 flex items-center gap-2 px-3 py-3 border-t border-hairline">
        <button
          aria-label="Attach"
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          style={{ color: "var(--app-ink-muted)" }}
        >
          <svg width="16" height="16" viewBox="10 10 31 31" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.9444 26H25.5M25.5 26H31.0556M25.5 26V31.5556M25.5 26V20.4444M25.5 38.5C18.5964 38.5 13 32.9036 13 26C13 19.0964 18.5964 13.5 25.5 13.5C32.4036 13.5 38 19.0964 38 26C38 32.9036 32.4036 38.5 25.5 38.5Z" />
          </svg>
        </button>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="message..."
          className="app-input flex-1 min-w-0 rounded-full px-4 py-2 text-xs"
        />
        <button
          aria-label="Voice message"
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          style={{ color: "var(--app-ink-muted)" }}
        >
          <svg width="14" height="18" viewBox="300 10 20 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M307 32C305.343 32 304 30.6569 304 29V16.5C304 14.2909 305.791 12.5 308 12.5H312C314.209 12.5 316 14.2909 316 16.5V29C316 30.6569 314.657 32 313 32M310 29V39.5M310 39.5H302.5M310 39.5H317.5" />
          </svg>
        </button>
        <button
          onClick={handleSend}
          aria-label="Send"
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          style={{ background: "var(--app-red)", color: "white" }}
        >
          <svg width="14" height="14" viewBox="364 15 22 22" fill="currentColor">
            <path d="M373.719 27.2811L378.623 22.3772M383.639 19.3845L379.5 32.8373C379.129 34.0429 378.943 34.646 378.623 34.8459C378.346 35.0193 378.002 35.0483 377.7 34.9229C377.351 34.7783 377.068 34.2136 376.504 33.085L373.882 27.8414C373.793 27.6623 373.748 27.5731 373.688 27.4955C373.635 27.4267 373.574 27.3646 373.505 27.3116C373.429 27.2531 373.341 27.2093 373.17 27.1237L367.915 24.4959C366.786 23.9316 366.222 23.6492 366.077 23.3007C365.952 22.9984 365.98 22.6545 366.154 22.377C366.354 22.057 366.957 21.8711 368.163 21.5L381.615 17.3607C382.564 17.069 383.038 16.9232 383.358 17.0408C383.637 17.1432 383.857 17.3629 383.959 17.6418C384.077 17.9619 383.931 18.4359 383.639 19.3831L383.639 19.3845Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
