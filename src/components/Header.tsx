import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Phone, ArrowUpRight } from "lucide-react";
import { noirConfig } from "../data/noirConfig";

interface HeaderProps {
  onOpenBooking: (serviceId?: string, barberId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INICIO", href: "#hero" },
    { name: "SERVICIOS", href: "#servicios" },
    { name: "BARBEROS", href: "#barberos" },
    { name: "GALERÍA", href: "#galeria" },
    { name: "RESERVAS", href: "#reservas" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#09090b]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Typographic Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex flex-col tracking-wider"
          id="header-brand-logo"
        >
          <span className="font-display font-extrabold text-2xl md:text-3xl tracking-[0.25em] text-[#f4f3ef] transition-colors group-hover:text-[#c5a059]">
            NOIR
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.45em] text-[#c5a059] font-medium uppercase -mt-1">
            BARBER STUDIO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold tracking-[0.2em] text-[#f4f3ef]/80 hover:text-[#c5a059] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            id="header-cta-reserve-btn"
            onClick={() => onOpenBooking()}
            className="relative group overflow-hidden px-5 py-2.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#09090b] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>RESERVAR</span>
          </button>

          {/* Mobile menu hamburger button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f4f3ef] hover:text-[#c5a059] transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-[#09090b]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold tracking-[0.2em] text-[#f4f3ef] hover:text-[#c5a059] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a059]/60" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#c5a059] text-[#09090b] text-xs font-bold tracking-[0.2em] uppercase text-center"
            >
              RESERVAR AHORA
            </button>
            <a
              href={`https://wa.me/${noirConfig.contact.whatsappNumber}?text=${encodeURIComponent(noirConfig.contact.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border border-white/20 text-[#f4f3ef] text-xs font-semibold tracking-[0.15em] uppercase text-center flex items-center justify-center gap-2 hover:border-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              WhatsApp: {noirConfig.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
