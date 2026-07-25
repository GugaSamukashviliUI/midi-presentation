"use client";

import Image from "next/image";

// Header (poster avatars/name/follow) matches the app's #screen-post-detail
// pd-header. Everything below it is the real post-detail mockup frame
// exported from Figma — photo, pinned place + "start planning", vibes,
// caption, AI insight, and the distance/budget/access/best-time/crowd/
// weather stats.

export function PostOverlayPreview() {
  return (
    <div
      className="mt-6 w-full rounded-2xl border border-hairline overflow-x-hidden overflow-y-auto flex flex-col max-h-[440px]"
      style={{ background: "var(--app-bg)" }}
    >
      <div className="flex items-center gap-2.5 px-4 py-3">
        <div className="flex -space-x-2 shrink-0">
          <div className="relative w-7 h-7 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--app-bg)" }}>
            <Image src="/post/avatar-1.jpg" alt="" fill sizes="28px" className="object-cover" />
          </div>
          <div className="relative w-7 h-7 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--app-bg)" }}>
            <Image src="/post/avatar-2.jpg" alt="" fill sizes="28px" className="object-cover" />
          </div>
        </div>
        <p className="flex-1 min-w-0 text-xs leading-tight" style={{ color: "var(--app-ink)" }}>
          guga Samukashvili <span style={{ color: "var(--app-ink-muted)" }}>with</span>
          <br />
          <strong>definitely a goth baddie</strong>
        </p>
        <button
          className="shrink-0 text-xs font-semibold rounded px-3 py-1.5 cursor-pointer"
          style={{ background: "var(--app-surface-2)", color: "var(--app-ink)" }}
        >
          Follow
        </button>
      </div>

      <Image
        src="/post/post-detail-frame.png"
        alt="Post detail: place, vibes, caption, AI insight, and stats"
        width={880}
        height={1576}
        sizes="400px"
        className="w-full h-auto"
      />
    </div>
  );
}
