"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User, Loader2, AlertCircle } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get("from") ?? "/dashboard";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      setError("Ingresa usuario y contraseña");
      return;
    }

    setLoading(true);
    setError(null);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.replace(from);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Error al iniciar sesión");
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#fff8f9] px-4">
      <div className="bg-orb bg-orb-top" aria-hidden="true" />
      <div className="bg-orb bg-orb-bottom" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
        className="glass-panel w-full max-w-sm p-8"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-[0_6px_20px_-6px_rgba(107,0,14,0.5)] mb-4">
            <Lock size={22} strokeWidth={1.8} />
          </span>
          <h1 className="font-display text-2xl font-semibold text-brand-950">
            Panel Administrativo
          </h1>
          <p className="mt-1 text-sm text-ink-soft">VitaNova IPS · PQRSF</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {/* Username */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="username"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-strong"
            >
              <User size={13} strokeWidth={2} className="text-brand-500" />
              Usuario
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
              className="w-full rounded-xl border border-brand-200 bg-white/60 px-4 py-3 text-sm text-ink-strong placeholder-ink-soft/40 outline-none transition-all hover:border-brand-300 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(181,0,28,0.10)]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-strong"
            >
              <Lock size={13} strokeWidth={2} className="text-brand-500" />
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-brand-200 bg-white/60 px-4 py-3 pr-11 text-sm text-ink-strong placeholder-ink-soft/40 outline-none transition-all hover:border-brand-300 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(181,0,28,0.10)]"
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft/50 hover:text-ink-soft transition-colors"
                aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPwd ? (
                  <EyeOff size={16} strokeWidth={1.8} />
                ) : (
                  <Eye size={16} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle size={14} strokeWidth={2} className="shrink-0" />
              {error}
            </motion.div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-700 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(107,0,14,0.5)] transition-colors hover:bg-brand-950 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-brand-700"
          >
            {loading ? (
              <>
                <Loader2 size={15} strokeWidth={2} className="animate-spin" />
                Ingresando…
              </>
            ) : (
              "Ingresar"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
