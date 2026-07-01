import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Hero } from "../components/site/Hero";
import { Marquee } from "../components/site/Marquee";
import { Services } from "../components/site/Services";
import { Memberships } from "../components/site/Memberships";
import { BarberCrossPromo } from "../components/site/BarberCrossPromo";
import { Features } from "../components/site/Features";
import { GoogleRating } from "../components/site/GoogleRating";
import { Location } from "../components/site/Location";
import { CtaBand } from "../components/site/CtaBand";
import { Footer } from "../components/site/Footer";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
});

const MARQUEE_ITEMS = [
  "Lavado Básico",
  "Encerado y Brillo",
  "Detailing Lowrider",
  "Membresías Mensuales",
  "Barbería al Lado",
];

function Index() {
  return (
    <div data-site className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee items={MARQUEE_ITEMS} />
        <Services />
        <Memberships />
        <BarberCrossPromo />
        <Features />
        <GoogleRating />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
