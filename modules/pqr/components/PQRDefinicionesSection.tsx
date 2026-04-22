"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  AlertCircle,
  Scale,
  Lightbulb,
  Heart,
  Shield,
} from "lucide-react";
import { PQR_DEFINICIONES } from "../data/content";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const ICONS = {
  peticion: ClipboardList,
  queja: AlertCircle,
  reclamo: Scale,
  sugerencia: Lightbulb,
  felicitacion: Heart,
  tutela: Shield,
} as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function PQRDefinicionesSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {PQR_DEFINICIONES.map((def) => {
        const Icon = ICONS[def.key as keyof typeof ICONS];
        return (
          <motion.div key={def.key} variants={item} className="glass-card p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                {Icon && <Icon size={18} strokeWidth={1.8} />}
              </span>
              <p className="font-display text-lg font-semibold text-brand-950">{def.titulo}</p>
            </div>
            <p className="text-sm leading-6 text-ink-soft">{def.descripcion}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
