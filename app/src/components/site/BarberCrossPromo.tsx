import { Scissors, Timer, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "../../lib/site-content";

export function BarberCrossPromo() {
  return (
    <section id="barberia" className="relative overflow-hidden bg-lowrider-black py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-lowrider-yellow uppercase">
            Combo de barrio
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] font-bold text-lowrider-cream uppercase sm:text-5xl">
            Lava el carro.
            <br />
            <span className="text-shine">Arréglate tú también.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-lowrider-cream/70">
            Justo al lado de nuestro local está la barbería del barrio. Deja
            tu carro en nuestras manos, cruza la puerta de al lado, y sal con
            los dos —tú y tu carro— listos para la calle.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-lowrider-yellow px-8 py-4 font-display text-base font-semibold tracking-wide text-lowrider-black uppercase transition-transform hover:scale-105 active:scale-95"
          >
            Aprovechar el combo
          </a>
        </Reveal>

        <Reveal delayMs={120} className="relative">
          <div className="grain-surface relative overflow-hidden rounded-3xl border border-lowrider-line bg-lowrider-charcoal p-10">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-lowrider-yellow/10 blur-3xl"
            />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lowrider-yellow/15 text-lowrider-yellow">
                  <Sparkles className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-lowrider-cream uppercase">
                    Lavado + Encerado
                  </p>
                  <p className="font-body text-sm text-lowrider-cream/60">Tu carro, listo mientras esperas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lowrider-yellow/15 text-lowrider-yellow">
                  <Scissors className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-lowrider-cream uppercase">
                    Corte en la barbería vecina
                  </p>
                  <p className="font-body text-sm text-lowrider-cream/60">A un paso de la puerta, sin perder tiempo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lowrider-yellow/15 text-lowrider-yellow">
                  <Timer className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-lowrider-cream uppercase">
                    Cero tiempo perdido
                  </p>
                  <p className="font-body text-sm text-lowrider-cream/60">Sales con el carro y el look al mismo tiempo</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
