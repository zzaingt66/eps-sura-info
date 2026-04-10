"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CALI_OFFICE, CONTACT_LINES, CORPORATE_INFO } from "../../data/content";

const MapLeaflet = dynamic(
  () => import("./MapLeaflet").then((m) => m.MapLeaflet),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-105 w-full items-center justify-center rounded-2xl border border-white/65 bg-white/30 text-sm text-ink-soft shadow-md">
        Cargando mapa…
      </div>
    ),
  }
);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export function UbicacionContactoSection() {
  return (
    <div className="space-y-10">
      {/* ── Mapa + dirección ── */}
      <div className="flex flex-col items-center gap-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <div>
          <p className="text-lg font-semibold text-brand-950">Avenida 8N #15AN-31</p>
          <p className="text-sm text-ink-soft">Barrio Granada, Cali, Valle del Cauca, Colombia</p>
        </div>
      </div>

      <div className="w-full">
        <MapLeaflet />
      </div>

      <p className="text-center text-base font-medium text-brand-700">
        ¡Te esperamos! Estamos aquí para cuidar tu salud y la de tu familia.
      </p>

      {/* ── Info corporativa + contacto ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Información corporativa */}
        <motion.div variants={fadeUp} className="glass-card p-5 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Información corporativa
          </h3>
          {CORPORATE_INFO.map((item) => (
            <div key={item.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm text-ink-strong">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Líneas de atención */}
        <motion.div variants={fadeUp} className="glass-card p-5 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Líneas de atención
          </h3>
          {CONTACT_LINES.map((contact) => (
            <div key={contact.city}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                {contact.city}
              </p>
              <p className="mt-0.5 text-sm text-ink-strong">{contact.phone}</p>
            </div>
          ))}
          <div className="pt-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">
              Correo electrónico
            </p>
            <a
              href="mailto:Vitanovasalud@gmail.com"
              className="mt-1 inline-flex rounded-full border border-brand-500 px-3.5 py-1.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-500/16"
            >
              vitanovasalud@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Oficina Cali */}
        <motion.div variants={fadeUp} className="glass-card p-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 mb-3">
            Sede principal
          </h3>
          <p className="font-display text-xl font-semibold text-brand-950">{CALI_OFFICE.name}</p>
          <p className="mt-2 text-sm leading-6 text-ink-strong">{CALI_OFFICE.address}</p>
          <p className="mt-2 text-sm text-ink-soft">{CALI_OFFICE.hours}</p>
        </motion.div>
      </motion.div>

      {/* ── Material informativo ── */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Material informativo
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/55 shadow-sm">
            <Image
              src="/info/follleto.png"
              alt="Folleto IPS Vitanova"
              width={600}
              height={800}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/55 shadow-sm h-80 ">
            <Image
              src="/info/Tarjeta.png"
              alt="Tarjeta de presentación IPS Vitanova"
              width={600}
              height={350}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
