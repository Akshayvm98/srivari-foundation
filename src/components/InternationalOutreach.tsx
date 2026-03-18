import SacredDivider from "./SacredDivider";

export default function InternationalOutreach() {
  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0 bg-burgundy-deep">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='50' cy='50' r='35'/%3E%3Ccircle cx='50' cy='50' r='25'/%3E%3Ccircle cx='50' cy='50' r='15'/%3E%3Cpath d='M50 15L65 50L50 85L35 50z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(184,149,47,0.08)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(184,149,47,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Gold borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 border border-temple-gold/25 bg-temple-gold/[0.06] mb-8">
            <svg className="w-4 h-4 text-temple-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-temple-gold-light text-[11px] tracking-[0.3em] uppercase font-body font-medium">
              Beyond Borders
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            International Outreach
          </h2>

          <SacredDivider className="mt-4 mb-6 [&>div]:bg-gradient-to-r [&>div]:from-transparent [&>div]:to-temple-gold/40 [&>div:last-child]:bg-gradient-to-l" />

          <p className="text-white/35 font-display text-lg sm:text-xl italic max-w-2xl mx-auto leading-relaxed">
            Carrying the divine grace of Lord Srinivasa across oceans,
            uniting devotees in sacred celebration far from the motherland
          </p>
        </div>

        {/* Main content area */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left - Featured Muscat highlight */}
          <div className="lg:col-span-2">
            {/* Muscat Feature Card */}
            <div className="relative bg-white/[0.04] border border-temple-gold/20 overflow-hidden">
              <div className="h-[3px] bg-gradient-to-r from-temple-gold/30 via-temple-gold/60 to-temple-gold/30" />

              <div className="p-8 sm:p-10 text-center">
                {/* Globe icon */}
                <div className="w-16 h-16 rounded-full bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-temple-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Location */}
                <p className="text-temple-gold/40 text-[10px] tracking-[0.4em] uppercase font-body mb-3">
                  Featured International Seva
                </p>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-sacred-gold leading-tight mb-2">
                  Muscat, Oman
                </h3>
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent mx-auto my-5" />

                {/* Stats */}
                <div className="space-y-4">
                  <div>
                    <div className="text-temple-gold-pale font-display text-4xl font-bold">3+</div>
                    <div className="text-white/40 text-xs font-body tracking-wide mt-1">
                      Years of Continuous Seva
                    </div>
                  </div>
                  <div className="w-6 h-px bg-temple-gold/15 mx-auto" />
                  <div>
                    <div className="text-white/50 text-sm font-body leading-relaxed">
                      Regular programs including Sri Srinivasa Kalyana Mahothsavam
                      and devotional gatherings
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[2px] bg-gradient-to-r from-transparent via-temple-gold/30 to-transparent" />
            </div>

            {/* Image placeholder below card */}
            <div className="mt-5">
              <div className="ornate-frame p-2">
                <div className="aspect-[16/10] bg-gradient-to-br from-white/[0.03] to-temple-gold/[0.03] border border-temple-gold/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-10 h-10 text-temple-gold/12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/15 text-xs font-display italic">
                      Srinivasa Kalyana in Muscat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6 text-white/45 font-body text-[15px] leading-[1.9]">
              <p className="text-white/55 text-base sm:text-lg font-display italic leading-relaxed">
                The Srivari Foundation has been blessed to carry the divine tradition
                of Sri Srinivasa Kalyana far beyond the shores of India, establishing
                a meaningful and enduring spiritual presence in the Middle East.
              </p>
              <p>
                For over three years now, the foundation has been regularly conducting
                sacred programs in <span className="text-temple-gold-light font-medium">Muscat, Oman</span>,
                bringing the full grandeur of Srinivasa Kalyana Mahothsavam to the
                devotee community there. What began as a single event has grown into a
                consistent and cherished tradition that devotees in Oman eagerly look
                forward to each year.
              </p>
              <p>
                These events have brought together devotees from across the region,
                creating a deeply spiritual atmosphere filled with bhakti, Vedic chanting,
                and the sacred poetry of the Haridasas. Far from home, yet close to the
                Lord, these gatherings have become a source of immense spiritual strength
                for the Indian community in Oman.
              </p>
              <p>
                The consistent seva in Muscat stands as a testament to the foundation's
                unwavering commitment to spreading Dharma and the grace of Lord Srinivasa,
                not just across India, but wherever devotees seek His blessings.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="w-full h-px bg-gradient-to-r from-temple-gold/20 via-temple-gold/10 to-transparent my-8" />

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-temple-gold/20">
              <p className="text-white/35 font-display text-base sm:text-lg italic leading-relaxed">
                &ldquo;Where there is devotion, there is no distance. The grace of Lord
                Srinivasa knows no borders.&rdquo;
              </p>
            </div>

            {/* Achievement badges */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { value: "3+", label: "Years of Seva" },
                { value: "Muscat", label: "Oman" },
                { value: "Global", label: "Dharma Prachara" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/[0.03] border border-temple-gold/10 p-4 text-center"
                >
                  <div className="text-temple-gold-pale font-display text-xl sm:text-2xl font-bold">
                    {item.value}
                  </div>
                  <div className="text-white/30 text-[10px] sm:text-xs font-body tracking-wide mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
