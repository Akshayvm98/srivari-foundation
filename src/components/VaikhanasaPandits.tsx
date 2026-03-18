import SacredDivider from "./SacredDivider";

const pandits = [
  {
    name: "Sri Srikantha Achar",
    credentials: "M.A., Vaikhanasa Agama from TTD Vidya Peetha, Tirupathi",
    bio: "A scholar of Vedic tradition trained at the prestigious TTD Vidya Peetha. He ensures every ceremony upholds the authentic standards of the Vaikhanasa Agama.",
  },
  {
    name: "Sri Srinivasa Achar",
    credentials: "M.A., Vaikhanasa Agama from TTD Vidya Peetha, Tirupathi",
    bio: "A scholar of Vedic tradition trained at the prestigious TTD Vidya Peetha. He ensures every ceremony upholds the authentic standards of the Vaikhanasa Agama.",
  },
  {
    name: "Dr. Anantha Shayana Achar",
    credentials: "Ph.D., Vaikhanasa Agama from TTD Vidya Peetha, Tirupathi",
    bio: "A scholar of Vedic tradition trained at the prestigious TTD Vidya Peetha. He ensures every ceremony upholds the authentic standards of the Vaikhanasa Agama.",
  },
  {
    name: "Sri Narendra Achar",
    credentials: "Vaikhanasa Agama Pandit",
    bio: "A scholar of Vedic tradition dedicated to preserving and practising the sacred Vaikhanasa Agama traditions.",
  },
];

export default function VaikhanasaPandits() {
  return (
    <section className="py-20 sm:py-24 bg-cream relative overflow-hidden">
      {/* Sacred pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='40' cy='40' r='25'/%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3Cpath d='M40 15L55 40L40 65L25 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            Custodians of Sacred Tradition
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Vaikhanasa Agama Pandits
          </h2>
          <SacredDivider className="mt-6" />
          <p className="mt-6 text-sacred-muted font-display text-lg italic max-w-2xl mx-auto">
            Custodians of the sacred Vaikhanasa tradition, ensuring every ritual
            honours the ancient Agama scriptures
          </p>
        </div>

        {/* Pandits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {pandits.map((pandit) => (
            <div
              key={pandit.name}
              className="relative bg-white/70 backdrop-blur-sm border border-temple-gold/15 sacred-hover text-center"
            >
              {/* Top ornamental accent */}
              <div className="h-[3px] bg-gradient-to-r from-transparent via-temple-gold/50 to-transparent" />

              <div className="p-6 pt-7">
                {/* Sacred icon */}
                <div className="w-16 h-16 rounded-full border-2 border-temple-gold/25 bg-gradient-to-br from-burgundy-deep/5 to-temple-gold/10 flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 40 40" className="w-7 h-7 text-temple-gold/50" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 4 L20 12" />
                    <path d="M12 12 L28 12 L32 36 L8 36 Z" />
                    <path d="M14 8 L20 4 L26 8" />
                    <circle cx="20" cy="24" r="4" />
                  </svg>
                </div>

                <h4 className="font-display text-base font-semibold text-sacred-text mb-1 leading-tight">
                  {pandit.name}
                </h4>
                <p className="text-temple-gold-dark text-[11px] font-body mb-3">
                  {pandit.credentials}
                </p>
                <p className="text-sacred-muted text-xs font-body leading-relaxed">
                  {pandit.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
