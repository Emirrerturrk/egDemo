"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenProject: (id: string) => void;
}

const slides = [
  {
    id: "villa-k",
    tag: "Seçili Eser · Konut",
    title: "Villa K. Monolitik Konut",
    location: "Eskişehir · 680 m²",
    img: "/hero_villa_render_1787764026875.jpg",
  },
  {
    id: "pera-penthouse",
    tag: "Seçili Eser · İç Mimarlık",
    title: "Pera Penthouse & Galeri",
    location: "İstanbul · 340 m²",
    img: "/interior_living_render_1787764043754.jpg",
  },
  {
    id: "urla-hotel",
    tag: "Seçili Eser · Ağırlama & Otel",
    title: "Urla Taş Köşk & Butik Otel",
    location: "İzmir, Urla · 1.200 m²",
    img: "/boutique_hotel_render_1787764078510.jpg",
  },
];

export default function Hero({ onOpenProject }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 flex flex-col justify-between px-4 sm:px-6 md:px-12 max-w-[1540px] mx-auto">
      {/* Dynamic Slide Stage */}
      <div
        className="relative w-full h-[460px] sm:h-[540px] md:h-[68vh] lg:h-[72vh] rounded-[2px] overflow-hidden group shadow-sm bg-[#E8E2D7]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[current].img}
              alt={slides[current].title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1540px) 100vw, 1540px"
            />
            {/* Subtle Gradient that preserves image visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            {/* Compact Editorial Badge / Card */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 bg-[#F7F4EE]/95 sm:bg-[#F7F4EE]/92 backdrop-blur-md p-4 sm:p-6 md:p-8 sm:max-w-sm md:max-w-md border border-white/60 shadow-lg rounded-[2px]">
              <p className="editorial-label text-[#735E4B] mb-1 sm:mb-1.5 flex items-center text-[8px] sm:text-[9px]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9E7D58] mr-1.5 animate-pulse" />
                {slides[current].tag}
              </p>
              <h2 className="serif-title text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#141311] font-normal leading-snug sm:leading-tight">
                {slides[current].title}
              </h2>
              <div className="flex items-center justify-between mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-[#25201B]/10 text-[11px] sm:text-xs text-[#25201B]/80">
                <span className="font-light truncate mr-2">{slides[current].location}</span>
                <button
                  onClick={() => onOpenProject(slides[current].id)}
                  className="font-semibold text-[#141311] hover:text-[#735E4B] flex items-center transition-colors group/btn flex-shrink-0"
                >
                  <span className="hidden sm:inline">Detayları İncele</span>
                  <span className="sm:hidden">Detay</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1 transform group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Counter & Switchers */}
        <div className="absolute top-3 right-3 sm:top-auto sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 flex items-center space-x-2.5 sm:space-x-3 bg-[#141311]/85 text-[#F7F4EE] px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-xs tracking-widest backdrop-blur-md shadow-md z-10">
          <button
            onClick={prevSlide}
            className="hover:text-[#E3DAC9] transition-colors p-1"
            aria-label="Önceki Proje"
          >
            <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
          <span className="font-medium">0{current + 1}</span>
          <span className="w-4 sm:w-6 h-[1px] bg-[#F7F4EE]/30 inline-block" />
          <span className="text-[#F7F4EE]/50">0{slides.length}</span>
          <button
            onClick={nextSlide}
            className="hover:text-[#E3DAC9] transition-colors p-1"
            aria-label="Sonraki Proje"
          >
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </div>

      {/* Manifesto Strip */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-10 sm:py-12 md:py-16 border-b border-[#25201B]/10 items-end">
        <div className="md:col-span-8">
          <p className="serif-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#141311] leading-[1.18] font-light">
            Mekânları yalnızca barınma alanı değil; insan ruhunun, doğal ışığın ve heykelsi sessizliğin dingin bir parçası olarak kurguluyoruz.
          </p>
        </div>
        <div className="md:col-span-4 flex md:justify-end">
          <div className="space-y-3 sm:space-y-4 max-w-xs">
            <p className="text-xs sm:text-sm text-[#735E4B] leading-relaxed font-light">
              EG Design ekibi olarak, ilk fikirden anahtar teslim uygulamaya kadar tüm süreçte özgün ve zamansız yaşam alanları tasarlıyoruz.
            </p>
            <div className="flex items-center space-x-3 pt-1 sm:pt-2 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#25201B] font-semibold">
              <span>Mimari</span> &sdot; <span>İç Mimarlık</span> &sdot; <span>Uygulama</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
