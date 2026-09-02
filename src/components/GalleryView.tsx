import React, { useState } from 'react';
import { FRAMED_GALLERY, FramedImageItem, BUSINESS_INFO } from '../data/barbershopData';
import { FramedPhoto, FrameVariant } from './FramedPhoto';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Award, Filter, Sparkles, Layers, Facebook } from 'lucide-react';

interface GalleryViewProps {
  onOpenBooking: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cuts' | 'shop' | 'signage' | 'menu'>('all');
  const [frameFilter, setFrameFilter] = useState<'all' | FrameVariant>('all');
  const [selectedItem, setSelectedItem] = useState<FramedImageItem | null>(null);

  const filteredItems = FRAMED_GALLERY.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesFrame = frameFilter === 'all' || item.frameStyle === frameFilter;
    return matchesCategory && matchesFrame;
  });

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Immersive Gallery Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-[#b89758]/80" />
          <span className="text-[#dfc382] uppercase tracking-[0.4em] text-xs font-semibold font-mono">
            Exhibition Archive
          </span>
          <div className="h-[1px] w-12 bg-[#b89758]/80" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif text-zinc-100 tracking-tight mb-4">
          The Framed <span className="italic text-[#dfc382] font-serif">Collection.</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
          Every authentic piece from JV Barbershop at 18436 Saticoy St in Reseda, Los Angeles—presented in exhibition-grade picture frames with museum plaques. Click any piece to inspect details.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {[
            { key: 'all', label: 'All Framed Assets' },
            { key: 'cuts', label: 'In-Chair Cuts & Fades' },
            { key: 'shop', label: 'Storefront & Interior' },
            { key: 'signage', label: 'Window & Operating Signs' },
            { key: 'menu', label: 'Pricing & Service Posters' },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveCategory(btn.key as any)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-mono transition-all rounded-[2px] ${
                activeCategory === btn.key
                  ? 'bg-gradient-to-r from-[#b89758] to-[#96783f] text-black font-bold shadow-lg border border-[#dfc382]'
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Sub-bar showing frame variants indicator */}
        <div className="flex items-center gap-3 mt-4 text-[11px] text-zinc-500 font-mono">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" /> Gold Foil Bevel
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-zinc-400" /> Brushed Silver
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#c99748]" /> Antique Brass
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-zinc-700" /> Museum Noir
          </span>
        </div>
      </div>

      {/* Exhibition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredItems.map((item) => (
          <FramedPhoto
            key={item.id}
            src={item.image}
            alt={item.title}
            title={item.title}
            subtitle={item.subtitle}
            location={item.plaqueLocation}
            variant={item.frameStyle}
            aspect={item.aspect || 'aspect-[4/3]'}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Bottom Heritage Guarantee Strip */}
      <div className="mt-20 p-8 bg-gradient-to-b from-[#181614] via-[#121110] to-[#0c0a09] border-2 border-[#b89758]/50 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#b89758]/10 border border-[#b89758]/40 rounded-full text-[#dfc382]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold text-zinc-100">
              100% Authentic Physical Barbershop Photography
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm">
              All images and signage displayed above belong exclusively to JV Barbershop at 18436 Saticoy St, Reseda, CA.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-blue-900/60 bg-blue-950/30 hover:bg-blue-900/40 text-blue-300 font-semibold text-xs tracking-widest uppercase rounded flex items-center gap-2 transition-all shadow-md font-mono"
          >
            <Facebook className="w-4 h-4 text-[#1877F2]" />
            <span>Facebook Photos Album</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-gradient-to-r from-[#b89758] to-[#96783f] hover:from-[#c9a768] hover:to-[#a7884f] text-black font-semibold text-xs tracking-widest uppercase rounded shadow transition-all"
          >
            Book An Appointment
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onBookNow={onOpenBooking}
      />
    </div>
  );
};
