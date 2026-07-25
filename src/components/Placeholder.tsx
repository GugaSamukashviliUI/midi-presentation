export function Placeholder({
  label,
  note,
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  note?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} rounded-2xl border border-dashed border-hairline bg-veil flex flex-col items-center justify-center gap-2 text-center px-6 ${
        className ?? ""
      }`}
    >
      <span className="text-xs tracking-[0.15em] uppercase text-ink-muted">
        {label}
      </span>
      {note && <span className="text-xs text-ink-faint max-w-[85%]">{note}</span>}
    </div>
  );
}

export function PhonePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`shrink-0 w-[220px] aspect-[9/19] rounded-[2rem] border border-hairline bg-veil flex flex-col ${
        className ?? ""
      }`}
    >
      <div className="mx-auto mt-3 w-16 h-4 rounded-full bg-hairline" />
      <div className="flex-1 flex items-center justify-center px-4 text-center">
        <span className="text-xs tracking-[0.1em] uppercase text-ink-faint">
          {label}
        </span>
      </div>
    </div>
  );
}
