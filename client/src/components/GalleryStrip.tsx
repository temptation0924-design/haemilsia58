/*
 * Gallery Section — Grid Layout
 * Design: "Quiet Luxury" — Asymmetric masonry-style grid
 * All images visible at once, no horizontal scroll needed
 * Updated: Added interior photos (bedroom, living room, dressing room, bathroom, aerial)
 * NOTE: No duplicate images with Hero, Intro, SpacePreview, or CTA sections
 */

import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// 갤러리 중간 감성 카피 (3장마다 1개 노출)
const interstitialQuotes = [
  { line1: "빛과 그림자가", line2: "풍경을 그려내는 자리" },
  { line1: "자연의 숨결이", line2: "시간을 어루만지는 순간" },
  { line1: "침묵 속에서도", line2: "공간은 이야기를 건넵니다" },
  { line1: "작은 빛 하나가", line2: "하루를 완성하는 오후" },
  { line1: "머무는 모든 발걸음이", line2: "이곳의 시가 됩니다" },
];

const galleryImages = [
  // Outdoor
  { src: "/images/IMG_6400.webp", alt: "소나무 정원의 봄 꽃잔디와 그네 벤치", span: "large" },
  { src: "/images/IMG_5425.webp", alt: "테라스 라운지 야경", span: "small" },
  { src: "/images/IMG_6399.webp", alt: "중정과 건물 외관", span: "small" },
  // Interior - Living Room
  { src: "/images/haemilsia_new_10.webp", alt: "거실 라운지", span: "large" },
  // Outdoor
  { src: "/images/IMG_5421.webp", alt: "정원 야경", span: "small" },
  // Interior - Bedroom detail
  { src: "/images/haemilsia_new_07.webp", alt: "침실 PH5 조명 디테일", span: "small" },
  // Interior - Bedroom with garden view
  { src: "/images/haemilsia_new_06.webp", alt: "침실 정원 뷰", span: "small" },
  // Outdoor
  { src: "/images/IMG_5427.webp", alt: "퍼골라 라운지", span: "small" },
  // Interior - Coral Dressing Room
  { src: "/images/haemilsia_new_04.webp", alt: "코랄 드레스룸", span: "large" },
  // Interior - White Bedroom
  { src: "/images/haemilsia_new_03.webp", alt: "화이트 침실", span: "small" },
  // Outdoor
  { src: "/images/IMG_6392.webp", alt: "정원 카페 테이블", span: "small" },
  // Outdoor
  { src: "/images/IMG_5436.webp", alt: "한옥 정자", span: "large" },
  // Interior - Bathroom
  { src: "/images/haemilsia_new_13.webp", alt: "대리석 욕실", span: "small" },
  // Interior - Corridor
  { src: "/images/haemilsia_new_12.webp", alt: "코랄 복도", span: "small" },
  // Outdoor
  { src: "/images/IMG_6419.webp", alt: "정원과 건물 전경", span: "large" },
  // Interior - Pink hallway
  { src: "/images/haemilsia_new_05.webp", alt: "핑크 타일 현관", span: "small" },
  // Outdoor
  { src: "/images/IMG_5428.webp", alt: "야외 테라스 전경", span: "small" },
  // Aerial - Night
  { src: "/images/haemilsia_new_01.webp", alt: "스튜디오 항공 야경", span: "large" },
  { src: "/images/IMG_5453.webp", alt: "야외 다이닝", span: "small" },
  { src: "/images/IMG_6412.webp", alt: "정원 그네", span: "small" },
];

export default function GalleryStrip() {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

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
          className="text-center mb-14 sm:mb-20"
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

          {/* 감성 서브 라인 */}
          <div className="w-10 sm:w-14 h-[1px] bg-[#C8B89A]/50 mx-auto my-6 sm:my-8" />

          <p
            className="text-[#7A6E62] text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.03em] leading-[2]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
          >
            빛이 머무는 자리마다<br />
            이야기가 태어납니다.
          </p>
          <p
            className="mt-6 sm:mt-8 text-[#9A8E82] text-[12px] sm:text-[13px] tracking-[0.04em] leading-[1.9]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
          >
            실내와 야외, 낮과 밤이<br />
            만들어내는 다채로운 장면들을 담았습니다.
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((img, i) => {
              // 3장마다 감성 카피 삽입 (index 3, 6, 9, 12, 15)
              const quoteIndex = i > 0 && i % 3 === 0 ? Math.floor(i / 3) - 1 : -1;
              const quote = quoteIndex >= 0 && quoteIndex < interstitialQuotes.length
                ? interstitialQuotes[quoteIndex]
                : null;

              return (
                <Fragment key={i}>
                  {quote && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, delay: 0.3 + i * 0.06 }}
                      className="col-span-2 md:col-span-3 py-10 sm:py-14 lg:py-20 flex flex-col items-center justify-center"
                    >
                      <div className="w-8 sm:w-10 h-[1px] bg-[#C8B89A]/50 mb-6 sm:mb-8" />
                      <p
                        className="text-[#5C5147] text-[15px] sm:text-[18px] lg:text-[20px] tracking-[0.04em] leading-[2] italic text-center"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, wordBreak: "keep-all" }}
                      >
                        {quote.line1}<br />
                        {quote.line2}
                      </p>
                      <div className="w-8 sm:w-10 h-[1px] bg-[#C8B89A]/50 mt-6 sm:mt-8" />
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.06,
                      ease: "easeOut",
                    }}
                    className={`relative overflow-hidden group cursor-pointer aspect-[3/2] ${
                      img.span === "large"
                        ? "col-span-2 md:col-span-1"
                        : "col-span-1"
                    }`}
                    onClick={() => openLightbox(i)}
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
                </Fragment>
              );
            })}
          </div>

          {/* Closing quote — 감성 마무리 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 sm:mt-28 text-center max-w-xl mx-auto"
          >
            <div className="w-10 h-[1px] bg-[#C8B89A]/50 mx-auto mb-8" />
            <p
              className="text-[#5C5147] text-[14px] sm:text-[16px] tracking-[0.04em] leading-[2.2] italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, wordBreak: "keep-all" }}
            >
              시간이 머물고,<br />
              빛이 춤추고,<br />
              공간이 당신의 이야기를 기다립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal with Navigation */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1} />
            </button>

            {/* Previous button */}
            <button
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1} />
            </button>

            {/* Next button */}
            <button
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-center mt-4">
                <p
                  className="text-white/60 text-[12px] sm:text-[13px] tracking-[0.15em]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {galleryImages[selectedIndex].alt}
                </p>
                <p
                  className="text-white/30 text-[11px] mt-1"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
