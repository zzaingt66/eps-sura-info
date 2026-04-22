"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake } from "lucide-react";
import { PQR_NORMAS, PQR_IMPORTANCIA } from "../data/content";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

export function PQRNormativaSection() {
  return (
    <div className="flex flex-col gap-6">
      {/* Normativa */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
        }}
        className="flex flex-col gap-3"
      >
        {PQR_NORMAS.map((norma) => (
          <motion.li
            key={norma.nombre}
            variants={{
              hidden: { opacity: 0, x: -16 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
            }}
            className="glass-card p-5 flex items-start gap-3"
          >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <BookOpen size={15} strokeWidth={1.8} />
              </span>
            <div>
              <p className="font-sans text-sm font-semibold text-brand-950">{norma.nombre}</p>
              <p className="mt-1 text-sm leading-6 text-ink-soft">{norma.descripcion}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Importancia */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        className="glass-card p-6 flex items-start gap-4"
      >

          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white shadow-[0_6px_18px_-8px_rgba(107,0,14,0.55)]">
            <HeartHandshake size={20} strokeWidth={1.8} />
          </span>
        <div>
          <p className="font-sans text-base font-semibold text-brand-950">
            Importancia del sistema PQRSF
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{PQR_IMPORTANCIA}</p>
        </div>
      </motion.div>
    </div>
  );
}
