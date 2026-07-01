import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../../lib/site-content";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#membresias", label: "Membresías" },
  { href: "#barberia", label: "Barbería" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-lowrider-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-lowrider-yellow font-display text-lg font-bold text-lowrider-yellow italic">
            L
          </span>
          <span className="font-display text-lg tracking-tight text-lowrider-cream uppercase">
            Lava Auto <span className="text-lowrider-yellow">Lowrider</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold tracking-wide text-lowrider-cream/80 transition-colors hover:text-lowrider-yellow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 font-body text-sm font-semibold text-lowrider-cream/80 transition-colors hover:text-lowrider-yellow"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-lowrider-yellow px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-lowrider-black uppercase transition-transform hover:scale-105 active:scale-95"
          >
            Agendar
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-lowrider-line text-lowrider-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-lowrider-line bg-lowrider-black px-5 pt-2 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-base font-semibold text-lowrider-cream/90 hover:bg-lowrider-charcoal hover:text-lowrider-yellow"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 rounded-lg px-3 py-3 font-body text-base font-semibold text-lowrider-cream/90 hover:bg-lowrider-charcoal hover:text-lowrider-yellow"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-lowrider-yellow px-5 py-3 text-center font-display text-sm font-semibold tracking-wide text-lowrider-black uppercase"
            >
              Agendar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
