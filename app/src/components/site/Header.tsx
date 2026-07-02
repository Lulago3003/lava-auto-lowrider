import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../../lib/site-content";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#membresias", label: "Planes" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const brandTone = scrolled ? "text-lowrider-blue-deep" : "text-lowrider-cream";
  const linkTone = scrolled ? "text-lowrider-blue-deep/75" : "text-lowrider-cream/88";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-lowrider-blue/15 bg-lowrider-cream/92 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-display text-lg font-bold italic transition-colors ${
              scrolled
                ? "border-lowrider-blue bg-lowrider-yellow text-lowrider-blue-deep"
                : "border-lowrider-yellow bg-lowrider-blue-deep/70 text-lowrider-yellow"
            }`}
          >
            L
          </span>
          <span
            className={`font-display text-lg tracking-tight uppercase transition-colors ${brandTone}`}
          >
            Lava Auto <span className="text-lowrider-yellow">Lowrider</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-semibold tracking-wide transition-colors hover:text-lowrider-yellow-deep ${linkTone}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className={`flex items-center gap-2 font-body text-sm font-semibold transition-colors hover:text-lowrider-yellow-deep ${linkTone}`}
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lowrider-yellow px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-lowrider-blue-deep uppercase shadow-lg shadow-lowrider-blue/15 transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            scrolled
              ? "border-lowrider-blue/20 text-lowrider-blue-deep"
              : "border-lowrider-cream/35 text-lowrider-cream"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-lowrider-blue/15 bg-lowrider-cream px-5 pt-2 pb-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-base font-semibold text-lowrider-blue-deep hover:bg-lowrider-water hover:text-lowrider-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 rounded-lg px-3 py-3 font-body text-base font-semibold text-lowrider-blue-deep hover:bg-lowrider-water hover:text-lowrider-blue"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-lowrider-blue px-5 py-3 text-center font-display text-sm font-semibold tracking-wide text-lowrider-cream uppercase"
            >
              Agendar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
