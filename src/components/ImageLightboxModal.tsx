import React from 'react';
import { X, MapPin, Scissors, Calendar, Facebook } from 'lucide-react';
import { FramedImageItem } from '../data/barbershopData';

interface ImageLightboxModalProps {
  item: FramedImageItem | null;
  onClose: () => void;
  onBookNow: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  onClose,
  onBookNow,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative max-w-4xl w-full bg-[#121214] border-2 border-[#b89758]/70 rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Frame Corner Accents */}
        <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#dfc382] z-30 pointer-events-none" />
        <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#dfc382] z-30 pointer-events-none" />
        <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#dfc382] z-30 pointer-events-none" />
        <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#dfc382] z-30 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-black/80 hover:bg-black text-zinc-300 hover:text-white rounded-full border border-zinc-700 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Framed Artwork Display Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-r border-zinc-800">
          <div className="relative p-2 sm:p-3 bg-gradient-to-b from-[#1c1917] to-[#0a0a0b] border border-[#b89758]/50 rounded shadow-2xl max-h-[55vh] md:max-h-[75vh] w-full flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[50vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Plaque / Information Side */}
        <div className="w-full md:w-80 lg:w-96 p-6 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#18181b] to-[#0f0f12]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#b89758]/10 border border-[#b89758]/30 text-[#dfc382] text-[10px] font-mono uppercase tracking-widest mb-3">
              <span>Authentic JV Barbershop Asset</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-100 tracking-tight leading-snug">
              {item.title}
            </h3>

            <p className="text-xs font-mono text-[#dfc382] tracking-wider uppercase mt-1">
              {item.subtitle}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-2 mb-4 pb-3 border-b border-zinc-800">
              <MapPin className="w-3.5 h-3.5 text-[#b89758]" />
              <span>{item.plaqueLocation}</span>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {item.description}
            </p>

            {item.barberTip && (
              <div className="mt-4 p-3 bg-black/40 border border-zinc-800/80 rounded">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Scissors className="w-3 h-3 text-[#dfc382]" />
                  <span>Barber Note</span>
                </div>
                <p className="text-xs text-zinc-300 italic">
                  "{item.barberTip}"
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-[#b89758] to-[#96783f] hover:from-[#c9a768] hover:to-[#a7884f] text-black font-semibold text-xs tracking-widest uppercase rounded shadow flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href="https://www.facebook.com/jv.barbershop.2025/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-blue-950/20 hover:bg-blue-900/30 text-blue-300 text-xs tracking-wider uppercase rounded border border-blue-900/40 text-center flex items-center justify-center gap-2 transition-colors font-mono"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook Photos Gallery</span>
            </a>
            <a
              href="https://wa.me/18182516639?text=Hi%20JV%20Barbershop%2C%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs tracking-wider uppercase rounded border border-zinc-700 text-center transition-colors font-mono"
            >
              Direct WhatsApp (+1 818-251-6639)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
