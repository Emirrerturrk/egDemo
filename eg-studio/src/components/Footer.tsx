"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#191512] text-[#DED4C5]/80 border-t border-white/10">
      <div className="max-w-[1540px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="serif-title text-2xl text-white block">EG DESIGN</span>
            <p className="editorial-label text-[9px] text-[#9E7D58] tracking-[0.24em]">
              EZGİ GÜVEN GÜRSÖĞÜT
            </p>
            <p className="text-xs text-[#DED4C5]/70 leading-relaxed font-light">
              Özgün ve zamansız tasarımlarla yaşam alanlarınızı sessiz bir zarafetle yeniden tanımlıyoruz.
            </p>
          </div>

          {/* Col 2: Studio Location */}
          <div className="space-y-3 text-xs font-light">
            <span className="editorial-label text-white block mb-2">Stüdyo Adresi</span>
            <p className="flex items-start space-x-2 text-[#DED4C5]/80">
              <MapPin className="w-4 h-4 text-[#9E7D58] flex-shrink-0 mt-0.5" />
              <span>Eskişehir / Odunpazarı Osmangazi Mah. Kemer Sok. 59/C</span>
            </p>
            <p className="flex items-center space-x-2 text-[#DED4C5]/80 pt-1">
              <Clock className="w-4 h-4 text-[#9E7D58] flex-shrink-0" />
              <span>Pzt - Cum: 09.00 - 18.00</span>
            </p>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3 text-xs font-light">
            <span className="editorial-label text-white block mb-2">Doğrudan İletişim</span>
            <p className="flex items-center space-x-2 text-[#DED4C5]/80">
              <Phone className="w-4 h-4 text-[#9E7D58] flex-shrink-0" />
              <a href="tel:05327763548" className="hover:text-white transition-colors">
                0532 776 3548
              </a>
            </p>
            <p className="flex items-center space-x-2 text-[#DED4C5]/80">
              <Mail className="w-4 h-4 text-[#9E7D58] flex-shrink-0" />
              <a href="mailto:mimarezgiguven@gmail.com" className="hover:text-white transition-colors">
                mimarezgiguven@gmail.com
              </a>
            </p>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-2 text-xs uppercase tracking-widest font-medium">
            <span className="editorial-label text-white block mb-3">Hızlı Menü</span>
            <p><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></p>
            <p><a href="#projects" className="hover:text-white transition-colors">Projeler</a></p>
            <p><a href="#services" className="hover:text-white transition-colors">Hizmetlerimiz</a></p>
            <p><a href="#contact" className="hover:text-white transition-colors">İletişim & Randevu</a></p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-[#DED4C5]/50 gap-4">
          <div>&copy; {new Date().getFullYear()} EG Design (Ezgi Güven Gürsöğüt). Tüm Hakları Saklıdır.</div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <a href="https://www.instagram.com/mimarezgiguven/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram (@mimarezgiguven)</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
