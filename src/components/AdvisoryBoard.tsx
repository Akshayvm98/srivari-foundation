import Image from "next/image";
import SacredDivider from "./SacredDivider";

const advisors = [
  { name: "Dr. Varaprasad Reddy", image: "/varaprasad-reddy.jpg" },
  { name: "Dr. Mohan", image: null },
  { name: "Sri Appanachar", image: null },
];

export default function AdvisoryBoard() {
  return (
    <section className="py-20 sm:py-24 bg-cream-dark relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-temple-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            Wisdom and Guidance
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Trustees
          </h2>
          <SacredDivider className="mt-6" />
          <p className="mt-6 text-sacred-muted font-display text-lg italic max-w-xl mx-auto">
            Guiding the Foundation with wisdom and experience
          </p>
        </div>

        {/* Advisory Cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="relative bg-white/70 backdrop-blur-sm border border-temple-gold/15 p-8 text-center sacred-hover"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-temple-gold/40" />

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full border-2 border-temple-gold/25 overflow-hidden bg-gradient-to-br from-sandal-light/60 to-cream-dark flex items-center justify-center mx-auto mb-5">
                {advisor.image ? (
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-burgundy text-xl font-display font-semibold">
                    {advisor.name.split(" ").pop()?.[0]}
                  </span>
                )}
              </div>

              <h4 className="font-display text-lg font-semibold text-sacred-text leading-tight">
                {advisor.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
