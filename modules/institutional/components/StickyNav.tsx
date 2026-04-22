"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

const NAV_LINKS = [
  { id: "hero",      label: "Inicio" },
  { id: "resena",    label: "Historia" },
  { id: "valores",   label: "Valores" },
  { id: "servicios", label: "Servicios" },
  { id: "tarifas",   label: "Tarifas" },
  { id: "ubicacion", label: "Contacto" },
] as const;

type SectionId = (typeof NAV_LINKS)[number]["id"];

export function StickyNav() {
  const [active, setActive] = useState<SectionId>("hero");
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);

        // Find the section closest to the top of the viewport
        const sections = NAV_LINKS.map(({ id }) => ({
          id,
          el: document.getElementById(id),
        }));

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = sections[i].el;
          if (el && el.getBoundingClientRect().top <= 120) {
            setActive(sections[i].id as SectionId);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8"
        aria-label="Navegación principal"
      >
        {/* Brand */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-semibold text-brand-950 transition-opacity hover:opacity-75"
        >
          VitaNova IPS
        </button>

        {/* Links */}
        <ul className="hidden items-center gap-1 sm:flex" role="list">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-700 ${
                  active === id
                    ? "bg-brand-950 text-white shadow-[0_4px_14px_-6px_rgba(107,0,14,0.7)]"
                    : "text-brand-950 hover:bg-brand-100/60"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          {/* PQR link — routes to /pqr */}
          <li>
            <Link
              href="/pqr"
              className="inline-flex items-center gap-1.5 rounded-xl border border-brand-300/60 px-3 py-1.5 text-sm font-medium text-brand-700 transition-all duration-200 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-brand-700"
            >
              <FileText size={13} strokeWidth={2} />
              PQRSF
            </Link>
          </li>
        </ul>

        {/* Mobile: dots indicator */}
        <div className="flex items-center gap-1.5 sm:hidden">
          {NAV_LINKS.map(({ id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={id}
              className={`rounded-full transition-all duration-200 ${
                active === id
                  ? "size-2.5 bg-brand-700"
                  : "size-1.5 bg-brand-300"
              }`}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
