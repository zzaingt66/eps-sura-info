"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  AlertCircle,
  Scale,
  Lightbulb,
  Heart,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const TIPOS = [
  {
    value: "Peticion",
    label: "Petición",
    Icon: ClipboardList,
    description: "Solicitud de información o servicios",
    activeClass:
      "bg-brand-700 text-white border-brand-700 shadow-[0_6px_20px_-6px_rgba(107,0,14,0.5)]",
    hoverClass: "hover:bg-brand-50 hover:border-brand-300",
    iconBg: "bg-brand-50 text-brand-700",
    iconActiveBg: "bg-white/20 text-white",
  },
  {
    value: "Queja",
    label: "Queja",
    Icon: AlertCircle,
    description: "Inconformidad con la atención",
    activeClass:
      "bg-amber-500 text-white border-amber-500 shadow-[0_6px_20px_-6px_rgba(217,119,6,0.5)]",
    hoverClass: "hover:bg-amber-50 hover:border-amber-200",
    iconBg: "bg-amber-50 text-amber-600",
    iconActiveBg: "bg-white/20 text-white",
  },
  {
    value: "Reclamo",
    label: "Reclamo",
    Icon: Scale,
    description: "Falla en la prestación del servicio",
    activeClass:
      "bg-orange-600 text-white border-orange-600 shadow-[0_6px_20px_-6px_rgba(234,88,12,0.5)]",
    hoverClass: "hover:bg-orange-50 hover:border-orange-200",
    iconBg: "bg-orange-50 text-orange-600",
    iconActiveBg: "bg-white/20 text-white",
  },
  {
    value: "Sugerencia",
    label: "Sugerencia",
    Icon: Lightbulb,
    description: "Propuesta de mejora",
    activeClass:
      "bg-emerald-600 text-white border-emerald-600 shadow-[0_6px_20px_-6px_rgba(5,150,105,0.5)]",
    hoverClass: "hover:bg-emerald-50 hover:border-emerald-200",
    iconBg: "bg-emerald-50 text-emerald-600",
    iconActiveBg: "bg-white/20 text-white",
  },
  {
    value: "Felicitaciones",
    label: "Felicitación",
    Icon: Heart,
    description: "Reconocimiento positivo",
    activeClass:
      "bg-violet-600 text-white border-violet-600 shadow-[0_6px_20px_-6px_rgba(124,58,237,0.5)]",
    hoverClass: "hover:bg-violet-50 hover:border-violet-200",
    iconBg: "bg-violet-50 text-violet-600",
    iconActiveBg: "bg-white/20 text-white",
  },
] as const;

type TipoValue = (typeof TIPOS)[number]["value"];

interface FormData {
  tipo: TipoValue | "";
  nombre: string;
  email: string;
  telefono: number;
  asunto: string;
  descripcion: string;
}

interface FormErrors {
  tipo?: string;
  nombre?: string;
  email?: string;
  asunto?: string;
  descripcion?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.tipo) errors.tipo = "Selecciona el tipo de solicitud";
  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio";
  if (!data.email.trim()) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresa un correo electrónico válido";
  }
  if (!data.asunto.trim()) errors.asunto = "El asunto es obligatorio";
  if (!data.descripcion.trim())
    errors.descripcion = "La descripción es obligatoria";
  return errors;
}

const INITIAL_FORM: FormData = {
  tipo: "",
  nombre: "",
  email: "",
  telefono: "",
  asunto: "",
  descripcion: "",
};

export function PQRFormularioSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [radicado, setRadicado] = useState<number | null>(null);

  const errors = validate(form);
  const visibleErrors = Object.fromEntries(
    Object.entries(errors).filter(([k]) => touched[k as keyof FormData])
  ) as FormErrors;

  function touch(field: keyof FormData) {
    setTouched((p) => ({ ...p, [field]: true }));
  }

  function touchAll() {
    setTouched({
      tipo: true,
      nombre: true,
      email: true,
      asunto: true,
      descripcion: true,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    touchAll();
    if (Object.keys(errors).length > 0) return;

    setStatus("loading");
    setServerError(null);

    try {
      const res = await fetch("/api/pqr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: form.tipo,
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          ...(form.telefono.trim() ? { telefono: form.telefono.trim() } : {}),
          asunto: form.asunto.trim(),
          descripcion: form.descripcion.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Error al enviar la solicitud");
      }

      const data = await res.json();
      setRadicado(data.data?.id ?? null);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Error inesperado. Intenta de nuevo."
      );
    }
  }

  function inputClass(field: keyof FormErrors) {
    const base =
      "w-full rounded-xl border bg-white/60 px-4 py-3 text-sm text-ink-strong placeholder-ink-soft/40 outline-none transition-all duration-200 focus:bg-white focus:shadow-[0_0_0_3px_rgba(181,0,28,0.10)]";
    return visibleErrors[field]
      ? `${base} border-foreground focus:border-foreground`
      : `${base} border-foreground hover:border-foreground focus:border-foreground`;
  }

  /* ── Success ── */
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="glass-card flex flex-col items-center gap-6 px-8 py-14 text-center"
      >
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
        >
          <CheckCircle2 size={32} strokeWidth={1.6} />
        </motion.span>

        <div>
          <h3 className="font-display text-2xl font-semibold text-brand-950">
            ¡Solicitud recibida!
          </h3>
          {radicado && (
            <p className="mt-2 text-sm text-ink-soft">
              Número de radicado:{" "}
              <strong className="font-semibold text-brand-700">
                #{radicado}
              </strong>
            </p>
          )}
          <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">
            Hemos registrado tu solicitud exitosamente. Recibirás una respuesta
            dentro de los tiempos establecidos por la normativa vigente.
          </p>
        </div>

        <button
          onClick={() => {
            setStatus("idle");
            setForm(INITIAL_FORM);
            setTouched({});
            setRadicado(null);
          }}
          className="rounded-xl border border-brand-200 px-6 py-2.5 text-sm font-medium text-brand-700 transition-all hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-brand-700"
        >
          Enviar otra solicitud
        </button>
      </motion.div>
    );
  }

  /* ── Form ── */
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: EASE }}
      noValidate
      className="glass-card flex flex-col gap-8 p-6 sm:p-10"
    >
      {/* ── 1. Tipo ── */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          1. Tipo de solicitud{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </p>

        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-5"
          role="radiogroup"
          aria-label="Tipo de solicitud"
        >
          {TIPOS.map(
            (
              {
                value,
                label,
                Icon,
                description,
                activeClass,
                hoverClass,
                iconBg,
                iconActiveBg,
              },
              idx
            ) => {
              const isActive = form.tipo === value;
              const isLast = idx === TIPOS.length - 1;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => {
                    setForm((p) => ({ ...p, tipo: value }));
                    touch("tipo");
                  }}
                  className={`flex flex-col items-center gap-2.5 rounded-2xl border-2 p-4 text-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-700 ${
                    isLast ? "col-span-2 sm:col-span-1" : ""
                  } ${
                    isActive
                      ? activeClass
                      : `border-foreground bg-white/50 ${hoverClass}`
                  }`}
                >
                  <span
                    className={`flex size-9 items-center justify-center rounded-xl transition-all duration-200 ${
                      isActive ? iconActiveBg : iconBg
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p
                      className={`text-sm font-semibold leading-tight ${
                        isActive ? "text-white" : "text-brand-950"
                      }`}
                    >
                      {label}
                    </p>
                    <p
                      className={`mt-0.5 hidden text-[10px] leading-snug sm:block ${
                        isActive ? "text-white/75" : "text-ink-soft"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </button>
              );
            }
          )}
        </div>

        <AnimatePresence>
          {visibleErrors.tipo && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-xs font-medium text-red-500"
            >
              <AlertCircle size={12} strokeWidth={2} />
              {visibleErrors.tipo}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── 2. Datos de contacto ── */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          2. Datos de contacto
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pqr-nombre"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-strong"
            >
              <User size={13} strokeWidth={2} className="text-brand-500" />
              Nombre completo{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="pqr-nombre"
              type="text"
              autoComplete="name"
              placeholder="Ej. María García López"
              value={form.nombre}
              onChange={(e) =>
                setForm((p) => ({ ...p, nombre: e.target.value }))
              }
              onBlur={() => touch("nombre")}
              className={inputClass("nombre")}
            />
            <AnimatePresence>
              {visibleErrors.nombre && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-red-500"
                >
                  <AlertCircle size={12} strokeWidth={2} />
                  {visibleErrors.nombre}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pqr-email"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-strong"
            >
              <Mail size={13} strokeWidth={2} className="text-brand-500" />
              Correo electrónico{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="pqr-email"
              type="email"
              autoComplete="email"
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              onBlur={() => touch("email")}
              className={inputClass("email")}
            />
            <AnimatePresence>
              {visibleErrors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-red-500"
                >
                  <AlertCircle size={12} strokeWidth={2} />
                  {visibleErrors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1.5 sm:col-span-2 sm:max-w-xs">
            <label
              htmlFor="pqr-tel"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-strong"
            >
              <Phone size={13} strokeWidth={2} className="text-brand-500" />
              Teléfono{" "}
              <span className="text-xs font-normal text-ink-soft/60">
                (opcional)
              </span>
            </label>
            <input
              id="pqr-tel"
              type="text"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="3001234567"
              value={form.telefono}
              onChange={(e) => {
                const onlyDigits = e.target.value.replace(/\D/g, "");
                setForm((p) => ({ ...p, telefono: onlyDigits }));
              }}
              maxLength={10}
              className="w-full rounded-xl border border-brand-200 bg-white/60 px-4 py-3 text-sm text-ink-strong placeholder-ink-soft/40 outline-none transition-all duration-200 hover:border-brand-300 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(181,0,28,0.10)]"
            />
          </div>
        </div>
      </div>

      {/* ── 3. Detalle de la solicitud ── */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          3. Detalle de la solicitud
        </p>

        <div className="flex flex-col gap-4">
          {/* Asunto */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pqr-asunto"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-strong"
            >
              <FileText size={13} strokeWidth={2} className="text-brand-500" />
              Asunto{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="pqr-asunto"
              type="text"
              placeholder="Resumen breve de su solicitud"
              value={form.asunto}
              onChange={(e) =>
                setForm((p) => ({ ...p, asunto: e.target.value }))
              }
              onBlur={() => touch("asunto")}
              className={inputClass("asunto")}
            />
            <AnimatePresence>
              {visibleErrors.asunto && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-red-500"
                >
                  <AlertCircle size={12} strokeWidth={2} />
                  {visibleErrors.asunto}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pqr-desc"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-strong"
            >
              <MessageSquare
                size={13}
                strokeWidth={2}
                className="text-brand-500"
              />
              Descripción{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="pqr-desc"
              rows={5}
              placeholder="Describe detalladamente tu solicitud, queja, reclamo, sugerencia o felicitación..."
              value={form.descripcion}
              onChange={(e) =>
                setForm((p) => ({ ...p, descripcion: e.target.value }))
              }
              onBlur={() => touch("descripcion")}
              className={`resize-none ${inputClass("descripcion")}`}
            />
            <AnimatePresence>
              {visibleErrors.descripcion && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-red-500"
                >
                  <AlertCircle size={12} strokeWidth={2} />
                  {visibleErrors.descripcion}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Server error banner ── */}
      <AnimatePresence>
        {status === "error" && serverError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
          >
            <AlertCircle
              size={15}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-red-500"
            />
            <p className="text-sm text-red-700">{serverError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between gap-4 border-t border-brand-100 pt-6">
        <p className="text-xs text-ink-soft/60">
          <span className="text-red-500">*</span> Campos obligatorios
        </p>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
          className="flex items-center gap-2.5 rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(107,0,14,0.5)] transition-colors duration-200 hover:bg-brand-950 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-brand-700"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={15} strokeWidth={2} className="animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send size={15} strokeWidth={2} />
              Enviar solicitud
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}
