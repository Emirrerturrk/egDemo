"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-36 px-6 md:px-12 max-w-[1540px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <span className="editorial-label text-[#735E4B]">Tasarım Felsefesi</span>
          <h2 className="serif-title text-4xl md:text-5xl lg:text-6xl text-[#141311] mt-3 leading-[1.12] font-normal">
            Zamansız sadelik, ham malzemelerin şiiri.
          </h2>
          <p className="text-sm md:text-base text-[#25201B]/80 mt-6 leading-relaxed font-light">
            Tasarım yaklaşımımız gösterişten uzak, malzemelerin kendi dokusunu ve ışığın mekandaki doğal devinimini merkezine alır. Her proje, bulunduğu coğrafyayla diyalog kuran bir sanat eseri titizliğiyle işlenir.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-[#25201B]/10">
            <div>
              <span className="serif-title text-3xl md:text-4xl text-[#141311] block">100%</span>
              <span className="text-xs text-[#735E4B] uppercase tracking-wider mt-1 block font-medium">
                Özel Üretim & Detay
              </span>
            </div>
            <div>
              <span className="serif-title text-3xl md:text-4xl text-[#141311] block">12+ Yıl</span>
              <span className="text-xs text-[#735E4B] uppercase tracking-wider mt-1 block font-medium">
                Mimari Disiplin
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Images */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="img-zoom rounded-[2px] h-[380px] md:h-[480px] relative shadow-sm"
            data-cursor="DETAY"
          >
            <Image
              src="/interior_living_render_1787764043754.jpg"
              alt="Işık ve Mekan Tasarımı"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="img-zoom rounded-[2px] h-[380px] md:h-[480px] mt-0 md:mt-12 relative shadow-sm"
            data-cursor="DETAY"
          >
            <Image
              src="/bespoke_chair_product_1787764061184.jpg"
              alt="Zanaatkar Üretimi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
