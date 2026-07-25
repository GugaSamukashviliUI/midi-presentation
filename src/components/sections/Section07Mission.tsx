import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";

const transport = [
  { icon: <MetroIcon />, label: "Bus", highlight: false },
  { icon: <CarIcon />, label: "Car", highlight: false },
  { icon: <FootIcon />, label: "Walk", highlight: false },
  { icon: <DisabledIcon />, label: "Wheelchair Accessible", highlight: true },
];

export function Section07Mission() {
  return (
    <Section
      id="mission"
      index="07"
      title="Social Mission"
      className="min-h-[820px] flex flex-col justify-center py-16 md:py-0"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <RevealItem>
            <h2 className="font-bold text-4xl md:text-5xl leading-[0.95]">
              A map that tells the truth.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-lg md:text-xl text-ink-soft mt-6 leading-relaxed">
              For people with mobility challenges (შშმ პირები), the difference
              between a place existing and being accessible is everything.
            </p>
          </RevealItem>
          <RevealItem>
            <Expandable trigger="why this matters">
              <p>
                Most city maps show you where places are. They don&apos;t tell
                you whether you can actually get there.
              </p>
              <p>
                Midi makes inaccessibility visible. Every post logs how the
                user got there — walk, car, bus, wheelchair accessible. Over
                time that data becomes a living accessibility layer over the
                city. Not curated by a company. Documented by real people.
              </p>
              <p>
                If a place keeps getting posted as car-only, that&apos;s
                information. If a place has never been posted as wheelchair
                accessible, that&apos;s information too. Midi turns individual
                experiences into collective knowledge.
              </p>
              <p>
                Beyond the app: Midi plans to install benches and retractable
                phone holders in public spaces — starting with accessible
                locations, and advocating for the ones that aren&apos;t.
              </p>
            </Expandable>
          </RevealItem>
        </div>

        <RevealItem className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {transport.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl bg-card p-5 border ${
                  item.highlight ? "border-coral" : "border-hairline"
                }`}
              >
                <span className="text-coral">{item.icon}</span>
                <p className="text-ink text-sm mt-3">{item.label}</p>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-coral pl-5 text-ink-soft italic text-lg">
            &quot;If a place keeps getting posted as car-only, that&apos;s
            information.&quot;
          </blockquote>
        </RevealItem>
      </div>
    </Section>
  );
}

function CarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 21" fill="none" aria-hidden="true">
      <path
        d="M17.2793 2C17.7096 2.00002 18.0914 2.27542 18.2275 2.68359L20 8V18C20 18.5523 19.5523 19 19 19H18C17.4477 19 17 18.5523 17 18V16H7V18C7 18.5523 6.55228 19 6 19H5C4.44772 19 4 18.5523 4 18V8L5.77246 2.68359C5.90865 2.27542 6.29039 2.00002 6.7207 2H17.2793ZM7 11C6.17157 11 5.5 11.6716 5.5 12.5C5.5 13.3284 6.17157 14 7 14C7.82843 14 8.5 13.3284 8.5 12.5C8.5 11.6716 7.82843 11 7 11ZM17 11C16.1716 11 15.5 11.6716 15.5 12.5C15.5 13.3284 16.1716 14 17 14C17.8284 14 18.5 13.3284 18.5 12.5C18.5 11.6716 17.8284 11 17 11ZM5.5 8H18.5L17 3H7L5.5 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DisabledIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 20 22" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.39185 3.64927C9.39185 4.56013 8.68709 5.29854 7.81773 5.29854C6.94837 5.29854 6.24362 4.56013 6.24362 3.64927C6.24362 2.7384 6.94837 2 7.81773 2C8.68709 2 9.39185 2.7384 9.39185 3.64927ZM8.77216 17.6493C10.3535 17.6493 11.6355 16.3061 11.6355 14.6493C11.6355 12.9924 10.3535 11.6493 8.77216 11.6493C7.19081 11.6493 5.90887 12.9924 5.90887 14.6493C5.90887 16.3061 7.19081 17.6493 8.77216 17.6493ZM13.3259 13.1493C12.78 11.3283 11.2666 9.95625 9.41691 9.69451L9.16746 9.04927C10.1102 9.49187 11.1933 9.65582 12.1949 9.51962C12.4272 9.48803 12.5899 9.28243 12.5899 9.048V8.74927C12.5899 8.47312 12.3642 8.25171 12.0932 8.19854C11.346 8.05191 10.6023 7.61504 9.91479 7.25485C9.73297 7.1596 9.60252 7.06743 9.52374 7.00552C9.48442 6.97462 9.45827 6.9515 9.44536 6.93966L9.4388 6.93356L9.16746 6.64927L7.19337 6.64927C6.85966 6.64927 6.6196 6.96996 6.71363 7.29015L7.46243 9.83993C5.46363 10.4363 4 12.3637 4 14.6493C4 17.4107 6.13657 19.6493 8.77216 19.6493C11.2467 19.6493 13.2813 17.6759 13.5208 15.1493H13.6509C13.9054 15.1493 14.1193 15.3404 14.1478 15.5933L14.4921 18.6493H15.6441L16 14.9832C15.9176 13.9466 15.0905 13.1493 14.0977 13.1493H13.3259Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MetroIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M11.9995 2C15.2477 2 17.5653 2.56317 18.9517 3.04395C19.9435 3.3879 20.5004 4.35554 20.5005 5.40527V16.1426C20.5005 17.6124 19.4428 18.8335 18.0474 19.0908L19.5562 22H17.6665L15.7778 19.1426H8.22217L6.3335 22H4.44385L5.95166 19.0918C4.55657 18.8342 3.49954 17.6122 3.49951 16.1426V5.40527C3.49962 4.35559 4.05662 3.38794 5.04834 3.04395C6.43468 2.56321 8.75181 2.00005 11.9995 2ZM6.80518 14.3809C6.02283 14.3809 5.38823 15.0207 5.38818 15.8096C5.38822 16.5985 6.02282 17.2382 6.80518 17.2383C7.58757 17.2383 8.22214 16.5985 8.22217 15.8096C8.22213 15.0206 7.58756 14.3809 6.80518 14.3809ZM17.1948 14.3809C16.4125 14.3809 15.7779 15.0207 15.7778 15.8096C15.7779 16.5985 16.4125 17.2382 17.1948 17.2383C17.977 17.2381 18.6108 16.5984 18.6108 15.8096C18.6108 15.0208 17.977 14.3811 17.1948 14.3809ZM6.38818 4.85742C5.83607 4.85762 5.38818 5.30526 5.38818 5.85742V9.57129C5.38822 10.1234 5.83609 10.5711 6.38818 10.5713H10.0552C10.6074 10.5713 11.0551 10.1235 11.0552 9.57129V5.85742C11.0552 5.30514 10.6075 4.85742 10.0552 4.85742H6.38818ZM13.9448 4.85742C13.3926 4.85749 12.9448 5.30518 12.9448 5.85742V9.57129C12.9449 10.1233 13.3919 10.571 13.9438 10.5713H17.6108C18.1631 10.5713 18.6108 10.1235 18.6108 9.57129V5.85742C18.6108 5.30514 18.1631 4.85742 17.6108 4.85742H13.9448Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FootIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 20 23" fill="none" aria-hidden="true">
      <path
        d="M8.11914 6.0293C8.99241 5.69342 9.98183 6.00779 10.501 6.78613L11.9072 8.89551C12.0927 9.17367 12.4049 9.34078 12.7393 9.34082H14.9766C15.1146 9.34082 15.2265 9.45279 15.2266 9.59082V10.3867C15.2264 10.5246 15.1145 10.6367 14.9766 10.6367H11.4443C11.1102 10.6367 10.7978 10.4693 10.6123 10.1914L10.0449 9.34082L9.6709 11.5869C9.63371 11.8101 9.67334 12.0396 9.7832 12.2373L11.6465 15.5918C11.729 15.7403 11.7724 15.9073 11.7725 16.0771V20.75C11.7725 20.888 11.6605 21 11.5225 21H10.2949C10.1569 20.9999 10.0449 20.888 10.0449 20.75V17.4756C10.0449 17.2418 9.96304 17.0156 9.81348 16.8359L7.88574 14.5225L5.78418 20.8291C5.75017 20.9311 5.65442 20.9999 5.54688 21H4.3252C4.16097 21 4.04075 20.8442 4.08301 20.6855L7.4541 8.0459L5.92383 8.65723C5.54423 8.80907 5.295 9.17711 5.29492 9.58594V11.25C5.29492 11.3881 5.18299 11.5 5.04492 11.5H4.25C4.11193 11.5 4 11.3881 4 11.25V8.30078C4 7.88703 4.25447 7.51574 4.64062 7.36719L8.11914 6.0293ZM10.9092 2C11.8629 2.00024 12.6357 2.77374 12.6357 3.72754C12.6356 4.68122 11.8628 5.45386 10.9092 5.4541C9.95532 5.4541 9.18178 4.68136 9.18164 3.72754C9.18164 2.77359 9.95523 2 10.9092 2Z"
        fill="currentColor"
      />
    </svg>
  );
}