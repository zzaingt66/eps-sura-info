"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Filter,
  Eye,
  RefreshCw,
  Mail,
  ChevronRight,
  Inbox,
} from "lucide-react";
import { PQRSF_TIPOS, PQRSF_ESTADOS, type PqrsfTipo, type PqrsfEstado } from "@/lib/schemas/pqrsf";

interface Row {
  id: number;
  tipo: PqrsfTipo;
  nombre: string;
  email: string;
  asunto: string;
  estado: PqrsfEstado;
  fecha_creacion: number;
  respuesta: string | null;
}

const ESTADO_LABELS: Record<PqrsfEstado, string> = {
  nuevo: "Nuevo",
  en_proceso: "En proceso",
  resuelto: "Resuelto",
  cerrado: "Cerrado",
};



const TIPO_COLORS: Record<PqrsfTipo, string> = {
  Peticion: "bg-brand-50 text-brand-700",
  Queja: "bg-amber-50 text-amber-700",
  Reclamo: "bg-orange-50 text-orange-700",
  Sugerencia: "bg-emerald-50 text-emerald-700",
  Felicitaciones: "bg-violet-50 text-violet-700",
};

function fmt(ts: number) {
  return new Date(ts * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function DashboardClient({ rows }: { rows: Row[] }) {
  const router = useRouter();
  const [tipoFilter, setTipoFilter] = useState<PqrsfTipo | "">("");
  const [estadoFilter, setEstadoFilter] = useState<PqrsfEstado | "">("");
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const filtered = rows.filter((r) => {
    if (tipoFilter && r.tipo !== tipoFilter) return false;
    if (estadoFilter && r.estado !== estadoFilter) return false;
    return true;
  });

  // Stat counters
  const counts = PQRSF_ESTADOS.reduce(
    (acc, e) => ({ ...acc, [e]: rows.filter((r) => r.estado === e).length }),
    {} as Record<PqrsfEstado, number>
  );

  async function changeEstado(id: number, estado: PqrsfEstado) {
    setUpdatingId(id);
    await fetch(`/api/pqr/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado }),
    });
    setUpdatingId(null);
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      {/* ── Stat cards ── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {PQRSF_ESTADOS.map((e) => (
          <button
            key={e}
            onClick={() => setEstadoFilter(estadoFilter === e ? "" : e)}
            className={`rounded-xl border p-4 text-left transition-all hover:shadow-sm ${
              estadoFilter === e
                ? "border-foreground bg-slate-100 shadow-sm"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-2xl font-bold text-slate-800">{counts[e]}</p>
            <p className="mt-0.5 text-xs font-medium text-slate-500">
              {ESTADO_LABELS[e]}
            </p>
          </button>
        ))}
      </div>

      {/* ── Filters ── */}
      <div className="flex flex-wrap items-center gap-3">
        <Filter size={14} className="text-slate-400" strokeWidth={2} />
        <span className="text-xs font-medium text-slate-500">Filtrar por:</span>

        <select
          value={tipoFilter}
          onChange={(e) => setTipoFilter(e.target.value as PqrsfTipo | "")}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        >
          <option value="">Todos los tipos</option>
          {PQRSF_TIPOS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={estadoFilter}
          onChange={(e) => setEstadoFilter(e.target.value as PqrsfEstado | "")}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        >
          <option value="">Todos los estados</option>
          {PQRSF_ESTADOS.map((e) => (
            <option key={e} value={e}>
              {ESTADO_LABELS[e]}
            </option>
          ))}
        </select>

        {(tipoFilter || estadoFilter) && (
          <button
            onClick={() => {
              setTipoFilter("");
              setEstadoFilter("");
            }}
            className="text-xs text-brand-700 hover:underline"
          >
            Limpiar filtros
          </button>
        )}

        <span className="ml-auto text-xs text-slate-400">
          {filtered.length} registro{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── Table ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white py-16 text-center">
          <Inbox size={32} strokeWidth={1.4} className="text-slate-300" />
          <p className="text-sm text-slate-500">No hay registros que coincidan</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-175 text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3">Remitente</th>
                <th className="px-4 py-3">Asunto</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className="group transition-colors hover:bg-slate-50/60"
                >
                  <td className="px-4 py-3 text-xs text-slate-400">
                    #{row.id}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${TIPO_COLORS[row.tipo]}`}
                    >
                      {row.tipo}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800">{row.nombre}</p>
                    <p className="text-xs text-slate-400">{row.email}</p>
                  </td>

                  <td className="max-w-[200px] px-4 py-3">
                    <p className="truncate text-slate-700">{row.asunto}</p>
                  </td>

                  <td className="px-4 py-3">
                    <select
                      value={row.estado}
                      disabled={updatingId === row.id}
                      onChange={(e) =>
                        changeEstado(row.id, e.target.value as PqrsfEstado)
                      }
                      className={`rounded-lg border px-2.5 py-1 text-xs font-semibold outline-none transition-all focus:ring-2 focus:ring-brand-100 disabled:opacity-50 bg-slate-50`}
                    >
                      {PQRSF_ESTADOS.map((e) => (
                        <option key={e} value={e}>
                          {ESTADO_LABELS[e]}
                        </option>
                      ))}
                    </select>
                    {updatingId === row.id && (
                      <RefreshCw
                        size={12}
                        className="ml-2 inline animate-spin text-slate-400"
                      />
                    )}
                  </td>

                  <td className="px-4 py-3 text-xs text-slate-500">
                    {fmt(row.fecha_creacion)}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={`mailto:${row.email}?subject=Re: ${encodeURIComponent(row.asunto)}&body=${encodeURIComponent(`Estimado/a ${row.nombre},\n\nEn respuesta a su solicitud de tipo "${row.tipo}" (Radicado #${row.id}):\n\n`)}`}
                        title="Responder por correo"
                        className="flex size-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                      >
                        <Mail size={13} strokeWidth={2} />
                      </a>
                      <Link
                        href={`/dashboard/pqrsf/${row.id}`}
                        title="Ver detalle"
                        className="flex size-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                      >
                        <Eye size={13} strokeWidth={2} />
                      </Link>
                      <Link
                        href={`/dashboard/pqrsf/${row.id}`}
                        className="flex items-center gap-1 text-xs text-brand-700 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        Ver <ChevronRight size={12} strokeWidth={2} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
