import { Camera, Droplets, Gauge, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE_IMAGES, WHATSAPP_URL } from "../../lib/site-content";

const PROOF_ITEMS = [
  {
    title: "Espuma completa",
    image: SITE_IMAGES.foamLight,
    icon: Droplets,
  },
  {
    title: "Brillo exterior",
    image: SITE_IMAGES.foamDark,
    icon: Sparkles,
  },
  {
    title: "Motor presentable",
    image: SITE_IMAGES.engine,
    icon: Gauge,
  },
];

export function ProofGallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-lowrider-cream py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal className="lg:sticky lg:top-28">
          <p className="font-body text-sm font-bold tracking-[0.18em] text-lowrider-blue uppercase">
            Prueba visual
          </p>
          <h2 className="mt-3 font-display text-3xl leading-[1.04] font-bold tracking-normal text-lowrider-blue-deep uppercase sm:text-[2.6rem]">
            Ves el proceso antes de llegar.
          </h2>
          <p className="mt-6 max-w-md font-body text-lg leading-8 text-lowrider-blue-deep/72">
            Fotos reales del local y del proceso para que sepas dónde llegas y qué acabado puedes
            esperar.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lowrider-blue px-8 py-4 font-display text-base font-semibold tracking-wide text-lowrider-cream uppercase shadow-xl shadow-lowrider-blue/20 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Camera className="h-5 w-5" strokeWidth={2.2} />
            Enviar mensaje
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal className="photo-sheen relative min-h-[420px] overflow-hidden rounded-[2rem] border border-lowrider-blue/14 bg-lowrider-blue-deep sm:col-span-2">
            <img
              src={SITE_IMAGES.local}
              alt="Local de Lava Auto Lowrider"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lowrider-blue-deep/88 via-lowrider-blue-deep/12 to-transparent" />
            <div className="absolute right-6 bottom-6 left-6">
              <p className="font-display text-2xl leading-none font-bold text-lowrider-cream uppercase sm:text-3xl">
                El punto es reconocible.
              </p>
              <p className="mt-2 max-w-md font-body text-sm leading-6 text-lowrider-cream/75">
                Azul, amarillo y entrada directa: el mismo color de la marca se convierte en la web.
              </p>
            </div>
          </Reveal>

          {PROOF_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delayMs={(index + 1) * 90}
                className="group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-lowrider-blue/14 bg-lowrider-blue-deep"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lowrider-blue-deep/90 via-lowrider-blue-deep/18 to-transparent" />
                <div className="absolute right-5 bottom-5 left-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lowrider-yellow text-lowrider-blue-deep">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </span>
                  <p className="font-display text-2xl font-semibold text-lowrider-cream uppercase">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
