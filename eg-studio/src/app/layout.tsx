import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mimar Ezgi Güven | Mimarlık & İç Mimarlık Stüdyosu",
  description: "Mimar Ezgi Güven Mimarlık ve İç Mimarlık Stüdyosu. Doğal malzemeler, heykelsi formlar ve zamansız yaşam alanları.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#F7F4EE] text-[#141311] font-sans antialiased selection:bg-[#735E4B] selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
