"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ProjectItem {
  id: string;
  category: "residential" | "interior" | "hospitality";
  categoryLabel: string;
  year: string;
  title: string;
  location: string;
  area: string;
  img: string;
  description: string;
  details: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "villa-k",
    category: "residential",
    categoryLabel: "Konut Mimarisi",
    year: "2026",
    title: "Villa K. Monolitik Konut",
    location: "Eskişehir",
    area: "680 m²",
    img: "/hero_villa_render_1787764026875.jpg",
    description:
      "Doğal arazi eğimine oturan monolitik kütle, yerel traverten taş bloklar ve brüt beton birleşimiyle tasarlandı. Güneş ışığını gün boyunca filtreleyen saçaklar ve kesintisiz vadi manzarasına açılan geniş cam cepheler mekanın ana omurgasını oluşturuyor.",
    details: [
      "Malzeme: Gözenekli Doğal Traverten, Füme Meşe",
      "Mühendislik: Yüksek enerji verimli pasif iklimlendirme",
      "Kapsam: Mimari Proje + İç Mekân + Peyzaj",
    ],
  },
  {
    id: "pera-penthouse",
    category: "interior",
    categoryLabel: "İç Mimarlık",
    year: "2025",
    title: "Pera Penthouse & Galeri",
    location: "İstanbul, Pera",
    area: "340 m²",
    img: "/interior_living_render_1787764043754.jpg",
    description:
      "Tarihi bir apartmanın en üst katında yer alan bu yaşam alanı, sanat koleksiyoneri bir aile için heykelsi bir sergi ve dinlenme mekanı olarak dönüştürüldü. Ham kireç sıvalı duvarlar ve özel tasarım boucle mobilyalar sakin bir zarafet sunar.",
    details: [
      "Malzeme: Kireç Sıva, Fırçalanmış Pirinç, Masif Ceviz",
      "Aydınlatma: 2700K sıcak tonlu lineer gizli aydınlatma",
      "Kapsam: Komple Renovasyon + Sanat Küratörlüğü",
    ],
  },
  {
    id: "urla-hotel",
    category: "hospitality",
    categoryLabel: "Ağırlama & Otel",
    year: "2025",
    title: "Urla Taş Köşk & Butik Otel",
    location: "İzmir, Urla",
    area: "1.200 m²",
    img: "/boutique_hotel_render_1787764078510.jpg",
    description:
      "Zeytin ağaçları arasında konumlanan butik otel projesi, Ege mimarisinin geleneksel taş işçiliğini çağdaş minimalizm ile harmanlıyor. 8 süit odanın tamamı özel teras ve su öğesiyle buluşuyor.",
    details: [
      "Malzeme: Urla Yöresel Taşları, Mikrosement, Keten",
      "Sürdürülebilirlik: Yağmur suyu hasadı ve güneş entegrasyonu",
      "Kapsam: Masterplan, Mimari ve İç Mimari Tasarım",
    ],
  },
];

interface ProjectsProps {
  onSelectProject: (p: ProjectItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 max-w-[1540px] mx-auto">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
        <div>
          <span className="editorial-label text-[#735E4B]">Portfolyo & Eserler</span>
          <h2 className="serif-title text-4xl md:text-6xl text-[#141311] mt-2 font-normal">
            Seçilmiş Projeler
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
          {[
            { id: "all", label: `Tümü (${projectsData.length})` },
            { id: "residential", label: "Konut & Villa" },
            { id: "interior", label: "İç Mimarlık" },
            { id: "hospitality", label: "Ticari & Otel" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                filter === tab.id
                  ? "bg-[#25201B] text-[#F7F4EE] border-[#25201B]"
                  : "border-[#25201B]/20 text-[#25201B] hover:border-[#25201B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              onClick={() => onSelectProject(item)}
              className="group cursor-pointer"
              data-cursor="PROJE"
            >
              <div className="aspect-[4/5] img-zoom rounded-[2px] relative shadow-sm">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-[#F7F4EE]/90 backdrop-blur-md px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-[#141311] transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 shadow-md">
                    Plan & Galeriyi Gör
                  </span>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-start">
                <div>
                  <span className="editorial-label text-[#735E4B] block mb-1">
                    {item.categoryLabel} &sdot; {item.year}
                  </span>
                  <h3 className="serif-title text-2xl text-[#141311] group-hover:text-[#735E4B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#25201B]/60 mt-1">
                    {item.location} &sdot; {item.area}
                  </p>
                </div>
                <div className="p-1 rounded-full border border-[#25201B]/20 group-hover:border-[#141311] group-hover:bg-[#25201B] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
