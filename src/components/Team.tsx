import Image from "next/image";
import SacredDivider from "./SacredDivider";

const extendedMembers = [
  { name: "Sri Sudhindra Kasi" },
  { name: "Sri Srinivas Kashyap" },
  { name: "Sri Nanjunda Prasad" },
  { name: "Sri S. Ravi Prasad" },
  { name: "Sri Pavan Raghavendra" },
  { name: "Smt. Nidhi Venkatesh" },
  { name: "Sri Neha Venkatesh" },
  { name: "Sri Neetha Venkatesh" },
  { name: "Sri Ajeya Vadiraj" },
  { name: "Sri Akshay Vadiraj" },
  { name: "Sri S. Raghavendran" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            The People Behind the Mission
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Our Team
          </h2>
          <SacredDivider className="mt-6" />
          <p className="mt-6 text-sacred-muted font-body max-w-2xl mx-auto leading-relaxed">
            Dedicated professionals united by their devotion to Lord Srinivasa,
            each serving voluntarily to carry forward this sacred mission.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            {
              name: "Sri S. Venkatesh Murthy",
              designation: "Founder and President",
              credentials: "M.Com., M.B.A.",
              bio: "A visionary leader trained by Sri Kautalam Appannachar. Former Senior President at Bannari Amman Sugars Ltd and alumnus of the CEO Satsang Programme at Jain University. He has personally conducted 625+ Srinivasa Kalyana Mahothsavams through Dasa Sahithya, 47 Vaikhanasa Agama Sevas, and 23 Tirumanjana Sevas.",
              image: "/venkatesh-murthy.jpeg",
              initials: "SV",
            },
            {
              name: "Smt. Mala Venkatesh",
              designation: "Co-Founder and Chairman",
              credentials: "B.E. Computer Science",
              bio: "A seasoned software consultant who brings modern technology and organisational expertise to the foundation's outreach. She plays a vital role in the planning and coordination of the foundation's programs, ensuring every event is organised with care and devotion.",
              image: null,
              initials: "MV",
            },
          ].map((leader) => (
            <div key={leader.name} className="group relative bg-burgundy-deep overflow-hidden flex flex-col">
              {/* Top gold accent */}
              <div className="h-[3px] bg-gradient-to-r from-temple-gold/20 via-temple-gold/50 to-temple-gold/20" />

              {/* Sacred pattern */}
              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Cpath d='M30 10L40 30L30 50L20 30z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col items-center text-center px-8 pt-10 pb-10 sm:px-10 sm:pt-12 sm:pb-12">
                {/* Photo / Avatar */}
                <div className="relative mb-7">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-2 rounded-full bg-temple-gold/5 blur-sm" />
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-temple-gold/25 overflow-hidden bg-burgundy/30">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-temple-gold/40 text-3xl font-display font-bold">
                          {leader.initials}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Designation */}
                <p className="text-temple-gold/45 text-[10px] tracking-[0.35em] uppercase font-body mb-3">
                  {leader.designation}
                </p>

                {/* Name */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5 leading-tight">
                  {leader.name}
                </h3>

                {/* Credentials */}
                <p className="text-temple-gold/40 text-xs font-body mb-5">
                  {leader.credentials}
                </p>

                {/* Subtle divider */}
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-temple-gold/30 to-transparent mb-5" />

                {/* Bio */}
                <p className="text-white/40 font-body text-sm leading-[1.8] flex-1">
                  {leader.bio}
                </p>
              </div>

              {/* Bottom gold accent */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-temple-gold/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Extended Team */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {extendedMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white/60 border border-temple-gold/8 p-5 text-center hover:border-temple-gold/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-full border border-temple-gold/15 bg-sandal-light/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-burgundy text-sm font-display font-semibold">
                  {member.name.split(" ").pop()?.[0]}
                </span>
              </div>
              <h4 className="font-display text-sm font-semibold text-sacred-text leading-tight">
                {member.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
