import { useState, useEffect } from 'react';
import type { Person } from '../App';

interface PersonCardProps {
  person: Person;
  index: number;
}

export function PersonCard({ person, index }: PersonCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  const classificationStyles = {
    DECLASSIFIED: 'border-amber-500 text-amber-400 bg-amber-500/10',
    PUBLIC: 'border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10',
    LEAKED: 'border-red-500 text-red-400 bg-red-500/10',
  };

  const stampRotations = [-3, 2, -1, 3, -2];
  const rotation = stampRotations[index % stampRotations.length];

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-gradient-to-br from-[#1a1a18] to-[#0f0f0d] border border-[#d4c5a9]/10 p-4 md:p-5 lg:p-6 transition-all duration-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isHovered ? 'border-[#39FF14]/30 shadow-[0_0_30px_rgba(57,255,20,0.1)]' : ''}`}
    >
      {/* Corner staple effect */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-[#d4c5a9]/20" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-[#d4c5a9]/20" />

      {/* Classification stamp */}
      <div
        className={`absolute -top-1 -right-1 md:top-2 md:right-2 px-2 py-0.5 md:px-3 md:py-1 border-2 font-mono text-[10px] md:text-xs tracking-widest font-bold transform ${classificationStyles[person.classification]}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {person.classification}
      </div>

      {/* File number */}
      <div className="font-mono text-[10px] text-[#d4c5a9]/30 mb-3 md:mb-4">
        FILE NO. {String(person.id).padStart(4, '0')}-{person.year}
      </div>

      {/* Name and role */}
      <h2 className="font-mono text-lg md:text-xl font-bold text-[#d4c5a9] mb-1 tracking-wide group-hover:text-[#39FF14] transition-colors">
        {person.name}
      </h2>
      <p className="font-mono text-xs text-[#d4c5a9]/50 mb-3 md:mb-4 uppercase tracking-wider">
        {person.role}
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-[#d4c5a9]/20 via-[#d4c5a9]/10 to-transparent mb-3 md:mb-4" />

      {/* Context and year */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <span className="font-mono text-[10px] md:text-xs text-[#39FF14]/70 uppercase">
          {person.context}
        </span>
        <span className="font-mono text-lg md:text-xl font-bold text-[#39FF14]/30">
          {person.year}
        </span>
      </div>

      {/* Quote */}
      <blockquote className="relative">
        <span className="absolute -left-1 -top-2 text-3xl md:text-4xl text-[#39FF14]/20 font-serif">"</span>
        <p className="font-mono text-xs md:text-sm leading-relaxed text-[#d4c5a9]/80 pl-4 md:pl-5 pr-2 md:pr-4">
          {person.quote}
        </p>
        <span className="absolute -bottom-4 right-0 text-3xl md:text-4xl text-[#39FF14]/20 font-serif">"</span>
      </blockquote>

      {/* Bottom corner marks */}
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-[#d4c5a9]/20" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-[#d4c5a9]/20" />

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : ''
        }`}
      />
    </article>
  );
}
