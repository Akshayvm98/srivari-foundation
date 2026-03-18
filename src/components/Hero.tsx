export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep sacred background */}
      <div className="absolute inset-0 bg-burgundy-deep">
        {/* Sacred geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='60' cy='60' r='40'/%3E%3Ccircle cx='60' cy='60' r='30'/%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3Cpath d='M60 20L80 50L60 80L40 50z'/%3E%3Cpath d='M60 30L73 50L60 70L47 50z'/%3E%3Cline x1='20' y1='60' x2='100' y2='60'/%3E%3Cline x1='60' y1='20' x2='60' y2='100'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial divine light from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,149,47,0.08)_0%,transparent_60%)]" />

        {/* Top-down gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-sacred-dark/40 via-transparent to-burgundy-deep/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-36 sm:pt-28">
        {/* Sacred invocation */}
        <div className="mb-8">
          <p className="text-temple-gold/60 font-display text-lg sm:text-xl tracking-wider italic">
            Om Namo Venkatesaya
          </p>
        </div>

        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-temple-gold/40" />
          <svg viewBox="0 0 40 40" className="w-8 h-8 text-temple-gold/60 deepam-glow" fill="currentColor">
            <path d="M20 4c2 8 10 10 16 8-6 8-12 14-16 16C16 26 10 20 4 12c6 2 14 0 16-8z" opacity="0.7" />
            <path d="M20 10c1.5 6 6 8 12 7-4 5-8 9-12 11-4-2-8-6-12-11 6 1 10.5-1 12-7z" opacity="0.4" />
            <ellipse cx="20" cy="32" rx="10" ry="3" opacity="0.25" />
          </svg>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-temple-gold/40" />
        </div>

        {/* Tagline */}
        <p className="text-temple-gold/70 text-xs sm:text-sm tracking-[0.4em] uppercase font-body mb-6">
          An Initiative Towards Dharma Prachara
        </p>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
          Srivari{" "}
          <span className="text-sacred-gold">Foundation</span>
        </h1>

        {/* Subheading */}
        <p className="text-white/60 text-xl sm:text-2xl md:text-3xl font-display italic max-w-3xl mx-auto mb-4 leading-relaxed">
          Preserving the sacred tradition of<br className="hidden sm:block" />
          Sri Srinivasa Kalyana Mahothsavam
        </p>

        <p className="text-sandal/40 text-sm sm:text-base font-body max-w-2xl mx-auto mb-12 leading-relaxed">
          Dedicated to spreading the timeless devotion of Lord Srinivasa through
          Karnataka Haridasa Sahithya, Vedic traditions, and spiritual outreach across India.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <a
            href="#programs"
            className="group px-8 py-4 bg-temple-gold text-burgundy-deep font-semibold text-sm tracking-wider uppercase font-body hover:bg-temple-gold-light transition-all relative overflow-hidden"
          >
            <span className="relative z-10">View Our Programs</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-temple-gold/30 text-temple-gold-light text-sm tracking-wider uppercase font-body hover:bg-temple-gold/10 hover:border-temple-gold/50 transition-all"
          >
            Invite a Program
          </a>
        </div>

        {/* Sacred stats */}
        <div className="relative">
          {/* Ornamental line above stats */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-temple-gold/20 to-transparent mb-10" />

          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto">
            {[
              { number: "750+", label: "Kalyana Mahothsavams" },
              { number: "25+", label: "Years of Dharma Prachara" },
              { number: "53L+", label: "Total Outreach" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-temple-gold-light font-display text-3xl sm:text-4xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-white/35 text-[11px] sm:text-xs font-body tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent" />

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-temple-gold/30 text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-temple-gold/40 to-transparent" />
      </div>
    </section>
  );
}
