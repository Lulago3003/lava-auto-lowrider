import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../../lib/site-content";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-2 rounded-full border border-lowrider-yellow/60 bg-[#25D366] py-3 pr-4 pl-3 text-lowrider-blue-deep shadow-2xl shadow-lowrider-blue/25 transition-transform hover:scale-105 active:scale-95 sm:right-8 sm:bottom-8"
    >
      <span
        className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-[#25D366]/35"
        aria-hidden
      />
      <MessageCircle className="h-6 w-6" strokeWidth={2.3} />
      <span className="hidden font-body text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
