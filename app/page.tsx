"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TabKey =
  | "resena"
  | "misionVision"
  | "servicios"
  | "objetivos"
  | "politicas"
  | "valores";

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "resena", label: "Reseña histórica" },
  { key: "misionVision", label: "Misión y visión" },
  { key: "servicios", label: "Servicios principales" },
  { key: "objetivos", label: "Objetivos generales" },
  { key: "politicas", label: "7 políticas de calidad" },
  { key: "valores", label: "Valores institucionales" },
];

const RESENA_HISTORICA = [
  "EPS SURA es una entidad promotora de salud en Colombia que hace parte del Grupo SURA, una organización con amplia trayectoria en el sector de servicios financieros y de seguros en América Latina. Sus orígenes se relacionan con la empresa Suramericana S.A., fundada en 1944 en la ciudad de Medellín, inicialmente dedicada al sector de seguros. Con el paso del tiempo, la organización fue ampliando sus servicios hacia áreas relacionadas con la protección y el bienestar de las personas.",
  "En 1993, con la creación del Sistema General de Seguridad Social en Salud en Colombia a través de la Ley 100, surgieron las Entidades Promotoras de Salud (EPS), encargadas de garantizar el aseguramiento y el acceso de la población a los servicios de salud. En este contexto, la organización comenzó a participar activamente en el sistema de salud colombiano, desarrollando un modelo de atención enfocado en la prevención de enfermedades, la promoción de estilos de vida saludables y la atención integral de los afiliados.",
  "Desde entonces, EPS SURA ha trabajado en el fortalecimiento de su red de servicios médicos, estableciendo alianzas con hospitales, clínicas y profesionales de la salud en diferentes regiones del país. Además, ha implementado programas de promoción y prevención orientados a mejorar la calidad de vida de sus afiliados, así como herramientas tecnológicas que facilitan el acceso a citas médicas, resultados de exámenes y otros servicios de salud.",
  "A lo largo de los años, la entidad se ha consolidado como una de las EPS más reconocidas en Colombia por su enfoque en la calidad del servicio, la atención humanizada y el acompañamiento permanente a los usuarios. Su modelo de atención se basa en la gestión integral del riesgo en salud.",
  "Actualmente, EPS SURA cuenta con millones de afiliados en el país y continúa trabajando en el desarrollo de estrategias innovadoras para mejorar la atención en salud, promover el autocuidado y contribuir al bienestar de la población colombiana.",
];

const MISION_VISION = {
  vision:
    "Generar tranquilidad y seguridad para los empleadores, bienestar para los trabajadores y sus familias y productividad y competitividad para las empresas y el país.",
  mision:
    "Somos una sociedad anónima, comprometida con el progreso de Colombia, dedicada a satisfacer las necesidades de la Seguridad Social en la Administración de Riesgos Profesionales en el país y Latinoamérica.",
  acciones:
    "Nuestras acciones están encaminadas a contribuir con el mejoramiento continuo de la calidad de vida de la población trabajadora y estudiantil, propiciando la creación de ambientes laborales y educacionales sanos y seguros, permitiendo alcanzar un mayor desarrollo social, industrial y económico.",
  compromiso:
    "Nuestro compromiso es ser una compañía orientada al cliente, con una clara diferenciación del servicio, mediante la innovación y personalización de productos de calidad, tecnología de vanguardia, un sólido respaldo y talento humano calificado y comprometido.",
};

const CORPORATE_INFO = [
  { label: "Razón Social", value: "EPS y Medicina Prepagada Suramericana S.A." },
  { label: "NIT", value: "800.088.702-2" },
  { label: "Código EPS", value: "010" },
];

const CONTACT_LINES = [
  { city: "Medellín", phone: "+57 604 448 6115" },
  { city: "Bogotá", phone: "+57 601 489 7941" },
  { city: "Resto del país", phone: "+57 01 8000 519 519" },
];

const CALI_OFFICE = {
  name: "Regional Occidente / Cali",
  address: "Calle 64 Norte # 5B - 146. Centro Empresa Locales 45 y 46",
  phone: "+57 602 664 8333",
  hours: "Lunes a viernes de 7:30 a.m. a 3:00 p.m. en jornada continua",
};

const SERVICIOS_PRINCIPALES = [
  {
    titulo: "Atención Médica Integral",
    descripcion:
      "Red amplia de instituciones y profesionales de la salud para consultas médicas generales y especializadas, exámenes diagnósticos, hospitalizaciones, cirugías y urgencias las 24 horas.",
    imagen: "/salud-integral.webp",
  },
  {
    titulo: "Programas de Promoción y Prevención",
    descripcion:
      "Servicios orientados al cuidado preventivo: control de crecimiento y desarrollo, vacunación, control prenatal, detección temprana de cáncer, prevención de enfermedades crónicas y programas de salud ocupacional.",
    imagen: "/prevencion-sura.jpg",
  },
  {
    titulo: "Medicamentos",
    descripcion:
      "Suministro de medicamentos incluidos en el Plan de Beneficios en Salud (PBS) a través de una red de farmacias autorizadas en todo el país.",
    imagen: "/medicamentos-sura.webp",
  },
  {
    titulo: "Servicios Digitales",
    descripcion:
      "Plataforma digital SURA para agendar citas médicas, consultar resultados de exámenes, descargar certificados, acceder a telemedicina y gestionar autorizaciones en línea.",
    imagen: "/canales-digitales-sura.jpg",
  },
  {
    titulo: "Atención Domiciliaria",
    descripcion:
      "Servicios de salud en el hogar para pacientes que lo requieren, incluyendo cuidados post-hospitalarios, manejo de enfermedades crónicas y atención paliativa.",
    imagen: "/domicilio-sura.jpg",
  },
  {
    titulo: "Salud Mental",
    descripcion:
      "Atención psicológica y psiquiátrica, programas de bienestar emocional, líneas de apoyo y acompañamiento en situaciones de crisis.",
    imagen: "/salud-mental.jpg",
  },
  {
    titulo: "Maternidad",
    descripcion:
      "Acompañamiento integral durante el embarazo, parto y posparto, incluyendo controles prenatales, exámenes, atención del parto y cuidados del recién nacido.",
    imagen: "/maternidad.jpg",
  },
  {
    titulo: "Gestión de Enfermedades Crónicas",
    descripcion:
      "Programas especializados para el manejo de diabetes, hipertensión, enfermedades cardiovasculares, cáncer y otras condiciones crónicas con seguimiento continuo.",
    imagen: "/enfermedades-cronicas.jpg",
  },
];

const OBJETIVOS_GENERALES = [
  {
    titulo:
      "1. Garantizar a los afiliados el acceso oportuno y de calidad a los servicios de salud incluidos en el sistema.",
    descripcion:
      "EPS SURA fortalece este objetivo con una red nacional de atención, gestión de autorizaciones y canales digitales que facilitan la oportunidad en la atención médica.",
  },
  {
    titulo:
      "2. Promover el cuidado integral de la salud mediante programas de prevención, promoción y atención médica eficiente.",
    descripcion:
      "El enfoque de gestión del riesgo en salud prioriza el autocuidado, la detección temprana y el seguimiento continuo para mejorar la calidad de vida de los afiliados.",
  },
];

const POLITICAS_CALIDAD = [
  "Brindar atención segura y oportuna a todos los afiliados, con criterios de priorización clínica y trato humanizado.",
  "Mejorar continuamente los procesos de atención en salud, apoyados en medición, análisis de resultados y acciones de mejora.",
  "Promover la satisfacción de los usuarios mediante un servicio cercano, claro y centrado en sus necesidades.",
  "Cumplir con las normas y regulaciones del sistema de salud colombiano, asegurando transparencia y confianza.",
  "Fomentar la prevención de enfermedades y el autocuidado con programas de promoción de hábitos saludables.",
  "Desarrollar talento humano capacitado y comprometido para una atención integral y de alta calidad.",
  "Utilizar tecnología e innovación para mejorar la atención en salud, con soluciones digitales ágiles y accesibles.",
];

const VALORES_INSTITUCIONALES = [
  {
    titulo: "1. Responsabilidad",
    descripcion:
      "Es el compromiso de cumplir con las obligaciones y brindar un servicio confiable que garantice el bienestar y la salud de los afiliados, actuando con rigor y sentido social.",
  },
  {
    titulo: "2. Respeto",
    descripcion:
      "Consiste en reconocer la dignidad de cada persona, brindando una atención amable, humana y sin discriminación, con escucha activa y acompañamiento permanente.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("resena");

  const sectionTitle = useMemo(() => {
    if (activeTab === "resena") return "Reseña histórica";
    if (activeTab === "misionVision") return "Misión y visión";
    if (activeTab === "servicios") return "Servicios principales";
    if (activeTab === "objetivos") return "Objetivos generales";
    if (activeTab === "politicas") return "7 políticas de calidad";
    return "Valores institucionales";
  }, [activeTab]);

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-8 sm:py-10">
      <div className="bg-orb bg-orb-top" aria-hidden="true" />
      <div className="bg-orb bg-orb-bottom" aria-hidden="true" />

      <main className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="glass-panel relative overflow-hidden p-5 sm:p-6">
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo-sura.png"
              alt="SURA"
              width={200}
              height={66}
              priority
              className="h-auto w-full max-w-[180px]"
            />
          </div>

          <div className="mb-6 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--sura-blue-700)]">
              Información Corporativa
            </h2>
            {CORPORATE_INFO.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/50 bg-white/40 px-3 py-2 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--sura-blue-700)]">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm leading-5 text-[var(--ink-strong)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-6 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--sura-blue-700)]">
              Líneas de Atención
            </h2>
            {CONTACT_LINES.map((contact) => (
              <div
                key={contact.city}
                className="rounded-xl border border-white/50 bg-white/40 px-3 py-2 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--sura-blue-700)]">
                  {contact.city}
                </p>
                <p className="mt-0.5 text-sm leading-5 text-[var(--ink-strong)]">
                  {contact.phone}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--sura-blue-700)]">
              Oficina Cali
            </h2>
            <div className="rounded-xl border border-white/50 bg-white/40 px-3 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold text-[var(--sura-blue-900)]">
                {CALI_OFFICE.name}
              </p>
              <p className="mt-1.5 text-[13px] leading-5 text-[var(--ink-strong)]">
                {CALI_OFFICE.address}
              </p>
              <p className="mt-2 text-xs font-medium text-[var(--sura-blue-700)]">
                {CALI_OFFICE.phone}
              </p>
              <p className="mt-1.5 text-[11px] leading-4 text-[var(--ink-soft)]">
                {CALI_OFFICE.hours}
              </p>
            </div>
          </div>
        </aside>

        <section className="glass-panel p-4 sm:p-6">
          <header className="mb-5 rounded-2xl border border-white/55 bg-white/35 p-4 backdrop-blur-sm sm:p-5">

            <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--sura-blue-900)] sm:text-3xl">
              Historia institucional
            </h2>
          </header>

          <nav className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3" aria-label="Pestañas de contenido">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--sura-blue-700] ${isActive
                    ? "border-transparent bg-[linear-gradient(120deg,var(--sura-blue-900),var(--sura-blue-700))] text-white shadow-[0_12px_25px_-16px_rgba(0,51,160,0.9)]"
                    : "border-white/60 bg-white/40 text-[--sura-blue-900] hover:bg-white/60"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <article className="content-window rounded-3xl border border-white/65 bg-white/48 p-5 backdrop-blur-md sm:p-7">
            <h3 className="font-display text-xl font-semibold text-[var(--sura-blue-900)] sm:text-2xl">
              {sectionTitle}
            </h3>

            {activeTab === "resena" ? (
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-[var(--ink-strong)]">
                {RESENA_HISTORICA.map((paragraph, index) => (
                  <p key={`resena-${index}`}>{paragraph}</p>
                ))}
              </div>
            ) : activeTab === "misionVision" ? (
              <div className="mt-4 space-y-5 text-[15px] leading-7 text-[var(--ink-strong)]">
                <section>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-[--sura-blue-700]">
                    Visión
                  </h4>
                  <p className="mt-1">{MISION_VISION.vision}</p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-[--sura-blue-700]">
                    Misión
                  </h4>
                  <p className="mt-1">{MISION_VISION.mision}</p>
                  <p className="mt-3">{MISION_VISION.acciones}</p>
                  <p className="mt-3">{MISION_VISION.compromiso}</p>
                </section>
              </div>
            ) : activeTab === "servicios" ? (
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {SERVICIOS_PRINCIPALES.map((servicio, index) => (
                  <div
                    key={`servicio-${index}`}
                    className="service-card group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 backdrop-blur-sm transition-all duration-500 hover:border-[var(--sura-blue-500)] hover:bg-white/55 hover:shadow-[0_20px_40px_-15px_rgba(0,51,160,0.25)]"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-lg font-semibold leading-tight text-[var(--sura-blue-900)] transition-colors group-hover:text-[var(--sura-blue-700)]">
                        {servicio.titulo}
                      </h4>
                      <p className="mt-3 text-[14px] leading-6 text-[var(--ink-strong)]">
                        {servicio.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : activeTab === "objetivos" ? (
              <div className="mt-4 space-y-4">
                {OBJETIVOS_GENERALES.map((objetivo, index) => (
                  <section
                    key={`objetivo-${index}`}
                    className="rounded-2xl border border-white/55 bg-white/35 p-4 backdrop-blur-sm"
                  >
                    <h4 className="font-display text-base font-semibold text-[var(--sura-blue-900)]">
                      {objetivo.titulo}
                    </h4>
                    <p className="mt-2 text-[14px] leading-6 text-[var(--ink-strong)]">
                      {objetivo.descripcion}
                    </p>
                  </section>
                ))}
              </div>
            ) : activeTab === "politicas" ? (
              <ol className="mt-4 space-y-3 text-[14px] leading-6 text-[var(--ink-strong)]">
                {POLITICAS_CALIDAD.map((politica, index) => (
                  <li
                    key={`politica-${index}`}
                    className="rounded-2xl border border-white/55 bg-white/35 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="font-semibold text-[var(--sura-blue-900)]">{index + 1}. </span>
                    {politica}
                  </li>
                ))}
              </ol>
            ) : (
              <div className="mt-4 space-y-4">
                {VALORES_INSTITUCIONALES.map((valor, index) => (
                  <section
                    key={`valor-${index}`}
                    className="rounded-2xl border border-white/55 bg-white/35 p-4 backdrop-blur-sm"
                  >
                    <h4 className="font-display text-base font-semibold text-[var(--sura-blue-900)]">
                      {valor.titulo}
                    </h4>
                    <p className="mt-2 text-[14px] leading-6 text-[var(--ink-strong)]">
                      {valor.descripcion}
                    </p>
                  </section>
                ))}
              </div>
            )}
          </article>
        </section>
      </main>
    </div>
  );
}
