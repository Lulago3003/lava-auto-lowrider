import { PHONE_DISPLAY, PHONE_TEL, ADDRESS_LINE, WHATSAPP_URL, BUSINESS_NAME } from "../../lib/site-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lowrider-line bg-lowrider-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-lowrider-yellow font-display text-lg font-bold text-lowrider-yellow italic">
            L
          </span>
          <span className="font-display text-lg tracking-tight text-lowrider-cream uppercase">
            Lava Auto <span className="text-lowrider-yellow">Lowrider</span>
          </span>
        </a>

        <p className="font-body text-sm text-lowrider-cream/60">{ADDRESS_LINE}</p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-sm text-lowrider-cream/60">
          <a href={`tel:${PHONE_TEL}`} className="hover:text-lowrider-yellow">
            {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-lowrider-yellow">
            WhatsApp
          </a>
          <a href="#servicios" className="hover:text-lowrider-yellow">
            Servicios
          </a>
          <a href="#membresias" className="hover:text-lowrider-yellow">
            Membresías
          </a>
        </div>

        <p className="font-body text-xs text-lowrider-cream/35">
          © {year} {BUSINESS_NAME}. Arraiján, Panamá Oeste.
        </p>
      </div>
    </footer>
  );
}
