import React from "react";
import { motion } from "motion/react";
import { Star, Quote, Info } from "lucide-react";
import { noirConfig } from "../data/noirConfig";
import { Testimonial } from "../types";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-28 md:py-36 bg-[#0c0c0f] text-[#f4f3ef] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
              OPINIÓN Y EXPERIENCIA
            </span>
            <span className="w-8 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] text-[#f4f3ef]">
            CLIENTES
          </h2>
          <p className="text-sm text-[#8e8d89] max-w-md mt-4 leading-relaxed font-normal">
            La confianza de quienes buscan una experiencia superior en cada visita.
          </p>

          {/* Explicit demo badge for transparency */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-[#18181c] border border-white/10 text-[11px] text-[#8e8d89]">
            <Info className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Testimonios demostrativos para presentación a clientes</span>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noirConfig.testimonials.map((test: Testimonial, idx: number) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="bg-[#111114] border border-white/8 hover:border-[#c5a059]/40 p-8 flex flex-col justify-between transition-all duration-400"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#c5a059]">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10" />
                </div>

                {/* Comment text */}
                <p className="text-sm text-[#f4f3ef]/90 leading-relaxed italic mb-8">
                  “{test.comment}”
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base uppercase tracking-wider text-[#f4f3ef]">
                    {test.name}
                  </h4>
                  <span className="text-[11px] text-[#c5a059] block font-medium">
                    {test.service}
                  </span>
                </div>
                <span className="text-[10px] text-[#8e8d89] font-mono">{test.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
