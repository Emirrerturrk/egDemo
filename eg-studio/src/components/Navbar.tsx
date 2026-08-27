"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBrief: (topic?: string) => void;
}

export default function Navbar({ onOpenBrief }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#F7F4EE]/96 backdrop-blur-md border-b border-[#25201B]/10 py-3 sm:py-4 shadow-sm"
          : "bg-[#F7F4EE]/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3.5 sm:py-6 md:py-8"
      }`}
    >
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex flex-col group">
          <span className="serif-title text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#141311] group-hover:text-[#735E4B] transition-colors">
            EG DESIGN
          </span>
          <span className="editorial-label text-[8px] sm:text-[9px] text-[#735E4B] tracking-[0.22em] sm:tracking-[0.24em] -mt-1">
            EZGİ GÜVEN GÜRSÖĞÜT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10 text-[11px] tracking-[0.22em] uppercase font-semibold text-[#25201B]/75">
          <a
            href="#about"
            className="hover:text-[#141311] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141311] hover:after:w-full after:transition-all"
          >
            Hakkımızda
          </a>
          <a
            href="#projects"
            className="hover:text-[#141311] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141311] hover:after:w-full after:transition-all"
          >
            Projeler
          </a>
          <a
            href="#services"
            className="hover:text-[#141311] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141311] hover:after:w-full after:transition-all"
          >
            Hizmetlerimiz
          </a>
          <a
            href="#products"
            className="hover:text-[#141311] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141311] hover:after:w-full after:transition-all"
          >
            Özel Mobilya
          </a>
          <a
            href="#contact"
            className="hover:text-[#141311] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141311] hover:after:w-full after:transition-all"
          >
            İletişim
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => onOpenBrief()}
            className="inline-flex items-center text-[9px] sm:text-[10px] md:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase border border-[#25201B]/30 bg-white/60 hover:bg-[#25201B] hover:text-[#F7F4EE] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm"
          >
            <span>Proje Başlat</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1.5 sm:ml-2" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#141311] p-1.5 rounded-md hover:bg-black/5 transition-colors"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EE] border-b border-[#25201B]/10 px-6 py-6 flex flex-col space-y-3 text-xs tracking-widest uppercase font-semibold shadow-lg">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-[#25201B]/5 text-[#141311]"
          >
            Hakkımızda
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-[#25201B]/5 text-[#141311]"
          >
            Projeler
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-[#25201B]/5 text-[#141311]"
          >
            Hizmetlerimiz
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-[#25201B]/5 text-[#141311]"
          >
            Özel Mobilya
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-[#141311]"
          >
            İletişim
          </a>
        </div>
      )}
    </header>
  );
}
