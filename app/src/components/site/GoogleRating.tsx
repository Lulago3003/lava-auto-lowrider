import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, MAPS_DIRECTIONS_URL } from "../../lib/site-content";

export function GoogleRating() {
  const fullStars = Math.round(GOOGLE_RATING);

  return (
    <section className="relative overflow-hidden bg-lowrider-yellow py-20 text-lowrider-blue-deep">
      <div aria-hidden className="grain-surface absolute inset-0 opacity-35" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr_auto]">
        <Reveal>
          <div className="font-display text-[clamp(5rem,12vw,10rem)] leading-none font-bold">
            {GOOGLE_RATING.toFixed(1)}
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-8 w-8 ${
                  i < fullStars
                    ? "fill-lowrider-blue-deep text-lowrider-blue-deep"
                    : "text-lowrider-blue-deep/25"
                }`}
              />
            ))}
          </div>
          <h2 className="mt-4 font-display text-4xl leading-none font-bold uppercase sm:text-5xl">
            Reseñas que el cliente puede verificar.
          </h2>
          <p className="mt-4 max-w-xl font-body text-base leading-7 text-lowrider-blue-deep/72">
            {GOOGLE_REVIEW_COUNT} reseñas en Google dan una base real para vender confianza,
            ubicación y contacto directo desde la web.
          </p>
        </Reveal>

        <Reveal delayMs={160}>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-lowrider-blue-deep px-7 font-display text-sm font-semibold tracking-wide text-lowrider-yellow uppercase shadow-xl shadow-lowrider-blue-deep/20 transition-transform hover:scale-[1.03] active:scale-95"
          >
            Ver en Google
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
