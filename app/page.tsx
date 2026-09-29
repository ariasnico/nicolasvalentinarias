export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <main className="mx-auto flex w-full max-w-[72rem] flex-1 flex-col justify-end px-6 pb-14 pt-20 sm:px-10 sm:pb-16 md:justify-center md:px-16 md:py-24">
        <h1
          className="font-normal tracking-[-0.035em] text-[var(--fg)]"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.75rem, 12.5vw, 7.25rem)",
            lineHeight: 0.92,
          }}
        >
          <span className="block">Nicolás</span>
          <span className="block">Valentín</span>
          <span className="block">Arias</span>
        </h1>
        <div aria-hidden="true" className="mt-8 h-[2px] w-10 bg-[var(--accent)] sm:mt-10" />
        <p className="mt-8 max-w-sm text-[1.05rem] leading-snug text-[var(--fg)]/80 sm:mt-10 sm:text-xl">
          Me gusta construir cosas.
        </p>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-[1.02rem]">
          Oct 2026. Fellow,{" "}
          <a
            href="https://puentes.antigravity.capital/"
            rel="noopener noreferrer"
            className="text-[var(--fg)]/80 underline decoration-[var(--fg)]/25 underline-offset-[0.28em] transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
          >
            Puentes
          </a>{" "}
          cohort 4 — Antigravity.
        </p>
        <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-[1.02rem]">
          14 abr 2026. 1° fintech, hackathon Anthropic y Kaszek — individual.{" "}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7453425001199853568/"
            rel="noopener noreferrer"
            className="text-[var(--fg)]/80 underline decoration-[var(--fg)]/25 underline-offset-[0.28em] transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
          >
            ITBA
          </a>
        </p>
        <nav aria-label="Enlaces" className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.95rem] sm:mt-14">
          <a href="https://www.medicai.com.ar" rel="noopener noreferrer" className="text-[var(--fg)] inline-block py-1 underline decoration-[var(--fg)]/25 underline-offset-[0.28em] transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]">Founder @ MedicAI</a>
          <a href="https://arqueo.ai" rel="noopener noreferrer" className="text-[var(--fg)] inline-block py-1 underline decoration-[var(--fg)]/25 underline-offset-[0.28em] transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]">Founder @ Arqueo</a>
          <a href="https://github.com/ariasnico" rel="noopener noreferrer" className="text-[var(--fg)] inline-block py-1 underline decoration-[var(--fg)]/25 underline-offset-[0.28em] transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]">GitHub</a>
        </nav>
      </main>
      <footer className="px-6 pb-6 sm:px-10 md:px-16">
        <p className="text-[0.7rem] tracking-[0.18em] text-[var(--muted)]">nicolasvalentinarias.com</p>
      </footer>
    </div>
  );
}
