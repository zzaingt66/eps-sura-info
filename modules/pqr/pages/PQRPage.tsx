"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, UserCog, Send } from "lucide-react";
import { SectionWrapper } from "@/modules/institutional/components/SectionWrapper";
import { PQRStickyNav } from "../components/PQRStickyNav";
import { PQRDefinicionesSection } from "../components/PQRDefinicionesSection";
import { PQRCanalesSection } from "../components/PQRCanalesSection";
import { PQRProcesoSection } from "../components/PQRProcesoSection";
import { PQRTiemposSection } from "../components/PQRTiemposSection";
import { PQRNormativaSection } from "../components/PQRNormativaSection";
import { PQRFormularioSection } from "../components/PQRFormularioSection";
import { PQR_RESPONSABLE } from "../data/content";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

/* ── Shared section header — mirrors InstitutionalHomePage pattern ── */
function LandingSectionHeader({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          {label}
        </p>
      )}
      <h2 className="mt-1 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">{description}</p>
      )}
    </div>
  );
}

export function PQRPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">

      {/* Background orbs — same as home */}
      <div className="bg-orb bg-orb-top" aria-hidden="true" />
      <div className="bg-orb bg-orb-bottom" aria-hidden="true" />

      <PQRStickyNav />

      <main>
        {/* ── Hero ── */}
        <SectionWrapper id="hero" className="pt-14">
          {/* Full-width banner */}
          <div className="w-full overflow-hidden">
            <Image
              src="/banner/banner-pqrsf.jpg"
              alt="VitaNova IPS — Sistema PQRSF"
              width={1920}
              height={648}
              priority
              className="w-full h-132 object-cover"
            />
          </div>

          {/* Hero text */}
          <div className="px-4 pt-10 pb-12 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE }}
              >
                <h1 className="font-display text-4xl font-semibold text-brand-950 sm:text-5xl lg:text-6xl">
                  PQRSF
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                  Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones — información sobre cómo
                  presentar una solicitud, los canales de atención, el proceso y la normativa vigente.
                </p>
              </motion.div>

              {/* Responsable card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.18 }}
                className="mt-8 glass-card p-5 flex items-start gap-3 max-w-2xl"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <UserCog size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                    Responsable
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink-strong">{PQR_RESPONSABLE}</p>
                </div>
              </motion.div>

              {/* CTA — scroll to form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
                className="mt-6"
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("formulario")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2.5 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(107,0,14,0.5)] transition-colors hover:bg-brand-950 focus-visible:outline-2 focus-visible:outline-brand-700"
                >
                  <Send size={15} strokeWidth={2} />
                  Radicar PQRSF
                </button>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* ── 1. Definiciones ── */}
        <SectionWrapper id="definiciones" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Tipos de solicitud"
              title="Definiciones PQRSF"
              description="Conozca qué significa cada tipo de solicitud para identificar cuál corresponde a su caso."
            />
            <PQRDefinicionesSection />
          </div>
        </SectionWrapper>

        {/* ── 2. Canales ── */}
        <SectionWrapper id="canales" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Contacto"
              title="Cómo presentar una PQRSF"
              description="VitaNova IPS pone a su disposición múltiples canales para que pueda radicar su solicitud de forma rápida y sencilla."
            />
            <PQRCanalesSection />
          </div>
        </SectionWrapper>

        {/* ── 3. Proceso ── */}
        <SectionWrapper id="proceso" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              title="Proceso de atención"
              description="Pasos que seguimos internamente para atender cada solicitud de manera oportuna."
            />
            <PQRProcesoSection />
          </div>
        </SectionWrapper>

        {/* ── 4. Tiempos ── */}
        <SectionWrapper id="tiempos" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Compromisos"
              title="Tiempos de respuesta"
              description="Los plazos máximos establecidos por la normativa colombiana para atender cada tipo de solicitud."
            />
            <PQRTiemposSection />
          </div>
        </SectionWrapper>

        {/* ── 5. Normativa ── */}
        <SectionWrapper id="normativa" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              title="Normativa vigente"
              description="Leyes y decretos que regulan el derecho de petición y la gestión de PQRSF en Colombia."
            />
            <PQRNormativaSection />
          </div>
        </SectionWrapper>

        {/* ── 6. Formulario ── */}
        <SectionWrapper id="formulario" className="px-4 pb-28 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Formulario en línea"
              title="Radicar solicitud"
              description="Completa el formulario y recibirás una respuesta dentro de los tiempos establecidos por la normativa vigente."
            />
            <PQRFormularioSection />
          </div>
        </SectionWrapper>
      </main>

      {/* Footer strip */}
      <footer className="pb-8 text-center">
        <p className="inline-flex items-center gap-1.5 text-[11px] text-ink-soft/70">
          <FileText size={12} strokeWidth={1.8} />
          VitaNova IPS · Sistema PQRSF
        </p>
      </footer>
    </div>
  );
}
