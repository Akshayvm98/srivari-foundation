import Image from "next/image";
import SacredDivider from "./SacredDivider";

export default function Kalyana() {
  return (
    <section id="kalyana" className="relative py-24 sm:py-32 bg-cream-dark overflow-hidden">
      {/* Subtle temple pillar lines in background */}
      <div className="mandapam-bg" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            The Heart of Our Mission
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Sri Srinivasa Kalyana
          </h2>
          <SacredDivider className="mt-6" />
          <p className="mt-6 text-sacred-muted font-display text-lg sm:text-xl italic max-w-2xl mx-auto">
            The divine marriage of Lord Srinivasa and Goddess Padmavathi,
            a celebration that brings blessings to all who witness it.
          </p>
        </div>

        {/* Main sacred narrative */}
        <div className="max-w-4xl mx-auto">
          {/* Ornate card */}
          <div className="relative ornate-frame p-4">
            <div className="bg-white/80 backdrop-blur-sm border border-temple-gold/15 p-8 sm:p-12 sacred-glow">
              {/* Lord Srinivasa image */}
              <div className="text-center mb-8">
                <div className="inline-block border-2 border-temple-gold/20 p-1">
                  <Image
                    src="/srinivasa.jpg"
                    alt="Lord Srinivasa"
                    width={280}
                    height={200}
                    className="w-auto h-40 sm:h-52 object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 text-sacred-text/80 font-body leading-[1.9] text-[15px]">
                <p>
                  Sri Srinivasa Kalyana is one of the most sacred and auspicious events
                  in the Vaishnava tradition. Described in the Bhavishyothara and Adithya
                  Puranas, it celebrates the divine union of Lord Srinivasa with Goddess
                  Padmavathi, a story that has moved the hearts of devotees for centuries.
                </p>
                <p>
                  The story begins with Sage Brughu, who visited Lord Vishnu at Vaikunta
                  to test the supremacy of the Trimurti. Finding the Lord seemingly
                  inattentive, Brughu kicked His sacred chest, the very abode of Goddess
                  Lakshmi. Hurt by this act, Lakshmi left Vaikunta and descended to earth,
                  taking birth as Padmavathi.
                </p>
                <p>
                  Out of boundless love, Lord Vishnu followed her to earth, appearing on
                  the sacred hills of Tirumala as Lord Srinivasa. The grand celestial
                  wedding that reunited them is what we reverently enact as the Srinivasa
                  Kalyana Mahothsavam, a celebration believed to bring divine grace,
                  prosperity, and harmony to all who participate.
                </p>
              </div>

              {/* Bottom ornament */}
              <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-temple-gold/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Significance cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Divine Blessings",
              text: "Witnessing the Kalyana Mahothsavam is believed to bring the grace of Lord Srinivasa into the lives of devotees and their families.",
            },
            {
              title: "Rooted in Scripture",
              text: "Every detail of the ceremony is drawn from the Bhavishyothara Purana and performed with deep reverence for Vedic tradition.",
            },
            {
              title: "Gathering of Thousands",
              text: "Our Mahothsavams regularly bring together 15,000 to 20,000 devotees, creating powerful moments of collective devotion.",
            },
            {
              title: "Living Heritage",
              text: "Through the devotional poetry of Karnataka's Haridasa saints, the Kalyana comes alive as a deeply moving spiritual experience.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group bg-white/70 backdrop-blur-sm border border-temple-gold/10 p-6 sacred-hover"
            >
              <div className="w-2 h-2 bg-temple-gold/50 rotate-45 mb-4 group-hover:bg-temple-gold transition-colors" />
              <h4 className="font-display text-lg font-semibold text-burgundy mb-2">
                {card.title}
              </h4>
              <p className="text-sacred-muted text-sm font-body leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
