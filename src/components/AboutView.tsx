import React, { useState } from 'react';
import { BUSINESS_INFO, UPLOADED_IMAGES, REVIEWS, FRAMED_GALLERY, FramedImageItem } from '../data/barbershopData';
import { JVElegantBadge } from './JVLogo';
import { FramedPhoto } from './FramedPhoto';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Scissors, Shield, Heart, MapPin, Clock, Star } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  const [lightboxItem, setLightboxItem] = useState<FramedImageItem | null>(null);

  const shopItem = FRAMED_GALLERY.find(i => i.id === 'grand-opening-shop') || FRAMED_GALLERY[4];
  const originItem = FRAMED_GALLERY.find(i => i.id === 'shop-closing-origin') || FRAMED_GALLERY[7];

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Immersive Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-zinc-600" />
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-semibold">
            Our Heritage & Story
          </span>
          <div className="h-[1px] w-12 bg-zinc-600" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif text-zinc-100 tracking-tight mb-4">
          The JV Standard in <span className="italic text-zinc-500 font-serif">Los Angeles.</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
          Rooted on Saticoy Street in Reseda, JV Barbershop brings together timeless barbershop tradition with today’s sharpest taper and skin fade techniques.
        </p>
      </div>

      {/* Two Column Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif text-zinc-100 leading-snug">
            A sanctuary where craftsmanship, conversation, and confidence come first.
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Founded with a passion for classic grooming, JV Barbershop was built to offer an elevated yet welcoming neighborhood environment. We believe the barbershop should be a dependable anchor—a place where you can relax, unwind, and walk out looking your absolute sharpest.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Whether you need a quick $35 midday taper, a clean Sunday skin fade, or a full straight-razor hot towel beard detailing, our blades are always sharp and our welcome is always genuine.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-zinc-800">
            <div>
              <p className="text-3xl font-serif font-bold text-zinc-100">100%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                Precision Hand-Blended Fades
              </p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-zinc-100">$35</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                Honest Standard Haircut Rate
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <JVElegantBadge className="w-full max-w-md" />
        </div>
      </div>

      {/* Framed Storefront & Atmosphere Feature */}
      <div className="mb-20 bg-[#111111] border border-white/5 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <FramedPhoto
              src={shopItem.image}
              alt={shopItem.title}
              title={shopItem.title}
              subtitle={shopItem.subtitle}
              location={shopItem.plaqueLocation}
              variant="noir"
              aspect="aspect-[4/3]"
              onClick={() => setLightboxItem(shopItem)}
            />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-400" />
              18436 Saticoy St, Reseda, CA 91335
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-zinc-100">
              Convenient Valley Location with Easy Parking
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Situated in the heart of Reseda, our shop is easily accessible with ample street parking. Open 7 days a week, including Sunday morning hours (9:00 AM to 2:00 PM) for weekend grooming.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 bg-zinc-200 text-black font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all"
              >
                Book An Appointment
              </button>
              <a
                href={BUSINESS_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-zinc-700 text-zinc-300 text-xs tracking-widest uppercase hover:border-zinc-400 hover:text-white transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Origin Feature */}
      <div className="mb-20 p-8 sm:p-12 bg-gradient-to-b from-[#141210] to-[#0c0a09] border border-[#b89758]/40 rounded-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest text-[#dfc382] font-semibold font-mono">
              The Journey & Roots
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-zinc-100">
              From Roll-Up Shutter to Neighborhood Institution
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The historic roll-up door at 18436 Saticoy St first announced the coming of JV Barbershop to Reseda. Through dedication to authentic barber traditions, clean fades, and genuine hospitality, this location has become a sanctuary for gentlemen across the San Fernando Valley.
            </p>
            <p className="text-zinc-500 text-xs font-mono">
              Archived asset: Original shutter display preserved in our heritage gallery.
            </p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <FramedPhoto
              src={originItem.image}
              alt={originItem.title}
              title={originItem.title}
              subtitle={originItem.subtitle}
              location={originItem.plaqueLocation}
              variant="brass"
              aspect="aspect-[4/3]"
              onClick={() => setLightboxItem(originItem)}
            />
          </div>
        </div>
      </div>

      {/* Client Reviews / Testimonials Section */}
      <div className="mb-12">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-semibold mb-2">
            Client Experiences
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-zinc-100">
            What The Valley Says
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 bg-[#111111] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-zinc-300 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-zinc-200 text-zinc-200" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-6 font-serif">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs">
                <div>
                  <p className="font-semibold text-zinc-200">{rev.author}</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">{rev.cutType}</p>
                </div>
                <span className="text-zinc-600 text-[10px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for framed images */}
      <ImageLightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onBookNow={onOpenBooking}
      />
    </div>
  );
};

