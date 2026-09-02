import React from 'react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { JVLogo } from './JVLogo';
import { PageTab } from '../types';
import { MapPin, Phone, MessageCircle, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-black border-t border-white/5 text-zinc-500 text-xs">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="space-y-4">
          <JVLogo size="md" />
          <p className="text-zinc-400 text-xs leading-relaxed pt-2">
            A luxury vintage barbershop sanctuary in Los Angeles. Precision skin fades, tapers, beard grooming, and hot towel treatments.
          </p>
          <p className="text-[11px] text-zinc-500 tracking-wider uppercase">
            Clean Cuts • Sharp Styles • Real Confidence
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs tracking-wider">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="hover:text-white transition-colors"
              >
                Services & Pricing ($35)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('barbers')}
                className="hover:text-white transition-colors"
              >
                The Artists Behind The Chair
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('gallery')}
                className="hover:text-white transition-colors"
              >
                Photo Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-white transition-colors"
              >
                About Our Shop
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition-colors"
              >
                Location & Hours
              </button>
            </li>
          </ul>
        </div>

        {/* Location & Hours */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-widest">
            Shop Hours
          </h4>
          <div className="text-xs space-y-1.5 text-zinc-400 font-mono">
            <p className="flex justify-between">
              <span>Mon – Sat:</span>
              <span className="text-zinc-200">9:00 AM – 7:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Sunday:</span>
              <span className="text-zinc-200">9:00 AM – 2:00 PM</span>
            </p>
          </div>
          <div className="pt-2 text-zinc-400 text-xs">
            <p className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              18436 Saticoy St, Reseda, CA
            </p>
            <p className="text-[11px] text-zinc-500 mt-1">Los Angeles, CA 91335</p>
          </div>
        </div>

        {/* Direct Contact & Action */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-widest">
            Get In The Chair
          </h4>
          <p className="text-xs text-zinc-400">
            Walk-ins are always welcomed during all operating hours.
          </p>
          <button
            onClick={onOpenBooking}
            className="w-full py-2.5 border border-zinc-500 text-zinc-200 hover:bg-zinc-200 hover:text-black transition-all tracking-widest uppercase font-semibold text-xs text-center block"
          >
            Book Appointment
          </button>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 border border-emerald-600/40 text-emerald-400 hover:bg-emerald-950/40 text-xs tracking-wider uppercase text-center block transition-all"
          >
            WhatsApp Instant Chat
          </a>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 border border-blue-900/50 bg-blue-950/20 hover:bg-blue-900/40 text-blue-300 text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all"
          >
            <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>Facebook Photos</span>
          </a>
        </div>
      </div>

      {/* Strict Bottom Strip from Immersive UI Spec */}
      <div className="py-6 px-6 md:px-12 bg-black border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-widest text-zinc-600 uppercase gap-4">
        <div>
          © {new Date().getFullYear()} JV Barbershop • Crafted for Excellence • 18436 Saticoy St, Reseda, CA
        </div>
        <div className="flex flex-wrap gap-6 text-zinc-500 items-center">
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>Facebook Photos</span>
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
          <a
            href={BUSINESS_INFO.mapsQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Google Maps</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
