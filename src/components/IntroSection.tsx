import React from "react";
import { motion } from "motion/react";
import { Award, Compass, ShieldCheck } from "lucide-react";

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="relative py-28 md:py-36 bg-[#09090b] text-[#f4f3ef] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Editorial Typography & Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
                FILOSOFÍA DE AUTOR
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.08em] uppercase text-[#f4f3ef] leading-[1.05] mb-8">
              TU CORTE.<br />
              <span className="text-[#c5a059]">TU FIRMA.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8e8d89] leading-relaxed max-w-xl mb-10 font-normal">
              Cada corte debe sentirse personal. Trabajamos precisión, detalle y técnica para crear un estilo que encaje contigo.
            </p>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <ShieldCheck className="w-5 h-5 text-[#c5a059] mb-1" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f4f3ef]">
                  100% CITA PREVIA
                </span>
                <span className="text-[11px] text-[#8e8d89]">Sin esperas innecesarias</span>
              </div>

              <div className="flex flex-col gap-1">
                <Award className="w-5 h-5 text-[#c5a059] mb-1" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f4f3ef]">
                  HERRAMIENTA PREMIUM
                </span>
                <span className="text-[11px] text-[#8e8d89]">Acero japonés y navaja</span>
              </div>

              <div className="flex flex-col gap-1">
                <Compass className="w-5 h-5 text-[#c5a059] mb-1" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f4f3ef]">
                  ASESORÍA MORFOLÓGICA
                </span>
                <span className="text-[11px] text-[#8e8d89]">Adaptado a tu rostro</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vertical Photography with Luxury Framing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative line offset */}
              <div className="absolute -inset-3 border border-[#c5a059]/25 translate-x-3 translate-y-3 -z-0 pointer-events-none hidden sm:block" />

              {/* Image Frame */}
              <div className="relative z-10 overflow-hidden bg-[#111114] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=900&auto=format&fit=crop"
                  alt="Detalle de corte y acabado milimétrico en Noir Barber Studio"
                  className="w-full h-[460px] md:h-[540px] object-cover object-center filter grayscale-[30%] hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#09090b]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-medium">
                      ESTÁNDAR NOIR
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f4f3ef]">
                      Acabado nítido a navaja recta
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#c5a059]">0.1mm</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
