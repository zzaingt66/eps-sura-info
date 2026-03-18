import { INSTITUTIONAL_VALUES } from "../../data/content";

export function ValuesSection() {
  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      {INSTITUTIONAL_VALUES.map((value) => (
        <section
          key={value.title}
          className="detail-card rounded-[1.6rem] border border-white/60 bg-white/42 p-5 backdrop-blur-sm"
        >
          <h4 className="mt-2 font-display text-2xl font-semibold text-brand-950">
            {value.title}
          </h4>
          <p className="mt-3 text-sm leading-6 text-ink-strong">{value.description}</p>
        </section>
      ))}
    </div>
  );
}
