import { Camera, Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { SoapCar } from "./SoapCar";
import { MAPS_NAVIGATE_URL, SITE_IMAGES, WAZE_URL, WHATSAPP_URL } from "../../lib/site-content";

const BUBBLES = [
  { x: "6%", s: "22px", d: "13s", delay: "0s" },
  { x: "14%", s: "34px", d: "17s", delay: "3s" },
  { x: "24%", s: "14px", d: "11s", delay: "6s" },
  { x: "38%", s: "26px", d: "15s", delay: "1.5s" },
  { x: "52%", s: "18px", d: "12s", delay: "8s" },
  { x: "64%", s: "38px", d: "18s", delay: "4s" },
  { x: "74%", s: "16px", d: "10s", delay: "2s" },
  { x: "84%", s: "28px", d: "16s", delay: "7s" },
  { x: "93%", s: "20px", d: "13s", delay: "5s" },
] as const;

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
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_42%,rgba(6,39,95,0.55)_0%,rgba(6,39,95,0.82)_58%,rgba(8,16,31,0.92)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-lowrider-blue-deep via-lowrider-blue-deep/45 to-transparent"
      />
      <div aria-hidden className="water-grid absolute inset-0 -z-10 opacity-20" />

      {/* Burbujas de jabón subiendo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="hero-bubble"
            style={
              { "--x": b.x, "--s": b.s, "--d": b.d, "--delay": b.delay } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[94svh] max-w-7xl flex-col items-center justify-center px-5 pt-28 pb-12 text-center sm:px-8 sm:pt-32">
        <Reveal className="inline-flex items-center gap-2 rounded-full border border-lowrider-yellow/60 bg-lowrider-blue-deep/70 px-4 py-2 font-body text-xs font-bold tracking-[0.14em] text-lowrider-yellow uppercase backdrop-blur">
          <MapPin className="h-4 w-4" strokeWidth={2.2} />
          Arraiján · Panamá Oeste
        </Reveal>

        {/* El letrero: nombre al centro, carros enjabonados a los lados */}
        <Reveal
          delayMs={80}
          className="mt-7 flex w-full max-w-4xl flex-col items-center gap-4 rounded-3xl border-[3px] border-lowrider-yellow bg-[linear-gradient(160deg,rgba(6,39,95,0.88),rgba(9,85,184,0.72))] px-5 py-6 shadow-[0_0_0_6px_rgba(6,39,95,0.55),0_30px_80px_rgba(8,16,31,0.45)] backdrop-blur-sm sm:flex-row sm:justify-center sm:gap-8 sm:px-10 sm:py-9"
        >
          <SoapCar className="w-32 shrink-0 drop-shadow-[0_12px_22px_rgba(8,16,31,0.4)] sm:w-[clamp(84px,13vw,175px)]" />
          <div className="grid justify-items-center gap-1.5">
            <span className="font-display text-xl font-semibold tracking-[0.34em] text-lowrider-cream uppercase sm:text-[clamp(1.15rem,2.6vw,2rem)]">
              Lava Auto
            </span>
            <h1 className="font-display text-[clamp(2.3rem,12vw,3rem)] leading-[0.94] font-bold text-lowrider-yellow uppercase [text-shadow:0_3px_0_rgba(6,39,95,0.85),0_14px_34px_rgba(8,16,31,0.5)] sm:text-[clamp(2.5rem,7vw,5.4rem)]">
              Lowrider
            </h1>
            <span className="mt-1 font-display text-xs font-semibold tracking-[0.22em] text-lowrider-cream/85 uppercase sm:text-[clamp(0.8rem,1.4vw,1.02rem)]">
              Lavado fuerte · Brillo de calle
            </span>
          </div>
          <SoapCar
            flipped
            className="hidden w-32 shrink-0 drop-shadow-[0_12px_22px_rgba(8,16,31,0.4)] sm:block sm:w-[clamp(84px,13vw,175px)]"
          />
        </Reveal>

        <Reveal
          delayMs={160}
          as="p"
          className="mt-6 max-w-2xl font-body text-base leading-7 text-lowrider-cream/84 sm:text-lg sm:leading-8"
        >
          En Lava Auto Lowrider el carro entra sucio y sale con presencia: espuma intensa,
          llantas con brillo e interior atendido. Y mientras esperas, córtate el cabello en la
          barbería de al lado o come algo cerca. Todo en una sola parada.
        </Reveal>

        <Reveal delayMs={240} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
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

        <Reveal
          delayMs={320}
          className="mt-12 grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-[2rem] border border-lowrider-cream/18 bg-lowrider-cream/94 text-left text-lowrider-blue-deep shadow-2xl shadow-lowrider-black/30 sm:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-lowrider-blue/12 p-5 sm:border-r sm:border-b-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lowrider-yellow text-lowrider-blue-deep">
              <Camera className="h-5 w-5" strokeWidth={2.1} />
            </span>
            <div>
              <p className="font-display text-xl font-bold leading-none">Fotos reales</p>
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
              <p className="font-display text-xl font-bold leading-none">Turno rápido</p>
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
              <p className="font-display text-xl font-bold leading-none">Barbería al lado</p>
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
