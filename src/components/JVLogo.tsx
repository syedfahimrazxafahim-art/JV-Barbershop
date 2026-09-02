import React from 'react';
import { UPLOADED_IMAGES } from '../data/barbershopData';

interface JVLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  className?: string;
  framed?: boolean;
}

export const JVLogo: React.FC<JVLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  framed = true,
}) => {
  const sizeMap = {
    sm: { box: 'w-10 h-10', img: 'w-8 h-8', text: 'text-[12px]', sub: 'text-[8px]' },
    md: { box: 'w-12 h-12', img: 'w-10 h-10', text: 'text-base', sub: 'text-[9px]' },
    lg: { box: 'w-16 h-16', img: 'w-13 h-13', text: 'text-lg', sub: 'text-[10px]' },
    hero: { box: 'w-24 h-24 sm:w-28 sm:h-28', img: 'w-20 h-20 sm:w-24 sm:h-24', text: 'text-2xl sm:text-3xl', sub: 'text-xs' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Business Logo framed with gold/zinc double rim and shadow */}
      <div
        className={`${current.box} shrink-0 rounded-lg ${
          framed
            ? 'p-1 bg-gradient-to-b from-[#2a2419] via-[#1a1714] to-[#0c0b0a] border-2 border-[#b89758]/80 shadow-[0_4px_16px_rgba(0,0,0,0.8)] relative group'
            : 'relative'
        } flex items-center justify-center overflow-hidden transition-all duration-300`}
      >
        {framed && (
          <>
            {/* Subtle frame corner brackets */}
            <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#dfc382] pointer-events-none" />
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#dfc382] pointer-events-none" />
            <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-[#dfc382] pointer-events-none" />
            <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#dfc382] pointer-events-none" />
          </>
        )}

        {/* The Exact Official Logo Image */}
        <img
          src={UPLOADED_IMAGES.logo}
          alt="JV Barbershop Official Logo"
          className={`${current.img} object-contain rounded-md filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`${current.text} tracking-[0.24em] font-serif font-bold text-zinc-100 uppercase`}>
              JV Barbershop
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="h-[1px] w-3.5 bg-[#b89758]/60" />
            <span className={`${current.sub} tracking-[0.32em] text-[#dfc382]/90 uppercase font-mono`}>
              Los Angeles • Est. 2025
            </span>
            <span className="h-[1px] w-3.5 bg-[#b89758]/60" />
          </div>
        </div>
      )}
    </div>
  );
};

export const JVElegantBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center p-5 bg-gradient-to-b from-[#1c1917] via-[#141210] to-[#0c0a08] border-2 border-[#b89758]/80 rounded-md shadow-2xl relative ${className}`}>
      {/* 4 Corner Ornaments */}
      <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#dfc382] pointer-events-none" />
      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#dfc382] pointer-events-none" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#dfc382] pointer-events-none" />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#dfc382] pointer-events-none" />

      {/* Official Business Logo Frame */}
      <div className="p-2 rounded border border-[#b89758]/40 bg-black/50 shadow-inner">
        <img
          src={UPLOADED_IMAGES.logo}
          alt="JV Barbershop Master Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* BARBERSHOP with gold letterpress styling */}
      <div className="mt-3 text-xs tracking-[0.45em] text-[#f5e6c8] font-bold uppercase font-serif">
        JV BARBERSHOP
      </div>

      {/* Barber flourish ornament */}
      <div className="flex items-center gap-3 mt-1.5 text-[#b89758]">
        <span className="h-[1px] w-8 bg-[#b89758]/60" />
        <span className="text-[10px] tracking-widest text-[#dfc382] font-mono">18436 SATICOY ST</span>
        <span className="h-[1px] w-8 bg-[#b89758]/60" />
      </div>

      <div className="mt-1.5 text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-mono">
        Reseda • Los Angeles, CA
      </div>
    </div>
  );
};
