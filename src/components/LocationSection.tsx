import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Navigation,
  ExternalLink
} from "lucide-react";
import { noirConfig } from "../data/noirConfig";

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(noirConfig.contact.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-28 md:py-36 bg-[#09090b] text-[#f4f3ef] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
              UBICACIÓN & VISITAS
            </span>
            <span className="w-8 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] text-[#f4f3ef]">
            ENCUÉNTRANOS
          </h2>
          <p className="text-sm text-[#8e8d89] max-w-md mt-4 leading-relaxed font-normal">
            Estamos ubicados en un entorno discreto y exclusivo. Citas programadas con confirmación previa.
          </p>
        </div>

        {/* Location Info & Stylized Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Box */}
            <div className="bg-[#111114] border border-white/10 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[#c5a059] mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">DIRECCIÓN</span>
              </div>
              <p className="font-display font-bold text-2xl uppercase tracking-wider text-[#f4f3ef] mb-2">
                {noirConfig.contact.address}
              </p>
              <p className="text-xs text-[#8e8d89] mb-4">
                {noirConfig.contact.addressNote}
              </p>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#18181c] hover:bg-[#222227] border border-white/10 text-xs text-[#f4f3ef] tracking-wider transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "DIRECCIÓN COPIADA" : "COPIAR DIRECCIÓN"}</span>
              </button>
            </div>

            {/* Hours Box */}
            <div className="bg-[#111114] border border-white/10 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[#c5a059] mb-3">
                <Clock className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">HORARIOS DE ATENCIÓN</span>
              </div>
              <div className="space-y-2 mt-4">
                {noirConfig.contact.schedule.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-[#8e8d89] font-medium">{item.days}</span>
                    <span className="font-mono text-[#f4f3ef] font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${noirConfig.contact.phone}`}
                className="p-5 bg-[#111114] border border-white/10 hover:border-[#c5a059] transition-all group flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#18181c] group-hover:bg-[#c5a059] text-[#c5a059] group-hover:text-[#09090b] flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e8d89] block">TELÉFONO</span>
                  <span className="text-xs font-bold text-[#f4f3ef] font-mono">{noirConfig.contact.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${noirConfig.contact.whatsappNumber}?text=${encodeURIComponent(noirConfig.contact.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#111114] border border-white/10 hover:border-[#25D366] transition-all group flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#18181c] group-hover:bg-[#25D366] text-[#25D366] group-hover:text-[#09090b] flex items-center justify-center transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e8d89] block">WHATSAPP</span>
                  <span className="text-xs font-bold text-[#f4f3ef] font-mono">{noirConfig.contact.whatsappDisplay}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Dark Map Placeholder */}
          <div className="lg:col-span-7 relative min-h-[380px] bg-[#111114] border border-white/10 overflow-hidden flex flex-col justify-between p-8 group">
            {/* Dark Styled Map Visual Representation */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Mapa satélite nocturno"
                className="w-full h-full object-cover filter grayscale contrast-150 brightness-50"
              />
              <div className="absolute inset-0 bg-[#09090b]/80" />
            </div>

            {/* Top Label */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-mono">
                GOOGLE MAPS • INTEGRATION READY
              </span>
              <span className="text-[10px] font-mono text-[#8e8d89]">GPS: 40.4168° N, 3.7038° W</span>
            </div>

            {/* Central Animated Pin */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center p-6">
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 animate-ping absolute inset-0" />
                <div className="relative w-12 h-12 rounded-full bg-[#c5a059] text-[#09090b] flex items-center justify-center shadow-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <h4 className="font-display font-extrabold text-xl uppercase tracking-widest text-[#f4f3ef] mb-1">
                NOIR BARBER STUDIO
              </h4>
              <p className="text-xs text-[#c5a059] font-mono tracking-wider">
                [{noirConfig.contact.address}]
              </p>
            </div>

            {/* Bottom Actions Bar */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#8e8d89]">
                Listo para vincular tu ficha de Google Business
              </span>
              <a
                href={noirConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#18181c] hover:bg-[#c5a059] text-[#f4f3ef] hover:text-[#09090b] text-xs font-bold tracking-[0.15em] uppercase border border-white/15 hover:border-[#c5a059] transition-all flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>CÓMO LLEGAR</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
