import Image from "next/image";
import { MapPin } from "lucide";

export function UbicacionGeograficaSection() {
    return (
        <div className="mt-6 flex flex-col items-center gap-6">
            {/* Dirección */}
            <div className="flex flex-col items-center gap-1 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>        <p className="text-lg font-semibold text-brand-950">
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
