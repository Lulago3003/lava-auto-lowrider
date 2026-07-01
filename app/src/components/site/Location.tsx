import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  ADDRESS_LINE,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "../../lib/site-content";

export function Location() {
  return (
    <section id="ubicacion" className="relative bg-lowrider-charcoal py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-5">
        <Reveal className="flex flex-col justify-between rounded-3xl border border-lowrider-line bg-lowrider-black p-8 lg:col-span-2">
          <div>
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-lowrider-yellow uppercase">
              Ubicación
            </p>
            <h2 className="mt-3 font-display text-3xl leading-none font-bold text-lowrider-cream uppercase sm:text-4xl">
              Te esperamos en Arraiján
            </h2>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-lowrider-yellow" strokeWidth={2} />
                <p className="font-body text-sm text-lowrider-cream/75">{ADDRESS_LINE}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-lowrider-yellow" strokeWidth={2} />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-body text-sm text-lowrider-cream/75 hover:text-lowrider-yellow"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-lowrider-yellow" strokeWidth={2} />
                <p className="font-body text-sm text-lowrider-cream/75">
                  Escríbenos por WhatsApp para confirmar el horario de hoy
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-lowrider-yellow px-6 py-3 text-center font-display text-sm font-semibold tracking-wide text-lowrider-black uppercase transition-transform hover:scale-105 active:scale-95"
            >
              Agendar por WhatsApp
            </a>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-lowrider-cream/25 px-6 py-3 text-center font-display text-sm font-semibold tracking-wide text-lowrider-cream uppercase transition-colors hover:border-lowrider-yellow hover:text-lowrider-yellow"
            >
              Cómo llegar
            </a>
          </div>
        </Reveal>

        <Reveal
          delayMs={120}
          className="overflow-hidden rounded-3xl border border-lowrider-line bg-lowrider-black lg:col-span-3"
        >
          <iframe
            title="Ubicación de Lava Auto Lowrider en Google Maps"
            src={MAPS_EMBED_SRC}
            className="h-[380px] w-full grayscale-[15%] sm:h-full sm:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
