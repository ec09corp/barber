import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Calendar, Scissors } from "lucide-react";
import { noirConfig } from "../data/noirConfig";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = () => {
    const el = document.getElementById("servicios");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExplore = () => {
    const el = document.getElementById("intro");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Background Image with Dark Vignette and Moody Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
          alt="Barbero profesional realizando corte de precisión en Noir Barber Studio"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-125 saturate-50"
          loading="eager"
        />
        {/* Gradients to blend smoothly into dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#09090b]/40 to-[#09090b]" />
        {/* Subtle diagonal micro-grid line */}
        <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-24 pb-16">
        {/* Studio Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#c5a059]/30 bg-[#121215]/80 backdrop-blur-sm mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
          <span className="text-[10px] tracking-[0.35em] text-[#c5a059] uppercase font-semibold">
            {noirConfig.badge}
          </span>
        </motion.div>

        {/* Main Typographic Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center mb-6"
        >
          <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.18em] text-[#f4f3ef] uppercase select-none leading-none">
            NOIR
          </h1>
          <span className="font-display font-light text-base sm:text-xl md:text-2xl tracking-[0.45em] text-[#c5a059] uppercase mt-2 sm:mt-3">
            BARBER STUDIO
          </span>
        </motion.div>

        {/* Brand Tagline & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-xl mx-auto flex flex-col items-center gap-3 mb-10"
        >
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.3em] text-[#f4f3ef] uppercase border-y border-white/10 py-2 w-full text-center">
            “{noirConfig.tagline}”
          </p>
          <p className="text-xs sm:text-sm text-[#8e8d89] tracking-wide max-w-md">
            {noirConfig.subtitle}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <button
            id="hero-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] hover:bg-[#d8b46e] text-[#09090b] text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-lg shadow-[#c5a059]/10 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVAR CITA</span>
          </button>

          <button
            id="hero-services-btn"
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 bg-[#16161a]/80 hover:bg-[#1f1f25] border border-white/15 text-[#f4f3ef] text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Scissors className="w-4 h-4 text-[#c5a059]" />
            <span>VER SERVICIOS</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll to Explore Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToExplore}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#8e8d89] group-hover:text-[#c5a059] transition-colors">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 text-[#c5a059]"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
