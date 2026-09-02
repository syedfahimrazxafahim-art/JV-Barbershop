import React from 'react';
import { ZoomIn, MapPin } from 'lucide-react';

export type FrameVariant = 'gold' | 'silver' | 'brass' | 'noir';

interface FramedPhotoProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  location?: string;
  variant?: FrameVariant;
  className?: string;
  imageClassName?: string;
  aspect?: string; // e.g. 'aspect-[4/3]' or 'aspect-[3/4]'
  onClick?: () => void;
  showPlaque?: boolean;
}

export const FramedPhoto: React.FC<FramedPhotoProps> = ({
  src,
  alt,
  title,
  subtitle,
  location,
  variant = 'gold',
  className = '',
  imageClassName = '',
  aspect = 'aspect-[4/3]',
  onClick,
  showPlaque = true,
}) => {
  // Frame styling based on variant
  const frameThemes: Record<FrameVariant, {
    outerBorder: string;
    outerBg: string;
    innerBorder: string;
    matBg: string;
    cornerColor: string;
    plaqueBg: string;
    plaqueBorder: string;
    plaqueText: string;
    rivetColor: string;
    accentGlow: string;
  }> = {
    gold: {
      outerBorder: 'border-[#b89758]/60 hover:border-[#dfc382]',
      outerBg: 'bg-gradient-to-b from-[#1c1917] via-[#141210] to-[#0f0e0d]',
      innerBorder: 'border-[#b89758]/30',
      matBg: 'bg-[#0d0c0b]',
      cornerColor: 'text-[#d4af37]',
      plaqueBg: 'bg-gradient-to-b from-[#2a241b] via-[#1f1b13] to-[#15120c]',
      plaqueBorder: 'border-[#b89758]/60 shadow-[0_2px_8px_rgba(0,0,0,0.8)]',
      plaqueText: 'text-[#f5e6c8]',
      rivetColor: 'border-[#b89758]/80 bg-[#423620]',
      accentGlow: 'hover:shadow-[0_10px_35px_rgba(212,175,55,0.18)]',
    },
    silver: {
      outerBorder: 'border-zinc-500/70 hover:border-zinc-300',
      outerBg: 'bg-gradient-to-b from-[#202024] via-[#161618] to-[#101012]',
      innerBorder: 'border-zinc-600/40',
      matBg: 'bg-[#0e0e11]',
      cornerColor: 'text-zinc-300',
      plaqueBg: 'bg-gradient-to-b from-[#27272a] via-[#1c1c1f] to-[#121214]',
      plaqueBorder: 'border-zinc-500/60 shadow-[0_2px_8px_rgba(0,0,0,0.8)]',
      plaqueText: 'text-zinc-100',
      rivetColor: 'border-zinc-400 bg-zinc-700',
      accentGlow: 'hover:shadow-[0_10px_35px_rgba(255,255,255,0.12)]',
    },
    brass: {
      outerBorder: 'border-[#a87932]/70 hover:border-[#c99748]',
      outerBg: 'bg-gradient-to-b from-[#1e1913] via-[#14100b] to-[#0c0906]',
      innerBorder: 'border-[#a87932]/35',
      matBg: 'bg-[#0a0805]',
      cornerColor: 'text-[#c99748]',
      plaqueBg: 'bg-gradient-to-b from-[#2c2214] via-[#1d160c] to-[#110d06]',
      plaqueBorder: 'border-[#a87932]/60 shadow-[0_2px_8px_rgba(0,0,0,0.8)]',
      plaqueText: 'text-[#f3dfbc]',
      rivetColor: 'border-[#a87932]/80 bg-[#3d2e18]',
      accentGlow: 'hover:shadow-[0_10px_35px_rgba(201,151,72,0.18)]',
    },
    noir: {
      outerBorder: 'border-zinc-700/80 hover:border-zinc-400',
      outerBg: 'bg-gradient-to-b from-[#18181b] via-[#111113] to-[#09090b]',
      innerBorder: 'border-white/10',
      matBg: 'bg-black',
      cornerColor: 'text-zinc-400',
      plaqueBg: 'bg-gradient-to-b from-[#1e1e24] via-[#141416] to-[#0c0c0e]',
      plaqueBorder: 'border-zinc-600/60 shadow-[0_2px_8px_rgba(0,0,0,0.8)]',
      plaqueText: 'text-zinc-200',
      rivetColor: 'border-zinc-500 bg-zinc-800',
      accentGlow: 'hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]',
    },
  };

  const theme = frameThemes[variant];

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-sm transition-all duration-500 cursor-pointer ${theme.accentGlow} ${className}`}
    >
      {/* Outer Picture Frame Border with Multi-Layer Bevel */}
      <div
        className={`relative p-2.5 sm:p-3.5 rounded-sm border-2 ${theme.outerBorder} ${theme.outerBg} shadow-2xl overflow-hidden transition-all duration-300`}
      >
        {/* Subtle metallic frame highlights */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />

        {/* 4 Decorative Corner Mounting Brackets */}
        <div className={`absolute top-1 left-1 w-3.5 h-3.5 border-t-2 border-l-2 ${theme.cornerColor} pointer-events-none z-20`} />
        <div className={`absolute top-1 right-1 w-3.5 h-3.5 border-t-2 border-r-2 ${theme.cornerColor} pointer-events-none z-20`} />
        <div className={`absolute bottom-1 left-1 w-3.5 h-3.5 border-b-2 border-l-2 ${theme.cornerColor} pointer-events-none z-20`} />
        <div className={`absolute bottom-1 right-1 w-3.5 h-3.5 border-b-2 border-r-2 ${theme.cornerColor} pointer-events-none z-20`} />

        {/* Inner Passe-Partout Mat Board */}
        <div
          className={`p-1.5 sm:p-2 border ${theme.innerBorder} ${theme.matBg} relative shadow-inner overflow-hidden rounded-[1px]`}
        >
          {/* Inner hairline liner (fillet) */}
          <div className="absolute inset-0.5 border border-white/5 pointer-events-none z-10" />

          {/* Photo Container */}
          <div className={`relative overflow-hidden w-full bg-black ${aspect} flex items-center justify-center`}>
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105 brightness-95 group-hover:brightness-105 ${imageClassName}`}
              referrerPolicy="no-referrer"
              loading="lazy"
            />

            {/* Subtle Vignette & Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Hover Zoom Badge */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-20">
              <span className="p-1.5 bg-black/75 backdrop-blur-md rounded border border-white/20 text-white shadow-lg flex items-center gap-1 text-[9px] uppercase tracking-wider font-mono">
                <ZoomIn className="w-3 h-3" />
                <span>Inspect</span>
              </span>
            </div>
          </div>
        </div>

        {/* Engraved Gallery Exhibition Plaque */}
        {showPlaque && (
          <div className="mt-2.5 sm:mt-3 pt-1">
            <div
              className={`relative px-3 py-2 border ${theme.plaqueBorder} ${theme.plaqueBg} rounded-[2px] text-center flex flex-col items-center justify-center transition-all duration-300`}
            >
              {/* Left & Right Engraved Plaque Rivets */}
              <div
                className={`absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border ${theme.rivetColor} shadow-inner pointer-events-none`}
              />
              <div
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border ${theme.rivetColor} shadow-inner pointer-events-none`}
              />

              <h4
                className={`text-xs sm:text-sm font-serif font-bold tracking-wide ${theme.plaqueText} truncate max-w-[85%] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]`}
              >
                {title}
              </h4>

              {(subtitle || location) && (
                <div className="flex items-center justify-center gap-2 text-[9px] sm:text-[10px] text-zinc-400 font-mono tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {subtitle && <span>{subtitle}</span>}
                  {subtitle && location && <span className="text-zinc-600">•</span>}
                  {location && (
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-2.5 h-2.5 inline" />
                      {location}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
