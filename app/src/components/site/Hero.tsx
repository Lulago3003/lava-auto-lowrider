import { Camera, Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { MAPS_NAVIGATE_URL, SITE_IMAGES, WAZE_URL, WHATSAPP_URL } from "../../lib/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[94svh] overflow-hidden bg-lowrider-blue-deep text-lowrider-cream"
    >
      <img
        src={SITE_IMAGES.local}
        alt="Frente real de Lava Auto Lowrider en Arraiján"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,39,95,0.96)_0%,rgba(6,39,95,0.84)_36%,rgba(6,39,95,0.44)_68%,rgba(8,16,31,0.18)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-lowrider-blue-deep via-lowrider-blue-deep/45 to-transparent"
      />
      <div aria-hidden className="water-grid absolute inset-0 -z-10 opacity-20" />

      <div className="mx-auto flex min-h-[94svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-10 sm:px-8 sm:pt-40 lg:pb-16">
        <div className="max-w-4xl">
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-lowrider-yellow/60 bg-lowrider-blue-deep/70 px-4 py-2 font-body text-xs font-bold tracking-[0.14em] text-lowrider-yellow uppercase backdrop-blur">
            <MapPin className="h-4 w-4" strokeWidth={2.2} />
            Arraiján · Panamá Oeste
          </Reveal>

          <Reveal
            delayMs={80}
            as="h1"
            className="mt-7 max-w-4xl font-display text-[clamp(2.35rem,11vw,4.5rem)] leading-[0.92] font-bold tracking-normal uppercase sm:text-[clamp(3.35rem,9vw,8.7rem)] sm:leading-[0.86]"
          >
            Lavado fuerte. Brillo de calle.
          </Reveal>

          <Reveal
            delayMs={160}
            as="p"
            className="mt-6 max-w-2xl font-body text-lg leading-8 text-lowrider-cream/84 sm:text-xl"
          >
            En Lava Auto Lowrider el carro entra sucio y sale con presencia: espuma intensa,
            llantas con brillo e interior atendido. Y mientras esperas, córtate el cabello en la
            barbería de al lado o come algo cerca. Todo en una sola parada.
          </Reveal>

          <Reveal delayMs={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-lowrider-yellow px-7 font-display text-base font-semibold tracking-wide text-lowrider-blue-deep uppercase shadow-2xl shadow-lowrider-yellow/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.3} />
              Agendar por WhatsApp
            </a>
            <a
              href={MAPS_NAVIGATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-lowrider-cream/40 bg-lowrider-blue-deep/35 px-7 font-display text-base font-semibold tracking-wide text-lowrider-cream uppercase backdrop-blur transition-colors hover:border-lowrider-yellow hover:text-lowrider-yellow"
            >
              <Navigation className="h-5 w-5" strokeWidth={2.3} />
              Google Maps
            </a>
            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-lowrider-cream/25 px-7 font-display text-base font-semibold tracking-wide text-lowrider-cream uppercase transition-colors hover:border-lowrider-yellow hover:text-lowrider-yellow"
            >
              <Navigation className="h-5 w-5" strokeWidth={2.3} />
              Waze
            </a>
          </Reveal>
        </div>

        <Reveal
          delayMs={320}
          className="mt-12 grid max-w-5xl grid-cols-1 overflow-hidden rounded-[2rem] border border-lowrider-cream/18 bg-lowrider-cream/94 text-lowrider-blue-deep shadow-2xl shadow-lowrider-black/30 sm:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-lowrider-blue/12 p-5 sm:border-r sm:border-b-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lowrider-yellow text-lowrider-blue-deep">
              <Camera className="h-5 w-5" strokeWidth={2.1} />
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-none">Fotos reales</p>
              <p className="mt-1 font-body text-xs font-semibold text-lowrider-blue-deep/60">
                local, espuma y motor visibles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b border-lowrider-blue/12 p-5 sm:border-r sm:border-b-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lowrider-blue text-lowrider-cream">
              <Clock className="h-5 w-5" strokeWidth={2.1} />
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-none">Turno rápido</p>
              <p className="mt-1 font-body text-xs font-semibold text-lowrider-blue-deep/60">
                confirma horario por WhatsApp
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lowrider-blue-deep text-lowrider-yellow">
              <MapPin className="h-5 w-5" strokeWidth={2.1} />
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-none">Barbería al lado</p>
              <p className="mt-1 font-body text-xs font-semibold text-lowrider-blue-deep/60">
                córtate mientras lavamos tu carro
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
