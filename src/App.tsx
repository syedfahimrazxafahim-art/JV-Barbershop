import React, { useState, useEffect } from 'react';
import { PageTab, ServiceItem } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesView } from './components/ServicesView';
import { BarbersView } from './components/BarbersView';
import { GalleryView } from './components/GalleryView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FramedPhoto } from './components/FramedPhoto';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { BUSINESS_INFO, IMAGES, REVIEWS, FRAMED_GALLERY, FramedImageItem } from './data/barbershopData';
import { Phone, MessageCircle, Calendar, ArrowUpRight, Scissors, Star, MapPin, Eye } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<FramedImageItem | null>(null);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedServiceForBooking(service);
    } else {
      setSelectedServiceForBooking(null);
    }
    setIsBookingOpen(true);
  };

  const homeFramedItems = [
    FRAMED_GALLERY.find(i => i.id === 'master-fade-chair') || FRAMED_GALLERY[0],
    FRAMED_GALLERY.find(i => i.id === 'price-board-card') || FRAMED_GALLERY[1],
    FRAMED_GALLERY.find(i => i.id === 'grand-opening-shop') || FRAMED_GALLERY[4],
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans">
      {/* Header with Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area based on selected Tab */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <div>
            {/* The Immersive UI Hero & 4-column Service Ribbon */}
            <HeroSection
              onNavigate={setCurrentTab}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Featured Transformation & Barbers Teaser */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="h-[1px] w-8 bg-zinc-600" />
                    <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-semibold">
                      Precision Portfolio
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-serif text-zinc-100">
                    Signature Cuts & <span className="italic text-zinc-500">Tapers.</span>
                  </h2>
                </div>

                <button
                  onClick={() => setCurrentTab('barbers')}
                  className="px-6 py-2.5 border border-zinc-700 text-zinc-300 text-xs uppercase tracking-widest hover:bg-zinc-200 hover:text-black hover:border-zinc-200 transition-all font-medium flex items-center gap-2"
                >
                  <span>Meet The Barbers</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3-Piece Framed Exhibition Highlight */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {homeFramedItems.map((item) => (
                  <FramedPhoto
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    location={item.plaqueLocation}
                    variant={item.frameStyle}
                    aspect="aspect-[4/3]"
                    onClick={() => setSelectedLightboxItem(item)}
                  />
                ))}
              </div>

              {/* Action link to view full gallery */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentTab('gallery')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#b89758]/60 bg-[#171410] hover:bg-[#231e18] text-[#dfc382] text-xs font-mono uppercase tracking-widest transition-all rounded-[2px]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View All 8 Framed Official Works</span>
                </button>
              </div>
            </section>

            {/* Quick Testimonials Bar */}
            <section className="py-16 bg-[#111111] border-t border-b border-white/5 px-6 md:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                  <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-semibold mb-1">
                    Client Acclaim
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif text-zinc-200">
                    Trusted Across The San Fernando Valley
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {REVIEWS.map((rev) => (
                    <div key={rev.id} className="p-6 bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 text-zinc-300 mb-3">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-zinc-300 text-zinc-300" />
                          ))}
                        </div>
                        <p className="text-zinc-300 text-xs sm:text-sm italic leading-relaxed mb-4">
                          "{rev.comment}"
                        </p>
                      </div>
                      <div className="text-xs pt-3 border-t border-zinc-800/60 flex justify-between items-center text-zinc-500">
                        <span className="font-semibold text-zinc-300">{rev.author}</span>
                        <span>{rev.cutType}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Callout to Book / Visit */}
            <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
              <div className="p-8 sm:p-14 bg-gradient-to-b from-[#161618] to-[#0e0e10] border border-zinc-700/60 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />
                
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-semibold mb-3 block">
                  Walk-Ins Welcome • Appointments Available
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif text-zinc-100 mb-4">
                  Experience The JV Difference.
                </h2>
                <p className="text-zinc-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed mb-8">
                  Located at 18436 Saticoy St in Reseda. Stop by anytime during our operating hours, or lock in your chair time in advance.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4">
                  <button
                    onClick={() => handleOpenBooking()}
                    className="px-8 py-3.5 bg-zinc-100 text-black font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-lg active:scale-95"
                  >
                    Reserve An Appointment
                  </button>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 border border-emerald-500/50 bg-emerald-950/20 text-emerald-300 font-medium text-xs tracking-widest uppercase hover:bg-emerald-900/40 transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    WhatsApp Direct
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-6 py-3.5 border border-zinc-700 text-zinc-300 font-medium text-xs tracking-widest uppercase hover:border-zinc-400 hover:text-white transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call (818) 251-6639
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentTab === 'services' && (
          <ServicesView
            onSelectServiceForBooking={(service) => handleOpenBooking(service)}
          />
        )}

        {currentTab === 'barbers' && (
          <BarbersView
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentTab === 'gallery' && (
          <GalleryView
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Floating Bottom Quick Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-lg border-t border-zinc-800 px-4 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-2 px-2 bg-zinc-900 border border-zinc-700 text-zinc-200 text-[11px] uppercase tracking-wider font-semibold rounded flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-zinc-400" />
          Call
        </a>
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-2 bg-emerald-950/40 border border-emerald-600/50 text-emerald-300 text-[11px] uppercase tracking-wider font-semibold rounded flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          WhatsApp
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2 px-2 bg-zinc-100 text-black text-[11px] uppercase tracking-wider font-bold rounded flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          Book
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedServiceForBooking}
      />

      {/* Interactive Image Lightbox Modal */}
      <ImageLightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
        onBookNow={() => handleOpenBooking()}
      />
    </div>
  );
}
