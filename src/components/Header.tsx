import React, { useState } from 'react';
import { JVLogo } from './JVLogo';
import { PageTab } from '../types';
import { Phone, MessageCircle, Menu, X, Clock, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface HeaderProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; tab: PageTab }[] = [
    { label: 'Services', tab: 'services' },
    { label: 'Barbers', tab: 'barbers' },
    { label: 'Gallery', tab: 'gallery' },
    { label: 'About', tab: 'about' },
    { label: 'Contact', tab: 'contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      {/* Top micro bar with open hours and quick contact */}
      <div className="hidden md:flex justify-between items-center px-8 lg:px-12 py-1.5 text-[11px] text-zinc-400 border-b border-zinc-800/60 bg-black/40">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Walk-Ins Welcome & Appointments Available
          </span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-zinc-400" />
            Mon–Sat: 9AM–7PM | Sun: 9AM–2PM
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hover:text-zinc-200 transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            {BUSINESS_INFO.phoneDisplay}
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-zinc-300"
          >
            <MessageCircle className="w-3 h-3 text-emerald-400" />
            WhatsApp
          </a>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1 text-zinc-300"
            title="JV Barbershop Facebook Photos"
          >
            <Facebook className="w-3 h-3 text-[#1877F2]" />
            Facebook Photos
          </a>
        </div>
      </div>

      {/* Main Immersive UI Navigation Bar */}
      <nav className="flex justify-between items-center px-6 lg:px-12 py-5 bg-gradient-to-b from-black/80 to-transparent">
        {/* Brand Monogram & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none transition-transform active:scale-95"
        >
          <JVLogo size="md" />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs tracking-widest uppercase text-zinc-400 font-medium">
          {navLinks.map((link) => {
            const isActive = currentTab === link.tab;
            return (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`py-1 relative transition-colors ${
                  isActive ? 'text-white font-semibold' : 'hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-zinc-400" />
                )}
              </button>
            );
          })}

          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 border border-zinc-500 text-zinc-200 hover:bg-zinc-200 hover:text-black transition-all duration-200 font-semibold tracking-widest text-xs uppercase shadow-sm active:scale-95"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 border border-zinc-500 text-zinc-200 text-xs uppercase tracking-wider hover:bg-zinc-200 hover:text-black transition-all"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0f] border-b border-zinc-800 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3 text-xs tracking-widest uppercase font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 ${currentTab === 'home' ? 'text-white font-bold' : 'text-zinc-400'}`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`text-left py-2 ${currentTab === link.tab ? 'text-white font-bold' : 'text-zinc-400'}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-zinc-200 text-black font-semibold text-xs tracking-widest uppercase text-center hover:bg-white"
            >
              Book an Appointment
            </button>
            <div className="grid grid-cols-3 gap-2 text-center text-xs tracking-wider text-zinc-300">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-2.5 border border-zinc-700 bg-zinc-900/60 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 border border-zinc-700 bg-zinc-900/60 flex items-center justify-center gap-1.5 text-emerald-400"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 border border-blue-900/50 bg-blue-950/20 hover:bg-blue-900/30 flex items-center justify-center gap-1.5 text-blue-400"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2]" /> Photos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
