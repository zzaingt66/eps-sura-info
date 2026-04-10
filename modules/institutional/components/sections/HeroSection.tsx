"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SECTION_META } from "../../data/content";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="glass-panel p-8 sm:p-12"
        >
          {/* Top: logo + identity */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
            <motion.div variants={item} className="shrink-0">
              <Image
                src="/logo-vitanova.png"
                alt="VitaNova IPS"
                width={180}
                height={180}
                priority
                className="h-auto w-36 drop-shadow-xl sm:w-44"
              />
            </motion.div>

            <div className="flex flex-col gap-3 text-center sm:text-left">
              <motion.p
                variants={item}
                className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-700"
              >
                Historia institucional
              </motion.p>
              <motion.h1
                variants={item}
                className="font-display text-5xl font-semibold text-brand-950 sm:text-6xl lg:text-7xl"
              >
                VitaNova IPS
              </motion.h1>
              <motion.blockquote
                variants={item}
                className="mt-1 max-w-md rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm leading-6 text-ink-strong shadow-[0_12px_28px_-18px_rgba(107,0,14,0.35)] backdrop-blur-sm"
              >
                "Cuidamos tu salud, mejoramos tu vida."
              </motion.blockquote>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            variants={item}
            className="my-8 h-px w-full bg-linear-to-r from-transparent via-brand-300/60 to-transparent"
          />

          {/* Misión + Visión cards */}
          <motion.div
            variants={container}
            className="grid gap-4 sm:grid-cols-2"
          >
            {/* Misión */}
            <motion.div
              variants={item}
              className="glass-card p-6"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                Misión
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-brand-950">
                Propósito institucional
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink-strong">
                {SECTION_META.proposito.description}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              variants={item}
              className="glass-card p-6"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                Visión
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-brand-950">
                Horizonte 2030
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink-strong">
                {SECTION_META.vision.description}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
