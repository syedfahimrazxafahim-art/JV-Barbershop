import React from 'react';
import { BUSINESS_INFO, IMAGES } from '../data/barbershopData';
import { PageTab } from '../types';
import { ArrowUpRight, Scissors, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <>
      {/* Immersive Main Hero */}
      <section className="relative min-h-[calc(100vh-120px)] flex flex-col justify-between px-6 md:px-12 pt-8 pb-12 overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex-1 flex flex-col lg:flex-row items-center relative z-10 gap-12 lg:gap-8">
          {/* Left Column: Typographic Focus */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-4 flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-zinc-600" />
              <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-semibold">
                Est. {BUSINESS_INFO.establishedYear} • Los Angeles
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[0.9] mb-6 text-zinc-100 tracking-tight">
              The Art of <br />
              <span className="italic text-zinc-500 font-serif">Grooming.</span>
            </h1>

            <p className="text-zinc-400 max-w-md text-base sm:text-lg leading-relaxed mb-8">
              A sophisticated sanctuary for the modern gentleman. Experience precision cuts, taper fades, and traditional straight razor shaves in a timeless matte-finished environment.
            </p>

            {/* Quick Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-zinc-100 text-black font-semibold tracking-widest text-xs uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all active:scale-95 flex items-center gap-2"
              >
                Book An Appointment
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3.5 border border-zinc-700 text-zinc-300 font-medium tracking-widest text-xs uppercase hover:border-zinc-400 hover:text-white transition-all"
              >
                View Services & Pricing ($35)
              </button>
            </div>

            {/* Location & Contact Meta Blocks */}
            <div className="flex items-center space-x-6 sm:space-x-8 pt-6 border-t border-zinc-900">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1 font-medium">Location</p>
                <p className="text-zinc-300 text-xs sm:text-sm font-light flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 inline" />
                  18436 Saticoy St, Reseda
                </p>
              </div>
              <div className="w-[1px] h-10 bg-zinc-800" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1 font-medium">Direct Line</p>
                <p className="text-zinc-300 text-xs sm:text-sm font-light">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
              </div>
              <div className="w-[1px] h-10 bg-zinc-800" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1 font-medium">Standard Cut</p>
                <p className="text-zinc-200 text-xs sm:text-sm font-semibold">
                  $35 <span className="text-[10px] text-zinc-500 font-normal">flat</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Framed Masterpiece */}
          <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center">
            {/* Outer Picture Frame Border with Multi-Layer Bevel */}
            <div className="w-full max-w-lg p-3.5 sm:p-4 rounded-sm border-2 border-[#b89758]/80 bg-gradient-to-b from-[#1e1a14] via-[#14120e] to-[#0c0a08] shadow-[0_15px_50px_rgba(0,0,0,0.9)] relative group">
              {/* 4 Corner Ornaments */}
              <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#dfc382] pointer-events-none z-30" />
              <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#dfc382] pointer-events-none z-30" />
              <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#dfc382] pointer-events-none z-30" />
              <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#dfc382] pointer-events-none z-30" />

              {/* Inner Passe-Partout Mat Board */}
              <div className="p-2 border border-[#b89758]/40 bg-black/90 relative shadow-inner overflow-hidden rounded-[1px]">
                <div className="relative overflow-hidden w-full aspect-[4/3] bg-black">
                  <img
                    src={IMAGES.interior}
                    alt="JV Barbershop Interior 3D Sign"
                    className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-[#b89758]/50 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] uppercase tracking-widest text-[#f5e6c8] font-mono font-medium">
                      Walk-Ins Welcome Today
                    </span>
                  </div>

                  {/* Bottom Right Callout */}
                  <div className="absolute bottom-3 right-4 text-right z-20">
                    <p className="text-xl sm:text-2xl font-serif italic text-zinc-100 drop-shadow-md">
                      Now Open in Reseda
                    </p>
                    <p className="text-zinc-300 uppercase tracking-widest text-[10px] font-mono">
                      18436 Saticoy St • Los Angeles
                    </p>
                  </div>
                </div>
              </div>

              {/* Engraved Museum Exhibition Plaque */}
              <div className="mt-3 pt-1">
                <div className="relative px-4 py-2.5 border border-[#b89758]/60 bg-gradient-to-b from-[#2a2216] via-[#1c170f] to-[#120e08] rounded-[2px] text-center flex flex-col items-center justify-center shadow-lg">
                  {/* Left & Right Engraved Plaque Rivets */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#b89758] bg-[#47371f] shadow-inner" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#b89758] bg-[#47371f] shadow-inner" />

                  <h4 className="text-xs sm:text-sm font-serif font-bold tracking-wide text-[#f5e6c8] uppercase drop-shadow">
                    JV BARBERSHOP 3D ARCHITECTURAL EMBLEM
                  </h4>
                  <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-zinc-400 font-mono tracking-widest uppercase mt-0.5">
                    <span>18436 Saticoy St</span>
                    <span className="text-zinc-600">•</span>
                    <span>Reseda, Los Angeles, CA 91335</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Column Service Ribbon from Immersive UI Spec */}
      <section className="bg-[#111111] border-t border-b border-white/5 px-6 md:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 01 */}
          <div
            onClick={() => onNavigate('services')}
            className="group cursor-pointer p-3 rounded transition-colors hover:bg-zinc-900/30"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
                01. Signature Cut
              </p>
              <span className="text-zinc-400 text-xs font-serif">$35</span>
            </div>
            <div className="h-0.5 w-full bg-zinc-800 mb-3 group-hover:bg-zinc-300 transition-colors" />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Tailored consultation, precision scissor work, or clipper fade engineered for your head shape.
            </p>
          </div>

          {/* Item 02 */}
          <div
            onClick={() => onNavigate('services')}
            className="group cursor-pointer p-3 rounded transition-colors hover:bg-zinc-900/30"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
                02. Skin & Drop Fade
              </p>
              <span className="text-zinc-400 text-xs font-serif">$35</span>
            </div>
            <div className="h-0.5 w-full bg-zinc-800 mb-3 group-hover:bg-zinc-300 transition-colors" />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ultra-smooth blend right down to skin level with foil shaver and straight razor edge-up.
            </p>
          </div>

          {/* Item 03 */}
          <div
            onClick={() => onNavigate('services')}
            className="group cursor-pointer p-3 rounded transition-colors hover:bg-zinc-900/30"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
                03. Beard Sculpting
              </p>
              <span className="text-zinc-400 text-xs font-serif">$25</span>
            </div>
            <div className="h-0.5 w-full bg-zinc-800 mb-3 group-hover:bg-zinc-300 transition-colors" />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Refining beard shape, sharp cheek lines, mustache trimming, and luxury conditioning oil.
            </p>
          </div>

          {/* Item 04 */}
          <div
            onClick={() => onNavigate('services')}
            className="group cursor-pointer p-3 rounded transition-colors hover:bg-zinc-900/30"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
                04. Hot Towel Shave
              </p>
              <span className="text-zinc-400 text-xs font-serif">$30</span>
            </div>
            <div className="h-0.5 w-full bg-zinc-800 mb-3 group-hover:bg-zinc-300 transition-colors" />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Steamed eucalyptus towel with warm lather and single-edge straight razor indulgence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
