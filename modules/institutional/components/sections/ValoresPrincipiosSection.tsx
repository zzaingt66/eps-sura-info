"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GENERAL_OBJECTIVES,
  INSTITUTIONAL_VALUES,
  QUALITY_POLICIES,
  SPECIFIC_OBJECTIVES,
} from "../../data/content";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ─── Subcomponent: section header ─── */
function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-700">
        {label}
      </p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function ValoresPrincipiosSection() {
  return (
    <div className="space-y-14">
      {/* ─── Valores institucionales ─── */}
      <div>
        <SectionHeading label="Cultura organizacional" title="Valores Institucionales" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {INSTITUTIONAL_VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card p-5"
            >
              <h3 className="font-display text-xl font-semibold text-brand-950">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-strong">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── Políticas de calidad ─── */}
      <div>
        <SectionHeading label="Marco normativo" title="Políticas de Calidad" />
        <Accordion
          multiple
          className="flex w-full flex-col gap-2"
        >
          {QUALITY_POLICIES.map((policy, index) => (
            <AccordionItem
              key={`politica-${index}`}
              value={`politica-${index}`}
              className="glass-card overflow-hidden rounded-[1.4rem]"
            >
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-brand-950 hover:no-underline">
                <span className="mr-3 font-mono text-xs text-brand-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {policy.length > 80 ? policy.slice(0, 78) + "…" : policy}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-sm leading-6 text-ink-strong">
                {policy}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* ─── Objetivos generales ─── */}
      <div>
        <SectionHeading label="Estrategia" title="Objetivos Generales" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {GENERAL_OBJECTIVES.map((obj, index) => (
            <motion.div
              key={`objetivo-${index}`}
              variants={fadeUp}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-3xl font-bold text-brand-300 leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-950">{obj.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-strong">{obj.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── Objetivos específicos ─── */}
      <div>
        <SectionHeading label="Metas operativas" title="Objetivos Específicos" />
        <Accordion
          multiple
          className="flex w-full flex-col gap-2"
        >
          {SPECIFIC_OBJECTIVES.map((obj, index) => (
            <AccordionItem
              key={`obj-esp-${index}`}
              value={`obj-esp-${index}`}
              className="glass-card overflow-hidden rounded-[1.4rem]"
            >
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-brand-950 hover:no-underline">
                <span className="mr-3 font-mono text-xs text-brand-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {obj.title}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4">
                <ul className="space-y-2">
                  {obj.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-strong">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
