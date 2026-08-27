"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface ContactProps {
  initialTopic?: string;
}

export default function Contact({ initialTopic = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "konut",
    locationArea: "",
    timeline: "immediate",
    notes: initialTopic ? `[Talep Konusu: ${initialTopic}] ` : "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "konut",
        locationArea: "",
        timeline: "immediate",
        notes: "",
      });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#25201B] text-[#F7F4EE]">
      <div className="max-w-[1540px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Official Studio Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="editorial-label text-[#DED4C5]/70">İletişim & Stüdyo</span>
              <h2 className="serif-title text-4xl md:text-6xl text-white mt-2 leading-tight font-normal">
                Birlikte hayal edelim.
              </h2>
              <p className="text-sm text-[#DED4C5]/80 mt-6 leading-relaxed max-w-md font-light">
                Her mekân kendi karakterini taşımalı; biz de bu karakteri ortaya çıkarmak için buradayız. Projenizi konuşmak ve tanışmak için stüdyomuzu ziyaret edebilir veya formu doldurabilirsiniz.
              </p>
            </div>

            {/* Official Contact Info Box */}
            <div className="mt-12 space-y-6 text-sm text-[#DED4C5]/90 border-t border-white/10 pt-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#9E7D58] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="editorial-label text-[#DED4C5]/50 block mb-0.5">Adres</span>
                  <p className="font-sans leading-relaxed text-white">
                    Eskişehir / Odunpazarı Osmangazi Mahallesi Kemer Sokak 59/C
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#9E7D58] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="editorial-label text-[#DED4C5]/50 block mb-0.5">Telefon</span>
                  <a
                    href="tel:05327763548"
                    className="hover:text-white transition-colors text-base font-medium font-sans text-white"
                  >
                    0532 776 3548
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#9E7D58] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="editorial-label text-[#DED4C5]/50 block mb-0.5">E-Posta</span>
                  <a
                    href="mailto:mimarezgiguven@gmail.com"
                    className="hover:text-white transition-colors text-base font-serif text-white"
                  >
                    mimarezgiguven@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#9E7D58] font-bold text-xs">IG</div>
                <div>
                  <span className="editorial-label text-[#DED4C5]/50 block mb-0.5">Instagram</span>
                  <a
                    href="https://www.instagram.com/mimarezgiguven/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors underline underline-offset-4 text-white"
                  >
                    @mimarezgiguven
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#9E7D58] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="editorial-label text-[#DED4C5]/50 block mb-0.5">Çalışma Saatleri</span>
                  <p className="font-sans text-white">Pazartesi - Cuma: 09.00 - 18.00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form: Interactive Brief Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 bg-[#1E1A16] p-8 md:p-12 rounded-[2px] border border-white/10 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <span className="editorial-label text-[#9E7D58]">Proje & Danışmanlık Formu</span>
              <span className="text-xs text-[#DED4C5]/50">EG Design &sdot; Odunpazarı</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="editorial-label text-[#DED4C5]/70 block mb-2">Ad Soyad *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#DED4C5] transition-colors"
                  />
                </div>
                <div>
                  <label className="editorial-label text-[#DED4C5]/70 block mb-2">E-Posta Adresi *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@domain.com"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#DED4C5] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="editorial-label text-[#DED4C5]/70 block mb-2">Telefon *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#DED4C5] transition-colors"
                  />
                </div>
                <div>
                  <label className="editorial-label text-[#DED4C5]/70 block mb-2">Proje / Mekân Türü *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white focus:outline-none focus:border-[#DED4C5] transition-colors cursor-pointer"
                  >
                    <option className="bg-[#1E1A16] text-white" value="konut">Konut & Villa</option>
                    <option className="bg-[#1E1A16] text-white" value="magaza">Mağaza & Perakende</option>
                    <option className="bg-[#1E1A16] text-white" value="restoran-kafe">Restoran & Kafe</option>
                    <option className="bg-[#1E1A16] text-white" value="ofis">Ofis & Çalışma Alanı</option>
                    <option className="bg-[#1E1A16] text-white" value="mobilya">Özel Ürün & Mobilya Tasarımı</option>
                    <option className="bg-[#1E1A16] text-white" value="danismanlik">Danışmanlık & 3D Görselleştirme</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="editorial-label text-[#DED4C5]/70 block mb-2">Lokasyon & Yaklaşık Alan (m²)</label>
                  <input
                    type="text"
                    value={formData.locationArea}
                    onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                    placeholder="Örn: Eskişehir / 280 m²"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#DED4C5] transition-colors"
                  />
                </div>
                <div>
                  <label className="editorial-label text-[#DED4C5]/70 block mb-2">Hedeflenen Başlangıç</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white focus:outline-none focus:border-[#DED4C5] transition-colors cursor-pointer"
                  >
                    <option className="bg-[#1E1A16] text-white" value="immediate">Hemen (1 ay içinde)</option>
                    <option className="bg-[#1E1A16] text-white" value="quarter">1 - 3 Ay İçerisinde</option>
                    <option className="bg-[#1E1A16] text-white" value="future">Gelecek Sezon / Planlama Aşaması</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="editorial-label text-[#DED4C5]/70 block mb-2">Projeniz Hakkında Notlar & Vizyonunuz</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mekânda hayal ettiğiniz atmosfer, özel fonksiyon istekleriniz..."
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#DED4C5] transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center text-xs tracking-widest uppercase bg-[#DED4C5] text-[#25201B] font-semibold px-8 py-4 rounded-full hover:bg-white transition-all shadow-md group"
                >
                  <span>Talebi İlet & Randevu Al</span>
                  <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center text-xs text-[#DED4C5] space-x-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#9E7D58]" />
                    <span>Talebiniz alındı, en kısa sürede dönüş sağlanacaktır.</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
