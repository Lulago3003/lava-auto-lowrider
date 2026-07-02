import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES, WHATSAPP_URL } from "../../lib/site-content";

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-lowrider-cream py-24 sm:py-28">
      <div aria-hidden className="water-grid absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="font-body text-sm font-bold tracking-[0.18em] text-lowrider-blue uppercase">
              Servicios
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[0.9] font-bold tracking-normal text-lowrider-blue-deep uppercase sm:text-6xl">
              El brillo no se promete. Se ve.
            </h2>
          </Reveal>
          <Reveal
            delayMs={100}
            as="p"
            className="max-w-2xl font-body text-lg leading-8 text-lowrider-blue-deep/72"
          >
            Elige un lavado rápido, completo o de mayor detalle. Todo está pensado para que el
            carro salga limpio, presentable y listo para rodar.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.name}
              delayMs={i * 90}
              className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-lowrider-blue/14 bg-lowrider-blue-deep shadow-xl shadow-lowrider-blue/10 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="photo-sheen relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.name} en Lava Auto Lowrider`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lowrider-blue-deep via-lowrider-blue-deep/15 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-lowrider-yellow px-3 py-1 font-display text-sm font-bold text-lowrider-blue-deep">
                  Desde ${service.price}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <Sparkles className="h-6 w-6 text-lowrider-yellow" strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-2xl leading-none font-semibold tracking-normal text-lowrider-cream uppercase">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-6 text-lowrider-cream/72">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-between rounded-full border border-lowrider-cream/25 px-5 py-3 font-display text-sm font-semibold tracking-wide text-lowrider-cream uppercase transition-colors group-hover:border-lowrider-yellow group-hover:bg-lowrider-yellow group-hover:text-lowrider-blue-deep"
                >
                  Cotizar ahora
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delayMs={360}
          className="mt-8 text-center font-body text-sm text-lowrider-blue-deep/58"
        >
          Precios de referencia. Confírmalo por WhatsApp según tamaño y estado del vehículo.
        </Reveal>
      </div>
    </section>
  );
}
