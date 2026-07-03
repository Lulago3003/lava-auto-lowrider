import { Check, Crown } from "lucide-react";
import { Reveal } from "./Reveal";
import { MEMBERSHIPS, WHATSAPP_URL } from "../../lib/site-content";

export function Memberships() {
  return (
    <section
      id="membresias"
      className="relative bg-lowrider-blue-deep py-24 text-lowrider-cream sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,210,31,0.18),transparent_28rem),radial-gradient(circle_at_80%_0%,rgba(10,120,227,0.28),transparent_28rem)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-sm font-bold tracking-[0.18em] text-lowrider-yellow uppercase">
            Planes para clientes frecuentes
          </p>
          <h2 className="mt-3 font-display text-3xl leading-[1.04] font-bold tracking-normal text-lowrider-cream uppercase sm:text-[2.6rem]">
            Que el carro nunca llegue sucio.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-8 text-lowrider-cream/72">
            Para quienes manejan todos los días y quieren mantener el carro limpio sin pensarlo
            demasiado.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {MEMBERSHIPS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delayMs={i * 100}
              className={`relative flex min-h-[430px] flex-col overflow-hidden rounded-[2rem] border p-7 ${
                plan.highlighted
                  ? "border-lowrider-yellow bg-lowrider-yellow text-lowrider-blue-deep shadow-2xl shadow-lowrider-yellow/20 lg:-translate-y-5"
                  : "border-lowrider-cream/15 bg-lowrider-cream/8 text-lowrider-cream backdrop-blur"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-lowrider-blue-deep px-3 py-1 font-body text-xs font-bold tracking-wide text-lowrider-yellow uppercase">
                  <Crown className="h-3.5 w-3.5" strokeWidth={2.4} />
                  Más vendido
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold tracking-normal uppercase">
                {plan.name}
              </h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold leading-none">${plan.price}</span>
                <span
                  className={`font-body text-sm ${plan.highlighted ? "text-lowrider-blue-deep/62" : "text-lowrider-cream/55"}`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mt-8 flex flex-1 flex-col gap-4">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 font-body text-sm leading-6">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? "bg-lowrider-blue-deep text-lowrider-yellow"
                          : "bg-lowrider-yellow text-lowrider-blue-deep"
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 rounded-full px-6 py-3 text-center font-display text-sm font-semibold tracking-wide uppercase transition-transform hover:scale-[1.03] active:scale-95 ${
                  plan.highlighted
                    ? "bg-lowrider-blue-deep text-lowrider-yellow"
                    : "border-2 border-lowrider-cream/30 text-lowrider-cream hover:border-lowrider-yellow hover:text-lowrider-yellow"
                }`}
              >
                Pedir este plan
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
