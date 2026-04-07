import { GENERAL_OBJECTIVES, SPECIFIC_OBJECTIVES } from "../../data/content";

export function ObjectivesSection() {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-2">
      {/* Objetivos Generales */}
      <div>
        <h4 className="mb-4 font-display text-lg font-semibold text-brand-950">
          Objetivos Generales
        </h4>
        <div className="space-y-4">
          {GENERAL_OBJECTIVES.map((objective, index) => (
            <section
              key={`objetivo-${index}`}
              className="detail-card rounded-[1.6rem] border border-white/60 bg-white/42 p-5 backdrop-blur-sm"
            >
              <h3 className="text-md font-semibold text-brand-700">
                <span className="mr-2">{index + 1}.</span>
                {objective.title}
              </h3>
              <p className="mt-2 text-md text-ink-strong">{objective.description}</p>
            </section>
          ))}
        </div>
      </div>

      {/* Objetivos Específicos */}
      <div>
        <h4 className="mb-4 font-display text-lg font-semibold text-brand-950">
          Objetivos Específicos
        </h4>
        <div className="space-y-4">
          {SPECIFIC_OBJECTIVES.map((objective, index) => (
            <section
              key={`objetivo-especifico-${index}`}
              className="detail-card rounded-[1.6rem] border border-white/60 bg-white/42 p-5 backdrop-blur-sm"
            >
              <h3 className="text-md font-semibold text-brand-700">
                <span className="mr-2">{index + 1}.</span>
                {objective.title}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-ink-strong">
                {objective.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
