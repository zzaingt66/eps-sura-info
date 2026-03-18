import { SECTION_META } from "../data/content";
import type { TabKey } from "../types/content";
import { ObjectivesSection } from "./sections/Objetivos";
import { PurposeSection } from "./sections/Propositos";
import { QualityPoliciesSection } from "./sections/PoliticaCalidad";
import { ResenaSection } from "./sections/Resenas";
import { ServicesSection } from "./sections/Servicios";
import { ValuesSection } from "./sections/Valores";

interface InstitutionalTabContentProps {
  activeTab: TabKey;
}

export function InstitutionalTabContent({ activeTab }: InstitutionalTabContentProps) {
  return (
    <article className="content-window rounded-4xl border border-white/65 bg-white/48 p-5 backdrop-blur-md sm:p-7">
      <div className="border-b border-[rgba(107,0,14,0.10)] pb-4">
        <h3 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
          {SECTION_META[activeTab].title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          {SECTION_META[activeTab].description}
        </p>
      </div>

      {activeTab === "resena" && <ResenaSection />}
      {activeTab === "proposito" && <PurposeSection />}
      {activeTab === "objetivos" && <ObjectivesSection />}
      {activeTab === "politicasCalidad" && <QualityPoliciesSection />}
      {activeTab === "valoresInstitucionales" && <ValuesSection />}
      {activeTab === "serviciosIps" && <ServicesSection />}
    </article>
  );
}
