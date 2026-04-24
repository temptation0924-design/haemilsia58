/*
 * Gallery Section — Grid Layout
 * Design: "Quiet Luxury" — Asymmetric masonry-style grid
 * All images visible at once, no horizontal scroll needed
 * NOTE: No duplicate images with Hero, Intro, SpacePreview, or CTA sections
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/manus-storage/IMG_5411_623496da.webp", alt: "소나무 정원과 자갈길", span: "large" },
  { src: "/manus-storage/IMG_5425_e95a0793.webp", alt: "테라스 라운지 야경", span: "small" },
  { src: "/manus-storage/IMG_5415_6780e7e5.webp", alt: "중정과 건물 외관", span: "small" },
  { src: "/manus-storage/IMG_5431_869b8979.webp", alt: "정원 전경", span: "large" },
  { src: "/manus-storage/IMG_5421_d848cd22.webp", alt: "정원 야경", span: "small" },
  { src: "/manus-storage/IMG_5427_4c2257b9.webp", alt: "퍼골라 라운지", span: "small" },
  { src: "/manus-storage/IMG_5453_a43accd2.webp", alt: "야외 다이닝", span: "small" },
  { src: "/manus-storage/IMG_5417_0e5fe16f.webp", alt: "정원 카페 테이블", span: "small" },
  { src: "/manus-storage/IMG_5436_4e45df93.webp", alt: "한옥 정자", span: "large" },
  { src: "/manus-storage/IMG_5419_ac358a87.webp", alt: "정원과 건물 전경", span: "large" },
  { src: "/manus-storage/IMG_5428_f079d681.webp", alt: "야외 테라스 전경", span: "small" },
  { src: "/manus-storage/IMG_5455_b620b187.webp", alt: "정원 그네", span: "small" },
];

export default function GalleryStrip() {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16"
        style={{ backgroundColor: "#FAF8F4" }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p
            className="text-[11px] sm:text-[12px] tracking-[0.35em] uppercase text-[#9A8E82] mb-4 sm:mb-6"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Gallery
          </p>
          <h2
            className="text-[28px] sm:text-[36px] lg:text-[42px] text-[#4A3F35] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            공간의 순간들
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.08,
                  ease: "easeOut",
                }}
                className={`relative overflow-hidden group cursor-pointer ${
                  img.span === "large"
                    ? "col-span-2 md:col-span-2 aspect-[16/9]"
                    : "col-span-1 aspect-[3/4]"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                  loading="eager"
                />
                {/* Hover overlay — desktop */}
                <div className="absolute inset-0 bg-[#4A3F35]/0 group-hover:bg-[#4A3F35]/25 transition-all duration-700 hidden md:flex items-end">
                  <div className="w-full p-4 lg:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p
                      className="text-white text-[12px] lg:text-[13px] tracking-[0.15em]"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                    >
                      {img.alt}
                    </p>
                  </div>
                </div>
                {/* Mobile caption — always visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-2.5 sm:p-3 md:hidden">
                  <p
                    className="text-white/85 text-[10px] sm:text-[11px] tracking-[0.08em]"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                  >
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p
                className="text-center text-white/60 text-[12px] sm:text-[13px] tracking-[0.15em] mt-4"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
