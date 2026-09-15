import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { noirConfig } from "../data/noirConfig";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${noirConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    noirConfig.contact.defaultWhatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Small floating notification bubble */}
      {showTooltip && (
        <div className="bg-[#111114] border border-[#c5a059]/40 text-[#f4f3ef] px-4 py-2.5 shadow-2xl flex items-center gap-3 text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <span className="font-bold text-[#c5a059] block text-[10px] uppercase tracking-wider">
              ¿PREGUNTAS O CITA RÁPIDA?
            </span>
            <span className="text-[#8e8d89] text-[11px]">
              Chatea con nosotros por WhatsApp
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8e8d89] hover:text-white p-1"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3 bg-[#25D366] hover:bg-[#22bf5b] text-[#09090b] font-bold text-xs tracking-wider uppercase shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09090b]"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-[#09090b]" />
        <span className="hidden sm:inline font-bold">WHATSAPP</span>
      </a>
    </div>
  );
};
