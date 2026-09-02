import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO, FRAMED_GALLERY, FramedImageItem } from '../data/barbershopData';
import { ServiceItem } from '../types';
import { FramedPhoto } from './FramedPhoto';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Clock, Check, Scissors, Sparkles, MessageCircle, FileText } from 'lucide-react';

interface ServicesViewProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cuts' | 'beard' | 'shaves' | 'packages'>('all');
  const [lightboxItem, setLightboxItem] = useState<FramedImageItem | null>(null);

  const priceBoard = FRAMED_GALLERY.find(i => i.id === 'price-board-card') || FRAMED_GALLERY[1];
  const servicePoster = FRAMED_GALLERY.find(i => i.id === 'service-contact-poster') || FRAMED_GALLERY[3];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header section with Immersive UI styling */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-zinc-600" />
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-semibold">
            Menu & Pricing
          </span>
          <div className="h-[1px] w-12 bg-zinc-600" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif text-zinc-100 tracking-tight mb-4">
          Master Crafts & <span className="italic text-zinc-500">Treatments.</span>
        </h2>
        <p className="text-zinc-400 max-w-xl text-base leading-relaxed">
          Transparent pricing, artisan blade work, and honest hospitality. All haircuts include razor clean-up and styling.
        </p>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { key: 'all', label: 'All Services' },
            { key: 'cuts', label: 'Cuts & Fades ($35)' },
            { key: 'beard', label: 'Beard Grooming' },
            { key: 'shaves', label: 'Straight Razor' },
            { key: 'packages', label: 'Combos' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-zinc-200 text-black border border-white'
                  : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`p-6 sm:p-8 bg-[#111111] border transition-all duration-300 relative group flex flex-col justify-between ${
              service.popular
                ? 'border-zinc-700/80 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
                : 'border-white/5 hover:border-zinc-700'
            }`}
          >
            {service.popular && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-zinc-200 text-black px-3 py-0.5 text-[9px] uppercase tracking-widest font-bold">
                Most Requested
              </div>
            )}

            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl sm:text-2xl font-serif text-zinc-100 group-hover:text-white transition-colors">
                  {service.name}
                </h3>
                <span className="text-2xl font-serif font-bold text-zinc-100 ml-4">
                  ${service.price}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{service.duration}</span>
                <span>•</span>
                <span className="uppercase">{service.category}</span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Walk-ins welcome</span>
              <button
                onClick={() => onSelectServiceForBooking(service)}
                className="px-5 py-2 text-xs uppercase tracking-widest font-medium border border-zinc-600 text-zinc-200 hover:bg-zinc-200 hover:text-black transition-all flex items-center gap-2"
              >
                <span>Book This</span>
                <Scissors className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Official In-Store Framed Physical Boards Display */}
      <div className="mb-16 p-8 sm:p-12 bg-gradient-to-b from-[#161412] to-[#0d0c0a] border border-[#b89758]/50 rounded-sm">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="h-[1px] w-8 bg-[#b89758]" />
            <span className="text-[#dfc382] uppercase tracking-[0.3em] text-xs font-mono font-semibold">
              Physical In-Shop Board Exhibits
            </span>
            <span className="h-[1px] w-8 bg-[#b89758]" />
          </div>
          <h3 className="text-3xl font-serif text-zinc-100">
            Official Shop Price Card & Service Notice
          </h3>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
            Authentic photography of our printed pricing board displayed directly on our counter in Reseda. What you see is exactly what you pay—no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FramedPhoto
            src={priceBoard.image}
            alt={priceBoard.title}
            title={priceBoard.title}
            subtitle={priceBoard.subtitle}
            location={priceBoard.plaqueLocation}
            variant="gold"
            aspect="aspect-[4/3]"
            onClick={() => setLightboxItem(priceBoard)}
          />

          <FramedPhoto
            src={servicePoster.image}
            alt={servicePoster.title}
            title={servicePoster.title}
            subtitle={servicePoster.subtitle}
            location={servicePoster.plaqueLocation}
            variant="brass"
            aspect="aspect-[4/3]"
            onClick={() => setLightboxItem(servicePoster)}
          />
        </div>
      </div>

      {/* Walk-in notice banner */}
      <div className="p-8 bg-gradient-to-r from-zinc-900/80 via-[#141416] to-zinc-900/80 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-serif text-zinc-100 mb-1">
            Need a Quick Cut Today in Reseda?
          </h4>
          <p className="text-zinc-400 text-sm">
            Visit us directly at 18436 Saticoy St or message us on WhatsApp for zero waiting time.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-emerald-500/50 bg-emerald-950/30 text-emerald-300 text-xs uppercase tracking-widest font-medium hover:bg-emerald-900/50 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            WhatsApp Ahead
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onBookNow={() => {}}
      />
    </div>
  );
};

