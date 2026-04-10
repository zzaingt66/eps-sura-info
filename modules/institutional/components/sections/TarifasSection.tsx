"use client";

import { motion } from "framer-motion";

const TARIFAS = [
  {
    servicio: "PYP (Prevención y Promoción)",
    paquetes: [
      { nombre: "Paquete Salud Adulto (Exámenes básicos)", valor: "80.000" },
      { nombre: "Paquete Salud Mujer (Citología + Mamografía)", valor: "150.000" },
      { nombre: "Paquete Salud Hombre (Antígeno Prostático)", valor: "100.000" },
    ],
  },
  {
    servicio: "Enfermería",
    paquetes: [
      { nombre: "Aplicación de Inyectables", valor: "15.000" },
      { nombre: "Curaciones Simples", valor: "25.000" },
      { nombre: "Toma de Signos Vitales y Glucemia Capilar", valor: "10.000" },
    ],
  },
  {
    servicio: "Laboratorio clínico",
    paquetes: [
      { nombre: "Hemograma Completo", valor: "25.000" },
      { nombre: "Perfil Lipídico (Colesterol, Triglicéridos)", valor: "40.000" },
      { nombre: "Glucosa en Ayunas", valor: "15.000" },
      { nombre: "Uroanálisis Completo", valor: "20.000" },
    ],
  },
  {
    servicio: "Imágenes diagnósticas",
    paquetes: [
      { nombre: "Radiografía de Tórax (PA y Lateral)", valor: "60.000" },
      { nombre: "Ecografía Abdominal Total", valor: "80.000" },
      { nombre: "Electrocardiograma (ECG)", valor: "45.000" },
    ],
  },
  {
    servicio: "Odontología",
    paquetes: [
      { nombre: "Consulta Odontológica y Diagnóstico", valor: "40.000" },
      { nombre: "Detartraje (Limpieza Dental)", valor: "80.000" },
      { nombre: "Exodoncia Simple (Extracción)", valor: "70.000" },
    ],
  },
  {
    servicio: "Rehabilitación",
    paquetes: [
      { nombre: "Sesión de Fisioterapia", valor: "50.000" },
      { nombre: "Sesión de Terapia Ocupacional", valor: "50.000" },
    ],
  },
  {
    servicio: "Atención domiciliaria",
    paquetes: [
      { nombre: "Visita Médica Domiciliaria", valor: "150.000" },
      { nombre: "Enfermería Domiciliaria (1 hora)", valor: "70.000" },
    ],
  },
  {
    servicio: "Telemedicina",
    paquetes: [
      { nombre: "Consulta Médica General Virtual", valor: "40.000" },
      { nombre: "Orientación Médica Telefónica", valor: "25.000" },
    ],
  },
  {
    servicio: "Urgencias básicas",
    paquetes: [
      { nombre: "Valoración Médica Inicial", valor: "80.000" },
      { nombre: "Sutura de Herida Menor", valor: "100.000" },
    ],
  },
];

export function TarifasSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true, amount: 0.1 }}
      className="overflow-x-auto rounded-2xl border border-brand-100/80"
    >
      <table className="w-full min-w-160 border-collapse text-sm">
        <thead>
          <tr className="bg-[linear-gradient(135deg,var(--color-brand-950),var(--color-brand-700))] text-white">
            <th className="border-r border-white/20 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
              Servicio
            </th>
            <th className="border-r border-white/20 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
              Paquetes de servicio
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide">
              Valor (COP)
            </th>
          </tr>
        </thead>
        <tbody>
          {TARIFAS.map((grupo, gi) =>
            grupo.paquetes.map((paquete, pi) => (
              <tr
                key={`${gi}-${pi}`}
                className={pi % 2 === 0 ? "bg-white/55" : "bg-brand-50/60"}
              >
                {pi === 0 ? (
                  <td
                    rowSpan={grupo.paquetes.length}
                    className="border-r border-[rgba(107,0,14,0.12)] border-b border-b-[rgba(107,0,14,0.08)] px-4 py-3 align-top font-semibold leading-5 text-brand-950"
                  >
                    {grupo.servicio}
                  </td>
                ) : null}
                <td className="border-r border-[rgba(107,0,14,0.08)] border-b border-b-[rgba(107,0,14,0.08)] px-4 py-3 leading-5 text-ink-strong">
                  {paquete.nombre}
                </td>
                <td className="whitespace-nowrap border-b border-b-[rgba(107,0,14,0.08)] px-4 py-3 text-right font-semibold tabular-nums text-brand-950">
                  $ {paquete.valor}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </motion.div>
  );
}
