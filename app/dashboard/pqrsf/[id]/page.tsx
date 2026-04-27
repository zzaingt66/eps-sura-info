import { getDb } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail, Calendar, User, Tag, FileText, MessageSquare } from "lucide-react";
import { PqrsfRow } from "@/lib/schemas/pqrsf";
import { EstadoSelector } from "./EstadoSelector";

export const dynamic = "force-dynamic";

interface AdminPqrsfRow extends PqrsfRow {
  respuesta: string | null;
  fecha_respuesta: number | null;
}

type PageProps = { params: Promise<{ id: string }> };

const ESTADO_LABELS: Record<string, string> = {
  nuevo: "Nuevo",
  en_proceso: "En proceso",
  resuelto: "Resuelto",
  cerrado: "Cerrado",
};

function fmt(ts: number) {
  return new Date(ts * 1000).toLocaleString("es-CO", {
    dateStyle: "long",
    timeStyle: "short",
  });
}

export default async function PqrsfDetailPage({ params }: PageProps) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  if (!Number.isInteger(id) || id <= 0) notFound();

  const db = await getDb();
  const result = await db.execute({
    sql: "SELECT * FROM pqrsf WHERE id = ? AND deleted_at IS NULL",
    args: [id],
  });
  const row = result.rows[0] as unknown as AdminPqrsfRow | undefined;
  if (!row) notFound();

  const mailtoHref = `mailto:${row.email}?subject=Re: ${encodeURIComponent(row.asunto)}&body=${encodeURIComponent(`Estimado/a ${row.nombre},\n\nEn respuesta a su solicitud de tipo "${row.tipo}" (Radicado #${row.id}):\n\n`)}`;

  return (
    <div className="flex flex-col gap-6">
      {/* Back */}
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-brand-700 transition-colors"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          Volver al listado
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-sm font-semibold text-slate-700">
          Radicado #{row.id}
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        {/* ── Main card ── */}
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-xl font-semibold text-slate-900">
                  {row.asunto}
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Tipo:{" "}
                  <strong className="font-semibold text-slate-700">
                    {row.tipo}
                  </strong>
                </p>
              </div>
              <EstadoSelector id={row.id} current={row.estado} />
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                <MessageSquare size={11} strokeWidth={2} />
                Descripción
              </div>
              <p className="text-sm leading-7 whitespace-pre-wrap text-slate-700">
                {row.descripcion}
              </p>
            </div>
          </div>

          {/* Respuesta registrada */}
          {row.respuesta && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                <Mail size={11} strokeWidth={2} />
                Respuesta registrada
              </div>
              <p className="text-sm leading-7 whitespace-pre-wrap text-emerald-800">
                {row.respuesta}
              </p>
              {row.fecha_respuesta && (
                <p className="mt-3 text-xs text-emerald-600">
                  {fmt(row.fecha_respuesta)}
                </p>
              )}
            </div>
          )}
        </div>

        {/* ── Sidebar ── */}
        <div className="flex flex-col gap-4">
          {/* Contact info */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Remitente
            </h2>
            <dl className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <User
                  size={14}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-slate-400"
                />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Nombre
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-slate-800">
                    {row.nombre}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={14}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-slate-400"
                />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Correo
                  </dt>
                  <dd className="mt-0.5 text-sm text-slate-800">
                    {row.email}
                  </dd>
                </div>
              </div>

              {row.telefono && (
                <div className="flex items-start gap-3">
                  <FileText
                    size={14}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Teléfono
                    </dt>
                    <dd className="mt-0.5 text-sm text-slate-800">
                      {row.telefono}
                    </dd>
                  </div>
                </div>
              )}
            </dl>
          </div>

          {/* Metadata */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Información
            </h2>
            <dl className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Tag
                  size={14}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-slate-400"
                />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Radicado
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-brand-700">
                    #{row.id}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar
                  size={14}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-slate-400"
                />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Fecha de radicado
                  </dt>
                  <dd className="mt-0.5 text-sm text-slate-800">
                    {fmt(row.fecha_creacion)}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar
                  size={14}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-slate-400"
                />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Última actualización
                  </dt>
                  <dd className="mt-0.5 text-sm text-slate-800">
                    {fmt(row.fecha_actualizacion)}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Reply button */}
          <a
            href={mailtoHref}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(107,0,14,0.5)] transition-colors hover:bg-brand-950 focus-visible:outline-2 focus-visible:outline-brand-700"
          >
            <Mail size={15} strokeWidth={2} />
            Responder por correo
          </a>
        </div>
      </div>
    </div>
  );
}
