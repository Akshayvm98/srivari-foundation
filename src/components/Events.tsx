const events = [
  { city: "Dasarahalli", region: "Karnataka" },
  { city: "Ganganagarara", region: "Karnataka" },
  { city: "Gouribidanur", region: "Karnataka" },
  { city: "Bagepalli", region: "Karnataka" },
  { city: "Byatarayanapura", region: "Karnataka" },
  { city: "Davanagere", region: "Karnataka" },
  { city: "Mangalore Maroli", region: "Karnataka" },
  { city: "Hyderabad", region: "Telangana" },
  { city: "Mumbai", region: "Maharashtra" },
];

const stats = [
  { value: "625+", label: "Total Mahothsavams", icon: "🏛️" },
  { value: "190+", label: "Kalyana Sevas by Foundation", icon: "🙏" },
  { value: "90%", label: "In Rural Communities", icon: "🌾" },
  { value: "3", label: "States Covered", icon: "🗺️" },
];

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-28 bg-ivory-dark pattern-overlay">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-dark text-sm tracking-[0.3em] uppercase font-body mb-3">
            Our Journey
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Completed Events
          </h2>
          <div className="ornament-divider text-gold text-lg">✦</div>
          <p className="mt-6 text-dark-medium/70 font-body max-w-2xl mx-auto">
            From bustling cities to remote villages, we have brought the sacred tradition
            of Srinivasa Kalyana to communities across Southern India and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gold/10 card-hover"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-maroon">
                {stat.value}
              </div>
              <div className="text-sm text-dark-medium/70 font-body mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Event Locations */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gold/10">
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-maroon mb-2 text-center">
            Event Locations
          </h3>
          <p className="text-dark-medium/60 text-sm font-body text-center mb-8">
            Key venues where Srinivasa Kalyana Mahothsavam has been celebrated
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {events.map((event) => (
              <div
                key={event.city}
                className="group flex items-center gap-3 p-4 rounded-xl border border-gold/10 hover:border-gold/30 hover:bg-ivory transition-all"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-maroon/10 to-gold/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-maroon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-dark group-hover:text-maroon transition-colors">
                    {event.city}
                  </div>
                  <div className="text-xs text-dark-medium/50">{event.region}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Notable Events */}
          <div className="mt-8 pt-8 border-t border-gold/10">
            <h4 className="font-heading text-lg font-semibold text-dark text-center mb-6">
              Notable Gatherings
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-maroon/5 to-gold/5 rounded-xl p-5 border border-gold/10">
                <div className="text-2xl font-heading font-bold text-maroon">20,000+</div>
                <div className="text-sm font-body font-medium text-dark-medium mt-1">
                  Devotees at Belagooru
                </div>
                <p className="text-xs text-dark-medium/60 mt-2 font-body">
                  One of our largest gatherings, bringing together devotees from surrounding
                  villages for a grand Kalyana Mahothsavam.
                </p>
              </div>
              <div className="bg-gradient-to-br from-maroon/5 to-gold/5 rounded-xl p-5 border border-gold/10">
                <div className="text-2xl font-heading font-bold text-maroon">15,000+</div>
                <div className="text-sm font-body font-medium text-dark-medium mt-1">
                  Devotees at Hosakote
                </div>
                <p className="text-xs text-dark-medium/60 mt-2 font-body">
                  A landmark event that united thousands in devotion, showcasing the growing
                  reach of our spiritual mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
