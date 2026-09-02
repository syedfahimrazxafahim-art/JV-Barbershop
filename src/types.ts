export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuts' | 'shaves' | 'beard' | 'packages';
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
}

export interface CutGalleryItem {
  id: string;
  title: string;
  category: 'fades' | 'tapers' | 'beard' | 'shop';
  image: string;
  description: string;
  barberTip: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  cutType: string;
}

export type PageTab = 'home' | 'services' | 'barbers' | 'gallery' | 'about' | 'booking' | 'contact';
