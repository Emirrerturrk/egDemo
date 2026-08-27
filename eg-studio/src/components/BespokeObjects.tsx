"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BespokeObjectsProps {
  onOpenBrief: (obj?: string) => void;
}

export default function BespokeObjects({ onOpenBrief }: BespokeObjectsProps) {
  return (
    <section id="products" className="py-24 md:py-36 px-6 md:px-12 max-w-[1540px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <span className="editorial-label text-[#735E4B]">Koleksiyon & Zanaat</span>
          <h2 className="serif-title text-4xl md:text-6xl text-[#141311] mt-2 font-normal">
            Özel Tasarım Objeler
          </h2>
          <p className="text-sm md:text-base text-[#25201B]/80 mt-6 leading-relaxed max-w-md font-light">
            Projelerimizde kullandığımız mobilya, aydınlatma ve heykelsi bloklar yerli taş ve ahşap ustalarıyla birlikte stüdyomuz bünyesinde sınırlı sayıda üretilmektedir.
          </p>

          <div className="mt-8 space-y-4 max-w-md">
            <div className="flex items-center justify-between border-b border-[#25201B]/10 pb-3">
              <span className="text-sm font-medium text-[#141311]">Bouclé & Masif Meşe Koltuk</span>
              <span className="text-xs text-[#735E4B]">Numaralı Özel Seri</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#25201B]/10 pb-3">
              <span className="text-sm font-medium text-[#141311]">Traverten Blok Monolitik Sehpa</span>
              <span className="text-xs text-[#735E4B]">Sınırlı Edisyon</span>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={() => onOpenBrief("Bespoke Mobilya Talebi")}
              className="inline-flex items-center text-xs tracking-widest uppercase text-[#141311] font-semibold hover:text-[#735E4B] transition-colors group"
            >
              <span>Koleksiyon Bilgisi Al</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <div className="aspect-[4/3] img-zoom rounded-[2px] relative shadow-md" data-cursor="OBJE">
            <Image
              src="/bespoke_chair_product_1787764061184.jpg"
              alt="Özel Tasarım Boucle Koltuk"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
