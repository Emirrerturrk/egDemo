"use client";

import { motion } from "framer-motion";

export interface MaterialItem {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  origin: string;
  gradient: string;
}

const materials: MaterialItem[] = [
  {
    id: "travertine",
    num: "01. Travertine",
    category: "Doğal Taş",
    title: "Gözenekli Traverten",
    subtitle: "Ham Taş Bloğu",
    desc: "Doğal boşluklu yapısı ve sıcak krem tonlarıyla hacimlere heykelsi bir dinginlik katar. Masa tablaları, zemin kaplamaları ve monolitik şömine bloklarında ham doku.",
    origin: "Denizli / İtalya Ocakları",
    gradient: "from-[#C5B39A] to-[#E8DCB9]",
  },
  {
    id: "smoked-oak",
    num: "02. Smoked Oak",
    category: "Masif Ahşap",
    title: "Füme Doğal Meşe",
    subtitle: "Doğal Dokulu Ağaç",
    desc: "Mat vernikli derin damarlı doğal meşe, mekanlara sıcaklık ve ağırlık hissi verir. Özel marangozluk, kütüphaneler ve heykelsi masa tasarımlarında kullanılır.",
    origin: "Sürdürülebilir Avrupa Ormanları",
    gradient: "from-[#4A3728] via-[#634C38] to-[#3B2C20]",
  },
  {
    id: "lime-plaster",
    num: "03. Lime Plaster",
    category: "Yüzey Kaplama",
    title: "Ham Kireç Sıva",
    subtitle: "Mineral Sıva",
    desc: "Eksiz, yumuşak ışık kırılmaları yaratan mineral bazlı doğal yüzey kaplaması. Göz yormayan, ışığı emen ve akustik konfor sağlayan organik duvar dokusu.",
    origin: "Doğal Kireç Bazlı Karışım",
    gradient: "from-[#EAE4DC] to-[#D5CBC0]",
  },
  {
    id: "brushed-bronze",
    num: "04. Brushed Bronze",
    category: "Metal Detay",
    title: "Antik Fırçalanmış Bronz",
    subtitle: "Patinalı Pirinç",
    desc: "Parlamayan, asil patina alan fırçalanmış masif pirinç ve bronz detaylar. Aydınlatma gövdeleri, kapı kolları ve özel birleşim detaylarında zamansız ışıltı.",
    origin: "El İşçiliği Döküm & Torna",
    gradient: "from-[#694E2F] via-[#94744C] to-[#B39368]",
  },
];

interface MaterialityProps {
  onSelectMaterial: (mat: MaterialItem) => void;
}

export default function Materiality({ onSelectMaterial }: MaterialityProps) {
  return (
    <section id="materials" className="py-24 md:py-36 bg-[#EFE9DF]/80 border-y border-[#25201B]/10">
      <div className="max-w-[1540px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="editorial-label text-[#735E4B]">Hissiyat & Doku</span>
            <h2 className="serif-title text-4xl md:text-5xl lg:text-6xl text-[#141311] mt-2 font-normal">
              Malzeme Paletimiz
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs md:text-sm text-[#735E4B] max-w-md mt-4 md:mt-0 leading-relaxed font-light"
          >
            Projelerimizde yapay kaplamalar yerine dokunulduğunda yaşayan; zamanla güzelleşen ham taş, doğal ahşap ve nefes alan dokular tercih edilir.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onClick={() => onSelectMaterial(mat)}
              className="material-card bg-[#F7F4EE] p-6 rounded-[2px] border border-[#25201B]/10 cursor-pointer group"
              data-cursor="DOKU"
            >
              <div className="h-44 rounded-[1px] mb-6 overflow-hidden relative shadow-inner flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-tr ${mat.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                <span className="relative z-10 serif-title text-xl text-[#141311]/70 italic drop-shadow-sm">
                  {mat.num}
                </span>
              </div>
              <span className="editorial-label text-[#9E7D58] block mb-1">{mat.category}</span>
              <h3 className="serif-title text-2xl text-[#141311] group-hover:text-[#735E4B] transition-colors">
                {mat.title}
              </h3>
              <p className="text-xs text-[#25201B]/70 mt-2 leading-relaxed font-light line-clamp-3">
                {mat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
