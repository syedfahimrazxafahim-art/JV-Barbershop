import { ServiceItem, CutGalleryItem, ReviewItem } from '../types';

export const UPLOADED_IMAGES = {
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390264/LOGO45.jpg',
  servicePoster: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390316/service_and_contact.png',
  timingSign: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390342/timing.jpg',
  shopClosing: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390278/shop_closing.jpg',
  shopGrandOpening: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390271/shop.jpg',
  wallSign3D: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390327/3.jpg',
  haircutFadeClient: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390335/1.jpg',
  windowGraphic: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390321/5.jpg',
  priceBoardCard: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788390319/12.jpg',
};

// Aliases for compatibility
export const IMAGES = {
  interior: UPLOADED_IMAGES.wallSign3D,
  skinFade: UPLOADED_IMAGES.haircutFadeClient,
  curlyCrop: UPLOADED_IMAGES.priceBoardCard,
  classicTaper: UPLOADED_IMAGES.servicePoster,
  storefront: UPLOADED_IMAGES.shopGrandOpening,
};

export const BUSINESS_INFO = {
  name: 'JV Barbershop',
  tagline: 'Clean Cuts. Sharp Styles. Real Confidence.',
  establishedYear: '2025',
  address: '18436 Saticoy St, Reseda, CA 91335',
  cityState: 'Los Angeles, California',
  neighborhood: 'Reseda, San Fernando Valley',
  phoneDisplay: '+1 (818) 251-6639',
  phoneRaw: '+18182516639',
  whatsappUrl: 'https://wa.me/18182516639?text=Hi%20JV%20Barbershop%2C%20I%20would%20like%20to%20book%20an%20appointment',
  facebookUrl: 'https://www.facebook.com/jv.barbershop.2025/photos',
  instagramUrl: 'https://www.instagram.com',
  mapsQueryUrl: 'https://maps.google.com/?q=18436+Saticoy+St,+Reseda,+CA+91335',
  policy: 'Walk-Ins Welcome • Appointments Available',
};

export const BUSINESS_HOURS = [
  { day: 'Monday', hours: '9:00 AM - 7:00 PM', isOpen: true },
  { day: 'Tuesday', hours: '9:00 AM - 7:00 PM', isOpen: true },
  { day: 'Wednesday', hours: '9:00 AM - 7:00 PM', isOpen: true },
  { day: 'Thursday', hours: '9:00 AM - 7:00 PM', isOpen: true },
  { day: 'Friday', hours: '9:00 AM - 7:00 PM', isOpen: true },
  { day: 'Saturday', hours: '9:00 AM - 7:00 PM', isOpen: true },
  { day: 'Sunday', hours: '9:00 AM - 2:00 PM', isOpen: true },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'signature-haircut',
    name: 'Classic Precision Haircut',
    category: 'cuts',
    price: 35,
    duration: '35 min',
    description: 'Custom consultation, shear or clipper cut, neck shave, and clean matte finish styling.',
    popular: true,
  },
  {
    id: 'skin-drop-fade',
    name: 'Skin Fade & Drop Fade',
    category: 'cuts',
    price: 35,
    duration: '40 min',
    description: 'Razor-sharp gradient transition down to foil shaver skin level with immaculate blend.',
    popular: true,
  },
  {
    id: 'precision-taper',
    name: 'Precision Low/Mid Taper',
    category: 'cuts',
    price: 35,
    duration: '35 min',
    description: 'Clean temple and nape fade keeping natural hairline bulk and crisp outline.',
    popular: true,
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Sculpting',
    category: 'beard',
    price: 25,
    duration: '25 min',
    description: 'Beard length de-bulking, cheek line definition, warm conditioning oil, and straight razor line-up.',
    popular: false,
  },
  {
    id: 'hot-towel-shave',
    name: 'Traditional Hot Towel Shave',
    category: 'shaves',
    price: 30,
    duration: '30 min',
    description: 'Steam towel pre-shave treatment, lather massage, and single-edge straight razor finish.',
    popular: false,
  },
  {
    id: 'combo-package',
    name: 'The JV Signature Combo',
    category: 'packages',
    price: 55,
    duration: '55 min',
    description: 'Full custom haircut & fade of choice + detailed beard sculpt with hot towel and styling.',
    popular: true,
  },
  {
    id: 'line-up',
    name: 'Edge-Up & Hairline Refinement',
    category: 'cuts',
    price: 20,
    duration: '15 min',
    description: 'Crisp geometric perimeter touch-up with razor edge finish.',
    popular: false,
  },
];

export interface FramedImageItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'cuts' | 'shop' | 'signage' | 'menu';
  image: string;
  description: string;
  frameStyle: 'gold' | 'silver' | 'brass' | 'noir';
  plaqueLocation: string;
  barberTip?: string;
  aspect?: string;
}

export const FRAMED_GALLERY: FramedImageItem[] = [
  {
    id: 'client-fade',
    title: 'Master Precision Fade & Line-Up',
    subtitle: 'Live In-Chair Transformation',
    category: 'cuts',
    image: UPLOADED_IMAGES.haircutFadeClient,
    description: 'Client transformation completed in the chair at 18436 Saticoy St. Features a graduated mid-skin fade, crisp razor hard edge, and textured shear crown.',
    frameStyle: 'gold',
    plaqueLocation: '18436 Saticoy St, Reseda CA',
    barberTip: 'Maintained with lightweight matte clay and bi-weekly neck touch-ups.',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'wall-sign-3d',
    title: 'JV Barbershop 3D Wall Emblem',
    subtitle: 'Interior Architectural Installation',
    category: 'shop',
    image: UPLOADED_IMAGES.wallSign3D,
    description: 'Our iconic dimensional illuminated wall mark inside the Reseda salon. Exemplifies the modern luxury sanctuary crafted for client relaxation.',
    frameStyle: 'silver',
    plaqueLocation: 'Reseda Interior Station',
    barberTip: 'Custom back-lit metal fabrication greeting every client upon entry.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'price-board-12',
    title: 'Authentic $35 Cut & Services Board',
    subtitle: 'Original Barbershop Price Plaque',
    category: 'menu',
    image: UPLOADED_IMAGES.priceBoardCard,
    description: 'Handcrafted signature board outlining our honest $35 haircuts, tapers, skin fades, and artisan beard trims with traditional barber pole accents.',
    frameStyle: 'brass',
    plaqueLocation: 'Station Counter Display',
    barberTip: 'Flat $35 rate guarantees master-level scissor and razor artistry for all clients.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'service-poster',
    title: 'Master Service & Booking Roster',
    subtitle: 'Official Brand Specification',
    category: 'menu',
    image: UPLOADED_IMAGES.servicePoster,
    description: 'Comprehensive service overview highlighting straight razor beard detailing, haircuts, telephone dispatch (+1 818-251-6639), and social channels.',
    frameStyle: 'gold',
    plaqueLocation: 'Los Angeles Archive',
    barberTip: 'Walk-ins are welcomed 7 days a week, with direct WhatsApp coordination available.',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'grand-opening-shop',
    title: 'Grand Opening at 18436 Saticoy St',
    subtitle: 'Celebrating Our Valley Community',
    category: 'shop',
    image: UPLOADED_IMAGES.shopGrandOpening,
    description: 'The exterior of JV Barbershop dressed in festive balloon arches on opening day. Prominently showcasing the (818) 251-6639 hotline and welcoming storefront.',
    frameStyle: 'noir',
    plaqueLocation: '18436 Saticoy St Storefront',
    barberTip: 'Convenient street parking directly adjacent to the shop entrance.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'operating-timing',
    title: 'Operating Hours & Schedule Plaque',
    subtitle: 'Shop Window Vinyl Display',
    category: 'signage',
    image: UPLOADED_IMAGES.timingSign,
    description: 'Official schedule plate: Monday through Saturday 9:00 AM to 7:00 PM, and dedicated Sunday morning hours from 9:00 AM to 2:00 PM.',
    frameStyle: 'silver',
    plaqueLocation: 'Entrance Door Signage',
    barberTip: 'Sunday mornings are perfect for weekend event preparation and walk-ins.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'window-graphic',
    title: 'Official Window Insignia & Address',
    subtitle: 'Exterior Heritage Decal',
    category: 'signage',
    image: UPLOADED_IMAGES.windowGraphic,
    description: 'Window decal pairing traditional barber pole spirals with the official 18436 Saticoy St Reseda CA 91335 address and bold JV Barbershop mark.',
    frameStyle: 'brass',
    plaqueLocation: 'Front Display Window',
    barberTip: 'Easy landmark to spot when arriving along Saticoy Street.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'shop-closing-origin',
    title: 'The Foundation — Coming Soon Landmark',
    subtitle: 'Historic Storefront Origin',
    category: 'shop',
    image: UPLOADED_IMAGES.shopClosing,
    description: 'The historic roll-up door announcing the arrival of JV Barbershop to Reseda, marking the transformation of this space into a classic barbershop home.',
    frameStyle: 'noir',
    plaqueLocation: 'Reseda Historical Archive',
    barberTip: 'Built from passion for the craft, establishing a new grooming standard in 2025.',
    aspect: 'aspect-[4/3]',
  },
];

export const GALLERY_ITEMS: CutGalleryItem[] = FRAMED_GALLERY.map((item) => ({
  id: item.id,
  title: item.title,
  category: item.category === 'cuts' ? 'fades' : (item.category === 'menu' ? 'tapers' : 'shop'),
  image: item.image,
  description: item.description,
  barberTip: item.barberTip || 'Walk-ins welcome or reserve online.',
}));

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcus R.',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best fade in the Valley! JV took his time, razor work is flawless, and the $35 price is unbeatable for this level of luxury craft. Reseda has its new staple.',
    cutType: 'Skin Fade + Beard Sculpt'
  },
  {
    id: 'rev-2',
    author: 'Anthony D.',
    rating: 5,
    date: '1 month ago',
    comment: 'Walked in on a Sunday morning and was in the chair within 5 minutes. Cleanest taper fade I have gotten in Los Angeles. The matte black vintage vibe inside is top tier.',
    cutType: 'Precision Low Taper'
  },
  {
    id: 'rev-3',
    author: 'David K.',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Super sharp lineup and the hot towel shave was pure relaxation. Genuine attention to detail and honest pricing. Highly recommend booking early or messaging them on WhatsApp.',
    cutType: 'The JV Signature Combo'
  },
];
