"use client";

import { motion } from "framer-motion";
import {  RESENA_HISTORICA } from "../../data/content";

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
    <div className="mt-8 grid gap-8 ">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4 text-md leading-7 text-ink-strong"
      >
        {RESENA_HISTORICA.map((paragraph, index) => (
          <motion.p key={`resena-${index}`} variants={fadeUp}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

    </div>
  );
}
