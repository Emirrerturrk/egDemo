"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesProps {
  onOpenBrief: (service?: string) => void;
}

const serviceItems = [
  {
    num: "01",
    field: "Mimari",
    title: "Mimari Tasarım, Proje ve Uygulama Hizmeti",
    desc: "Arsa ve çevre analizinden başlayarak konsept tasarım, ruhsat projeleri ve uygulama detaylarının bütüncül yönetimi.",
  },
  {
    num: "02",
    field: "İç Mimari",
    title: "İç Mimari Tasarım, Proje ve Uygulama Hizmetleri",
    desc: "Mağaza, restoran, kafe, konut ve ofis alanlarında mekânın ruhuna ve yaşam tarzınıza özel fonksiyonel çözümler.",
  },
  {
    num: "03",
    field: "Danışmanlık",
    title: "Danışmanlık Hizmeti",
    desc: "Ne istediğinizi henüz net tanımlayamadığınız durumlarda bile doğru atmosfer ve bütçe planlaması için profesyonel rehberlik.",
  },
  {
    num: "04",
    field: "Uygulama",
    title: "Anahtar Teslim Projeler",
    desc: "Tasarımın ilk fikirden uygulamanın son detayına kadar eksiksiz, kaliteli ve zamanında teslimi.",
  },
  {
    num: "05",
    field: "3D & Render",
    title: "Üç Boyutlu Görselleştirme",
    desc: "Projenizin henüz inşa edilmeden önceki halini gerçekçi malzeme, ışık ve doku simülasyonları ile deneyimleme imkânı.",
  },
  {
    num: "06",
    field: "Bespoke",
    title: "Ürün ve Mobilya Tasarımı",
    desc: "Mekâna ve projeye özel ölçülü, traverten, mermer ve masif ahşap detaylı butik mobilya üretimi.",
  },
];

export default function Services({ onOpenBrief }: ServicesProps) {
  return (
    <section id="services" className="py-24 md:py-36 bg-[#25201B] text-[#F7F4EE]">
      <div className="max-w-[1540px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 border-b border-white/10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="editorial-label text-[#DED4C5]/70">EG DESIGN Disiplinleri</span>
            <h2 className="serif-title text-4xl md:text-6xl text-white mt-2 font-normal leading-tight">
              Hizmetlerimiz
            </h2>
            <p className="text-xs md:text-sm text-[#DED4C5]/75 mt-4 leading-relaxed font-light">
              EG Design, müşteri talebi doğrultusunda; iç mimari alanlarda <strong>mağaza, restoran, kafe, konut ve ofis</strong> çalışmaları yapmakta ve sizlere farklı tasarımlar ile çözümler sunmaktadır.
            </p>
          </motion.div>

          <div className="mt-8 lg:mt-0">
            <button
              onClick={() => onOpenBrief("Hizmet & Danışmanlık")}
              className="inline-flex items-center text-xs tracking-widest uppercase border border-[#DED4C5]/30 text-[#DED4C5] hover:bg-[#DED4C5] hover:text-[#25201B] px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm"
            >
              <span>Danışmanlık Al & Proje Başlat</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceItems.map((srv, idx) => (
            <motion.div
              key={srv.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => onOpenBrief(srv.title)}
              className="bg-[#1E1A16] p-8 md:p-10 rounded-[2px] border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <span className="text-sm font-mono text-[#9E7D58] font-semibold">{srv.num}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#DED4C5]/40 font-semibold">{srv.field}</span>
                </div>
                <h3 className="serif-title text-2xl text-white group-hover:text-[#E3DAC9] transition-colors leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs md:text-sm text-[#DED4C5]/70 mt-4 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs uppercase tracking-widest text-[#DED4C5]/60 group-hover:text-white transition-colors">
                <span>Detayları Görüş</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
