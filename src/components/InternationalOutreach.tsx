import SacredDivider from "./SacredDivider";

export default function InternationalOutreach() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-burgundy-deep">
        {/* Sacred geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='50' cy='50' r='35'/%3E%3Ccircle cx='50' cy='50' r='25'/%3E%3Ccircle cx='50' cy='50' r='15'/%3E%3Cpath d='M50 15L65 50L50 85L35 50z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(184,149,47,0.06)_0%,transparent_60%)]" />
      </div>

      {/* Top and bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-temple-gold/20 bg-temple-gold/5 mb-6">
            <svg className="w-4 h-4 text-temple-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-temple-gold-light text-[10px] tracking-[0.3em] uppercase font-body">
              Beyond Borders
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            International Outreach
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-temple-gold/30" />
            <svg viewBox="0 0 40 40" className="w-6 h-6 text-temple-gold/40" fill="currentColor">
              <path d="M20 4c2 8 10 10 16 8-6 8-12 14-16 16C16 26 10 20 4 12c6 2 14 0 16-8z" opacity="0.7" />
              <ellipse cx="20" cy="32" rx="10" ry="3" opacity="0.25" />
            </svg>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-temple-gold/30" />
          </div>
          <p className="mt-6 text-white/40 font-display text-lg sm:text-xl italic max-w-2xl mx-auto">
            Spreading the divine grace of Lord Srinivasa beyond borders
          </p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="space-y-5 text-white/50 font-body text-[15px] leading-[1.85]">
              <p>
                The Srivari Foundation has been blessed to take the divine tradition
                of Sri Srinivasa Kalyana beyond India. For the past three years, the
                foundation has been regularly conducting sacred programs in Muscat, Oman.
              </p>
              <p>
                These events have brought together devotees from across the region,
                creating a deeply spiritual atmosphere filled with bhakti, Vedic chanting,
                and divine celebrations. The consistent seva in Muscat stands as a testament
                to the foundation's commitment to spreading Dharma and the grace of Lord
                Srinivasa globally.
              </p>
              <p>
                Through these international efforts, the foundation continues to unite
                devotees and carry forward the sacred traditions of Srinivasa Kalyana
                across borders.
              </p>
            </div>

            {/* Highlight badge */}
            <div className="mt-8 inline-flex items-center gap-4 px-6 py-4 bg-white/[0.04] border border-temple-gold/15">
              <div className="w-12 h-12 rounded-full bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-temple-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-temple-gold-light font-display text-lg font-semibold">
                  3+ Years of Seva
                </p>
                <p className="text-white/30 text-xs font-body tracking-wide">
                  Muscat, Oman
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image placeholder */}
          <div className="relative">
            <div className="ornate-frame p-3">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/[0.03] to-temple-gold/[0.03] border border-temple-gold/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-14 h-14 text-temple-gold/15 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-white/20 text-sm font-display italic">
                    Srinivasa Kalyana in Muscat
                  </p>
                  <p className="text-white/10 text-xs font-body mt-1">
                    Event Image
                  </p>
                </div>
              </div>
            </div>
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-temple-gold/[0.03] blur-2xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
