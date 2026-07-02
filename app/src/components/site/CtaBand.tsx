import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { PHONE_TEL, WHATSAPP_URL } from "../../lib/site-content";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-lowrider-blue py-20 text-lowrider-cream">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,210,31,0.28),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(223,246,255,0.18),transparent_26rem)]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-7 px-5 text-center sm:px-8">
        <Reveal
          as="h2"
          className="font-display text-5xl leading-[0.9] font-bold tracking-normal uppercase sm:text-7xl"
        >
          Tu carro puede salir brillando hoy.
        </Reveal>
        <Reveal
          delayMs={80}
          as="p"
          className="max-w-2xl font-body text-lg leading-8 text-lowrider-cream/78"
        >
          Agenda por WhatsApp, confirma el horario y llega directo a Lava Auto Lowrider en
          Arraiján.
        </Reveal>
        <Reveal delayMs={160} className="flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-lowrider-yellow px-8 font-display text-base font-semibold tracking-wide text-lowrider-blue-deep uppercase shadow-2xl shadow-lowrider-yellow/20 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
            Agendar por WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-lowrider-cream/35 px-8 font-display text-base font-semibold tracking-wide text-lowrider-cream uppercase transition-colors hover:border-lowrider-yellow hover:text-lowrider-yellow"
          >
            <Phone className="h-5 w-5" strokeWidth={2.2} />
            Llamar ahora
          </a>
        </Reveal>
      </div>
    </section>
  );
}
