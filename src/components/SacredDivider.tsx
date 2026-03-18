export default function SacredDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="w-20 h-px bg-gradient-to-r from-transparent to-temple-gold/50" />
      <svg
        viewBox="0 0 40 40"
        className="w-6 h-6 text-temple-gold"
        fill="currentColor"
      >
        {/* Lotus motif */}
        <path d="M20 4c2 8 10 10 16 8-6 8-12 14-16 16C16 26 10 20 4 12c6 2 14 0 16-8z" opacity="0.8" />
        <path d="M20 10c1.5 6 6 8 12 7-4 5-8 9-12 11-4-2-8-6-12-11 6 1 10.5-1 12-7z" opacity="0.5" />
        <ellipse cx="20" cy="30" rx="8" ry="3" opacity="0.3" />
        <ellipse cx="20" cy="34" rx="10" ry="3" opacity="0.2" />
      </svg>
      <div className="w-20 h-px bg-gradient-to-l from-transparent to-temple-gold/50" />
    </div>
  );
}
