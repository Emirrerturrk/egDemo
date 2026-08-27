"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      if (target) {
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-dark-brown rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none text-white uppercase text-[9px] tracking-widest font-semibold text-center border"
        animate={{
          x: mousePosition.x - (isHovered ? 40 : 20),
          y: mousePosition.y - (isHovered ? 40 : 20),
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
          backgroundColor: isHovered ? "rgba(20, 19, 17, 0.9)" : "rgba(37, 32, 27, 0.04)",
          borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(37, 32, 27, 0.25)",
          backdropFilter: isHovered ? "blur(6px)" : "blur(0px)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.15 }}
      >
        {isHovered && <span>{cursorText}</span>}
      </motion.div>
    </div>
  );
}
