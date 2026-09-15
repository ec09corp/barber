import React from "react";
import { motion } from "motion/react";
import { Check, Flame, ArrowRight } from "lucide-react";
import { noirConfig } from "../data/noirConfig";
import { Promotion } from "../types";

interface NoirSpecialsProps {
  onClaimPromotion: (serviceId?: string) => void;
}

export const NoirSpecials: React.FC<NoirSpecialsProps> = ({ onClaimPromotion }) => {
  return (
    <section id="promociones" className="py-28 md:py-36 bg-[#0c0c0f] text-[#f4f3ef] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
              OPORTUNIDADES SELECTAS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] text-[#f4f3ef]">
            NOIR SPECIALS
          </h2>
          <p className="text-sm text-[#8e8d89] max-w-md mt-4 leading-relaxed font-normal">
            Paquetes y tarifas preferenciales diseñadas para mantener tu imagen impecable con regularidad.
          </p>
        </div>

        {/* Promotion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noirConfig.promotions.map((promo: Promotion, idx: number) => {
            const isFeatured = idx === 1; // Middle one: Premium Session

            return (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                className={`relative bg-[#111114] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 ${
                  isFeatured
                    ? "border-2 border-[#c5a059] shadow-2xl shadow-[#c5a059]/10 scale-102 lg:-translate-y-2"
                    : "border border-white/8 hover:border-white/20"
                }`}
              >
                {/* Promo Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-[10px] tracking-[0.25em] uppercase font-bold px-3 py-1 ${
                      isFeatured
                        ? "bg-[#c5a059] text-[#09090b]"
                        : "bg-[#18181c] text-[#c5a059] border border-[#c5a059]/30"
                    }`}
                  >
                    {promo.tag}
                  </span>
                  <span className="text-xs font-mono text-[#8e8d89]">PROMO 0{idx + 1}</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display font-bold text-2xl tracking-[0.1em] uppercase text-[#f4f3ef] mb-2">
                    {promo.title}
                  </h3>
                  {promo.subtitle && (
                    <p className="text-xs text-[#c5a059] font-medium tracking-wide mb-4">
                      {promo.subtitle}
                    </p>
                  )}
                  <p className="text-xs text-[#8e8d89] leading-relaxed mb-6 font-normal">
                    {promo.description}
                  </p>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2 py-5 border-y border-white/5 mb-6">
                    <span className="text-xs text-[#8e8d89] font-mono">{promo.currency}</span>
                    <span className="font-display font-black text-4xl text-[#f4f3ef]">
                      ${promo.price}
                    </span>
                    <span className="text-[11px] text-[#8e8d89] ml-auto">Tarifa final</span>
                  </div>

                  {/* Perks list */}
                  <ul className="space-y-3 mb-8">
                    {promo.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-xs text-[#d1d0cb]">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Claim Button */}
                <button
                  id={`claim-promo-${promo.id}`}
                  onClick={() => onClaimPromotion(promo.serviceIdToBook)}
                  className={`w-full py-3.5 px-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${
                    isFeatured
                      ? "bg-[#c5a059] hover:bg-[#d8b46e] text-[#09090b]"
                      : "bg-[#18181c] hover:bg-[#c5a059] text-[#f4f3ef] hover:text-[#09090b] border border-white/10 hover:border-[#c5a059]"
                  }`}
                >
                  <span>RESERVAR PROMO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
