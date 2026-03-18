import Image from "next/image";
import SacredDivider from "./SacredDivider";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream sacred-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            About the Foundation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Rooted in Devotion,<br className="hidden sm:block" />
            Dedicated to Service
          </h2>
          <SacredDivider className="mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Sacred image placeholder */}
          <div className="relative">
            <div className="ornate-frame p-3">
              <div className="aspect-[4/3] border border-temple-gold/15 overflow-hidden">
                <Image
                  src="/srinivasa.jpg"
                  alt="Lord Srinivasa"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-burgundy mb-6 leading-snug">
              A Sacred Mission Born from Devotion to Lord Srinivasa
            </h3>
            <div className="space-y-5 text-sacred-text/80 font-body leading-[1.85] text-[15px]">
              <p>
                Srivari Foundation was born out of a deep love for Lord Srinivasa. We are a
                non-profit organisation of devoted volunteers who came together with a single
                purpose: to bring the sacred tradition of Srinivasa Kalyana Mahothsavam to
                every community that seeks divine grace.
              </p>
              <p>
                Our work is rooted in the rich heritage of Karnataka Haridasa Sahithya
                and the timeless Vedic traditions of Vaishnava worship. We believe that the
                blessings of Lord Srinivasa should reach every home, every village, and every
                heart, regardless of caste, creed, or geography.
              </p>
              <p>
                Over twenty-five years, our volunteers have carried this mission across
                three states, serving rural communities and urban gatherings alike. Every
                member serves selflessly, driven not by reward, but by the singular joy of
                spreading devotion.
              </p>
            </div>

            {/* Sacred highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Authentic Vedic Traditions",
                "Haridasa Sahithya Preservation",
                "Rural and Urban Outreach",
                "Voluntary Selfless Service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-3 px-4 bg-sandal-light/50 border border-temple-gold/10"
                >
                  <div className="w-1.5 h-1.5 bg-temple-gold/60 rotate-45 shrink-0" />
                  <span className="text-sm text-sacred-text/70 font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24">
          <div className="relative bg-burgundy-deep overflow-hidden">
            {/* Sacred pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='40' cy='40' r='25'/%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3Cpath d='M40 15L55 40L40 65L25 40z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            {/* Gold border top and bottom */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />

            <div className="relative z-10 py-14 sm:py-20 px-8 sm:px-16 text-center">
              <p className="text-temple-gold/50 text-xs tracking-[0.4em] uppercase font-body mb-6">
                Our Mission
              </p>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-relaxed max-w-4xl mx-auto mb-6">
                To awaken the spirit of devotion in every heart by bringing the sacred
                Srinivasa Kalyana Mahothsavam to homes and communities across India.
              </h3>
              <p className="text-white/40 font-body max-w-2xl mx-auto text-sm leading-relaxed">
                Through the poetry of the great Haridasas, the sanctity of Vedic rituals,
                and the warmth of community gatherings, we strive to make the divine grace
                of Lord Srinivasa accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
