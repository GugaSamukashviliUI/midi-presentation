import Image from "next/image";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";
import { HorizontalScroller } from "@/components/HorizontalScroller";

// Real screens captured straight from the live app. Heights are each
// screen's real captured size (some are full-scroll captures, so they're
// naturally taller) — width and height are the real intrinsic pixel
// dimensions so the browser lays each card out at its true proportions.
const SCREENS = [
  { src: "/results/01-splash.jpg", label: "Splash", w: 480, h: 1040 },
  { src: "/results/02-onboarding-1.jpg", label: "Onboarding — say goodbye to 'I don't know.'", w: 480, h: 1040 },
  { src: "/results/03-onboarding-2.jpg", label: "Onboarding — see beyond the horizon", w: 480, h: 1040 },
  { src: "/results/04-onboarding-3.jpg", label: "Onboarding — plan your journeys", w: 480, h: 1040 },
  { src: "/results/05-onboarding-4.jpg", label: "Onboarding — plant your flag", w: 480, h: 1040 },
  { src: "/results/06-quiz-paths.jpg", label: "Quiz — what kind of paths draw you in?", w: 480, h: 1040 },
  { src: "/results/07-quiz-company.jpg", label: "Quiz — who are you chilling with", w: 480, h: 1040 },
  { src: "/results/08-quiz-vibe.jpg", label: "Quiz — what's the vibe of your journey?", w: 480, h: 1040 },
  { src: "/results/09-home-feed.jpg", label: "Home Feed", w: 480, h: 1040 },
  { src: "/results/10-explore.jpg", label: "Explore", w: 480, h: 1040 },
  { src: "/results/11-inbox.jpg", label: "Inbox", w: 480, h: 1040 },
  { src: "/results/12-map.jpg", label: "Map", w: 480, h: 1040 },
  { src: "/results/13-profile.jpg", label: "Profile", w: 480, h: 1040 },
  { src: "/results/14-ai-chat.jpg", label: "Date Flow AI Chat", w: 480, h: 1317 },
  { src: "/results/15-edit-profile-grid.jpg", label: "Edit Profile Grid", w: 480, h: 1179 },
  { src: "/results/16-share-a-moment.jpg", label: "Share a Moment", w: 480, h: 2461 },
  { src: "/results/17-ai-chat-plan.jpg", label: "Date Flow AI Chat — the full plan", w: 480, h: 1040 },
  { src: "/results/18-share-add-music.jpg", label: "Share a Moment — add music", w: 480, h: 2119 },
  { src: "/results/19-place-overlay.jpg", label: "Place Overlay", w: 480, h: 1618 },
];

export function Section14Results() {
  return (
    <Section
      id="ui-results"
      index="14"
      title="UI Design & Results"
      className="min-h-[760px] py-16 md:py-32"
    >
      <div className="max-w-3xl">
        <RevealItem>
          <h2 className="font-bold text-4xl md:text-6xl leading-[0.95]">
            From sketch to screen.
          </h2>
        </RevealItem>
        <RevealItem>
          <Expandable trigger="the thinking behind it">
            <p>
              What you see is the result of dozens of decisions — some big,
              some small. The coral red because it feels warm and urgent
              without being aggressive. The pill-shaped nav bar because it
              floats rather than anchors. The vibe chips because categories
              are limiting but feelings are not.
            </p>
            <p>Every screen started as a rough box and line. Here is what it became.</p>
          </Expandable>
        </RevealItem>
      </div>

      <RevealItem className="mt-14">
        <HorizontalScroller wheelHijack hideControls snap={false} scrollerClassName="items-start">
          {SCREENS.map((screen) => (
            <div key={screen.src} className="shrink-0 w-[190px]">
              <div className="rounded-[1.75rem] border border-hairline overflow-hidden bg-veil shadow-lg">
                <Image
                  src={screen.src}
                  alt={screen.label}
                  width={screen.w}
                  height={screen.h}
                  sizes="190px"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          ))}
        </HorizontalScroller>
      </RevealItem>
    </Section>
  );
}
