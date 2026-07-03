import { ArrowUpRight, Camera, MapPinned, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { MAPS_DIRECTIONS_URL, PHONE_TEL, WHATSAPP_URL } from "../../lib/site-content";

const PROOF_POINTS = [
  {
    title: "Local visible",
    description: "El punto se reconoce desde la calle y se abre directo en Google Maps.",
    icon: MapPinned,
  },
  {
    title: "Proceso claro",
    description: "Espuma, brillo, motor e interior se muestran con fotos del negocio.",
    icon: Camera,
  },
  {
    title: "Contacto directo",
    description: "WhatsApp y llamada quedan listos para confirmar horario al momento.",
    icon: MessageCircle,
  },
] as const;

export function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-lowrider-yellow py-20 text-lowrider-blue-deep">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 [background:repeating-linear-gradient(135deg,rgba(6,39,95,0.22)_0_1px,transparent_1px_18px),linear-gradient(90deg,rgba(255,255,255,0.34),transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="font-body text-xs font-black tracking-[0.16em] text-lowrider-blue uppercase">
            Prueba real, no promesa
          </span>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-normal uppercase">
            Ves el local antes de escribir.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-7 text-lowrider-blue-deep/76 sm:text-lg">
            La confianza viene de lo visible: fotos reales, ubicación directa en Maps y un contacto
            que responde sin hacerte perder tiempo.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-lowrider-blue-deep px-7 font-display text-sm font-semibold tracking-wide text-lowrider-yellow uppercase shadow-xl shadow-lowrider-blue-deep/20 transition-transform hover:scale-[1.03] active:scale-95"
            >
              Ver ubicación
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-lowrider-blue-deep/40 px-7 font-display text-sm font-semibold tracking-wide text-lowrider-blue-deep uppercase transition-colors hover:border-lowrider-blue-deep"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              Llamar
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PROOF_POINTS.map((point, index) => {
            const Icon = point.icon;

            return (
              <Reveal
                key={point.title}
                delayMs={80 + index * 80}
                className="min-h-44 rounded-lg bg-lowrider-blue-deep p-6 text-lowrider-cream shadow-2xl shadow-lowrider-blue-deep/18"
              >
                <Icon className="mb-5 h-7 w-7 text-lowrider-yellow" strokeWidth={2.2} />
                <h3 className="font-display text-3xl leading-none font-bold uppercase text-lowrider-yellow">
                  {point.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-6 font-semibold text-lowrider-cream/78">
                  {point.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
      <a className="sr-only" href={WHATSAPP_URL}>
        Agendar por WhatsApp
      </a>
    </section>
  );
}
