// Single source of truth for business facts. Edit here to update the whole
// site — phone, address, prices and hours are the numbers most likely to
// change as the owner refines the offer.

export const BUSINESS_NAME = "Lava Auto Lowrider";
export const PHONE_DISPLAY = "389-6698";
export const PHONE_TEL = "+5073896698";
export const WHATSAPP_NUMBER = "5073896698";
export const WHATSAPP_MESSAGE = "Hola, quiero agendar un lavado para mi carro";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const ADDRESS_LINE = "W9Q5+M53, Calle, Arraiján, Panamá Oeste";
export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/place/Lava+Auto+Lowrider/@8.9391428,-79.64208,19.64z";
export const MAPS_EMBED_SRC = "https://www.google.com/maps?q=8.9391428,-79.64208&z=18&output=embed";

export const GOOGLE_RATING = 4.0;
export const GOOGLE_REVIEW_COUNT = 6;

export const SERVICES = [
  {
    name: "Lavado Básico",
    price: "5",
    description: "Exterior a mano, llantas y vidrios impecables. Rápido y directo.",
  },
  {
    name: "Lavado Completo",
    price: "8",
    description: "Exterior + interior aspirado, tablero y puertas limpias por dentro.",
  },
  {
    name: "Encerado y Brillo",
    price: "12",
    description: "Cera protectora, llantas con brillo de silicona, pintura tipo espejo.",
  },
  {
    name: "Detailing Lowrider",
    price: "25",
    description: "Limpieza profunda de tapicería, motor presentable y encerado premium.",
  },
] as const;

export const MEMBERSHIPS = [
  {
    name: "Rodando",
    price: "20",
    period: "/mes",
    perks: ["4 lavados básicos al mes", "Sin cita previa", "Válido de lunes a viernes"],
    highlighted: false,
  },
  {
    name: "Cruiser",
    price: "35",
    period: "/mes",
    perks: [
      "8 lavados completos al mes",
      "10% de descuento en encerado",
      "Prioridad en fila los fines de semana",
    ],
    highlighted: true,
  },
  {
    name: "Lowrider Elite",
    price: "55",
    period: "/mes",
    perks: [
      "Lavados completos ilimitados",
      "1 detailing gratis al mes",
      "Corte de cabello con descuento en la barbería vecina",
    ],
    highlighted: false,
  },
] as const;

export const FEATURES = [
  {
    title: "A minutos de Arraiján",
    description: "Fácil de encontrar, entrada directa desde la calle, sin vueltas.",
  },
  {
    title: "Mientras esperas, te arreglas",
    description: "Justo al lado está la barbería del barrio: entra, córtate y sal con el carro listo.",
  },
  {
    title: "Trato de barrio, resultado de show",
    description: "Manos locales, atención directa y un acabado que se nota desde la calle.",
  },
  {
    title: "Agenda por WhatsApp",
    description: "Sin llamadas ni esperas: escribe, confirma y llega cuando te convenga.",
  },
] as const;
