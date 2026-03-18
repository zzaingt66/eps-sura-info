import { FOUNDING_PILLARS, RESENA_HISTORICA } from "../../data/content";

export function ResenaSection() {
  return (
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
            <p className="mt-3 text-sm leading-6 text-ink-strong">{pillar.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
