import SacredDivider from "./SacredDivider";

export default function TrustSection() {
  return (
    <section className="py-24 sm:py-32 bg-cream sacred-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            Our Commitment
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            A Legacy of Devotion and Trust
          </h2>
          <SacredDivider className="mt-6" />
        </div>

        {/* Trust Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Authentic Vedic Tradition",
              text: "Every ceremony is conducted by trained Vaikhanasa Agama scholars who ensure strict adherence to sacred scriptures and time-honoured rituals passed down through generations.",
            },
            {
              title: "Selfless Voluntary Service",
              text: "Every member of our team serves without expecting anything in return. What drives us is love for Lord Srinivasa and the joy of sharing His grace with the world.",
            },
            {
              title: "Open to All Communities",
              text: "We serve everyone, regardless of caste, creed, or geography. Our events welcome all who seek the blessings of Lord Srinivasa with an open and devoted heart.",
            },
            {
              title: "Heritage Preservation",
              text: "We are deeply committed to keeping Karnataka Haridasa Sahithya alive. Through our programs, the devotional poetry of great saints reaches new generations.",
            },
            {
              title: "Twenty-Five Years of Service",
              text: "For over twenty-five years, we have built a reputation for conducting deeply meaningful and impeccably organised spiritual events that touch the hearts of thousands.",
            },
            {
              title: "Reaching Every Corner",
              text: "From Bangalore to Mumbai, Hyderabad to Mangalore, our programs have reached devotees across three states, serving both urban centres and remote villages.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white/70 backdrop-blur-sm border border-temple-gold/10 p-7 sacred-hover"
            >
              <div className="w-2 h-2 bg-temple-gold/50 rotate-45 mb-5 group-hover:bg-temple-gold transition-colors" />
              <h3 className="font-display text-lg font-semibold text-sacred-text mb-3">
                {item.title}
              </h3>
              <p className="text-sacred-muted text-sm font-body leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Sacred CTA */}
        <div className="mt-20 relative">
          <div className="bg-burgundy-deep overflow-hidden relative">
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='50' cy='50' r='35'/%3E%3Ccircle cx='50' cy='50' r='25'/%3E%3Ccircle cx='50' cy='50' r='15'/%3E%3Cpath d='M50 15L65 50L50 85L35 50z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            {/* Gold borders */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />

            <div className="relative z-10 py-14 sm:py-20 px-8 sm:px-16 text-center">
              <svg viewBox="0 0 40 40" className="w-10 h-10 text-temple-gold/30 mx-auto mb-6 deepam-glow" fill="currentColor">
                <path d="M20 4c2 8 10 10 16 8-6 8-12 14-16 16C16 26 10 20 4 12c6 2 14 0 16-8z" />
                <ellipse cx="20" cy="32" rx="10" ry="3" opacity="0.3" />
              </svg>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
                Invite Us to Your Community
              </h3>
              <p className="text-white/40 font-body max-w-xl mx-auto mb-10 text-sm leading-relaxed">
                Bring the sacred celebration of Srinivasa Kalyana Mahothsavam to your
                neighbourhood, village, or city. We would be honoured to serve.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-temple-gold text-burgundy-deep font-semibold text-sm tracking-wider uppercase font-body hover:bg-temple-gold-light transition-all"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+919900059500"
                  className="px-8 py-4 border border-temple-gold/30 text-temple-gold-light text-sm tracking-wider uppercase font-body hover:bg-temple-gold/10 transition-all"
                >
                  Call: +91 99000 59500
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
