import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, WHATSAPP_URL } from "../../lib/site-content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-lowrider-black pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Signature hero effect: layered glows + spinning hubcap rings + grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-18%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-lowrider-yellow/20 blur-[120px]" />
        <div className="animate-float absolute top-24 -right-24 h-[340px] w-[340px] rounded-full border-[3px] border-lowrider-yellow/25 sm:right-[-6rem]" />
        <div className="absolute top-40 -right-10 h-[220px] w-[220px] rounded-full border border-lowrider-yellow/15 sm:right-4" />
        <div className="absolute inset-x-0 top-0 h-full grain-surface" />
        <div className="absolute top-[-10%] right-[-10%] h-[420px] w-[420px] -rotate-12 skew-y-6 bg-gradient-to-br from-lowrider-yellow/10 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal className="flex items-center gap-2 rounded-full border border-lowrider-yellow/40 bg-lowrider-charcoal/60 px-4 py-1.5 font-body text-xs font-semibold tracking-[0.2em] text-lowrider-yellow uppercase">
          Arraiján · Panamá Oeste
        </Reveal>

        <Reveal delayMs={80} as="h1" className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] font-bold tracking-tight text-lowrider-cream uppercase sm:text-7xl">
          Tu carro brilla,
          <br />
          <span className="text-shine">tu estilo impone</span>
        </Reveal>

        <Reveal
          delayMs={160}
          as="p"
          className="mt-6 max-w-xl font-body text-lg text-lowrider-cream/70 sm:text-xl"
        >
          Lavado, encerado y detailing con actitud lowrider. Agenda por WhatsApp
          y, mientras tu carro queda como nuevo, córtate el cabello justo al
          lado.
        </Reveal>

        <Reveal delayMs={240} className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lowrider-yellow px-8 py-4 font-display text-base font-semibold tracking-wide text-lowrider-black uppercase shadow-lg shadow-lowrider-yellow/20 transition-transform hover:scale-105 active:scale-95"
          >
            Agendar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="rounded-full border-2 border-lowrider-cream/25 px-8 py-4 font-display text-base font-semibold tracking-wide text-lowrider-cream uppercase transition-colors hover:border-lowrider-yellow hover:text-lowrider-yellow"
          >
            Ver servicios
          </a>
        </Reveal>

        <Reveal
          delayMs={320}
          className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-lowrider-line pt-8 sm:gap-8"
        >
          <div>
            <div className="flex items-center justify-center gap-1 font-display text-3xl font-bold text-lowrider-yellow sm:text-4xl">
              <Counter value={GOOGLE_RATING} decimals={1} />
              <Star className="h-6 w-6 fill-lowrider-yellow text-lowrider-yellow" />
            </div>
            <p className="mt-1 font-body text-xs tracking-wide text-lowrider-cream/60 uppercase">
              {GOOGLE_REVIEW_COUNT} reseñas en Google
            </p>
          </div>
          <div>
            <div className="font-display text-3xl font-bold text-lowrider-yellow sm:text-4xl">
              <Counter value={15} suffix="min" />
            </div>
            <p className="mt-1 font-body text-xs tracking-wide text-lowrider-cream/60 uppercase">
              Lavado básico express
            </p>
          </div>
          <div>
            <div className="font-display text-3xl font-bold text-lowrider-yellow sm:text-4xl">
              <Counter value={3} suffix="" />
            </div>
            <p className="mt-1 font-body text-xs tracking-wide text-lowrider-cream/60 uppercase">
              Planes de membresía
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
