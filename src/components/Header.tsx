interface HeaderProps {
  loaded: boolean;
}

export function Header({ loaded }: HeaderProps) {
  return (
    <header className="relative py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 text-center overflow-hidden">
      {/* Classified watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="font-mono text-[15vw] font-bold tracking-widest text-[#39FF14] rotate-[-15deg]">
          CLASSIFIED
        </span>
      </div>

      {/* Top secret stamp */}
      <div
        className={`inline-block mb-4 md:mb-6 transform transition-all duration-700 ${
          loaded ? 'opacity-100 rotate-[-3deg] scale-100' : 'opacity-0 rotate-12 scale-50'
        }`}
      >
        <div className="border-2 border-red-500 px-3 py-1 md:px-4 md:py-1.5 inline-block">
          <span className="font-mono text-red-500 text-xs md:text-sm tracking-[0.3em] font-bold">
            TOP SECRET
          </span>
        </div>
      </div>

      {/* Main title */}
      <h1
        className={`font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 md:mb-4 transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">THE</span>
        <br className="sm:hidden" />
        <span className="text-[#d4c5a9]"> ALIEN </span>
        <br className="sm:hidden" />
        <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">DOSSIERS</span>
      </h1>

      {/* Subtitle with typewriter effect */}
      <div
        className={`transition-all duration-1000 delay-300 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="font-mono text-xs md:text-sm text-[#d4c5a9]/60 tracking-[0.2em] md:tracking-[0.3em] uppercase">
          Documented Mentions: 1984 - 2024
        </p>
        <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-[#39FF14]/80">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#39FF14] rounded-full animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs tracking-wider">SIGNAL ACTIVE</span>
        </div>
      </div>

      {/* Decorative line */}
      <div
        className={`mt-6 md:mt-8 h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
    </header>
  );
}
