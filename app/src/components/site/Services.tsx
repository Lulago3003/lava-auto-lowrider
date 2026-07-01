import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES, WHATSAPP_URL } from "../../lib/site-content";

export function Services() {
  return (
    <section id="servicios" className="relative bg-lowrider-black py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-lowrider-yellow uppercase">
            Servicios
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none font-bold text-lowrider-cream uppercase sm:text-5xl">
            Elige tu nivel de brillo
          </h2>
          <p className="mt-4 font-body text-lowrider-cream/70">
            Precios pensados para el bolsillo panameño. Sin sorpresas, sin
            letras pequeñas.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.name}
              delayMs={i * 90}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-lowrider-line bg-lowrider-charcoal p-6 transition-colors hover:border-lowrider-yellow/60"
            >
              <div>
                <Sparkles className="h-6 w-6 text-lowrider-yellow" strokeWidth={1.75} />
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-lowrider-cream uppercase">
                  {service.name}
                </h3>
                <p className="mt-2 font-body text-sm text-lowrider-cream/65">{service.description}</p>
              </div>
              <div className="mt-8 flex items-end justify-between">
                <span className="font-display text-3xl font-bold text-lowrider-yellow">
                  ${service.price}
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs font-semibold tracking-wide text-lowrider-cream/70 uppercase transition-colors group-hover:text-lowrider-yellow"
                >
                  Agendar →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delayMs={360}
          className="mt-6 text-center font-body text-xs text-lowrider-cream/40"
        >
          Precios de referencia — confírmalos por WhatsApp según el tamaño y
          estado de tu vehículo.
        </Reveal>
      </div>
    </section>
  );
}
