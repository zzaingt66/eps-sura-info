"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { PQR_CANALES, PQR_HORARIOS } from "../data/content";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const CANAL_ICONS = {
  presencial: MapPin,
  virtual: Globe,
  telefonico: Phone,
} as const;

const ITEM_ICONS: Record<string, typeof Mail> = {
  "Página web": Globe,
  "Correo electrónico": Mail,
  "Teléfono": Phone,
  "WhatsApp": MessageCircle,
  "Sede principal": MapPin,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function PQRCanalesSection() {
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {PQR_CANALES.map((canal) => {
          const CanalIcon = CANAL_ICONS[canal.tipo as keyof typeof CANAL_ICONS];
          return (
            <motion.div key={canal.tipo} variants={item} className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  {CanalIcon && <CanalIcon size={18} strokeWidth={1.8} />}
                </span>
                <p className="font-sans text-lg font-semibold text-brand-950">{canal.titulo}</p>
              </div>
              <ul className="flex flex-col gap-3">
                {canal.items.map((ci) => {
                  const ItemIcon = ITEM_ICONS[ci.label] ?? MapPin;
                  const content = (
                    <div className="flex items-start gap-2.5">
                      <ItemIcon size={14} strokeWidth={1.8} className="mt-0.5 shrink-0 text-brand-500" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                          {ci.label}
                        </p>
                        <p className="mt-0.5 text-sm leading-5 text-ink-strong">{ci.valor}</p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={ci.label}>
                      {ci.href ? (
                        <a
                          href={ci.href}
                          target={ci.href.startsWith("http") ? "_blank" : undefined}
                          rel={ci.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block rounded-xl p-2 -mx-2 transition-colors hover:bg-brand-50/70"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="p-2 -mx-2">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Horarios */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        className="glass-card p-5 flex items-start gap-3"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <Clock size={18} strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
            Horario de atención
          </p>
          <p className="mt-1 text-sm leading-6 text-ink-strong">{PQR_HORARIOS.semana}</p>
          <p className="text-sm leading-6 text-ink-strong">{PQR_HORARIOS.finesSemana}</p>
        </div>
      </motion.div>
    </div>
  );
}
