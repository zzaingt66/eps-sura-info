import { IPS_SERVICES } from "../../data/content";

export function ServicesSection() {
    return (
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {IPS_SERVICES.map((service) => (
                <section
                    key={service.title}
                    className="detail-card overflow-hidden rounded-[1.6rem]"
                >
                    <div className="relative h-56 w-full bg-white/70">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain p-2"
                        />
                    </div>

                    <div className="p-5">
                        <h4 className="font-display text-2xl font-semibold text-brand-950">{service.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-ink-strong">{service.description}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}
