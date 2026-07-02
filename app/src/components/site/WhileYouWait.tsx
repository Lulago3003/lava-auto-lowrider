import { Scissors, Armchair, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { WAIT_PERKS } from "../../lib/site-content";

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
            <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[0.9] font-bold tracking-normal text-lowrider-blue-deep uppercase sm:text-6xl">
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
                className={`flex min-h-[300px] flex-col justify-between rounded-[2rem] border p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                  perk.highlighted
                    ? "border-lowrider-yellow bg-lowrider-blue-deep text-lowrider-cream shadow-lowrider-blue/15"
                    : "border-lowrider-blue/14 bg-white text-lowrider-blue-deep shadow-lowrider-blue/10"
                }`}
              >
                <div>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      perk.highlighted
                        ? "bg-lowrider-yellow text-lowrider-blue-deep"
                        : "bg-lowrider-blue text-lowrider-cream"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-none font-semibold tracking-normal uppercase">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
