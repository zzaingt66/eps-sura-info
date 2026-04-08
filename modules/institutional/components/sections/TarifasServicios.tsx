const TARIFAS = [
  {
    servicio: "Consulta externa",
    paquetes: [
      { nombre: "Consulta Médica General (Control y Seguimiento)", valor: "50.000" },
      { nombre: "Consulta de Especialista (Primera vez)", valor: "120.000" },
      { nombre: "Consulta de Especialista (Control)", valor: "90.000" },
    ],
  },
  {
    servicio: "PYP (Programa de Prevención y Promoción)",
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

const EXTRA_COLS = ["VINCULADOS", "RC", "RS", "EVENTUALIDADES", "%"];

export function TarifasServiciosSection() {
  return (
    <div className="mt-6 overflow-x-auto rounded-3xl border border-[rgba(107,0,14,0.18)]">
      <table className="w-full min-w-170 border-collapse text-sm">
        <thead>
          <tr className="bg-[linear-gradient(135deg,var(--color-brand-950),var(--color-brand-700))] text-white">
            <th className="border-r border-white/20 px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
              Servicio
            </th>
            <th className="border-r border-white/20 px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
              Paquetes de servicio
            </th>
            <th className="border-r border-white/20 px-4 py-3 text-right font-semibold uppercase tracking-wide text-xs whitespace-nowrap">
              Valor (COP)
            </th>
            {EXTRA_COLS.map((col) => (
              <th
                key={col}
                className="border-r border-white/20 px-3 py-3 text-center font-semibold uppercase tracking-wide text-xs last:border-r-0"
              >
                {col}
              </th>
            ))}
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
                    className="border-r border-[rgba(107,0,14,0.12)] border-b border-b-[rgba(107,0,14,0.08)] px-4 py-3 align-top font-semibold text-brand-950 leading-5"
                  >
                    {grupo.servicio}
                  </td>
                ) : null}
                <td className="border-r border-[rgba(107,0,14,0.08)] border-b border-b-[rgba(107,0,14,0.08)] px-4 py-3 text-ink-strong leading-5">
                  {paquete.nombre}
                </td>
                <td className="border-r border-[rgba(107,0,14,0.08)] border-b border-b-[rgba(107,0,14,0.08)] px-4 py-3 text-right font-semibold text-brand-950 whitespace-nowrap tabular-nums">
                  $ {paquete.valor}
                </td>
                {EXTRA_COLS.map((col) => (
                  <td
                    key={col}
                    className="border-r border-[rgba(107,0,14,0.08)] border-b border-b-[rgba(107,0,14,0.08)] px-3 py-3 text-center text-ink-soft last:border-r-0"
                  >
                    —
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
