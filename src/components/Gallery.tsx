import SacredDivider from "./SacredDivider";

const galleryItems = [
  { label: "Kalyana Mahothsavam", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Vedic Rituals", span: "" },
  { label: "Dasa Sahithya", span: "" },
  { label: "Devotee Gathering", span: "sm:col-span-2" },
  { label: "Tirumanjana Seva", span: "" },
  { label: "Sacred Decorations", span: "" },
  { label: "Community Outreach", span: "" },
  { label: "Temple Celebrations", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            Glimpses of Devotion
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Gallery
          </h2>
          <SacredDivider className="mt-6" />
          <p className="mt-6 text-sacred-muted font-body max-w-2xl mx-auto leading-relaxed">
            Moments from our sacred ceremonies, devotional gatherings, and the divine
            celebrations that define our service to Lord Srinivasa.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 auto-rows-[160px] sm:auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden cursor-pointer ${item.span} bg-gradient-to-br from-burgundy/8 to-temple-gold/8 border border-temple-gold/10`}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 text-temple-gold/15 mx-auto mb-2" fill="currentColor">
                    <path d="M20 4c2 8 10 10 16 8-6 8-12 14-16 16C16 26 10 20 4 12c6 2 14 0 16-8z" />
                  </svg>
                  <p className="text-sacred-light text-xs font-body">{item.label}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-burgundy-deep/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div>
                  <div className="w-6 h-px bg-temple-gold/60 mb-2" />
                  <p className="text-white text-sm font-display font-medium">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-burgundy/20 text-burgundy font-body text-sm tracking-wider uppercase hover:bg-burgundy hover:text-white transition-all duration-300"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
