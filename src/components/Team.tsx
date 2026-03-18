import Image from "next/image";
import SacredDivider from "./SacredDivider";

const teamMembers = [
  {
    name: "Sri S. Venkatesh Murthy",
    role: "Founder and President",
    credentials: "M.Com., M.B.A.",
    bio: "A visionary leader trained by Sri Kautalam Appannachar. Former Senior President at Bannari Amman Sugars Ltd and alumnus of the CEO Satsang Programme at Jain University. He has personally conducted 625+ Srinivasa Kalyana Mahothsavams through Dasa Sahithya, 47 Vaikhanasa Agama Sevas, and 23 Tirumanjana Sevas.",
    featured: true,
  },
  {
    name: "Smt. Mala Venkatesh",
    credentials: "B.E. Computer Science",
    bio: "A seasoned software consultant who brings modern technology and organisational expertise to the foundation's outreach.",
  },
  {
    name: "Sri Srikantha Achar",
    role: "Vaikhanasa Agama Pandit",
    credentials: "M.A., Vaikhanasa Agama from TTD Vidya Peetha, Tirupathi",
    bio: "A scholar of Vedic tradition trained at the prestigious TTD Vidya Peetha. He ensures every ceremony upholds the authentic standards of the Vaikhanasa Agama.",
  },
  {
    name: "Sri Sudhindra Kasi",
    role: "HR and Operations",
    credentials: "M.B.A., HR Manager at Dell India",
    bio: "Brings corporate HR expertise to volunteer management and organisational development.",
  },
  { name: "Sri Srinivas Kashyap" },
  { name: "Sri Nanjunda Prasad" },
  { name: "Sri S. Ravi Prasad" },
];

export default function Team() {
  const founder = teamMembers[0];
  const coreTeam = teamMembers.slice(1, 4);
  const extendedTeam = teamMembers.slice(4);

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

        {/* Founder Card */}
        <div className="mb-12">
          <div className="relative bg-burgundy-deep overflow-hidden">
            {/* Gold borders */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold/40 to-transparent" />
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23B8952F' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Cpath d='M30 10L40 30L30 50L20 30z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10 py-10 sm:py-14 px-8 sm:px-14 flex flex-col sm:flex-row items-center gap-8">
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-temple-gold/30 overflow-hidden">
                  <Image
                    src="/venkatesh-murthy.jpeg"
                    alt="Sri S. Venkatesh Murthy"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-temple-gold/40 text-xs tracking-[0.3em] uppercase font-body mb-1.5">
                  Founder and President
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-temple-gold/60 text-sm font-body mb-4">
                  {founder.credentials}
                </p>
                <p className="text-white/50 font-body text-sm leading-relaxed max-w-xl">
                  {founder.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Team */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {coreTeam.map((member) => (
            <div
              key={member.name}
              className="bg-white/70 backdrop-blur-sm border border-temple-gold/10 p-6 sacred-hover text-center"
            >
              <div className="w-14 h-14 rounded-full border border-temple-gold/20 bg-sandal-light/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-burgundy text-base font-display font-semibold">
                  {member.name.split(" ").pop()?.[0]}
                </span>
              </div>
              <h4 className="font-display text-base font-semibold text-sacred-text mb-0.5 leading-tight">
                {member.name}
              </h4>
              <p className="text-temple-gold-dark text-xs font-body mb-1">
                {member.role}
              </p>
              {member.credentials && (
                <p className="text-sacred-muted/60 text-[11px] font-body mb-3">
                  {member.credentials}
                </p>
              )}
              <p className="text-sacred-muted text-xs font-body leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Extended Team */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {extendedTeam.map((member) => (
            <div
              key={member.name}
              className="bg-white/60 border border-temple-gold/8 p-4 text-center hover:border-temple-gold/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-temple-gold/15 bg-sandal-light/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-burgundy text-sm font-display font-semibold">
                  {member.name.split(" ").pop()?.[0]}
                </span>
              </div>
              <h4 className="font-display text-sm font-semibold text-sacred-text leading-tight">
                {member.name}
              </h4>
              {member.role && (
                <p className="text-temple-gold-dark text-[11px] font-body mt-0.5">{member.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
