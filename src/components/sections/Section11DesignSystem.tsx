import { DM_Sans, DM_Serif_Display, Inter } from "next/font/google";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import {
  InteractiveNavBar,
  SegmentedTabs,
  AccessButtons,
  VibeChipsWithMore,
  DistanceSlider,
  BudgetSlider,
  RealInputField,
  ToggleSwitch,
} from "@/components/DesignSystemInteractive";
import { UPLOADED_ICONS } from "@/components/UploadedIcons";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "variable" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: "italic" });
const inter = Inter({ subsets: ["latin"], weight: "600" });

// Only the colors that actually get real usage across the app's CSS —
// counted by var(...) occurrences in the app's own stylesheet. Tokens
// like red-dark/red-light/navy/teal were defined but barely (or never)
// used, so they're left out here.
const coreSwatches = [
  { name: "black", hex: "#111111", note: "Text / ink — 92 uses" },
  { name: "gray 500", hex: "#8E8E93", note: "Text secondary — 81 uses" },
  { name: "red", hex: "#E8635A", note: "Primary brand red — 54 uses" },
  { name: "gray 100", hex: "#F5F5F7", note: "Surface — subtle — 45 uses" },
  { name: "gray 200", hex: "#EBEBED", note: "Border / divider — 40 uses" },
  { name: "gray 300", hex: "#D1D1D6", note: "Border — stronger — 27 uses" },
  { name: "white", hex: "#FFFFFF", note: "Surface — 23 uses" },
  { name: "gray 400", hex: "#C4C4C9", note: "Icon muted — 11 uses" },
  { name: "gray 700", hex: "#3A3A3C", note: "Text — near black — 9 uses" },
];

const accentSwatches = [
  { name: "panel fill", hex: "#EFF2F7", note: "Search boxes, profile pill buttons — 10 uses" },
  { name: "coral accent", hex: "#FF9191", note: "Active states — filters, badges, ratings — 8 uses" },
  { name: "logo red", hex: "#E94844", note: "App logo mark — 8 uses" },
];

const darkSwatches = [
  { name: "dm-text-primary", hex: "#EAEAF0", note: "Primary text — 24 uses" },
  { name: "dm-text-muted", hex: "#6A6A78", note: "Muted text — 11 uses" },
  { name: "dm-surf3", hex: "#2E2E38", note: "Modal / input surface — 11 uses" },
  { name: "dm-surf2", hex: "#26262E", note: "Card surface — 10 uses" },
  { name: "dm-text-secondary", hex: "#A0A0AB", note: "Secondary text — 7 uses" },
  { name: "dm-surf1", hex: "#1E1E24", note: "Screen surface — 5 uses" },
  { name: "dm-red", hex: "#D96B63", note: "Brand red — dark mode — 4 uses" },
  { name: "dm-base", hex: "#16161A", note: "App background — 4 uses" },
];

const typeSpecimens = [
  {
    role: "display",
    name: "Bebas Neue",
    note: "logo, screen titles, stat numbers",
    className: "font-display text-4xl tracking-wide",
  },
  {
    role: "serif accent",
    name: "DM Serif Display Italic",
    note: "grade letters, editorial accents",
    className: `${dmSerif.className} text-3xl italic`,
  },
  {
    role: "body",
    name: "DM Sans Regular",
    note: "body copy, everywhere",
    className: `${dmSans.className} text-lg`,
  },
  {
    role: "heading",
    name: "DM Sans Bold",
    note: "headers, buttons, labels",
    className: `${dmSans.className} font-bold text-2xl`,
  },
  {
    role: "auth screens",
    name: "Inter",
    note: "signup / login screens only",
    className: `${inter.className} text-2xl`,
  },
  {
    role: "filter tabs",
    name: "Helvetica Rounded",
    note: "Duo · Solo · Group",
    className: "text-2xl",
    style: { fontFamily: "'Helvetica Rounded', var(--font-body)" },
  },
];

// Real icon geometry pulled from the app's own inline SVGs (index.html)
const NAV_ICONS = [
  {
    id: "home",
    viewBox: "0 0 23 23",
    outline:
      "M21.2502 17.9281V10.9931C21.2502 10.3252 21.2497 9.99107 21.1685 9.68027C21.0965 9.40484 20.9783 9.14419 20.8185 8.90866C20.638 8.64287 20.3872 8.42247 19.8845 7.98264L13.8845 2.73264C12.9513 1.91603 12.4846 1.50794 11.9595 1.35263C11.4967 1.21579 11.0035 1.21579 10.5408 1.35263C10.016 1.50782 9.55005 1.91553 8.6182 2.7309L2.61621 7.98264C2.11354 8.42247 1.8628 8.64287 1.68237 8.90866C1.52248 9.14419 1.40343 9.40484 1.33146 9.68027C1.25024 9.99107 1.25024 10.3252 1.25024 10.9931V17.9281C1.25024 19.0929 1.25024 19.6751 1.44055 20.1345C1.69428 20.7471 2.18064 21.2344 2.79321 21.4881C3.25264 21.6784 3.83507 21.6784 4.99992 21.6784C6.16478 21.6784 6.74785 21.6784 7.20728 21.4881C7.81985 21.2344 8.30608 20.7472 8.55981 20.1347C8.75012 19.6752 8.75024 19.0928 8.75024 17.9279V16.678C8.75024 15.2972 9.86953 14.178 11.2502 14.178C12.631 14.178 13.7502 15.2972 13.7502 16.678V17.9279C13.7502 19.0928 13.7502 19.6752 13.9405 20.1347C14.1943 20.7472 14.6806 21.2344 15.2932 21.4881C15.7526 21.6784 16.3351 21.6784 17.4999 21.6784C18.6648 21.6784 19.2478 21.6784 19.7073 21.4881C20.3198 21.2344 20.8061 20.7471 21.0598 20.1345C21.2501 19.6751 21.2502 19.0929 21.2502 17.9281Z",
    label: "Home",
  },
  {
    id: "explore",
    viewBox: "0 0 25 25",
    outline:
      "M16.25 16.25L23.75 23.75M10 18.75C5.16751 18.75 1.25 14.8325 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75Z",
    label: "Explore",
  },
  {
    id: "chat",
    viewBox: "0 0 25 24",
    outline:
      "M4.49951 21.1504L6.40446 19.6265L6.41847 19.6157C6.81561 19.298 7.01601 19.1377 7.2396 19.0234C7.4402 18.921 7.6541 18.8463 7.87476 18.801C8.12347 18.75 8.38254 18.75 8.90259 18.75H19.7539C21.1513 18.75 21.8508 18.75 22.385 18.4778C22.8554 18.2381 23.2381 17.8553 23.4778 17.3849C23.75 16.8506 23.75 16.1519 23.75 14.7545V5.24614C23.75 3.84874 23.75 3.149 23.4778 2.61475C23.2381 2.14434 22.8547 1.76217 22.3842 1.52248C21.8495 1.25 21.1504 1.25 19.7502 1.25H5.25024C3.85011 1.25 3.14953 1.25 2.61475 1.52248C2.14434 1.76217 1.76217 2.14434 1.52248 2.61475C1.25 3.14953 1.25 3.85011 1.25 5.25024V19.589C1.25 20.9211 1.25 21.587 1.52307 21.9291C1.76056 22.2267 2.12054 22.3997 2.50122 22.3993C2.93894 22.3989 3.4593 21.9826 4.49951 21.1504Z",
    label: "Chat",
  },
  {
    id: "map",
    viewBox: "0 0 20 25",
    outline:
      "M1.25 9.90356C1.25 15.9683 6.55559 20.9837 8.90399 22.9065C9.24008 23.1817 9.41014 23.3209 9.66088 23.3915C9.85613 23.4465 10.1435 23.4465 10.3387 23.3915C10.59 23.3208 10.7588 23.1829 11.0962 22.9067C13.4446 20.9838 18.7499 15.9689 18.7499 9.90412C18.7499 7.60898 17.8281 5.40756 16.1871 3.78465C14.5462 2.16174 12.3207 1.25 10.0001 1.25C7.67946 1.25 5.45376 2.16188 3.81282 3.78479C2.17187 5.4077 1.25 7.60842 1.25 9.90356Z M7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75Z",
    label: "Map",
  },
  {
    id: "profile",
    viewBox: "0 0 24 24",
    outline: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    label: "Profile",
  },
];

const POST_ACTION_ICONS = [
  {
    id: "heart",
    viewBox: "0 0 24 24",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    label: "Heart / Like",
  },
  {
    id: "comment",
    viewBox: "0 0 24 24",
    path: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    label: "Comment",
  },
  {
    id: "share",
    viewBox: "0 0 24 24",
    path: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
    label: "Share",
  },
  {
    id: "pin",
    viewBox: "0 0 24 24",
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    label: "Location Pin",
  },
  {
    id: "save",
    viewBox: "0 0 24 24",
    path: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z",
    label: "Save",
  },
];

const TRANSPORT_ICONS = [
  {
    id: "metro",
    viewBox: "14 235 22 26",
    path: "M24.9995 238C28.2477 238 30.5653 238.563 31.9517 239.044C32.9435 239.388 33.5004 240.356 33.5005 241.405V252.143C33.5005 253.612 32.4428 254.834 31.0474 255.091L32.5562 258H30.6665L28.7778 255.143H21.2222L19.3335 258H17.4438L18.9517 255.092C17.5566 254.834 16.4995 253.612 16.4995 252.143V241.405C16.4996 240.356 17.0566 239.388 18.0483 239.044C19.4347 238.563 21.7518 238 24.9995 238ZM19.8052 250.381C19.0228 250.381 18.3882 251.021 18.3882 251.81C18.3882 252.598 19.0228 253.238 19.8052 253.238C20.5876 253.238 21.2221 252.599 21.2222 251.81C21.2221 251.021 20.5876 250.381 19.8052 250.381ZM30.1948 250.381C29.4125 250.381 28.7779 251.021 28.7778 251.81C28.7779 252.598 29.4125 253.238 30.1948 253.238C30.977 253.238 31.6108 252.598 31.6108 251.81C31.6108 251.021 30.977 250.381 30.1948 250.381ZM19.3882 240.857C18.8361 240.858 18.3882 241.305 18.3882 241.857V245.571C18.3882 246.123 18.8361 246.571 19.3882 246.571H23.0552C23.6074 246.571 24.0551 246.124 24.0552 245.571V241.857C24.0552 241.305 23.6075 240.857 23.0552 240.857H19.3882ZM26.9448 240.857C26.3926 240.857 25.9448 241.305 25.9448 241.857V245.571C25.9449 246.123 26.3919 246.571 26.9438 246.571H30.6108C31.1631 246.571 31.6108 246.124 31.6108 245.571V241.857C31.6108 241.305 31.1631 240.857 30.6108 240.857H26.9448Z",
    label: "Metro / Transit",
  },
  {
    id: "car",
    viewBox: "73 237 20 22",
    path: "M88.2793 239.5C88.7096 239.5 89.0914 239.775 89.2275 240.184L91 245.5V255.5C91 256.052 90.5523 256.5 90 256.5H89C88.4477 256.5 88 256.052 88 255.5V253.5H78V255.5C78 256.052 77.5523 256.5 77 256.5H76C75.4477 256.5 75 256.052 75 255.5V245.5L76.7725 240.184C76.9086 239.775 77.2904 239.5 77.7207 239.5H88.2793ZM78 248.5C77.1716 248.5 76.5 249.172 76.5 250C76.5 250.828 77.1716 251.5 78 251.5C78.8284 251.5 79.5 250.828 79.5 250C79.5 249.172 78.8284 248.5 78 248.5ZM88 248.5C87.1716 248.5 86.5 249.172 86.5 250C86.5 250.828 87.1716 251.5 88 251.5C88.8284 251.5 89.5 250.828 89.5 250C89.5 249.172 88.8284 248.5 88 248.5ZM76.5 245.5H89.5L88 240.5H78L76.5 245.5Z",
    label: "Car",
  },
  {
    id: "pedestrian",
    viewBox: "133 236 16 24",
    path: "M139.506 242.529C140.379 242.193 141.369 242.508 141.888 243.286L143.294 245.396C143.479 245.674 143.792 245.841 144.126 245.841H146.363C146.501 245.841 146.613 245.953 146.613 246.091V246.887C146.613 247.025 146.501 247.137 146.363 247.137H142.831C142.497 247.137 142.185 246.969 141.999 246.691L141.432 245.841L141.058 248.087C141.02 248.31 141.06 248.54 141.17 248.737L143.033 252.092C143.116 252.24 143.159 252.407 143.159 252.577V257.25C143.159 257.388 143.047 257.5 142.909 257.5H141.682C141.544 257.5 141.432 257.388 141.432 257.25V253.976C141.432 253.742 141.35 253.516 141.2 253.336L139.272 251.022L137.171 257.329C137.137 257.431 137.041 257.5 136.934 257.5H135.712C135.548 257.5 135.427 257.344 135.47 257.186L138.841 244.546L137.311 245.157C136.931 245.309 136.682 245.677 136.682 246.086V247.75C136.682 247.888 136.57 248 136.432 248H135.637C135.499 248 135.387 247.888 135.387 247.75V244.801C135.387 244.387 135.641 244.016 136.027 243.867L139.506 242.529ZM142.296 238.5C143.25 238.5 144.022 239.274 144.022 240.228C144.022 241.181 143.25 241.954 142.296 241.954C141.342 241.954 140.569 241.181 140.568 240.228C140.568 239.274 141.342 238.5 142.296 238.5Z",
    label: "Pedestrian",
  },
  {
    id: "wheelchair",
    viewBox: "190 237 18 22",
    path: "M197.5 241C197.5 241.911 196.795 242.649 195.926 242.649C195.056 242.649 194.352 241.911 194.352 241C194.352 240.089 195.056 239.351 195.926 239.351C196.795 239.351 197.5 240.089 197.5 241ZM196.88 255C198.462 255 199.743 253.657 199.743 252C199.743 250.343 198.462 249 196.88 249C195.299 249 194.017 250.343 194.017 252C194.017 253.657 195.299 255 196.88 255ZM201.434 250.5C200.888 248.679 199.375 247.307 197.525 247.045L197.275 246.4C198.218 246.843 199.301 247.007 200.303 246.87C200.535 246.839 200.698 246.633 200.698 246.399V246.1C200.698 245.824 200.472 245.602 200.201 245.549C199.454 245.403 198.71 244.966 198.023 244.606C197.841 244.51 197.711 244.418 197.632 244.356C197.592 244.325 197.566 244.302 197.553 244.29L197.547 244.284L197.275 244L195.301 244C194.968 244 194.728 244.321 194.822 244.641L195.57 247.191C193.572 247.787 192.108 249.714 192.108 252C192.108 254.761 194.245 257 196.88 257C199.355 257 201.389 255.027 201.629 252.5H201.759C202.013 252.5 202.227 252.691 202.256 252.944L202.6 256H203.752L204.108 252.334C204.026 251.297 203.199 250.5 202.206 250.5H201.434Z",
    label: "Wheelchair Access",
  },
];

const GROUP_ICONS = [
  {
    id: "duo",
    path: "M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z",
    label: "Duo",
  },
  {
    id: "solo",
    path: "M18 19C18 16.7909 15.3137 15 12 15C8.68629 15 6 16.7909 6 19M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z",
    label: "Solo",
  },
  {
    id: "group",
    path: "M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z",
    label: "Group",
  },
];

export function Section11DesignSystem() {
  return (
    <Section
      id="design-system"
      index="11"
      title="Design System"
      className="min-h-[760px] py-16 md:py-32"
    >
      <RevealItem>
        <h2 className="font-bold text-4xl md:text-6xl leading-[0.95] max-w-2xl">
          Every pixel, intentional.
        </h2>
      </RevealItem>
      <RevealItem>
        <p className="text-ink-muted text-sm mt-3 max-w-lg">
          Pulled straight from the app&apos;s CSS tokens — real hex values, real
          fonts, real components.
        </p>
      </RevealItem>

      <RevealItem className="mt-16">
        <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-5">Colors</p>

        <p className="text-xs text-ink-muted mb-3">Core palette (light mode)</p>
        <SwatchGrid swatches={coreSwatches} />

        <p className="text-xs text-ink-muted mb-3 mt-10">Accent &amp; one-off colors</p>
        <SwatchGrid swatches={accentSwatches} />

        <p className="text-xs text-ink-muted mb-3 mt-10">Dark mode tokens</p>
        <div className="rounded-2xl p-5" style={{ background: "#16161A" }}>
          <SwatchGrid swatches={darkSwatches} dark />
        </div>
      </RevealItem>

      <RevealItem className="mt-16">
        <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-5">Typography</p>
        <div className="space-y-6">
          {typeSpecimens.map((t) => (
            <div
              key={t.name}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-hairline pb-6"
            >
              <span className="text-xs text-ink-muted w-32 shrink-0 uppercase tracking-wide">
                {t.role}
              </span>
              <span className={t.className} style={"style" in t ? t.style : undefined}>
                {t.name}
              </span>
              <span className="text-xs text-ink-muted sm:ml-auto">{t.note}</span>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem className="mt-16">
        <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-5">Icons</p>

        <p className="text-xs text-ink-muted mb-3">Navigation bar</p>
        <IconGrid icons={NAV_ICONS} stroke />

        <p className="text-xs text-ink-muted mb-3 mt-8">Post actions</p>
        <IconGrid icons={POST_ACTION_ICONS} />

        <p className="text-xs text-ink-muted mb-3 mt-8">Transport &amp; accessibility</p>
        <IconGrid icons={TRANSPORT_ICONS} color="#E8635A" />

        <p className="text-xs text-ink-muted mb-3 mt-8">Group size (filter tabs)</p>
        <IconGrid icons={GROUP_ICONS} stroke />
      </RevealItem>

      <RevealItem className="mt-16">
        <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-2">
          Uploaded icons — unfiltered
        </p>
        <p className="text-xs text-ink-faint mb-5 max-w-xl">
          Every SVG found in the source export, added as-is. Includes
          duplicates and a few combined/multi-icon frames — flag which ones
          to drop.
        </p>
        <div className="rounded-2xl bg-card border border-hairline p-6 flex flex-wrap gap-6">
          {UPLOADED_ICONS.map((icon) => (
            <div key={icon.id} className="flex flex-col items-center gap-2 w-16">
              <svg
                viewBox={icon.viewBox}
                className="h-9 w-auto max-w-full text-ink"
                fill="none"
                aria-hidden="true"
              >
                {icon.node}
              </svg>
              <span className="text-[9px] tracking-wide text-ink-faint text-center break-all">
                {icon.label}
              </span>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem className="mt-16">
        <p className="text-xs uppercase tracking-[0.15em] text-ink-muted mb-5">Components</p>
        <div className={`${dmSans.className} grid sm:grid-cols-2 md:grid-cols-3 gap-6`}>
          <ComponentCard label="Primary button">
            <button
              className="w-full text-white text-sm font-bold px-5 py-2.5 rounded-lg"
              style={{
                background: "linear-gradient(180deg, #E8635A 0%, #F08880 100%)",
                boxShadow: "0 8px 24px rgba(232,99,90,0.35)",
              }}
            >
              Sign up
            </button>
          </ComponentCard>

          <ComponentCard label="Vibe chips + more">
            <VibeChipsWithMore />
          </ComponentCard>

          <ComponentCard label="Group size tabs">
            <div className="w-full flex justify-center">
              <SegmentedTabs />
            </div>
          </ComponentCard>

          <ComponentCard label="Access buttons">
            <AccessButtons />
          </ComponentCard>

          <ComponentCard label="Navigation bar">
            <InteractiveNavBar />
          </ComponentCard>

          <ComponentCard label="Input field">
            <RealInputField />
          </ComponentCard>

          <ComponentCard label="Toggle">
            <ToggleSwitch />
          </ComponentCard>

          <ComponentCard label="Distance slider">
            <DistanceSlider />
          </ComponentCard>

          <ComponentCard label="Budget slider">
            <BudgetSlider />
          </ComponentCard>

          <ComponentCard label="Rating hearts">
            <div className="flex gap-1.5">
              {[true, true, true, false, false].map((filled, i) => (
                <svg key={i} width="20" height="18" viewBox="0 0 27 24" fill="none">
                  <path
                    d="M14.1053 4.54164C11.8596 -0.729302 4 -0.167899 4 6.56897C4 13.3058 14.1053 18.92 14.1053 18.92C14.1053 18.92 24.2105 13.3058 24.2105 6.56897C24.2105 -0.167899 16.3509 -0.729302 14.1053 4.54164Z"
                    fill={filled ? "var(--app-red)" : "none"}
                    stroke={filled ? "none" : "var(--app-border)"}
                    strokeWidth="1.5"
                  />
                </svg>
              ))}
            </div>
          </ComponentCard>
        </div>
      </RevealItem>
    </Section>
  );
}

function SwatchGrid({
  swatches,
  dark = false,
}: {
  swatches: { name: string; hex: string; note: string }[];
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
      {swatches.map((s) => (
        <div key={s.hex} className="flex flex-col gap-2">
          <div
            className="aspect-square rounded-xl border"
            style={{
              backgroundColor: s.hex,
              borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
            }}
          />
          <span
            className={`text-[11px] font-medium ${dark ? "" : "text-ink"}`}
            style={dark ? { color: "#EAEAF0" } : undefined}
          >
            {s.name}
          </span>
          <span className="text-[10px]" style={{ color: dark ? "#A0A0AB" : "#8E8E93" }}>
            {s.hex}
          </span>
          <span className="text-[10px] leading-snug" style={{ color: dark ? "#6A6A78" : "#8E8E93" }}>
            {s.note}
          </span>
        </div>
      ))}
    </div>
  );
}

function IconGrid({
  icons,
  stroke = false,
  color,
}: {
  icons: { id: string; viewBox?: string; path?: string; outline?: string; label: string }[];
  stroke?: boolean;
  color?: string;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="rounded-xl bg-card border border-hairline flex flex-col items-center justify-center gap-2 py-4"
        >
          <svg
            viewBox={icon.viewBox ?? "0 0 24 24"}
            width="22"
            height="22"
            fill={stroke ? "none" : (color ?? "currentColor")}
            stroke={stroke ? (color ?? "currentColor") : "none"}
            strokeWidth={stroke ? "2" : undefined}
            strokeLinecap={stroke ? "round" : undefined}
            strokeLinejoin={stroke ? "round" : undefined}
            className={color ? "" : "text-ink"}
            style={color ? { color } : undefined}
          >
            <path d={icon.path ?? icon.outline} />
          </svg>
          <span className="text-[10px] text-ink-muted text-center px-1">{icon.label}</span>
        </div>
      ))}
    </div>
  );
}

function ComponentCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-hairline p-6 flex flex-col gap-5">
      <span className="text-xs text-ink-muted">{label}</span>
      <div className="flex items-center min-h-11">{children}</div>
    </div>
  );
}
