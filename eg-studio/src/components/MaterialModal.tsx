"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { MaterialItem } from "./Materiality";

interface MaterialModalProps {
  material: MaterialItem | null;
  onClose: () => void;
}

export default function MaterialModal({
  material,
  onClose,
}: MaterialModalProps) {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 15 }}
        className="bg-[#F7F4EE] max-w-md w-full p-8 rounded-[2px] border border-[#25201B]/10 relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#141311] hover:text-[#735E4B] p-1 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="editorial-label text-[#9E7D58] mb-2 block">
          {material.category} · Malzeme Kartı
        </span>
        <h3 className="serif-title text-3xl text-[#141311] mb-3">
          {material.title}
        </h3>
        <p className="text-sm text-[#25201B]/80 leading-relaxed font-light mb-6">
          {material.desc}
        </p>

        <div className="pt-4 border-t border-[#25201B]/10 text-xs text-[#735E4B]">
          <span className="font-semibold block uppercase tracking-wider mb-1">
            Köken / Kaynak:
          </span>
          <span className="text-[#25201B]/70">{material.origin}</span>
        </div>
      </motion.div>
    </div>
  );
}
