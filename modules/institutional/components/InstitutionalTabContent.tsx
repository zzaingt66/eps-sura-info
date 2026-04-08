import Image from "next/image";
import { SECTION_META } from "../data/content";
import type { TabKey } from "../types/content";
import { ObjectivesSection } from "./sections/Objetivos";
import { SpecificObjectivesSection } from "./sections/ObjetivosEspecificos";
import { PurposeSection } from "./sections/Propositos";
import { QualityPoliciesSection } from "./sections/PoliticaCalidad";
import { ResenaSection } from "./sections/Resenas";
import { ServicesDescriptionSection } from "./sections/DescripcionServicios";
import { ServicesSection } from "./sections/Servicios";
import { ValuesSection } from "./sections/Valores";
import { TarifasServiciosSection } from "./sections/TarifasServicios";

interface InstitutionalTabContentProps {
  activeTab: TabKey;
}

export function InstitutionalTabContent({ activeTab }: InstitutionalTabContentProps) {
  return (
    <article className="content-window rounded-4xl border border-white/65 bg-white/48 p-5 backdrop-blur-md sm:p-7">
      <div className="border-b border-[rgba(107,0,14,0.10)] pb-4">
        <h3 className="flex  justify-between items-center gap-2 font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
          {SECTION_META[activeTab].title}
          <Image
            src="/logo-vitanova.png"
            alt="Vitanova"
            width={98}
            height={98}
            className="object-contain"
          />
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          {SECTION_META[activeTab].description}
        </p>
      </div>

      {activeTab === "resena" && <ResenaSection />}
      {activeTab === "proposito" && <PurposeSection />}
      {activeTab === "objetivos" && <ObjectivesSection />}
      {activeTab === "objetivosEspecificos" && <SpecificObjectivesSection />}
      {activeTab === "politicasCalidad" && <QualityPoliciesSection />}
      {activeTab === "valoresInstitucionales" && <ValuesSection />}
      {activeTab === "serviciosIps" && <ServicesSection />}
      {activeTab === "descripcionServicios" && <ServicesDescriptionSection />}
      {activeTab === "tarifasServicios" && <TarifasServiciosSection />}
    </article>
  );
}
