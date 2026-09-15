import React from "react";
import { motion } from "motion/react";
import { noirConfig } from "../data/noirConfig";

export const BrandPillars: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 bg-[#0d0d10] border-b border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#c5a059]/5 blur-[120px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium mb-3">
            LOS TRES PILARES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.1em] text-[#f4f3ef]">
            LA EXPERIENCIA NOIR
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a059] mt-6" />
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {noirConfig.brandPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
              className="group relative p-8 md:p-10 bg-[#111114] border border-white/5 hover:border-[#c5a059]/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Giant Graphic Number */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white/5 group-hover:text-[#c5a059]/20 transition-colors duration-500 leading-none select-none">
                  {pillar.number}
                </span>
                <span className="text-xs font-mono tracking-widest text-[#c5a059] pt-2">
                  // {pillar.number}
                </span>
              </div>

              {/* Title & Phrase */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-bold text-2xl tracking-[0.15em] uppercase text-[#f4f3ef] group-hover:text-[#c5a059] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-base font-medium text-[#c5a059] tracking-wide italic">
                  “{pillar.phrase}”
                </p>
                <p className="text-sm text-[#8e8d89] leading-relaxed mt-2 font-normal">
                  {pillar.detail}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] text-[#8e8d89] uppercase">
                  ESTÁNDAR NOIR
                </span>
                <div className="w-2 h-2 rounded-full bg-[#c5a059]/40 group-hover:bg-[#c5a059] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
