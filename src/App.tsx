import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { BrandPillars } from "./components/BrandPillars";
import { ServicesSection } from "./components/ServicesSection";
import { FeaturedExperience } from "./components/FeaturedExperience";
import { BarbersSection } from "./components/BarbersSection";
import { NoirSpecials } from "./components/NoirSpecials";
import { GallerySection } from "./components/GallerySection";
import { BookingSection } from "./components/BookingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedBarberId, setSelectedBarberId] = useState<string | undefined>(undefined);

  const scrollToBooking = (serviceId?: string, barberId?: string) => {
    if (serviceId) setSelectedServiceId(serviceId);
    if (barberId) setSelectedBarberId(barberId);

    const bookingEl = document.getElementById("reservas");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f3ef] selection:bg-[#c5a059] selection:text-[#09090b] overflow-x-hidden font-sans">
      {/* 05. Header */}
      <Header onOpenBooking={(srvId, barbId) => scrollToBooking(srvId, barbId)} />

      <main>
        {/* 04. Hero */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* 06. Intro Section */}
        <IntroSection />

        {/* 15. Experiencia / Pilares de Marca */}
        <BrandPillars />

        {/* 07. Servicios */}
        <ServicesSection onBookService={(serviceId) => scrollToBooking(serviceId)} />

        {/* 08. Servicio Destacado (The Noir Experience) */}
        <FeaturedExperience onBookExperience={() => scrollToBooking("srv-premium-session")} />

        {/* 09. Barberos */}
        <BarbersSection onSelectBarber={(barberId) => scrollToBooking(undefined, barberId)} />

        {/* 14. Promociones (Noir Specials) */}
        <NoirSpecials onClaimPromotion={(serviceId) => scrollToBooking(serviceId)} />

        {/* 12. Galería Editorial */}
        <GallerySection onBookStyle={() => scrollToBooking()} />

        {/* 10. Reservas (Integrated Booking System) */}
        <BookingSection
          initialServiceId={selectedServiceId}
          initialBarberId={selectedBarberId}
        />

        {/* 13. Testimonios */}
        <TestimonialsSection />

        {/* 16. Ubicación & Contacto */}
        <LocationSection />
      </main>

      {/* 17. Footer */}
      <Footer />

      {/* 11. WhatsApp Flotante */}
      <FloatingWhatsApp />
    </div>
  );
}
