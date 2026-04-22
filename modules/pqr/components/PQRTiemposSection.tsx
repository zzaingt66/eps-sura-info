"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { PQR_TIEMPOS } from "../data/content";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

export function PQRTiemposSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
      }}
      className="grid gap-4 sm:grid-cols-3"
    >
      {PQR_TIEMPOS.map((t) => (
        <motion.div
          key={t.tipo}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
          }}
          className="glass-card p-6 flex flex-col items-start gap-3"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <Clock size={18} strokeWidth={1.8} />
          </span>
          <div>
            <p className="font-sans text-base font-semibold text-brand-950">{t.tipo}</p>
            <p className="mt-1 text-sm font-medium text-brand-700">{t.plazo}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
