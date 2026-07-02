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

export const SITE_IMAGES = {
  local: "/images/lava-auto-local.png",
  foamDark: "/images/carro-enjabonado.png",
  foamLight: "/images/carro-enjabonado-2.png",
  engine: "/images/motor.png",
} as const;

export const SERVICES = [
  {
    name: "Lavado Express",
    price: "5",
    image: SITE_IMAGES.foamLight,
    description: "Exterior a mano, espuma abundante, llantas y vidrios listos para rodar.",
  },
  {
    name: "Lavado Completo",
    price: "8",
    image: SITE_IMAGES.foamDark,
    description: "Exterior, interior aspirado, tablero y puertas con acabado limpio.",
  },
  {
    name: "Brillo y Cera",
    price: "12",
    image: SITE_IMAGES.local,
    description: "Cera protectora, llantas con brillo y pintura con presencia de calle.",
  },
  {
    name: "Detailing Lowrider",
    price: "25",
    image: SITE_IMAGES.engine,
    description: "Limpieza profunda, motor presentable y detalles para carros exigentes.",
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
      "Prioridad para servicios de brillo y motor",
    ],
    highlighted: false,
  },
] as const;

export const FEATURES = [
  {
    title: "Local visible",
    description: "Entrada directa, letrero grande y punto fácil de reconocer en Arraiján.",
  },
  {
    title: "Atención rápida",
    description: "Llegas, preguntas, eliges el servicio y el equipo se mueve sin complicarte.",
  },
  {
    title: "Resultado visible",
    description: "Espuma, llantas, vidrios y pintura trabajados para que el cambio se note.",
  },
  {
    title: "Agenda por WhatsApp",
    description: "Escribe, confirma el horario y llega directo sin vueltas innecesarias.",
  },
] as const;
