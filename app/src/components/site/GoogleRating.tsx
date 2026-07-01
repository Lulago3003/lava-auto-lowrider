import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, MAPS_DIRECTIONS_URL } from "../../lib/site-content";

export function GoogleRating() {
  const fullStars = Math.round(GOOGLE_RATING);

  return (
    <section className="relative bg-lowrider-black py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal className="flex flex-col items-center gap-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-8 w-8 ${
                  i < fullStars ? "fill-lowrider-yellow text-lowrider-yellow" : "text-lowrider-line"
                }`}
              />
            ))}
          </div>
          <p className="font-display text-2xl font-semibold text-lowrider-cream">
            {GOOGLE_RATING.toFixed(1)} en Google
            <span className="text-lowrider-cream/50"> · {GOOGLE_REVIEW_COUNT} reseñas</span>
          </p>
          <p className="max-w-md font-body text-sm text-lowrider-cream/60">
            Cada semana lavamos más carros en Arraiján. Súmate a los clientes
            que ya nos calificaron y ayúdanos a llegar a cien reseñas.
          </p>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full border-2 border-lowrider-yellow/60 px-6 py-3 font-display text-sm font-semibold tracking-wide text-lowrider-yellow uppercase transition-colors hover:bg-lowrider-yellow hover:text-lowrider-black"
          >
            Ver reseñas en Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
