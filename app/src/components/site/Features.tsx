import { MapPin, Scissors, ShieldCheck, MessageCircle, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { FEATURES } from "../../lib/site-content";

const ICONS: LucideIcon[] = [MapPin, Scissors, ShieldCheck, MessageCircle];

export function Features() {
  return (
    <section className="relative bg-lowrider-charcoal py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-lowrider-yellow uppercase">
            Por qué aquí
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none font-bold text-lowrider-cream uppercase sm:text-5xl">
            Más que un lavado
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-lowrider-line bg-lowrider-line sm:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <Reveal
                key={feature.title}
                delayMs={i * 80}
                className="flex flex-col gap-4 bg-lowrider-charcoal p-8"
              >
                <Icon className="h-7 w-7 text-lowrider-yellow" strokeWidth={1.75} />
                <h3 className="font-display text-lg font-semibold tracking-tight text-lowrider-cream uppercase">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-lowrider-cream/65">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
