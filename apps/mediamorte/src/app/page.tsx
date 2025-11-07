export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* background accent gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, rgba(130, 0, 255, 0.25), transparent 80%), radial-gradient(60% 60% at 20% 80%, rgba(34, 139, 34, 0.15), transparent 90%)",
          filter: "blur(80px)"
        }}
      ></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Wordmark */}
        <div className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] text-white/60">
          MEDIA · MORTE
        </div>

        {/* Hero */}
        <section className="mt-6 sm:mt-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] sm:leading-[0.98]">
            Death is a{" "}
            <span
              className="inline-block animate-flicker"
              style={{
                color: "#b77bff",
                textShadow:
                  "0 0 8px rgba(183, 123, 255, 0.8), 0 0 20px rgba(34, 139, 34, 0.5)"
              }}
            >
              medium
            </span>
            .
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-white/70 text-base sm:text-lg">
            A transmedia art project and label. Audio, film, artifacts and code—stitched from
            the noise after everything else. This is a working space. Wipe your feet.
          </p>

          {/* CTA row */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href="/artifacts"
              className="rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-zinc-200 text-center"
            >
              View Artifacts
            </a>
            <a
              href="/journal"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 text-center"
            >
              Read the Journal
            </a>
            <a
              href="/discuss"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 text-center"
            >
              Discuss (coming soon)
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
