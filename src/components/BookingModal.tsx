import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/barbershopData';
import { ServiceItem } from '../types';
import { X, Calendar, Clock, Scissors, Check, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [chosenService, setChosenService] = useState<string>(
    selectedService?.id || SERVICES[0].id
  );

  // Generate next 7 dates
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthDay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const isSunday = d.getDay() === 0;
    const isoString = d.toISOString().split('T')[0];
    return { dayName, monthDay, isSunday, isoString };
  });

  const [selectedDate, setSelectedDate] = useState<string>(dates[0].isoString);

  // Derive time slots based on whether selected date is Sunday (9am - 2pm) or Mon-Sat (9am - 7pm)
  const isSelectedSunday = (() => {
    const d = new Date(selectedDate + 'T00:00:00');
    return d.getDay() === 0;
  })();

  const weekdaySlots = [
    '9:00 AM', '9:45 AM', '10:30 AM', '11:15 AM', '12:00 PM',
    '1:00 PM', '1:45 PM', '2:30 PM', '3:15 PM', '4:00 PM',
    '4:45 PM', '5:30 PM', '6:15 PM'
  ];

  const sundaySlots = [
    '9:00 AM', '9:45 AM', '10:30 AM', '11:15 AM', '12:00 PM', '1:00 PM', '1:30 PM'
  ];

  const availableSlots = isSelectedSunday ? sundaySlots : weekdaySlots;
  const [selectedTime, setSelectedTime] = useState<string>(availableSlots[1] || availableSlots[0]);

  // Client Details
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const currentServiceObj = SERVICES.find(s => s.id === chosenService) || SERVICES[0];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    setConfirmed(true);
  };

  const handleWhatsAppDispatch = () => {
    const msg = encodeURIComponent(
      `Hello JV Barbershop! I would like to confirm my appointment:\n\n` +
      `👤 Client: ${clientName}\n` +
      `📞 Phone: ${clientPhone}\n` +
      `💈 Service: ${currentServiceObj.name} ($${currentServiceObj.price})\n` +
      `📅 Date: ${selectedDate}\n` +
      `⏰ Time: ${selectedTime}\n` +
      (notes ? `📝 Note: ${notes}\n\n` : '\n') +
      `Please let me know if this slot is locked in. Thank you!`
    );
    window.open(`https://wa.me/18182516639?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-zinc-700 shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 bg-[#161619]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-zinc-500 bg-zinc-900 flex items-center justify-center">
              <span className="font-serif italic text-sm text-zinc-200">JV</span>
            </div>
            <div>
              <h3 className="text-base font-serif text-white uppercase tracking-wider">
                Appointment Reservation
              </h3>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
                18436 Saticoy St, Reseda CA
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {confirmed ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-zinc-900 border border-zinc-500 rounded-full flex items-center justify-center mx-auto text-zinc-100">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                  Reservation Created
                </span>
                <h3 className="text-2xl font-serif text-zinc-100 mt-1">
                  We look forward to seeing you, {clientName}!
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto mt-2">
                  Your spot for <strong className="text-white">{currentServiceObj.name}</strong> on <strong className="text-white">{selectedDate}</strong> at <strong className="text-white">{selectedTime}</strong> has been prepared.
                </p>
              </div>

              <div className="p-5 bg-zinc-900/90 border border-zinc-800 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Service:</span>
                  <span className="text-zinc-200 font-semibold">{currentServiceObj.name} (${currentServiceObj.price})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Location:</span>
                  <span className="text-zinc-200">18436 Saticoy St, Reseda</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Policy:</span>
                  <span className="text-emerald-400">Walk-Ins & Appts Guaranteed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleWhatsAppDispatch}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm Instant via WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 border border-zinc-700 text-zinc-300 hover:text-white text-xs tracking-widest uppercase transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-6">
              {/* Step 1: Service */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-2">
                  1. Select Barber Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setChosenService(s.id)}
                      className={`p-3 text-left border rounded-sm transition-all flex justify-between items-center ${
                        chosenService === s.id
                          ? 'bg-zinc-800 border-zinc-400 text-white'
                          : 'bg-[#18181b] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-medium text-zinc-200">{s.name}</p>
                        <p className="text-[10px] text-zinc-500">{s.duration}</p>
                      </div>
                      <span className="text-sm font-serif font-semibold text-zinc-100">${s.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-2">
                  2. Choose Preferred Date
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                  {dates.map((d) => (
                    <button
                      key={d.isoString}
                      type="button"
                      onClick={() => {
                        setSelectedDate(d.isoString);
                        // reset time slot if switching to Sunday and current slot exceeds 1:30 PM
                        if (d.isSunday) {
                          setSelectedTime('11:15 AM');
                        }
                      }}
                      className={`p-2 text-center border rounded-sm transition-all ${
                        selectedDate === d.isoString
                          ? 'bg-zinc-200 text-black border-white font-bold'
                          : 'bg-[#18181b] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <p className="text-[9px] uppercase tracking-wider">{d.dayName}</p>
                      <p className="text-xs font-semibold mt-0.5">{d.monthDay.split(' ')[1]}</p>
                      {d.isSunday && (
                        <span className="text-[8px] block text-amber-400 uppercase font-mono">Sun</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Time Slot */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                    3. Select Time Window
                  </label>
                  {isSelectedSunday && (
                    <span className="text-[10px] text-amber-400 font-mono">Sunday Hours: 9 AM - 2 PM</span>
                  )}
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-40 overflow-y-auto pr-1">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-3 text-xs font-mono rounded border transition-all ${
                        selectedTime === slot
                          ? 'bg-zinc-200 text-black border-white font-bold'
                          : 'bg-[#18181b] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Info */}
              <div className="pt-2 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus R."
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#18181b] border border-zinc-700/80 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(818) 000-0000"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-[#18181b] border border-zinc-700/80 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Style Notes or Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Skin fade with razor hard part, beard line-up"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#18181b] border border-zinc-700/80 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-400">Standard cut rate:</p>
                  <p className="text-xl font-serif font-bold text-white">
                    ${currentServiceObj.price}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 text-zinc-400 hover:text-white text-xs uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-zinc-100 text-black font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-md active:scale-95"
                  >
                    Reserve Appointment
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
