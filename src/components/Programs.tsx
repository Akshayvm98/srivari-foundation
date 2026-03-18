import SacredDivider from "./SacredDivider";

const programs = [
  {
    title: "Sri Srinivasa Kalyana",
    subtitle: "Dasa Sahithya",
    description:
      "The divine wedding of Lord Srinivasa is narrated through the timeless compositions of Karnataka's Haridasa saints. Each phase of the Kalyana, from the arrival of the groom to the tying of the sacred Mangalsutra, unfolds through devotional songs arranged in ceremonial sequence. As the poetry of the great Dasas fills the air, the entire congregation is drawn into a deeply moving experience of divine love.",
    achievement: "750+ Mahothsavams Performed",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="20" cy="12" r="6" />
        <path d="M8 38 Q8 24 20 20 Q32 24 32 38" />
        <path d="M14 28 C14 24 26 24 26 28" strokeDasharray="2 2" />
        <path d="M16 8 L20 2 L24 8" />
      </svg>
    ),
  },
  {
    title: "Sri Srinivasa Kalyana",
    subtitle: "Agamoktha",
    description:
      "A faithful recreation of the Kalyanothsava as performed at the sacred Tirumala temple, conducted strictly according to the Vaikhanasa Agama tradition. The ceremony features Vedic chanting, sacred mantras, and customary rites performed by trained Agama scholars, offering devotees the experience of an authentic temple ceremony in their own community.",
    achievement: "47 Vaikhanasa Agama Sevas",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 4 L20 12" />
        <path d="M12 12 L28 12 L32 36 L8 36 Z" />
        <path d="M16 12 L16 36" strokeDasharray="2 2" />
        <path d="M24 12 L24 36" strokeDasharray="2 2" />
        <path d="M14 8 L20 4 L26 8" />
        <circle cx="20" cy="24" r="4" />
      </svg>
    ),
  },
  {
    title: "Udayasthamana Seva",
    subtitle: "Dawn to Dusk Divine Service",
    description:
      "A complete day of worship that begins at dawn with Suprabhatham and concludes at dusk with Ekantha Seva. The day flows through Thomala Seva, Kolavu, Sahasranamarchana, the grand Kalyanothsava, Naivedhya, Saathimurai, Trikala Pooja, Dolothsava, Sahasra Deepalankara, and Brahmothsava. It is a full immersion in the daily worship of the Lord.",
    achievement: "5 Full-Day Sevas Completed",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="20" cy="18" r="10" />
        <path d="M20 4 L20 8" />
        <path d="M20 28 L20 32" />
        <path d="M8 18 L12 18" />
        <path d="M28 18 L32 18" />
        <path d="M12 10 L14.5 12.5" />
        <path d="M25.5 23.5 L28 26" />
        <path d="M28 10 L25.5 12.5" />
        <path d="M14.5 23.5 L12 26" />
        <path d="M6 34 L34 34" />
        <path d="M10 38 L30 38" />
      </svg>
    ),
  },
  {
    title: "Srivari Seva Tirumanjana",
    subtitle: "The Sacred Abhisheka",
    description:
      "The holy bathing ritual of Lord Srinivasa with his divine consorts Sridevi and Bhoodevi. Conducted with sanctified water from the sacred Pushkarani, the Uthsava Murthy is lovingly bathed with special churna, herbs, and turmeric paste, then adorned with Tulasi mala. It is a deeply purifying and soul-stirring experience for everyone present.",
    achievement: "23 Tirumanjana Sevas",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 6 C20 6 14 14 14 20 C14 24 16.5 26 20 26 C23.5 26 26 24 26 20 C26 14 20 6 20 6Z" />
        <path d="M16 30 L24 30" />
        <path d="M14 34 L26 34" />
        <path d="M18 26 L18 30" />
        <path d="M22 26 L22 30" />
        <circle cx="20" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "Sri Srinivasa Pushpa Yaga",
    subtitle: "The Sacred Floral Offering",
    description:
      "Pushpa Yaga is a sacred floral offering performed to Lord Srinivasa as an act of devotion and gratitude. The Lord is worshipped with a variety of fragrant flowers while Vedic hymns and sacred chants fill the air. The offering of flowers symbolises purity, surrender, and the devotee's heartfelt bhakti. This seva is believed to remove doshas, bring peace, and invoke divine blessings for all who participate.",
    achievement: "Sacred Floral Seva",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="20" cy="16" r="4" />
        <ellipse cx="20" cy="10" rx="3" ry="5" />
        <ellipse cx="14" cy="14" rx="3" ry="5" transform="rotate(-45 14 14)" />
        <ellipse cx="26" cy="14" rx="3" ry="5" transform="rotate(45 26 14)" />
        <ellipse cx="15" cy="20" rx="3" ry="5" transform="rotate(-90 15 20)" />
        <ellipse cx="25" cy="20" rx="3" ry="5" transform="rotate(90 25 20)" />
        <path d="M20 24 L20 36" />
        <path d="M17 28 L20 25 L23 28" />
        <path d="M16 32 L20 29 L24 32" />
      </svg>
    ),
  },
  {
    title: "Sri Srinivasa Dolothsava",
    subtitle: "The Divine Swing Festival",
    description:
      "Dolothsava is a serene and beautiful ritual where the Utsava Murthy of Lord Srinivasa is gently placed on a decorated swing and worshipped with devotional songs, Vedic chanting, and music. The rhythmic movement of the swing represents cosmic harmony and divine grace. This seva creates a deeply devotional atmosphere and offers devotees a chance to experience the Lord in a calm and intimate form.",
    achievement: "Sacred Swing Seva",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 4 L30 4" />
        <path d="M12 4 L12 16" />
        <path d="M28 4 L28 16" />
        <path d="M10 16 L30 16 L30 26 L10 26 Z" />
        <circle cx="20" cy="21" r="3" />
        <path d="M17 21 L15 21" strokeDasharray="1 1" />
        <path d="M25 21 L23 21" strokeDasharray="1 1" />
        <path d="M14 30 Q20 36 26 30" strokeDasharray="2 2" />
        <path d="M8 4 L8 2 L32 2 L32 4" />
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-cream temple-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            Sacred Offerings
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Our Programs
          </h2>
          <SacredDivider className="mt-6" />
          <p className="mt-6 text-sacred-muted font-body max-w-2xl mx-auto leading-relaxed">
            Each program is a unique form of worship, performed with deep reverence
            and devotion to bring the grace of Lord Srinivasa to communities across India.
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-6">
          {programs.map((program, index) => (
            <div
              key={`${program.title}-${program.subtitle}`}
              className="group relative bg-white/70 backdrop-blur-sm border border-temple-gold/10 sacred-hover overflow-hidden"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-temple-gold/40 via-temple-gold/20 to-transparent" />

              <div className="flex flex-col lg:flex-row">
                {/* Icon area */}
                <div className="lg:w-48 shrink-0 p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-burgundy/[0.03] to-temple-gold/[0.03]">
                  <div className="w-20 h-20 text-temple-gold/50 group-hover:text-temple-gold/70 transition-colors">
                    {program.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-burgundy">
                        {program.title}
                      </h3>
                      <p className="text-temple-gold-dark text-sm font-display italic">
                        {program.subtitle}
                      </p>
                    </div>
                    <span className="hidden sm:block text-temple-gold/25 font-display text-5xl font-bold leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-sacred-text/70 font-body text-[15px] leading-[1.85] mt-4 mb-5 max-w-2xl">
                    {program.description}
                  </p>

                  {/* Achievement */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-sandal-light/50 border border-temple-gold/10">
                    <div className="w-1.5 h-1.5 bg-temple-gold/60 rotate-45" />
                    <span className="text-xs font-body font-medium text-sacred-text/60 tracking-wide">
                      {program.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
