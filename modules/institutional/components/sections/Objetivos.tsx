import { GENERAL_OBJECTIVES } from "../../data/content";

export function ObjectivesSection() {
  return (
    <div className="mt-6 space-y-4">
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
  );
}
