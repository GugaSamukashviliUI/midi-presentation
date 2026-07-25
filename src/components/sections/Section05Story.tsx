import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";

const timeline = [
  { icon: <IdeaIcon />, label: "The idea", year: "2024" },
  { icon: <MapIcon />, label: "Hours of research", year: "" },
  { icon: <DateIcon />, label: "Amazing date", year: "" },
  { icon: <LaunchIcon />, label: "Midi is born", year: "2026" },
];

export function Section05Story() {
  return (
    <Section
      id="story"
      index="05"
      title="The Story"
      className="min-h-[760px] flex flex-col justify-center py-16 md:py-0"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <RevealItem>
            <h2 className="font-bold text-5xl md:text-6xl leading-[0.95]">
              It started with a date.
            </h2>
          </RevealItem>
          <RevealItem>
            <Expandable trigger="what happened">
              <p>
                In 2024, I wanted to take someone on a date in Tbilisi. Simple
                enough — except I hadn&apos;t grown up here. I didn&apos;t know
                the hidden cafes, the good walking streets, the spots with the
                right atmosphere.
              </p>
              <p>
                So I did what anyone would do. I walked. I searched Instagram,
                TikTok, Strava. I pieced together a route from scattered
                reviews and guesswork. Hours later, I had a plan. The date was
                great.
              </p>
              <p>
                But it shouldn&apos;t have taken that long. That frustration
                became Midi. Because if it was that hard for someone motivated
                enough to spend hours researching — imagine how many people
                just give up and stay home.
              </p>
            </Expandable>
          </RevealItem>
        </div>

        <RevealItem>
          <div className="relative flex justify-between">
            <div
              aria-hidden="true"
              className="absolute top-5 left-0 right-0 h-px bg-coral/40"
            />
            {timeline.map((stop) => (
              <div
                key={stop.label}
                className="relative flex flex-col items-center text-center w-1/4 px-1"
              >
                <span className="bg-bg text-coral relative z-10 px-2 flex items-center justify-center">
                  {stop.icon}
                </span>
                <span className="text-xs md:text-sm text-ink mt-4">
                  {stop.label}
                </span>
                {stop.year && (
                  <span className="text-xs text-ink-muted mt-1">{stop.year}</span>
                )}
              </div>
            ))}
          </div>
        </RevealItem>
      </div>
    </Section>
  );
}

function IdeaIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.99997 21H13.9999M11.9999 8C9.79083 8 8 9.9401 8 12.3333C8 13.2105 8.24056 14.0267 8.6541 14.7089C9.29003 15.758 9.60771 16.2822 9.64898 16.3605C10.0162 17.0574 9.94855 16.8116 9.99476 17.6125C9.99995 17.7025 9.99997 17.8388 9.99997 18.1111C9.99997 18.51 10.2984 18.8333 10.6666 18.8333L13.3332 18.8333C13.7014 18.8333 13.9999 18.51 13.9999 18.1111C13.9999 17.8388 13.9999 17.7025 14.0051 17.6125C14.0513 16.8116 13.9833 17.0574 14.3505 16.3605C14.3917 16.2822 14.71 15.758 15.3459 14.7089C15.7594 14.0267 16 13.2105 16 12.3333C16 9.9401 14.209 8 11.9999 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4V2M6.41421 6.41421L5 5M4 12H2M20 12H22M17.7285 6.41421L19.1427 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 27 27" fill="none" aria-hidden="true">
      <path
        d="M16.875 6.75V23.625M10.125 20.25L16.875 23.625L23.625 20.25V3.375L16.875 6.75M10.125 20.25L3.375 23.625V6.75L10.125 3.375L16.875 6.75M10.125 20.25V3.375"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DateIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LaunchIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 14L18.1963 19.6263C18.1267 20.1134 18.0917 20.3573 17.9741 20.5405C17.8705 20.7019 17.7228 20.8299 17.5483 20.9097C17.3506 21 17.1051 21 16.6147 21H14M19 14H14M19 14C20.3031 13.3956 21 11.7637 21 10.3335C21 8.79807 19.9706 7.48314 18.5098 6.93701C18.197 6.8201 18 6.51809 18 6.2085C18 4.94284 16.8807 3.9165 15.5 3.9165C15.2737 3.9165 15.0546 3.94406 14.8462 3.99571C14.414 4.1028 13.9305 4.0791 13.5586 3.85059C12.6841 3.31321 11.6319 3 10.5 3C7.46243 3 5 5.25723 5 8.04167C5 8.39362 4.77089 8.71567 4.44287 8.8986C3.57772 9.38108 3 10.254 3 11.2502C3 12.5275 3.71228 13.6908 5 14M5 14L5.80375 19.6263L5.80387 19.6276C5.87335 20.1139 5.90813 20.3574 6.02562 20.5405C6.12922 20.7019 6.27719 20.8299 6.45166 20.9097C6.64932 21 6.89485 21 7.38528 21H10M5 14H10M10 14H14M10 14V21M14 14V21M14 21H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
