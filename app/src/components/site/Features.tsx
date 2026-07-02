import { MapPin, MessageCircle, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { FEATURES } from "../../lib/site-content";

const ICONS: LucideIcon[] = [MapPin, Zap, ShieldCheck, MessageCircle];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-lowrider-blue-deep py-24 text-lowrider-cream sm:py-28">
      <div aria-hidden className="water-grid absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-body text-sm font-bold tracking-[0.18em] text-lowrider-yellow uppercase">
            Por qué funciona
          </p>
          <h2 className="mt-3 font-display text-5xl leading-[0.9] font-bold tracking-normal uppercase sm:text-6xl">
            La confianza está en los detalles.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-lowrider-cream/15 bg-lowrider-cream/15 sm:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <Reveal key={feature.title} delayMs={i * 80} className="bg-lowrider-blue-deep p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-lowrider-yellow text-lowrider-blue-deep">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-normal uppercase">
                      {feature.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-6 text-lowrider-cream/68">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
