import React from "react";
import { ArrowUp, Instagram, MessageSquare, ExternalLink } from "lucide-react";
import { noirConfig } from "../data/noirConfig";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#servicios" },
    { name: "Barberos", href: "#barberos" },
    { name: "Galería", href: "#galeria" },
    { name: "Reservas", href: "#reservas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-[#050507] text-[#f4f3ef] border-t border-white/8 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex flex-col tracking-wider mb-4">
              <span className="font-display font-extrabold text-3xl tracking-[0.25em] text-[#f4f3ef]">
                NOIR
              </span>
              <span className="text-[10px] tracking-[0.45em] text-[#c5a059] font-medium uppercase -mt-1">
                BARBER STUDIO
              </span>
            </div>

            <p className="text-sm font-semibold tracking-[0.2em] text-[#c5a059] uppercase mb-4">
              “{noirConfig.tagline}”
            </p>

            <p className="text-xs text-[#8e8d89] leading-relaxed max-w-sm">
              Una barbería moderna que combina cortes clásicos, tendencias contemporáneas y una experiencia premium diseñada para definir tu estilo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#f4f3ef] font-bold block mb-6">
              NAVEGACIÓN
            </span>
            <ul className="grid grid-cols-2 gap-3 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#8e8d89] hover:text-[#c5a059] transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & WhatsApp */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.25em] text-[#f4f3ef] font-bold block mb-6">
              SÍGUENOS
            </span>
            <div className="flex items-center gap-3 mb-6">
              <a
                href={noirConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111114] border border-white/10 hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center text-[#8e8d89] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={noirConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111114] border border-white/10 hover:border-[#c5a059] hover:text-[#c5a059] flex items-center justify-center text-[#8e8d89] transition-colors font-mono text-xs font-bold"
                aria-label="TikTok"
              >
                TK
              </a>

              <a
                href={`https://wa.me/${noirConfig.contact.whatsappNumber}?text=${encodeURIComponent(noirConfig.contact.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111114] border border-white/10 hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center text-[#8e8d89] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <span className="text-[11px] text-[#8e8d89]">
              Atención directa por WhatsApp en horario de apertura.
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e8d89]">
          <p>© {new Date().getFullYear()} Noir Barber Studio. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#8e8d89]/70">
              Demo de Branding & Web por Agencia Digital
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#111114] hover:bg-[#c5a059] text-[#8e8d89] hover:text-[#09090b] border border-white/10 transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
