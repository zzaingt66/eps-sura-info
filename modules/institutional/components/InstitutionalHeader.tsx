export function InstitutionalHeader() {
  return (
    <header className="mb-5 rounded-[1.8rem] border border-white/60 bg-white/35 p-5 backdrop-blur-sm sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-700">
        Historia institucional
      </p>

      <div className="mt-3 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-brand-950 sm:text-5xl">
            Vitanova IPS
          </h2>
        </div>
      </div>
    </header>
  );
}
