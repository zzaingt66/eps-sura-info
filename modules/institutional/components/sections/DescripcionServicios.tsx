import { IPS_SERVICES } from "../../data/content";

export function ServicesDescriptionSection() {
  return (
    <div className="mt-6 space-y-4">
      {IPS_SERVICES.map((service, index) => (
        <section
          key={service.title}
          className="detail-card flex items-start gap-4 rounded-[1.6rem] border border-white/60 bg-white/42 p-5 backdrop-blur-sm"
        >

          <div>
            <h4 className="font-display text-lg font-semibold text-brand-950">{service.title}</h4>
            <p className="mt-2 text-sm leading-6 text-ink-strong">{service.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
