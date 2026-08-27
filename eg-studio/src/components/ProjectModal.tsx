"use client";

import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectItem } from "./Projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartInquiry: (title: string) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onStartInquiry,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#F7F4EE] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2px] border border-white/20 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#141311] hover:text-[#735E4B] p-1 z-20 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 relative aspect-[4/3] rounded-[2px] overflow-hidden shadow-md">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-5">
              <span className="editorial-label text-[#9E7D58] block mb-1">
                {project.categoryLabel}
              </span>
              <h2 className="serif-title text-3xl md:text-4xl text-[#141311] font-normal mb-2">
                {project.title}
              </h2>
              <p className="text-xs text-[#735E4B] mb-4">
                {project.location} · {project.year} · {project.area}
              </p>
              <p className="text-xs md:text-sm text-[#25201B]/80 leading-relaxed font-light mb-6">
                {project.description}
              </p>

              <div className="border-t border-[#25201B]/10 pt-4 space-y-2 mb-6">
                {project.details.map((d, i) => (
                  <p key={i} className="text-xs text-[#25201B] flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D58] mr-2 flex-shrink-0" />
                    {d}
                  </p>
                ))}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onStartInquiry(`Proje Görüşmesi: ${project.title}`);
                }}
                className="w-full text-center text-xs uppercase tracking-widest bg-[#25201B] text-[#F7F4EE] py-3.5 rounded-full hover:bg-[#735E4B] transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Bu Proje Benzeri Talep Başlat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
