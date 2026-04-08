import Image from "next/image";

export function UbicacionGeograficaSection() {
  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      {/* Dirección */}
      <div className="flex flex-col items-center gap-1 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-brand-700"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8.25 8.25 0 00-16.5 0c0 3.63 1.556 6.324 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-lg font-semibold text-brand-950">
          Avenida 8N #15AN-31
        </p>
        <p className="text-sm text-ink-soft">
          Barrio Granada, Cali, Valle del Cauca, Colombia
        </p>
      </div>

      {/* Mapa / imagen */}
      <div className="w-full overflow-hidden rounded-2xl border border-white/65 shadow-md">
        <Image
          src="/info/ubicacion.png"
          alt="Mapa de ubicación de VitaNova IPS — Avenida 8N #15AN-31, Barrio Granada, Cali"
          width={800}
          height={500}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Frase de cierre */}
      <p className="text-center text-base font-medium text-brand-700">
        ¡Te esperamos! Estamos aquí para cuidar tu
        salud y la de tu familia.
      </p>
    </div>
  );
}
