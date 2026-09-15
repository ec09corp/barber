import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Calendar } from "lucide-react";
import { noirConfig } from "../data/noirConfig";
import { GalleryItem } from "../types";

interface GallerySectionProps {
  onBookStyle?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookStyle }) => {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    "Todos",
    "Skin Fades",
    "Tapers",
    "Barbas",
    "Cortes Clásicos",
    "Studio & Interior",
  ];

  const filteredItems = activeCategory === "Todos"
    ? noirConfig.gallery
    : noirConfig.gallery.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setSelectedItemIndex(idx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="py-28 md:py-36 bg-[#09090b] text-[#f4f3ef] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
                PORTFOLIO EDITORIAL
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] text-[#f4f3ef]">
              GALERÍA
            </h2>
          </div>
          <p className="text-sm text-[#8e8d89] max-w-md leading-relaxed">
            Una mirada de cerca a nuestras creaciones, técnicas de navaja y el ambiente minimalista de nuestro estudio. Haz clic en cualquier fotografía para verla en detalle.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/5 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#c5a059] text-[#09090b] font-bold"
                  : "bg-[#111114] text-[#8e8d89] hover:text-[#f4f3ef] hover:bg-[#18181c] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Varied Dynamic Editorial Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            // Give different heights based on aspect
            const heightClass =
              item.aspect === "tall"
                ? "h-[440px]"
                : item.aspect === "wide"
                ? "h-[290px] sm:col-span-2 lg:col-span-2"
                : "h-[340px]";

            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative overflow-hidden bg-[#111114] border border-white/8 cursor-pointer ${heightClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter grayscale-[20%] group-hover:scale-106 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
                </div>

                {/* Bottom Title Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] font-medium block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#f4f3ef] tracking-wider uppercase">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-[#8e8d89] mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && filteredItems[selectedItemIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 z-10 p-3 text-white/70 hover:text-[#c5a059] bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-[#c5a059] bg-black/60 hover:bg-black/90 border border-white/10 rounded-full transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-[#c5a059] bg-black/60 hover:bg-black/90 border border-white/10 rounded-full transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content Box */}
            <div
              className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden max-h-[70vh] w-auto border border-white/10 shadow-2xl bg-black">
                <img
                  src={filteredItems[selectedItemIndex].image}
                  alt={filteredItems[selectedItemIndex].title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Caption & Quick CTA */}
              <div className="w-full max-w-2xl mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#111114] border border-white/10">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] font-semibold">
                    {filteredItems[selectedItemIndex].category}
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#f4f3ef] tracking-wider uppercase">
                    {filteredItems[selectedItemIndex].title}
                  </h4>
                  {filteredItems[selectedItemIndex].description && (
                    <p className="text-xs text-[#8e8d89]">
                      {filteredItems[selectedItemIndex].description}
                    </p>
                  )}
                </div>

                {onBookStyle && (
                  <button
                    onClick={() => {
                      setSelectedItemIndex(null);
                      onBookStyle();
                    }}
                    className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#d8b46e] text-[#09090b] text-xs font-bold tracking-[0.15em] uppercase transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>PEDIR ESTE ESTILO</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
