// Ilustración del rótulo físico del local: carro azul cubierto de espuma.
// Se usa a ambos lados del nombre en el hero (el derecho va espejado).
export function SoapCar({ className, flipped = false }: { className?: string; flipped?: boolean }) {
  return (
    <svg
      viewBox="0 0 210 130"
      aria-hidden="true"
      className={className}
      style={flipped ? { transform: "scaleX(-1)" } : undefined}
    >
      <g fill="#eef7ff">
        <circle cx="62" cy="36" r="14" />
        <circle cx="84" cy="27" r="17" />
        <circle cx="108" cy="23" r="15" />
        <circle cx="132" cy="28" r="16" />
        <circle cx="152" cy="37" r="12" />
      </g>
      <g fill="#ffffff" opacity="0.92">
        <circle cx="72" cy="31" r="8" />
        <circle cx="97" cy="21" r="9" />
        <circle cx="122" cy="23" r="8" />
        <circle cx="144" cy="31" r="7" />
      </g>
      <circle cx="40" cy="22" r="5" fill="#ffffff" opacity="0.75" />
      <circle cx="172" cy="18" r="4" fill="#ffffff" opacity="0.65" />
      <circle cx="184" cy="42" r="6" fill="#eef7ff" opacity="0.7" />
      <path
        d="M20 90 q2 -22 27 -26 l17 -3 q13 -22 43 -22 h20 q26 0 38 20 l7 4 q21 4 23 23 l1 8 q0 6 -8 6 h-161 q-7 0 -7 -6 z"
        fill="#0a78e3"
        stroke="#06275f"
        strokeWidth="4"
      />
      <path
        d="M73 60 q9 -15 32 -15 h11 q17 0 25 14 z"
        fill="#dff6ff"
        stroke="#06275f"
        strokeWidth="3"
      />
      <rect x="22" y="74" width="166" height="7" rx="3.5" fill="#ffd21f" opacity="0.9" />
      <circle cx="62" cy="98" r="17" fill="#08101f" stroke="#d7e5f5" strokeWidth="4" />
      <circle cx="62" cy="98" r="6" fill="#ffd21f" />
      <circle cx="154" cy="98" r="17" fill="#08101f" stroke="#d7e5f5" strokeWidth="4" />
      <circle cx="154" cy="98" r="6" fill="#ffd21f" />
      <circle cx="98" cy="120" r="4" fill="#dff6ff" opacity="0.8" />
      <circle cx="118" cy="124" r="3" fill="#dff6ff" opacity="0.6" />
    </svg>
  );
}
