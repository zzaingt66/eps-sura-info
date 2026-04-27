"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { PQRSF_ESTADOS, type PqrsfEstado } from "@/lib/schemas/pqrsf";

const ESTADO_LABELS: Record<PqrsfEstado, string> = {
  nuevo: "Nuevo",
  en_proceso: "En proceso",
  resuelto: "Resuelto",
  cerrado: "Cerrado",
};


export function EstadoSelector({
  id,
  current,
}: {
  id: number;
  current: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [estado, setEstado] = useState(current as PqrsfEstado);

  async function onChange(next: PqrsfEstado) {
    setLoading(true);
    await fetch(`/api/pqr/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: next }),
    });
    setEstado(next);
    setLoading(false);
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      {loading && (
        <RefreshCw size={13} className="animate-spin text-slate-400" />
      )}
      <select
        value={estado}
        disabled={loading}
        onChange={(e) => onChange(e.target.value as PqrsfEstado)}
        className={`rounded-lg border px-3 py-1.5 text-xs font-semibold outline-none transition-all focus:ring-2 focus:ring-brand-100 disabled:opacity-50`}
      >
        {PQRSF_ESTADOS.map((e) => (
          <option key={e} value={e}>
            {ESTADO_LABELS[e]}
          </option>
        ))}
      </select>
    </div>
  );
}
