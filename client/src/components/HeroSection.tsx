import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleScroll = () => {
    const el = document.querySelector("#intro");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src="/manus-storage/IMG_5404_6c2f447c.webp"
          alt="해밀시아 스튜디오 다이닝"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-white/70 text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-6 sm:mb-8"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          Private Luxury Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
          className="font-serif text-white text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.06em] sm:tracking-[0.08em] leading-[1.25] sm:leading-[1.2]"
          style={{ fontWeight: 300 }}
        >
          빛이 머무는<br />
          프라이빗 대저택
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="w-10 sm:w-14 h-[1px] bg-[#C8B89A]/60 my-6 sm:my-9"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="text-white/65 text-[13px] sm:text-[14px] md:text-[15px] tracking-[0.03em] sm:tracking-[0.05em] leading-[1.8] sm:leading-[1.9] max-w-[320px] sm:max-w-md"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
        >
          당신의 이야기가 작품이 되는 공간.<br />
          완벽하게 차단된 소음 속에서 오롯이 촬영에만 몰입해 보세요.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors duration-500"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  );
}
