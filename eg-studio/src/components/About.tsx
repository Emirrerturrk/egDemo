"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 lg:py-36 px-5 sm:px-8 md:px-12 max-w-[1540px] mx-auto border-b border-[#25201B]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-between"
        >
          <div>
            <span className="editorial-label text-[#735E4B] block mb-2">Hakkımızda & Felsefemiz</span>
            <h2 className="serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141311] leading-[1.15] font-normal">
              Sessiz bir zarafet, özgün ve zamansız mekânlar.
            </h2>
            
            <div className="mt-6 sm:mt-8 space-y-4 text-xs sm:text-sm md:text-base text-[#25201B]/85 leading-relaxed font-light">
              <p>
                <strong className="font-medium text-[#141311]">EG Design</strong> ekibi olarak temel amacımız, size özgün ve zamansız tasarımlar sunarak yaşam alanlarınızı sessiz bir zarafetle yeniden tanımlamaktır.
              </p>
              <p>
                Klasik dokunuşlarla çağdaş çizgilerin dengesini kurarak; ilk fikirden uygulamanın son detayına kadar tüm süreçte yanınızda oluyoruz. <span className="text-[#735E4B] font-medium">Traverten, mermer ve doğal malzemelerin ışığında</span> şekillendirdiğimiz tasarımları, mekânı kullanacak kişinin yaşam biçimine uygun çözümlere dönüştürüyoruz.
              </p>
              <p>
                Bizim için önemli olan, işin kalitesi kadar o mekânda hissedilen huzurdur. Ne istediğinizi henüz net tanımlayamadığınız durumlarda bile, hayal ettiğiniz atmosfere ulaşmanız için doğru yolu birlikte buluyoruz.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#25201B]/10 flex flex-row items-center justify-between gap-4">
            <div>
              <span className="editorial-label text-[#9E7D58] block mb-0.5">Kurucu Mimar</span>
              <p className="serif-title text-xl sm:text-2xl text-[#141311] font-medium">Ezgi Güven Gürsöğüt</p>
            </div>
            <div className="text-right">
              <span className="editorial-label text-[#735E4B] block mb-0.5">Vizyon</span>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#25201B]/70 font-semibold">Karakterli Yaşam Alanları</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Collage Grid - Mobile & Desktop Optimized */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="img-zoom rounded-[2px] aspect-[3/4] sm:aspect-[4/5] lg:h-[480px] relative shadow-sm"
          >
            <Image
              src="/interior_living_render_1787764043754.jpg"
              alt="EG Design İç Mekan"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="img-zoom rounded-[2px] aspect-[3/4] sm:aspect-[4/5] lg:h-[480px] mt-4 sm:mt-10 relative shadow-sm"
          >
            <Image
              src="/bespoke_chair_product_1787764061184.jpg"
              alt="EG Design Doğal Doku & Detay"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
