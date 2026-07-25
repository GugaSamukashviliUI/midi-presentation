import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";

const pillars = [
  { icon: <IdCardIcon />, title: "Personality", desc: "knows you before you search" },
  { icon: <FilterIcon />, title: "Filter", desc: "mood, budget, transport, company" },
  { icon: <UsersGroupIcon />, title: "Social", desc: "real posts from real people" },
  { icon: <NotebookIcon />, title: "Plan", desc: "the journey, not just the destination" },
  { icon: <span className="text-2xl">🏆</span>, title: "Reward", desc: "achievements for exploring" },
];

export function Section06Solution() {
  return (
    <Section
      id="solution"
      index="06"
      title="Solution"
      className="min-h-[820px] flex flex-col justify-center py-16 md:py-0"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <RevealItem>
            <h2 className="font-bold text-4xl md:text-5xl leading-[0.95]">
              Not a map app.
              <br />
              Not a review platform.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-lg md:text-xl text-ink-soft mt-6 leading-relaxed">
              A social discovery experience built around real people, real
              places, and real moments.
            </p>
          </RevealItem>
          <RevealItem>
            <Expandable trigger="how it works">
              <p>
                The ideal solution would know your personality before you even
                search. It would filter places not just by category but by
                mood, budget, how you&apos;re getting there, and who you&apos;re
                going with. It would show you what real people experienced
                there — not polished ads, but honest moments. It would help
                you plan the journey, not just find the destination. And it
                would reward you for going.
              </p>
              <p className="text-ink font-medium">That solution is Midi.</p>
            </Expandable>
          </RevealItem>
        </div>

        <RevealItem>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`rounded-2xl bg-card border border-hairline p-5 ${
                  i === pillars.length - 1 ? "col-span-2 max-w-[220px] mx-auto w-full" : ""
                }`}
              >
                <span className="text-coral">{pillar.icon}</span>
                <p className="text-ink font-medium mt-3">{pillar.title}</p>
                <p className="text-ink-muted text-sm mt-1">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </RevealItem>
      </div>
    </Section>
  );
}

function FilterIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 5.6001C20 5.04005 19.9996 4.75981 19.8906 4.5459C19.7948 4.35774 19.6423 4.20487 19.4542 4.10899C19.2403 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7084C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9808 14.1475 12.8914C14.2089 12.7911 14.2947 12.7053 14.4653 12.5347L14.4688 12.5315L19.5315 7.46875C19.7044 7.2958 19.7904 7.20932 19.8523 7.1084C19.9071 7.01893 19.9482 6.92146 19.9727 6.81942C20 6.70551 20 6.58444 20 6.3448V5.6001Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IdCardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 18C6.06366 18 6.12926 18 6.19691 18H12M6 18C5.01173 17.9992 4.49334 17.9868 4.0918 17.7822C3.71547 17.5905 3.40973 17.2837 3.21799 16.9074C3 16.4796 3 15.9203 3 14.8002V9.2002C3 8.08009 3 7.51962 3.21799 7.0918C3.40973 6.71547 3.71547 6.40973 4.0918 6.21799C4.51962 6 5.08009 6 6.2002 6H17.8002C18.9203 6 19.4796 6 19.9074 6.21799C20.2837 6.40973 20.5905 6.71547 20.7822 7.0918C21 7.5192 21 8.07899 21 9.19691V14.8031C21 15.921 21 16.48 20.7822 16.9074C20.5905 17.2837 20.2837 17.5905 19.9074 17.7822C19.48 18 18.921 18 17.8031 18H12M6 18C6.00004 16.8954 7.34317 16 9 16C10.6569 16 12 16.8954 12 18M6 18C6 18 6 17.9999 6 18ZM18 14H14M18 11H15M9 13C7.89543 13 7 12.1046 7 11C7 9.89543 7.89543 9 9 9C10.1046 9 11 9.89543 11 11C11 12.1046 10.1046 13 9 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersGroupIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NotebookIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H8M8 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H8M8 4V20M12 11H16M12 8H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}