import React from "react";
import { motion } from "motion/react";
import { Scissors, Star, Calendar } from "lucide-react";
import { noirConfig } from "../data/noirConfig";
import { Barber } from "../types";

interface BarbersSectionProps {
  onSelectBarber: (barberId: string) => void;
}

export const BarbersSection: React.FC<BarbersSectionProps> = ({ onSelectBarber }) => {
  return (
    <section id="barberos" className="py-28 md:py-36 bg-[#09090b] text-[#f4f3ef] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
              EL EQUIPO
            </span>
            <span className="w-8 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] text-[#f4f3ef]">
            MEET THE BARBERS
          </h2>
          <p className="text-sm text-[#8e8d89] max-w-lg mt-4 leading-relaxed font-normal">
            Artesanos dedicados al detalle, la simetría y el trato exclusivo. Selecciona a tu barbero preferido para tu próxima sesión.
          </p>
        </div>

        {/* 3 Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {noirConfig.barbers.map((barber: Barber, idx: number) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className="group bg-[#111114] border border-white/8 hover:border-[#c5a059]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Photo with subtle zoom hover and dark gradient */}
              <div className="relative h-[380px] sm:h-[420px] overflow-hidden bg-[#0d0d10]">
                <img
                  src={barber.photo}
                  alt={`Barbero ${barber.name} - ${barber.role} en Noir Barber Studio`}
                  className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-110 group-hover:scale-108 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/30" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 font-display font-black text-xs tracking-widest px-3 py-1 bg-black/80 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30">
                  {barber.number}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                  <Star className="w-3 h-3 text-[#c5a059] fill-[#c5a059]" />
                  <span className="font-mono text-[11px] text-[#f4f3ef] font-semibold">{barber.rating}</span>
                </div>

                {/* Floating Role in bottom of photo */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059] font-semibold block mb-1">
                    {barber.role}
                  </span>
                  <h3 className="font-display font-bold text-3xl tracking-[0.1em] uppercase text-[#f4f3ef]">
                    {barber.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  {/* Specialty */}
                  <div className="mb-4 pb-4 border-b border-white/5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8e8d89] block mb-1">
                      ESPECIALIDAD
                    </span>
                    <p className="text-sm font-semibold text-[#f4f3ef] flex items-center gap-2">
                      <Scissors className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                      <span>{barber.specialty}</span>
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-[#8e8d89] leading-relaxed mb-6 font-normal">
                    {barber.bio}
                  </p>
                </div>

                {/* Action button: Reserve specifically with this barber */}
                <button
                  id={`select-barber-${barber.id}`}
                  onClick={() => onSelectBarber(barber.id)}
                  className="w-full py-3 px-4 bg-[#18181c] group-hover:bg-[#c5a059] text-[#f4f3ef] group-hover:text-[#09090b] text-xs font-bold tracking-[0.2em] uppercase border border-white/10 group-hover:border-[#c5a059] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>RESERVAR CON {barber.name}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
