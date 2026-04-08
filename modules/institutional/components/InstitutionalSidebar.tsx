import Image from "next/image";

import { CALI_OFFICE, CONTACT_LINES, CORPORATE_INFO } from "../data/content";

export function InstitutionalSidebar() {
  return (
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
        <p className="mt-3 font-display text-xl font-semibold text-brand-950">
          {CALI_OFFICE.name}
        </p>
        <p className="mt-2 text-sm leading-6 text-ink-strong">{CALI_OFFICE.address}</p>
        <p className="mt-3 text-sm leading-5 text-ink-soft">{CALI_OFFICE.hours}</p>
        <a
          href="mailto:Vitanovasalud@gmail.com"
          className="mt-4 inline-flex rounded-full border border-brand-500 px-4 py-2 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-500/16"
        >
          vitanovasalud@gmail.com
        </a>
      </div>

      <div className="mt-6 space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Material informativo
        </h2>
        <div className="overflow-hidden rounded-3xl border border-white/55 shadow-sm">
          <Image
            src="/info/follleto.png"
            alt="Folleto IPS Vitanova"
            width={600}
            height={800}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/55 shadow-sm">
          <Image
            src="/info/Tarjeta.png"
            alt="Tarjeta de presentación IPS Vitanova"
            width={600}
            height={350}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </aside>
  );
}
