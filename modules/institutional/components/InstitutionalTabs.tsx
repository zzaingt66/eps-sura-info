import { TABS } from "../data/content";
import type { TabKey } from "../types/content";

interface InstitutionalTabsProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export function InstitutionalTabs({
  activeTab,
  onTabChange,
}: InstitutionalTabsProps) {
  return (
    <nav
      className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
      aria-label="Pestañas de contenido"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onTabChange(tab.key)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 ${
              isActive
                ? "border-transparent bg-linear-to-br from-brand-950 to-brand-700 text-white shadow-[0_18px_35px_-24px_rgba(107,0,14,0.95)]"
                : "border-white/60 bg-white/40 text-brand-950 hover:bg-white/60"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
