import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function CTASection() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-32 sm:py-40 lg:py-52 px-6 sm:px-10 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/IMG_5397_e4f8c9fd.webp"
          alt="해밀시아 스튜디오"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[12px] tracking-[0.35em] uppercase mb-8 text-[#C8B89A]/70"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          Reservation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl tracking-[0.06em] mb-8 leading-[1.3]"
          style={{ fontWeight: 300 }}
        >
          해밀시아에서<br />
          당신만의 장면을 완성하세요.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-12 h-[1px] bg-[#C8B89A]/50 mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/65 text-[14px] sm:text-[15px] leading-[1.9] mb-14 max-w-md mx-auto"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
        >
          촬영 일정과 공간에 대한 문의는 아래 연락처로 편하게 연락 주세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="tel:010-4819-9078"
            className="inline-block text-[13px] tracking-[0.2em] uppercase px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/50 text-white hover:bg-white hover:text-[#4A3F35] transition-all duration-500"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            전화 문의하기
          </a>
          <a
            href="https://blog.naver.com/haemilsia2277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[13px] tracking-[0.2em] uppercase px-10 py-4 border border-white/25 text-white/75 hover:border-white/60 hover:text-white transition-all duration-500"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            블로그 방문하기
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-[#C8B89A]/50 text-[14px] tracking-[0.15em]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
        >
          010-4819-9078
        </motion.p>
      </div>
    </section>
  );
}
