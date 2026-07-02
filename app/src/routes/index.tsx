import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Hero } from "../components/site/Hero";
import { Marquee } from "../components/site/Marquee";
import { Services } from "../components/site/Services";
import { Memberships } from "../components/site/Memberships";
import { ProofGallery } from "../components/site/ProofGallery";
import { Features } from "../components/site/Features";
import { ProofBand } from "../components/site/ProofBand";
import { Location } from "../components/site/Location";
import { CtaBand } from "../components/site/CtaBand";
import { Footer } from "../components/site/Footer";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";
import { StructuredData } from "../components/StructuredData";
import {
  ADDRESS_LINE,
  BUSINESS_NAME,
  MAPS_DIRECTIONS_URL,
  PHONE_TEL,
  SITE_IMAGES,
} from "../lib/site-content";

export const Route = createFileRoute("/")({
  component: Index,
});

const MARQUEE_ITEMS = [
  "Lavado con espuma",
  "Brillo exterior",
  "Interior aspirado",
  "Motor presentable",
  "Agenda por WhatsApp",
];

const LOCAL_BUSINESS_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: BUSINESS_NAME,
  image: SITE_IMAGES.local,
  telephone: PHONE_TEL,
  address: ADDRESS_LINE,
  url: MAPS_DIRECTIONS_URL,
});

function Index() {
  return (
    <div data-site className="min-h-screen">
      <StructuredData json={LOCAL_BUSINESS_JSON} />
      <Header />
      <main>
        <Hero />
        <Marquee items={MARQUEE_ITEMS} />
        <Services />
        <Memberships />
        <ProofGallery />
        <Features />
        <ProofBand />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
