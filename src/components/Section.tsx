import { Reveal, RevealItem } from "./Reveal";

export function Section({
  id,
  index,
  title,
  className,
  fullHeight = false,
  background,
  children,
}: {
  id: string;
  index: string;
  title: string;
  className?: string;
  fullHeight?: boolean;
  /** Optional full-bleed layer painted behind the section's content (e.g. a blurred background image). */
  background?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 md:px-16 ${
        fullHeight ? "min-h-screen flex flex-col justify-center" : "py-24 md:py-32"
      } ${className ?? ""}`}
    >
      {background}
      <div className="relative max-w-6xl mx-auto w-full">
        <Reveal>
          <RevealItem className="flex items-center gap-3 mb-10 text-sm tracking-[0.2em] font-body">
            <span className="text-coral font-semibold">{index}</span>
            <span className="h-px w-8 bg-hairline" />
            <span className="uppercase text-ink-muted">{title}</span>
          </RevealItem>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
