import { Scissors, Armchair, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { NEARBY_SPOTS, WAIT_PERKS } from "../../lib/site-content";

const ICONS: LucideIcon[] = [Scissors, Armchair, UtensilsCrossed];

export function WhileYouWait() {
  return (
    <section
      id="mientras-esperas"
      className="relative overflow-hidden bg-lowrider-cream py-24 sm:py-28"
    >
      <div aria-hidden className="water-grid absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="font-body text-sm font-bold tracking-[0.18em] text-lowrider-blue uppercase">
              Mientras esperas
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-[1.04] font-bold tracking-normal text-lowrider-blue-deep uppercase sm:text-[2.6rem]">
              Tu carro se lava. Tú no pierdes el tiempo.
            </h2>
          </Reveal>
          <Reveal
            delayMs={100}
            as="p"
            className="max-w-2xl font-body text-lg leading-8 text-lowrider-blue-deep/72"
          >
            Esto no es solo un lavado: es una parada completa. Deja el carro en buenas manos y
            aprovecha todo lo que hay a pasos del local.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {WAIT_PERKS.map((perk, i) => {
            const Icon = ICONS[i] ?? Scissors;
            return (
              <Reveal
                key={perk.title}
                delayMs={i * 100}
                className={`flex flex-col overflow-hidden rounded-[2rem] border shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                  perk.highlighted
                    ? "border-lowrider-yellow bg-lowrider-blue-deep text-lowrider-cream shadow-lowrider-blue/15"
                    : "border-lowrider-blue/14 bg-white text-lowrider-blue-deep shadow-lowrider-blue/10"
                }`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={perk.image}
                    alt={perk.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span
                    className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full shadow-lg ${
                      perk.highlighted
                        ? "bg-lowrider-yellow text-lowrider-blue-deep"
                        : "bg-lowrider-blue text-lowrider-cream"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h3 className="font-display text-2xl leading-none font-semibold tracking-normal uppercase">
                      {perk.title}
                    </h3>
                    <p
                      className={`mt-4 font-body text-sm leading-6 ${
                        perk.highlighted ? "text-lowrider-cream/75" : "text-lowrider-blue-deep/70"
                      }`}
                    >
                      {perk.description}
                    </p>
                  </div>
                  <span
                    className={`mt-6 inline-flex w-fit rounded-full px-4 py-1.5 font-body text-xs font-bold tracking-wide uppercase ${
                      perk.highlighted
                        ? "bg-lowrider-yellow/16 text-lowrider-yellow"
                        : "bg-lowrider-blue/10 text-lowrider-blue"
                    }`}
                  >
                    {perk.tag}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delayMs={200}
          className="mt-9 flex flex-wrap items-center gap-2.5 rounded-[2rem] bg-lowrider-blue-deep p-6 text-lowrider-cream shadow-xl shadow-lowrider-blue/15 sm:p-7"
        >
          <span className="mr-2 font-display text-lg font-bold tracking-wide text-lowrider-yellow uppercase">
            Todo queda cerca
          </span>
          {NEARBY_SPOTS.map((spot) => (
            <span
              key={spot.name}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-body text-xs font-bold sm:text-[13px] ${
                spot.highlighted
                  ? "border-lowrider-yellow bg-lowrider-yellow text-lowrider-blue-deep"
                  : "border-lowrider-cream/25 text-lowrider-cream/90"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  spot.highlighted ? "bg-lowrider-blue-deep" : "bg-lowrider-yellow"
                }`}
              />
              {spot.name}
            </span>
          ))}
          <p className="mt-2 w-full font-body text-xs font-semibold text-lowrider-cream/60">
            Estamos sobre la Calle 11 de Octubre: deja el carro, haz tus vueltas en la zona y
            recoge tu carro brillando.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
