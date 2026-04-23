import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const galleryImages = [
  { src: "/manus-storage/IMG_5419_ac358a87.webp", alt: "다이닝 공간" },
  { src: "/manus-storage/IMG_5453_a43accd2.webp", alt: "야외 정원" },
  { src: "/manus-storage/IMG_5427_4c2257b9.webp", alt: "침실 공간" },
  { src: "/manus-storage/IMG_5436_4e45df93.webp", alt: "야외 테라스" },
  { src: "/manus-storage/IMG_5417_0e5fe16f.webp", alt: "거실 디테일" },
  { src: "/manus-storage/IMG_5430_10aa35ec.webp", alt: "인테리어 디테일" },
  { src: "/manus-storage/IMG_5428_f079d681.webp", alt: "공간 디테일" },
  { src: "/manus-storage/IMG_5455_b620b187.webp", alt: "야외 풍경" },
];

export default function GalleryStrip() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#FAF8F4" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center mb-14 px-6"
      >
        <p
          className="text-[12px] tracking-[0.35em] uppercase text-[#9A8E82]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          Gallery
        </p>
      </motion.div>

      {/* Horizontal scrolling gallery */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="flex gap-4 lg:gap-5 px-6 sm:px-10 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: "easeOut" }}
            className="flex-shrink-0 overflow-hidden group cursor-pointer"
            style={{ width: "clamp(260px, 28vw, 380px)" }}
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-[#4A3F35]/0 group-hover:bg-[#4A3F35]/20 transition-all duration-700 flex items-end">
                <p
                  className="text-white/0 group-hover:text-white/80 transition-all duration-700 text-[12px] tracking-[0.15em] p-5"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {img.alt}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-center mt-8"
      >
        <p
          className="text-[11px] tracking-[0.2em] text-[#C8B89A]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          ← 스크롤하여 더 보기 →
        </p>
      </motion.div>
    </section>
  );
}
