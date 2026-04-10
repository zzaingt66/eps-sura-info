"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { IPS_SERVICES } from "../../data/content";
import type { ServiceItem } from "../../types/content";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function ServiciosLandingSection() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      {/* ── Cards grid ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {IPS_SERVICES.map((service) => (
          <motion.button
            key={service.title}
            variants={fadeUp}
            onClick={() => setSelected(service)}
            className="glass-card group cursor-pointer overflow-hidden text-left transition-shadow duration-300 hover:shadow-[0_24px_48px_-16px_rgba(107,0,14,0.22)]"
          >
            {/* Title + link */}
            <div className="p-5 pb-3">
              <h4 className="font-display text-lg font-semibold text-brand-950">
                {service.title}
              </h4>
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 transition-colors group-hover:text-brand-950">
                Ver detalles
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>

            {/* Service image — taller with hover zoom on image only */}
            <div className="relative h-56 w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* ── Service detail modal ── */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-4xl min-h-[520px] overflow-hidden p-0 gap-0 rounded-2xl border border-brand-100/40 bg-white shadow-2xl"
        >
          {selected && (
            <div className="flex flex-col sm:flex-row min-h-[520px]">
              {/* Text content */}
              <div className="flex w-full sm:w-[38%] shrink-0 flex-col justify-center p-8 sm:p-10">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl font-semibold text-brand-950">
                    {selected.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="mt-5 text-sm leading-7 text-ink-strong">
                  {selected.description}
                </DialogDescription>
              </div>

              {/* Image — dominant right column, fully visible */}
              <div className="relative h-72 sm:h-auto flex-1 flex items-center justify-center bg-gray-50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.imageSrc}
                  alt={selected.imageAlt}
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
