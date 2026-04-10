"use client";

import { motion } from "framer-motion";
import { FOUNDING_PILLARS, RESENA_HISTORICA } from "../../data/content";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function ResenaSection() {
  return (
    <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4 text-[15px] leading-7 text-ink-strong"
      >
        {RESENA_HISTORICA.map((paragraph, index) => (
          <motion.p key={`resena-${index}`} variants={fadeUp}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4"
      >
        {FOUNDING_PILLARS.map((pillar) => (
          <motion.section
            key={pillar.title}
            variants={fadeUp}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="glass-card p-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              Pilar
            </p>
            <h4 className="mt-2 font-display text-xl font-semibold text-brand-950">
              {pillar.title}
            </h4>
            <p className="mt-3 text-sm leading-6 text-ink-strong">{pillar.description}</p>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
}
