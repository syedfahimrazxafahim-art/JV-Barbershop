import React, { useState } from 'react';
import { BUSINESS_INFO, BUSINESS_HOURS, FRAMED_GALLERY, FramedImageItem } from '../data/barbershopData';
import { FramedPhoto } from './FramedPhoto';
import { ImageLightboxModal } from './ImageLightboxModal';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle, ExternalLink, Facebook } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<FramedImageItem | null>(null);

  const timingItem = FRAMED_GALLERY.find(i => i.id === 'operating-timing') || FRAMED_GALLERY[5];
  const windowItem = FRAMED_GALLERY.find(i => i.id === 'window-graphic') || FRAMED_GALLERY[6];

  // Determine current day of week to highlight active hours
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysOfWeek[new Date().getDay()];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Direct WhatsApp message generation
    const text = encodeURIComponent(
      `Hi JV Barbershop, this is ${formData.name} (${formData.phone}). ${formData.message || 'I have a question regarding your services/availability.'}`
    );
    window.open(`https://wa.me/18182516639?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Immersive Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-zinc-600" />
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-semibold">
            Visit & Connect
          </span>
          <div className="h-[1px] w-12 bg-zinc-600" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif text-zinc-100 tracking-tight mb-4">
          Location & <span className="italic text-zinc-500 font-serif">Hours.</span>
        </h2>
        <p className="text-zinc-400 max-w-xl text-base leading-relaxed">
          Walk into our shop on Saticoy Street in Reseda or reach out directly via call or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        {/* Left Column: Contact Cards & Hours */}
        <div className="lg:col-span-7 space-y-8">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 bg-[#111111] border border-white/5 flex flex-col justify-between">
              <div>
                <MapPin className="w-6 h-6 text-zinc-400 mb-3" />
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">
                  Shop Address
                </h4>
                <p className="text-zinc-200 text-sm font-medium">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-zinc-500 text-xs mt-1">
                  {BUSINESS_INFO.neighborhood}
                </p>
              </div>
              <a
                href={BUSINESS_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
              >
                <span>Google Maps Route</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 bg-[#111111] border border-white/5 flex flex-col justify-between">
              <div>
                <Phone className="w-6 h-6 text-zinc-400 mb-3" />
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">
                  Phone & WhatsApp
                </h4>
                <p className="text-zinc-200 text-sm font-medium">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
                <p className="text-emerald-400 text-xs mt-1">
                  WhatsApp Available 24/7
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                >
                  Call Now
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-emerald-400 hover:underline"
                >
                  Message
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#111111] border border-blue-900/30 flex flex-col justify-between">
              <div>
                <Facebook className="w-6 h-6 text-[#1877F2] mb-3" />
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">
                  Facebook & Media
                </h4>
                <p className="text-zinc-200 text-sm font-medium">
                  JV Barbershop Photos
                </p>
                <p className="text-blue-400/90 text-xs mt-1">
                  Live Cuts & Social Gallery
                </p>
              </div>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors font-mono"
              >
                <span>View Facebook Photos</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Business Hours Table */}
          <div className="p-6 sm:p-8 bg-[#111111] border border-white/5">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-zinc-400" />
                <h4 className="text-base font-serif text-zinc-100 uppercase tracking-wider">
                  Weekly Operating Schedule
                </h4>
              </div>
              <span className="text-xs uppercase tracking-widest px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300">
                Walk-Ins Welcome
              </span>
            </div>

            <div className="space-y-2">
              {BUSINESS_HOURS.map((slot) => {
                const isToday = slot.day === todayName;
                return (
                  <div
                    key={slot.day}
                    className={`flex justify-between items-center py-2.5 px-4 rounded text-xs tracking-wider transition-colors ${
                      isToday
                        ? 'bg-zinc-800/80 border border-zinc-600 text-white font-semibold'
                        : 'text-zinc-400 hover:bg-zinc-900/40'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      )}
                      {slot.day}
                      {isToday && (
                        <span className="text-[10px] text-emerald-400 uppercase font-mono tracking-normal">
                          (Today)
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-zinc-200">{slot.hours}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-500 flex justify-between">
              <span>* Sunday closing at 2:00 PM</span>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white underline"
              >
                Facebook: jv.barbershop.2025
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Quick Connect Form */}
        <div className="lg:col-span-5">
          <div className="p-8 bg-[#111111] border border-white/5 h-full flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1 block">
                Quick Dispatch
              </span>
              <h3 className="text-2xl font-serif text-zinc-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Have a question about cut times, group appointments, or barber availability? Send us a quick note directly via WhatsApp.
              </p>

              {sent ? (
                <div className="p-6 bg-zinc-900 border border-emerald-500/30 text-center rounded space-y-3">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-semibold text-white">Message Dispatched</h4>
                  <p className="text-xs text-zinc-400">
                    WhatsApp has been opened with your inquiry. We look forward to seeing you in the chair!
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-xs text-zinc-300 underline uppercase tracking-wider"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#18181b] border border-zinc-700/80 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(818) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#18181b] border border-zinc-700/80 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                      Note or Desired Service
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. Looking for a skin fade and beard trim this afternoon..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#18181b] border border-zinc-700/80 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-zinc-200 text-black font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-800/80 mt-6 text-center text-zinc-500 text-[11px]">
              Or call us directly at <span className="text-zinc-300 font-mono">(818) 251-6639</span>
            </div>
          </div>
        </div>
      </div>

      {/* Framed Signage Verification Display */}
      <div className="mt-12 p-8 sm:p-10 bg-[#111111] border border-white/5 rounded-sm">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#dfc382] font-semibold font-mono">
            Physical Landmark & Signage Verification
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-zinc-100 mt-1">
            Look for These Signs When You Arrive
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
            Located at 18436 Saticoy St in Reseda. Look for the classic barber pole decals and official schedule plate at our entrance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FramedPhoto
            src={timingItem.image}
            alt={timingItem.title}
            title={timingItem.title}
            subtitle={timingItem.subtitle}
            location={timingItem.plaqueLocation}
            variant="silver"
            aspect="aspect-[4/3]"
            onClick={() => setLightboxItem(timingItem)}
          />

          <FramedPhoto
            src={windowItem.image}
            alt={windowItem.title}
            title={windowItem.title}
            subtitle={windowItem.subtitle}
            location={windowItem.plaqueLocation}
            variant="brass"
            aspect="aspect-[4/3]"
            onClick={() => setLightboxItem(windowItem)}
          />
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

