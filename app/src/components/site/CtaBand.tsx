import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "../../lib/site-content";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-lowrider-yellow py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 grain-surface opacity-40" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <Reveal as="h2" className="font-display text-4xl leading-none font-bold text-lowrider-black uppercase sm:text-5xl">
          Tu carro se lo merece
        </Reveal>
        <Reveal delayMs={80} as="p" className="max-w-md font-body text-lowrider-black/70">
          Escríbenos ahora mismo y aparta tu turno en Lava Auto Lowrider,
          Arraiján.
        </Reveal>
        <Reveal delayMs={160}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-lowrider-black px-9 py-4 font-display text-base font-semibold tracking-wide text-lowrider-yellow uppercase transition-transform hover:scale-105 active:scale-95"
          >
            Agendar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
