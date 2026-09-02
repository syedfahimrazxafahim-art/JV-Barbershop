import React, { useState } from 'react';
import { IMAGES, BUSINESS_INFO, FRAMED_GALLERY, FramedImageItem } from '../data/barbershopData';
import { FramedPhoto } from './FramedPhoto';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Scissors, Award, Sparkles, CheckCircle2, Phone, Calendar } from 'lucide-react';

interface BarbersViewProps {
  onOpenBooking: () => void;
}

export const BarbersView: React.FC<BarbersViewProps> = ({ onOpenBooking }) => {
  const [lightboxItem, setLightboxItem] = useState<FramedImageItem | null>(null);

  const heroWork = FRAMED_GALLERY.find(i => i.id === 'master-fade-chair') || FRAMED_GALLERY[0];
  const interiorSign = FRAMED_GALLERY.find(i => i.id === 'interior-3d-wall-sign') || FRAMED_GALLERY[2];

  const styles = [
    {
      title: 'Precision Mid Skin Fade',
      category: 'Fade Architecture',
      image: IMAGES.skinFade,
      desc: 'Seamless razor graduation down to clean skin, accompanied by a razor-sculpted beard line and sharp mustache transition.',
      specs: ['Zero foil blend', 'Crisp temple angle', 'Matte hair clay styling']
    },
    {
      title: 'Textured Drop Fade Crop',
      category: 'Modern Crop',
      image: IMAGES.curlyCrop,
      desc: 'Accentuates natural curls and natural crown movement with an arched low drop fade wrapping behind the ear.',
      specs: ['Texturized shear top', 'Low curve transition', 'Moisture curl definition']
    },
    {
      title: 'Classic Gentleman’s Taper',
      category: 'Timeless Profile',
      image: IMAGES.classicTaper,
      desc: 'Flawless side part with tailored volume on top, tapered sideburns, and clean neckline contour.',
      specs: ['Shear-over-comb balance', 'Clean neck razor outline', 'Medium hold satin finish']
    }
  ];

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Immersive Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-zinc-600" />
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-semibold">
            Dedicated Craftsmanship
          </span>
          <div className="h-[1px] w-12 bg-zinc-600" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif text-zinc-100 tracking-tight mb-4 uppercase">
          THE ARTISTS <span className="italic text-zinc-500 normal-case font-serif">Behind The Chair.</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
          Master barbering rooted in precision geometry and traditional technique. Every cut at JV Barbershop is tailored to your face structure, hair texture, and lifestyle.
        </p>
      </div>

      {/* Primary Barber Profile & Craft Statement with Framed Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-[#111111] border border-white/5 p-8 sm:p-12 rounded-sm">
        <div className="lg:col-span-6">
          <FramedPhoto
            src={heroWork.image}
            alt={heroWork.title}
            title={heroWork.title}
            subtitle={heroWork.subtitle}
            location={heroWork.plaqueLocation}
            variant="gold"
            aspect="aspect-[4/3]"
            onClick={() => setLightboxItem(heroWork)}
          />
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-5 h-5 text-[#dfc382]" />
            <span className="text-xs uppercase tracking-widest text-[#dfc382] font-semibold font-mono">
              The JV Barber Standard
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif text-zinc-100 mb-6 leading-tight">
            "Clean cuts, sharp styles, and real confidence in every single chair session."
          </h3>

          <p className="text-zinc-400 text-base leading-relaxed mb-6">
            At JV Barbershop, we believe a great haircut isn’t just maintenance—it’s an elevation of how you carry yourself. From the moment you sit down in our chairs on Saticoy Street, you receive attentive consultation, razor-sharp execution, and pristine hygiene.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-zinc-200">Custom Consultation</p>
                <p className="text-xs text-zinc-500">Tailored to your hairline, head shape, and hair density.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-zinc-200">Hospital-Grade Sanitation</p>
                <p className="text-xs text-zinc-500">Barbicide disinfected tools and fresh razors for every client.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-zinc-200">Straight Razor Finish</p>
                <p className="text-xs text-zinc-500">Crisp, lingering lines that stay sharp for weeks.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-zinc-200">Walk-Ins Always Welcome</p>
                <p className="text-xs text-zinc-500">Open 7 days a week, Sunday hours available.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-zinc-100 text-black font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book With JV
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 border border-zinc-700 text-zinc-300 font-medium text-xs tracking-widest uppercase hover:border-zinc-400 hover:text-white transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call (818) 251-6639
            </a>
          </div>
        </div>
      </div>

      {/* Customer Transformations & Cut Showcase */}
      <div className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-serif text-zinc-200 mb-2">
          Featured Cut Portfolio
        </h3>
        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-8 font-mono">
          Real results achieved daily at 18436 Saticoy St
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-white/5 overflow-hidden group hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-zinc-300 border border-white/10">
                  {style.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-serif text-zinc-100 mb-2">{style.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{style.desc}</p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {style.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[9px] uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded-sm border border-zinc-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2 border border-zinc-700 text-zinc-300 text-xs uppercase tracking-widest hover:bg-zinc-200 hover:text-black hover:border-zinc-200 transition-all font-medium"
                  >
                    Request This Cut
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for inspect modal */}
      <ImageLightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onBookNow={onOpenBooking}
      />
    </div>
  );
};

