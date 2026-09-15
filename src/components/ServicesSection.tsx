import React from "react";
import { motion } from "motion/react";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { noirConfig } from "../data/noirConfig";
import { Service } from "../types";

interface ServicesSectionProps {
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  return (
    <section id="servicios" className="py-28 md:py-36 bg-[#09090b] text-[#f4f3ef] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
                MENÚ DE TRABAJO
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] text-[#f4f3ef]">
              SERVICIOS
            </h2>
          </div>
          <p className="text-sm text-[#8e8d89] max-w-md leading-relaxed">
            Cada sesión incluye consulta previa, lavado preparatorio opcional y finalización con productos de peluquería selecta.
          </p>
        </div>

        {/* Services Cards Grid (2 columns on md, 3 on xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {noirConfig.services.map((service: Service, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative bg-[#111114] border border-white/8 hover:border-[#c5a059]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top image preview thumbnail */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center filter brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/50 to-transparent" />
                
                {/* Service Number Tag */}
                <span className="absolute top-4 left-4 font-display font-bold text-xs tracking-widest px-2.5 py-1 bg-black/80 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30">
                  {service.number}
                </span>

                {service.popular && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 bg-[#c5a059] text-[#09090b] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    RECOMENDADO
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-bold text-xl tracking-[0.12em] uppercase text-[#f4f3ef] group-hover:text-[#c5a059] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#8e8d89] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Duration & Price footer */}
                <div>
                  <div className="flex items-center justify-between py-4 border-t border-b border-white/5 mb-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#8e8d89]">
                      <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span className="tracking-wider">{service.duration}</span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#8e8d89] font-mono">{service.currency}</span>
                      <span className="font-display font-extrabold text-2xl text-[#f4f3ef]">
                        ${service.price}
                      </span>
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <button
                    id={`book-service-${service.id}`}
                    onClick={() => onBookService(service.id)}
                    className="w-full py-3 px-4 bg-[#18181c] group-hover:bg-[#c5a059] text-[#f4f3ef] group-hover:text-[#09090b] text-xs font-bold tracking-[0.2em] uppercase border border-white/10 group-hover:border-[#c5a059] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>RESERVAR</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
