import React from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { noirConfig } from "../data/noirConfig";

interface FeaturedExperienceProps {
  onBookExperience: () => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onBookExperience }) => {
  const feat = noirConfig.featuredExperience;

  return (
    <section id="experiencia-destacada" className="py-28 md:py-36 bg-[#0c0c0f] text-[#f4f3ef] border-b border-white/5 relative overflow-hidden">
      {/* Background soft ambient halo */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Massive Visual Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            <div className="relative overflow-hidden bg-[#16161a] shadow-2xl border border-white/10 group">
              <img
                src={feat.image}
                alt="The Noir Experience - Sesión integral de corte, barba y relajación"
                className="w-full h-[450px] sm:h-[550px] lg:h-[620px] object-cover object-center filter grayscale-[20%] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />

              {/* In-photo Badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#09090b]/80 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold tracking-[0.25em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SIGNATURE RITUAL</span>
              </div>

              {/* Bottom in-photo caption */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#09090b]/85 backdrop-blur-md border border-white/10 hidden sm:block">
                <p className="text-xs text-[#8e8d89] tracking-wider uppercase">
                  RESERVAS LIMITADAS A 4 SESIONES DIARIAS PARA GARANTIZAR DEDICACIÓN PLENA
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information & Iconic Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
                SERVICIO DESTACADO
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-[0.06em] uppercase text-[#f4f3ef] leading-tight mb-4">
              {feat.title}
            </h2>

            <p className="text-sm text-[#c5a059] tracking-[0.15em] uppercase font-semibold mb-6">
              {feat.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#8e8d89] leading-relaxed mb-8">
              {feat.description}
            </p>

            {/* 4 Pillars Breakdown requested in spec */}
            <div className="border-y border-white/10 py-6 mb-8">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8e8d89] block mb-4">
                INCLUYE EN LA SESIÓN:
              </span>
              <div className="grid grid-cols-2 gap-4">
                {feat.pillars.map((pillar) => (
                  <div key={pillar} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                    <span className="font-display font-bold text-sm tracking-[0.2em] uppercase text-[#f4f3ef]">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration and Price */}
            <div className="flex items-center justify-between p-6 bg-[#16161a] border border-white/5 mb-8">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#8e8d89]">
                  DURACIÓN ESTIMADA
                </span>
                <span className="font-display font-bold text-xl text-[#f4f3ef] tracking-wider">
                  {feat.duration}
                </span>
              </div>

              <div className="text-right">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#8e8d89]">
                  TARIFA TOTAL
                </span>
                <span className="font-display font-black text-3xl text-[#c5a059]">
                  ${feat.price} <span className="text-xs font-sans text-[#8e8d89] font-normal">{feat.currency}</span>
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              id="book-experience-btn"
              onClick={onBookExperience}
              className="w-full py-4 px-8 bg-[#c5a059] hover:bg-[#d8b46e] text-[#09090b] text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a059]/10 active:scale-98 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>RESERVAR EXPERIENCIA</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
