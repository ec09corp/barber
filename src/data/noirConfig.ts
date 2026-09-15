import { StudioConfig } from "../types";

/**
 * CONFIGURACIÓN CENTRAL — NOIR BARBER STUDIO
 * ===============================================================
 * Todas las variables, textos, teléfonos, horarios, servicios,
 * precios y barberos están centralizados aquí para facilitar
 * su modificación por parte del cliente o la agencia.
 * ===============================================================
 */

export const noirConfig: StudioConfig = {
  name: "NOIR BARBER STUDIO",
  tagline: "PRECISIÓN. ESTILO. ACTITUD.",
  subtitle: "Cortes diseñados para definir tu estilo.",
  badge: "STUDIO PRIVADO • EST. 2024",

  contact: {
    // Número centralizado de WhatsApp (formato internacional sin '+' ni espacios)
    // Cambia este número para apuntar directamente al WhatsApp del negocio:
    whatsappNumber: "34612345678",
    whatsappDisplay: "+34 612 34 56 78",
    defaultWhatsappMessage: "Hola, quiero reservar una cita en Noir Barber Studio.",
    phone: "+34912345678",
    phoneDisplay: "+34 912 34 56 78",
    email: "citas@noirbarberstudio.com",
    // Placeholder solicitado: "Dirección del cliente"
    address: "Dirección del cliente",
    addressNote: "Zona Prime • Parking disponible • Acceso exclusivo con cita",
    schedule: [
      { days: "Lunes — Sábado", hours: "10:00 — 20:00" },
      { days: "Domingo", hours: "11:00 — 16:00" },
    ],
    mapsUrl: "https://maps.google.com/?q=Noir+Barber+Studio",
  },

  social: {
    instagram: "https://instagram.com/noirbarberstudio",
    tiktok: "https://tiktok.com/@noirbarberstudio",
    whatsapp: "https://wa.me/34612345678",
  },

  // 07. SERVICIOS (Precios y descripciones configurables en un solo punto)
  services: [
    {
      id: "srv-skin-fade",
      number: "01",
      name: "SKIN FADE",
      description: "Fade realizado con precisión y acabado detallado a navaja tradicional.",
      duration: "45 min",
      durationMinutes: 45,
      price: 15,
      currency: "USD",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "srv-classic-cut",
      number: "02",
      name: "CLASSIC CUT",
      description: "Corte clásico personalizado con tijera, secado y styling de autor.",
      duration: "40 min",
      durationMinutes: 40,
      price: 12,
      currency: "USD",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "srv-beard-design",
      number: "03",
      name: "BEARD DESIGN",
      description: "Perfilado y diseño completo de barba, toalla caliente y aceites botánicos.",
      duration: "30 min",
      durationMinutes: 30,
      price: 10,
      currency: "USD",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "srv-cut-beard",
      number: "04",
      name: "CUT + BEARD",
      description: "Corte completo y arquitectura de barba en una sesión integral coordinada.",
      duration: "60 min",
      durationMinutes: 60,
      price: 22,
      currency: "USD",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "srv-kids-cut",
      number: "05",
      name: "KIDS CUT",
      description: "Corte infantil con técnica adaptada, paciencia y acabado profesional.",
      duration: "35 min",
      durationMinutes: 35,
      price: 10,
      currency: "USD",
      image: "https://images.unsplash.com/photo-1517832606589-7629c3395909?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "srv-premium-session",
      number: "06",
      name: "PREMIUM SESSION",
      description: "Corte, barba, lavado revitalizante, masaje capilar y acabado premium con fijación mate.",
      duration: "75 min",
      durationMinutes: 75,
      price: 30,
      currency: "USD",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
      popular: true,
    },
  ],

  // 08. SERVICIO DESTACADO (THE NOIR EXPERIENCE)
  featuredExperience: {
    title: "THE NOIR EXPERIENCE",
    subtitle: "El estándar definitivo de barbería contemporánea",
    pillars: ["CORTE", "BARBA", "LAVADO", "ACABADO"],
    duration: "75 MIN",
    price: 30,
    currency: "USD",
    description: "Una inmersión sensorial completa: diagnóstico morfológico, técnica de corte personalizada, diseño y perfilado milimétrico de barba con toalla infusionada, lavado con productos de cuidado selecto y peinado final de pasarela.",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200&auto=format&fit=crop",
  },

  // 09. BARBEROS
  barbers: [
    {
      id: "barber-alex",
      number: "01",
      name: "ALEX",
      role: "Master Barber",
      specialty: "Skin fades y cortes modernos.",
      bio: "Especialista en degradados milimétricos y texturas urbanas. Más de 8 años esculpiendo identidades nítidas.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      instagram: "@alex.noirbarber",
      rating: 4.9,
    },
    {
      id: "barber-daniel",
      number: "02",
      name: "DANIEL",
      role: "Senior Barber",
      specialty: "Cortes clásicos y barba.",
      bio: "Maestro en navaja clásica, taper tradicional y arquitectura de barbas tupidas con tratamiento térmico.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      instagram: "@daniel.noirbarber",
      rating: 5.0,
    },
    {
      id: "barber-marcos",
      number: "03",
      name: "MARCOS",
      role: "Barber",
      specialty: "Diseños y estilos modernos.",
      bio: "Creatividad visual, freestyle, líneas geométricas y tendencias de vanguardia adaptadas a tu perfil.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      instagram: "@marcos.noirbarber",
      rating: 4.9,
    },
  ],

  // 14. PROMOCIONES (NOIR SPECIALS)
  promotions: [
    {
      id: "promo-corte-barba",
      title: "CORTE + BARBA",
      subtitle: "Combinación icónica de precisión",
      price: 22,
      currency: "USD",
      tag: "MÁS POPULAR",
      description: "Servicio dual coordinado con lavado rápido y acabado en mate.",
      perks: ["Corte a tijera o máquina", "Perfilado nítido a navaja", "Loción refrescante de cierre"],
      serviceIdToBook: "srv-cut-beard",
    },
    {
      id: "promo-premium-session",
      title: "PREMIUM SESSION",
      subtitle: "La experiencia completa de autor",
      price: 30,
      currency: "USD",
      tag: "VIP EXPERIENCE",
      description: "Tratamiento completo de cabello, barba y relajación de 75 minutos.",
      perks: ["Corte, barba y lavado", "Toalla caliente con vapor", "Masaje craneal & peinado"],
      serviceIdToBook: "srv-premium-session",
    },
    {
      id: "promo-weekday-special",
      title: "WEEKDAY SPECIAL",
      subtitle: "Tu mantenimiento entre semana",
      price: 18,
      currency: "USD",
      tag: "LUNES A JUEVES",
      description: "Corte de mantenimiento y arreglo express de contornos de 11:00 a 16:00.",
      perks: ["Corte rápido y limpio", "Bebida de cortesía", "Agilidad sin esperas"],
      serviceIdToBook: "srv-classic-cut",
    },
  ],

  // 15. EXPERIENCIA (PILAREs DE MARCA)
  brandPillars: [
    {
      number: "01",
      title: "PRECISIÓN",
      phrase: "Cada detalle importa.",
      detail: "Desde la línea más sutil del fade hasta la simetría milimétrica de tu barba. No improvisamos, calibramos.",
    },
    {
      number: "02",
      title: "TÉCNICA",
      phrase: "Tradición y tendencias en equilibrio.",
      detail: "Dominamos el filo clásico de navaja recta con las técnicas de textura y degradado más vanguardistas del mundo.",
    },
    {
      number: "03",
      title: "ESTILO",
      phrase: "Tu imagen habla antes que tú.",
      detail: "Diseñamos un corte que respeta la morfología de tu rostro, tu tipo de cabello y la proyección de tu personalidad.",
    },
  ],

  // 13. TESTIMONIOS (DEMOSTRATIVOS)
  testimonials: [
    {
      id: "test-1",
      name: "Carlos Méndez",
      service: "The Noir Experience",
      rating: 5,
      comment: "La atención al detalle es insuperable. El fade más limpio que me han hecho en años y un ambiente donde realmente desconectas.",
      date: "Hace 3 días",
      isDemoNotice: "NOTA: Testimonio demostrativo para el prototipo. Reemplazar por reseña verificada del cliente antes del despliegue final.",
    },
    {
      id: "test-2",
      name: "Javier Rivas",
      service: "Beard Design & Cut",
      rating: 5,
      comment: "Daniel entendió exactamente lo que buscaba con mi barba. Simetría perfecta y productos con un aroma impecable.",
      date: "Hace 1 semana",
      isDemoNotice: "NOTA: Testimonio demostrativo para el prototipo. Reemplazar por reseña verificada del cliente antes del despliegue final.",
    },
    {
      id: "test-3",
      name: "Alejandro Silva",
      service: "Skin Fade",
      rating: 5,
      comment: "Puntualidad británica, sillón comodísimo y una precisión quirúrgica. Noir Barber Studio está a otro nivel en la ciudad.",
      date: "Hace 2 semanas",
      isDemoNotice: "NOTA: Testimonio demostrativo para el prototipo. Reemplazar por reseña verificada del cliente antes del despliegue final.",
    },
  ],

  // 12. GALERÍA EDITORIAL
  gallery: [
    {
      id: "gal-1",
      title: "High Skin Fade nítido",
      category: "Skin Fades",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=900&auto=format&fit=crop",
      aspect: "tall",
      description: "Degradado a cero con contraste marcado y textura superior.",
    },
    {
      id: "gal-2",
      title: "Atmósfera Studio & Sillón Vintage",
      category: "Studio & Interior",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
      aspect: "wide",
      description: "Espacio privado diseñado con iluminación cenital y cuero negro.",
    },
    {
      id: "gal-3",
      title: "Escultura de Barba y Cuello",
      category: "Barbas",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
      aspect: "square",
      description: "Definición geométrica con navaja y bálsamo nutritivo.",
    },
    {
      id: "gal-4",
      title: "Corte Clásico Pompadour",
      category: "Cortes Clásicos",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=900&auto=format&fit=crop",
      aspect: "tall",
      description: "Elegancia atemporal con separación nítida de raya lateral.",
    },
    {
      id: "gal-5",
      title: "Herramientas de Precisión",
      category: "Studio & Interior",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
      aspect: "square",
      description: "Cuchillas desinfectadas y tijeras forjadas en acero japonés.",
    },
    {
      id: "gal-6",
      title: "Mid Taper Fade Moderno",
      category: "Tapers",
      image: "https://images.unsplash.com/photo-1517832606589-7629c3395909?q=80&w=900&auto=format&fit=crop",
      aspect: "tall",
      description: "Transición sutil en patillas y nuca conservando volumen natural.",
    },
    {
      id: "gal-7",
      title: "Ritual Toalla Caliente & Acabado",
      category: "Studio & Interior",
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200&auto=format&fit=crop",
      aspect: "wide",
      description: "Relajación térmica que abre los poros para el mejor afeitado.",
    },
    {
      id: "gal-8",
      title: "Detalle y Diseño Freestyle",
      category: "Barbas",
      image: "https://images.unsplash.com/photo-1593702295094-ada75bf38f83?q=80&w=800&auto=format&fit=crop",
      aspect: "square",
      description: "Trazo limpio y ángulos contemporáneos.",
    },
  ],
};
