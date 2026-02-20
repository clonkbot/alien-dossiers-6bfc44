interface FilterBarProps {
  filter: string;
  setFilter: (f: string) => void;
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  sortOrder: 'newest' | 'oldest';
  setSortOrder: (o: 'newest' | 'oldest') => void;
  totalCount: number;
  filteredCount: number;
}

export function FilterBar({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  const classifications = ['ALL', 'DECLASSIFIED', 'PUBLIC', 'LEAKED'];

  return (
    <div className="mb-6 md:mb-8 space-y-4">
      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          placeholder="SEARCH RECORDS..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-black/50 border border-[#39FF14]/30 px-4 py-3 md:py-4 font-mono text-sm md:text-base text-[#39FF14] placeholder-[#39FF14]/30 focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#39FF14]/50">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filters and sort */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
        {/* Classification filters */}
        <div className="flex flex-wrap gap-2">
          {classifications.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-2 md:px-4 font-mono text-xs tracking-wider border transition-all min-h-[44px] flex items-center ${
                filter === c
                  ? c === 'DECLASSIFIED'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                    : c === 'LEAKED'
                    ? 'bg-red-500/20 border-red-500 text-red-400'
                    : c === 'PUBLIC'
                    ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]'
                    : 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]'
                  : 'border-[#d4c5a9]/20 text-[#d4c5a9]/50 hover:border-[#d4c5a9]/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Sort and count */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
            className="font-mono text-xs text-[#d4c5a9]/60 hover:text-[#39FF14] transition-colors flex items-center gap-1 min-h-[44px]"
          >
            <svg className={`w-4 h-4 transition-transform ${sortOrder === 'oldest' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            {sortOrder === 'newest' ? 'NEWEST' : 'OLDEST'}
          </button>
          <span className="font-mono text-xs text-[#39FF14]/60">
            {filteredCount}/{totalCount} RECORDS
          </span>
        </div>
      </div>
    </div>
  );
}
