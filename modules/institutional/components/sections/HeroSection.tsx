"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="hero" className="pt-8 pb-16 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="glass-panel p-8 sm:p-12"
        >
          {/* Top: logo + identity */}
          <div className="flex items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
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

            <div className="flex flex-row gap-24 text-center sm:text-left">
              <motion.h1
                variants={item}
                className="font-display text-5xl font-semibold text-brand-950 sm:text-6xl lg:text-7xl"
              >
                VitaNova IPS
              </motion.h1>
              <motion.div>
                <motion.blockquote
                  variants={item}
                  className="mt-1 max-w-md rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm leading-6 text-ink-strong shadow-[0_12px_28px_-18px_rgba(107,0,14,0.35)] backdrop-blur-sm"
                >
                  &quot;Cuidamos tu salud, mejoramos tu vida.&quot;
                </motion.blockquote>
                <motion.blockquote
                  variants={item}
                  className="mt-1 max-w-md rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm leading-6 text-ink-strong shadow-[0_12px_28px_-18px_rgba(107,0,14,0.35)] backdrop-blur-sm"
                >
                  NIT: 901.456.789-1
                </motion.blockquote>
              </motion.div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
