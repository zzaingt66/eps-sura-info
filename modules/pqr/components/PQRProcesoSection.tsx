"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PQR_PROCESO } from "../data/content";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

export function PQRProcesoSection() {
  return (
    <div className="flex flex-col gap-3">
      {PQR_PROCESO.map((paso, idx) => (
        <motion.div
          key={paso.numero}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: EASE, delay: idx * 0.07 }}
          className="glass-card p-5 flex items-start gap-4"
        >
          {/* Step number + connector */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-700 text-white shadow-[0_6px_18px_-8px_rgba(107,0,14,0.55)]">
              <CheckCircle2 size={16} strokeWidth={2} />
            </span>
            {idx < PQR_PROCESO.length - 1 && (
              <span className="w-px flex-1 min-h-[1rem] bg-brand-200" />
            )}
          </div>

          <div className="pb-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-700">
              Paso {paso.numero}
            </p>
            <p className="mt-0.5 font-display text-base font-semibold text-brand-950">
              {paso.titulo}
            </p>
            <p className="mt-1.5 text-sm leading-6 text-ink-soft">{paso.descripcion}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
