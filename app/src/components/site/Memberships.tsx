import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { MEMBERSHIPS, WHATSAPP_URL } from "../../lib/site-content";

export function Memberships() {
  return (
    <section id="membresias" className="relative bg-lowrider-charcoal py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-lowrider-yellow uppercase">
            Membresías
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none font-bold text-lowrider-cream uppercase sm:text-5xl">
            Rueda limpio todo el mes
          </h2>
          <p className="mt-4 font-body text-lowrider-cream/70">
            Deja de pagar por lavado. Elige un plan y ahorra cada mes.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {MEMBERSHIPS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delayMs={i * 100}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlighted
                  ? "border-lowrider-yellow bg-lowrider-black shadow-2xl shadow-lowrider-yellow/10 lg:-translate-y-4"
                  : "border-lowrider-line bg-lowrider-black/60"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-lowrider-yellow px-3 py-1 font-body text-xs font-bold tracking-wide text-lowrider-black uppercase">
                  Más elegido
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold tracking-tight text-lowrider-cream uppercase">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-lowrider-yellow">
                  ${plan.price}
                </span>
                <span className="font-body text-sm text-lowrider-cream/50">{plan.period}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 font-body text-sm text-lowrider-cream/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lowrider-yellow" strokeWidth={2.5} />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 rounded-full px-6 py-3 text-center font-display text-sm font-semibold tracking-wide uppercase transition-transform hover:scale-105 active:scale-95 ${
                  plan.highlighted
                    ? "bg-lowrider-yellow text-lowrider-black"
                    : "border-2 border-lowrider-cream/25 text-lowrider-cream hover:border-lowrider-yellow hover:text-lowrider-yellow"
                }`}
              >
                Quiero este plan
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
