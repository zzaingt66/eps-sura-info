"use client";

import { StickyNav } from "../components/StickyNav";
import { SectionWrapper } from "../components/SectionWrapper";
import { HeroSection } from "../components/sections/HeroSection";
import { ResenaSection } from "../components/sections/Resenas";
import { ValoresPrincipiosSection } from "../components/sections/ValoresPrincipiosSection";
import { ServiciosLandingSection } from "../components/sections/ServiciosLandingSection";
import { TarifasSection } from "../components/sections/TarifasSection";
import { UbicacionContactoSection } from "../components/sections/UbicacionContactoSection";

/* ─── Section heading used in each landing section ─── */
function LandingSectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-700">
        {label}
      </p>
      <h2 className="mt-1 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">{description}</p>
      )}
    </div>
  );
}

export function InstitutionalHomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Background orbs */}
      <div className="bg-orb bg-orb-top" aria-hidden="true" />
      <div className="bg-orb bg-orb-bottom" aria-hidden="true" />

      {/* Sticky navigation */}
      <StickyNav />

      <main>
        {/* ── 1. Hero ── */}
        <HeroSection />

        {/* ── 2. Reseña histórica ── */}
        <SectionWrapper id="resena" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Origen"
              title="Reseña Histórica"
              description="Origen, motivación y proyección de VitaNova IPS desde su creación en 2026."
            />
            <ResenaSection />
          </div>
        </SectionWrapper>

        {/* ── 3. Valores & Principios ── */}
        <SectionWrapper id="valores" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Cultura institucional"
              title="Valores & Principios"
              description="Los pilares éticos, objetivos y políticas que guían cada acción de VitaNova IPS."
            />
            <ValoresPrincipiosSection />
          </div>
        </SectionWrapper>

        {/* ── 4. Servicios ── */}
        <SectionWrapper id="servicios" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Portafolio"
              title="Nuestros Servicios"
              description="Atención integral, prevención, diagnóstico y rehabilitación."
            />
            <ServiciosLandingSection />
          </div>
        </SectionWrapper>

        {/* ── 5. Tarifas ── */}
        <SectionWrapper id="tarifas" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Valores"
              title="Tarifas de Servicios"
              description="Paquetes y valores expresados en pesos colombianos (COP)."
            />
            <TarifasSection />
          </div>
        </SectionWrapper>

        {/* ── 6. Ubicación & Contacto ── */}
        <SectionWrapper id="ubicacion" className="px-4 pb-24 sm:px-8">
          <div className="mx-auto max-w-7xl glass-panel p-6 sm:p-10">
            <LandingSectionHeader
              label="Dónde encontrarnos"
              title="Ubicación & Contacto"
              description="Encuéntranos en el Barrio Granada, en el corazón de Cali, Valle del Cauca."
            />
            <UbicacionContactoSection />
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
