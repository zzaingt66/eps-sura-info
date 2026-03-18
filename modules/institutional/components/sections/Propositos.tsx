import { PURPOSE_CARDS } from "../../data/content";

export function PurposeSection() {
  return (
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
              item.title === "Lema"
                ? "font-display text-3xl font-semibold leading-tight"
                : "text-ink-strong"
            }`}
          >
            {item.description}
          </p>
        </section>
      ))}
    </div>
  );
}
