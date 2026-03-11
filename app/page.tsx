"use client";

import Image from "next/image";
import { useState } from "react";

type TabKey = "resena" | "proposito" | "contacto";

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "resena", label: "Reseña histórica" },
  { key: "proposito", label: "Misión, visión y lema" },
  { key: "contacto", label: "Canales de atención" },
];

const SECTION_META: Record<TabKey, { title: string; description: string }> = {
  resena: {
    title: "Reseña histórica",
    description:
      "Origen, motivación y proyección de VitaNova IPS desde su creación en 2026.",
  },
  proposito: {
    title: "Misión, visión y lema",
    description:
      "Declaraciones institucionales que resumen el propósito y la meta de crecimiento de VitaNova IPS.",
  },
  contacto: {
    title: "Canales de atención",
    description:
      "Información de contacto disponible para usuarios en Cali y el resto del país.",
  },
};

const RESENA_HISTORICA = [
  "La empresa VitaNova IPS fue creada el 09 de marzo de 2026 por cuatro estudiantes que compartían el mismo interés de aportar al bienestar de la comunidad y mejorar la calidad de los servicios de salud.",
  "La idea surgió a partir del deseo de crear una institución que brindara una atención más humana, responsable y comprometida con las necesidades de los pacientes.",
  "Desde su creación, VitaNova IPS se pensó como una institución dedicada a ofrecer servicios de salud de manera integral, con el propósito de garantizar una atención digna, oportuna y de calidad.",
  "Sus fundadores, al ser estudiantes interesados en el área de la salud, decidieron unir sus conocimientos y su iniciativa para desarrollar un proyecto que contribuyera al mejoramiento del sistema de atención y al cuidado de las personas.",
  "Esta IPS nace con la visión de crecer y convertirse en una entidad reconocida por su buen servicio, su responsabilidad y su compromiso con la salud de la población.",
  "Además, busca promover la prevención de enfermedades y el cuidado de la salud, brindando apoyo y orientación a cada uno de sus usuarios.",
  "De esta manera, VitaNova IPS representa el esfuerzo y la iniciativa de jóvenes estudiantes que, con dedicación y trabajo en equipo, decidieron crear una empresa enfocada en ofrecer un mejor servicio de salud para la comunidad.",
];

const CORPORATE_INFO = [
  { label: "Razón social", value: "Vitanova Servicios Integrales de Salud S.A.S." },
  { label: "Fundación", value: "09 de marzo de 2026" },
  { label: "Lema", value: "Cuidamos tu salud, mejoramos tu vida." },
];

const CONTACT_LINES = [
  { city: "Resto del país", phone: "+57 02 8000 518 519" },
  { city: "Cali", phone: "+57 604 540 6115" },
];

const CALI_OFFICE = {
  name: "Oficina Cali",
  address: "Avenida 8N #15AN-31, Barrio Granada, Cali, Valle del Cauca, Colombia",
  hours: "Horarios de atención 7:00am a 6:00am",
};

const PURPOSE_CARDS = [
  {
    title: "Misión",
    description:
      "Brindar servicios de salud integrales con calidad, responsabilidad y humanización, promoviendo el bienestar y la prevención de enfermedades en la comunidad.",
  },
  {
    title: "Visión",
    description:
      "Para el año 2030, ser una IPS reconocida por la calidad de sus servicios, la atención humanizada y el compromiso con la salud y el bienestar de nuestros usuarios.",
  },
  {
    title: "Lema",
    description: "Cuidamos tu salud, mejoramos tu vida.",
  },
];

const FOUNDING_PILLARS = [
  {
    title: "Atención humana",
    description:
      "La institución nace para ofrecer una atención más humana, responsable y comprometida con las necesidades de los pacientes.",
  },
  {
    title: "Servicio integral",
    description:
      "VitaNova IPS fue concebida para brindar servicios de salud de manera integral, digna, oportuna y de calidad.",
  },
  {
    title: "Prevención y orientación",
    description:
      "Su propuesta también busca prevenir enfermedades y acompañar a cada usuario con apoyo y orientación.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("resena");

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-8 sm:py-10">
      <div className="bg-orb bg-orb-top" aria-hidden="true" />
      <div className="bg-orb bg-orb-bottom" aria-hidden="true" />

      <main className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[330px_minmax(0,1fr)]">
        <aside className="glass-panel relative overflow-hidden p-5 sm:p-6">
          <div className="flex justify-center">
            <Image
              src="/logo-vitanova.png"
              alt="VitaNova IPS"
              width={220}
              height={220}
              priority
              className="h-auto w-full max-w-50 drop-shadow-lg"
            />
          </div>

          <p className="mt-4 text-center text-sm leading-6 text-ink-soft">
            Proyecto de salud creado para brindar atención integral con enfoque humano y compromiso con la comunidad.
          </p>

          <blockquote className="mt-6 rounded-3xl border border-white/60 bg-white/45 px-4 py-4 text-sm leading-6 text-ink-strong shadow-[0_18px_35px_-28px_rgba(107,0,14,0.42)] backdrop-blur-sm">
            “Cuidamos tu salud, mejoramos tu vida.”
          </blockquote>

          <div className="mt-6 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Información corporativa
            </h2>
            {CORPORATE_INFO.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/55 bg-white/38 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-5 text-ink-strong">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Líneas de atención
            </h2>
            {CONTACT_LINES.map((contact) => (
              <div
                key={contact.city}
                className="rounded-2xl border border-white/55 bg-white/38 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                  {contact.city}
                </p>
                <p className="mt-1 text-sm leading-5 text-ink-strong">{contact.phone}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.6rem] border border-white/55 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(255,228,232,0.34))] px-4 py-4 shadow-[0_18px_35px_-28px_rgba(107,0,14,0.55)] backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Oficina Cali
            </p>
            <p className="mt-3 font-display text-xl font-semibold text-brand-950">
              {CALI_OFFICE.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-strong">{CALI_OFFICE.address}</p>
            <p className="mt-3 text-sm leading-5 text-ink-soft">{CALI_OFFICE.hours}</p>
            <a
              href="mailto:Vitanovasalud@gmail.com"
              className="mt-4 inline-flex rounded-full border border-brand-500 px-4 py-2 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-500/16"
            >
              Vitanovasalud@gmail.com
            </a>
          </div>
        </aside>

        <section className="glass-panel p-4 sm:p-6">
          <header className="mb-5 rounded-[1.8rem] border border-white/60 bg-white/35 p-5 backdrop-blur-sm sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-700">
              Historia institucional
            </p>

            <div className="mt-3 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-semibold text-brand-950 sm:text-5xl">
                  Una IPS pensada para servir con calidad y cercanía.
                </h2>
                <p className="mt-4 text-sm leading-6 text-ink-soft sm:text-[15px]">
                  VitaNova IPS surge desde la iniciativa de cuatro estudiantes que decidieron convertir su interés por la salud en una institución enfocada en el bienestar, la prevención y el acompañamiento responsable de la comunidad.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 xl:min-w-90 xl:max-w-105 xl:flex-1">
                <div className="rounded-2xl border border-white/60 bg-white/45 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Creación
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-brand-950">2026</p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/45 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Proyección
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-brand-950">2030</p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/45 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Origen
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-brand-950">4 estudiantes</p>
                </div>
              </div>
            </div>
          </header>

          <nav
            className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3"
            aria-label="Pestañas de contenido"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
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

          <article className="content-window rounded-4xl border border-white/65 bg-white/48 p-5 backdrop-blur-md sm:p-7">
            <div className="border-b border-[rgba(107,0,14,0.10)] pb-4">
              <h3 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
                {SECTION_META[activeTab].title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                {SECTION_META[activeTab].description}
              </p>
            </div>

            {activeTab === "resena" ? (
              <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                <div className="space-y-4 text-[15px] leading-7 text-ink-strong">
                  {RESENA_HISTORICA.map((paragraph, index) => (
                    <p key={`resena-${index}`}>{paragraph}</p>
                  ))}
                </div>

                <div className="space-y-4">
                  {FOUNDING_PILLARS.map((pillar) => (
                    <section
                      key={pillar.title}
                      className="detail-card rounded-[1.6rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.64),rgba(255,232,235,0.54))] p-5 backdrop-blur-sm"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                        Pilar
                      </p>
                      <h4 className="mt-2 font-display text-xl font-semibold text-brand-950">
                        {pillar.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-ink-strong">
                        {pillar.description}
                      </p>
                    </section>
                  ))}
                </div>
              </div>
            ) : activeTab === "proposito" ? (
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {PURPOSE_CARDS.map((item) => (
                  <section
                    key={item.title}
                    className={`detail-card rounded-[1.6rem] border border-white/60 p-5 backdrop-blur-sm ${
                      item.title === "Lema"
                        ? "bg-linear-to-br from-brand-900 to-brand-700 text-white lg:col-span-2"
                        : "bg-white/42"
                    }`}
                  >
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        item.title === "Lema" ? "text-white/20" : "text-brand-700"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`mt-3 text-[15px] leading-7 ${
                        item.title === "Lema" ? "font-display text-3xl font-semibold leading-tight" : "text-ink-strong"
                      }`}
                    >
                      {item.description}
                    </p>
                  </section>
                ))}
              </div>
            ) : (
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <section className="detail-card rounded-[1.6rem] border border-white/60 bg-white/42 p-5 backdrop-blur-sm lg:col-span-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Oficina principal
                  </p>
                  <h4 className="mt-2 font-display text-2xl font-semibold text-brand-950">
                    {CALI_OFFICE.name}
                  </h4>
                  <p className="mt-3 text-[15px] leading-7 text-ink-strong">{CALI_OFFICE.address}</p>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">{CALI_OFFICE.hours}</p>
                </section>

                <section className="detail-card rounded-[1.6rem] border border-white/60 bg-white/42 p-5 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Líneas disponibles
                  </p>
                  <div className="mt-4 space-y-4">
                    {CONTACT_LINES.map((item) => (
                      <div key={item.city} className="rounded-2xl border border-[rgba(107,0,14,0.12)] bg-white/60 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                          {item.city}
                        </p>
                        <p className="mt-2 text-base font-medium text-brand-950">{item.phone}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="detail-card rounded-[1.6rem] border border-white/60 bg-[linear-gradient(140deg,rgba(255,228,232,0.92),rgba(255,255,255,0.78))] p-5 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Correo
                  </p>
                  <a
                    href="mailto:Vitanovasalud@gmail.com"
                    className="mt-4 inline-flex text-lg font-semibold text-brand-950 underline decoration-[rgba(107,0,14,0.35)] underline-offset-4"
                  >
                    Vitanovasalud@gmail.com
                  </a>
                  <p className="mt-4 text-sm leading-6 text-ink-soft">
                    Canal habilitado para orientación y acompañamiento a los usuarios de VitaNova IPS.
                  </p>
                </section>
              </div>
            )}
          </article>
        </section>
      </main>
    </div>
  );
}
