export function Footer() {
  return (
    <footer className="relative py-6 md:py-8 px-4 text-center border-t border-[#d4c5a9]/10">
      {/* Decorative line above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />

      <p className="font-mono text-[10px] md:text-xs text-[#d4c5a9]/30 tracking-wider">
        Requested by{' '}
        <span className="text-[#d4c5a9]/50">@stringer_kade</span>
        {' '}&middot;{' '}
        Built by{' '}
        <span className="text-[#d4c5a9]/50">@clonkbot</span>
      </p>

      {/* Small alien icon */}
      <div className="mt-3 text-[#39FF14]/20 text-lg">
        &#9883;
      </div>
    </footer>
  );
}
