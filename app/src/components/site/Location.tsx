import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  ADDRESS_LINE,
  MAPS_EMBED_SRC,
  MAPS_NAVIGATE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WAZE_URL,
  WHATSAPP_URL,
} from "../../lib/site-content";

export function Location() {
  return (
    <section id="ubicacion" className="relative overflow-hidden bg-lowrider-cream py-24 sm:py-28">
      <div aria-hidden className="water-grid absolute inset-0 opacity-45" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-5">
        <Reveal className="flex flex-col justify-between rounded-[2rem] border border-lowrider-blue/14 bg-lowrider-blue-deep p-8 text-lowrider-cream shadow-2xl shadow-lowrider-blue/15 lg:col-span-2">
          <div>
            <p className="font-body text-sm font-bold tracking-[0.18em] text-lowrider-yellow uppercase">
              Ubicación
            </p>
            <h2 className="mt-3 font-display text-3xl leading-[1.04] font-bold tracking-normal uppercase sm:text-4xl">
              Llegas directo. Sales brillando.
            </h2>

            <div className="mt-9 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-lowrider-yellow"
                  strokeWidth={2.2}
                />
                <p className="font-body text-sm leading-6 text-lowrider-cream/78">{ADDRESS_LINE}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-lowrider-yellow" strokeWidth={2.2} />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-body text-sm text-lowrider-cream/78 hover:text-lowrider-yellow"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-lowrider-yellow" strokeWidth={2.2} />
                <p className="font-body text-sm leading-6 text-lowrider-cream/78">
                  Confirma el horario de hoy por WhatsApp antes de llegar.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lowrider-yellow px-6 font-display text-sm font-semibold tracking-wide text-lowrider-blue-deep uppercase transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
              WhatsApp
            </a>
            <a
              href={MAPS_NAVIGATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-lowrider-cream/28 px-6 font-display text-sm font-semibold tracking-wide text-lowrider-cream uppercase transition-colors hover:border-lowrider-yellow hover:text-lowrider-yellow"
            >
              <Navigation className="h-4 w-4" strokeWidth={2.2} />
              Ir con Google Maps
            </a>
            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#33ccff] px-6 font-display text-sm font-semibold tracking-wide text-lowrider-blue-deep uppercase transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Navigation className="h-4 w-4" strokeWidth={2.2} />
              Ir con Waze
            </a>
          </div>
        </Reveal>

        <Reveal
          delayMs={120}
          className="overflow-hidden rounded-[2rem] border border-lowrider-blue/14 bg-lowrider-blue-deep shadow-2xl shadow-lowrider-blue/15 lg:col-span-3"
        >
          <iframe
            title="Ubicación de Lava Auto Lowrider en Google Maps"
            src={MAPS_EMBED_SRC}
            className="h-[430px] w-full saturate-[1.08] sm:h-full sm:min-h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
