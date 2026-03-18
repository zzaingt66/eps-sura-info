import { GENERAL_OBJECTIVES } from "../../data/content";

export function ObjectivesSection() {
  return (
    <div className="mt-6 space-y-4">
      {GENERAL_OBJECTIVES.map((objective, index) => (
        <section
          key={`objetivo-${index}`}
          className="detail-card rounded-[1.6rem] border border-white/60 bg-white/42 p-5 backdrop-blur-sm"
        >
          <p className="text-md text-ink-strong">
            <span className="mr-4 font-semibold text-brand-700">{index + 1}.</span>
            {objective}
          </p>
        </section>
      ))}
    </div>
  );
}
