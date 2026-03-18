"use client";

import { useState } from "react";

import { InstitutionalHeader } from "../components/InstitutionalHeader";
import { InstitutionalSidebar } from "../components/InstitutionalSidebar";
import { InstitutionalTabContent } from "../components/InstitutionalTabContent";
import { InstitutionalTabs } from "../components/InstitutionalTabs";
import type { TabKey } from "../types/content";

export function InstitutionalHomePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("resena");

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-8 sm:py-10">
      <div className="bg-orb bg-orb-top" aria-hidden="true" />
      <div className="bg-orb bg-orb-bottom" aria-hidden="true" />

      <main className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[330px_minmax(0,1fr)]">
        <InstitutionalSidebar />

        <section className="glass-panel p-4 sm:p-6">
          <InstitutionalHeader />
          <InstitutionalTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <InstitutionalTabContent activeTab={activeTab} />
        </section>
      </main>
    </div>
  );
}
