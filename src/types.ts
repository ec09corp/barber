export interface Service {
  id: string;
  number: string;
  name: string;
  description: string;
  duration: string; // e.g., "45 min"
  durationMinutes: number;
  price: number; // e.g., 15
  currency: string; // e.g., "USD"
  image: string;
  popular?: boolean;
}

export interface Barber {
  id: string;
  number: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  photo: string;
  instagram?: string;
  rating?: number;
}

export interface Promotion {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  currency: string;
  tag: string;
  description: string;
  perks: string[];
  serviceIdToBook?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Todos" | "Skin Fades" | "Tapers" | "Barbas" | "Cortes Clásicos" | "Studio & Interior";
  image: string;
  aspect: "tall" | "wide" | "square";
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  isDemoNotice: string;
}

export interface BrandPillar {
  number: string;
  title: string;
  phrase: string;
  detail: string;
}

export interface ScheduleDay {
  days: string;
  hours: string;
}

export interface StudioConfig {
  name: string;
  tagline: string;
  subtitle: string;
  badge: string;
  contact: {
    whatsappNumber: string; // e.g., "34600000000" or international format without '+'
    whatsappDisplay: string;
    defaultWhatsappMessage: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    address: string;
    addressNote: string;
    schedule: ScheduleDay[];
    mapsUrl: string;
  };
  social: {
    instagram: string;
    tiktok: string;
    whatsapp: string;
  };
  services: Service[];
  featuredExperience: {
    title: string;
    subtitle: string;
    pillars: string[];
    duration: string;
    price: number;
    currency: string;
    description: string;
    image: string;
  };
  barbers: Barber[];
  promotions: Promotion[];
  brandPillars: BrandPillar[];
  testimonials: Testimonial[];
  gallery: GalleryItem[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  barberId: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  notes?: string;
}
