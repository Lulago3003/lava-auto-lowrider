import type { ReactNode } from "react";

export function Marquee({ items }: { items: ReactNode[] }) {
  const track = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-10">
          <span className="whitespace-nowrap font-display text-sm font-semibold tracking-[0.25em] uppercase">
            {item}
          </span>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lowrider-black/70" />
        </div>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden
      className="group flex w-full overflow-hidden bg-lowrider-yellow py-3 text-lowrider-black"
    >
      <div className="animate-marquee flex w-max shrink-0 group-hover:[animation-play-state:paused]">
        {track}
        {track}
      </div>
    </div>
  );
}
