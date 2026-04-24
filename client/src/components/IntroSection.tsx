import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function IntroSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="intro"
      ref={ref}
      className="py-20 sm:py-28 lg:py-48 px-5 sm:px-10"
      style={{ backgroundColor: "#FAF8F4" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-8 sm:mb-10 text-[#9A8E82] text-center"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          About the Studio
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-[#4A3F35] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] sm:tracking-[0.05em] mb-10 sm:mb-14 text-center"
          style={{ fontWeight: 300 }}
        >
          A Space for Your Masterpiece
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-8 sm:w-10 h-[1px] bg-[#C8B89A] mx-auto mb-12 sm:mb-16"
        />

        {/* Asymmetric layout: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden">
              <img
                src="/images/IMG_5401.webp"
                alt="해밀시아 58 스튜디오 다이닝 공간"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 sm:space-y-8"
          >
            <p
              className="text-[#5C5147] text-[14px] sm:text-[15px] md:text-[16px] leading-[2] sm:leading-[2.2] tracking-[0.02em] text-justify"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
            >
              해밀시아 58 스튜디오는 경기도 화성에 자리한 프라이빗 고급 대저택형 촬영 공간입니다.
            </p>
            <p
              className="text-[#5C5147] text-[14px] sm:text-[15px] md:text-[16px] leading-[2] sm:leading-[2.2] tracking-[0.02em] text-left"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
            >
              문을 여는 순간,<br />
              높은 천장과 웅장한 개방감이 펼쳐집니다.<br />
              커다란 창으로 쏟아지는 풍부한 자연광은<br />
              어떤 촬영이든 완벽한 미장센을 완성합니다.
              <br /><br />
              절제된 라인과 따뜻한 질감이 공존하는<br />
              모던 럭셔리 인테리어.<br />
              대리석의 차분함, 원목의 온기, 섬세한 조명이<br />
              공간 곳곳에 조용한 기품을 더합니다.
            </p>
            <p
              className="text-[#5C5147] text-[14px] sm:text-[15px] md:text-[16px] leading-[2] sm:leading-[2.2] tracking-[0.02em] text-left"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
            >
              우리는 창작자가<br />
              오직 결과물에만 집중할 수 있는 환경을 고민했습니다.
              <br /><br />
              외부 소음이 완벽히 차단된 프라이빗한 공간에서,<br />
              광고부터 드라마, 유튜브 콘텐츠까지<br />
              당신이 상상했던 모든 장면을 현실로 만들어 보세요.
            </p>

            {/* Key stats */}
            <div className="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-left">
                <p className="font-serif text-[#4A3F35] text-2xl sm:text-3xl tracking-[0.03em]" style={{ fontWeight: 300 }}>
                  100
                  <span className="text-base sm:text-lg ml-0.5">평</span>
                </p>
                <p className="text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.1em] mt-1.5" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                  전용 면적
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-[#4A3F35] text-2xl sm:text-3xl tracking-[0.03em]" style={{ fontWeight: 300 }}>
                  350
                  <span className="text-base sm:text-lg ml-0.5">평</span>
                </p>
                <p className="text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.1em] mt-1.5" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                  대지 면적
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-[#4A3F35] text-2xl sm:text-3xl tracking-[0.03em]" style={{ fontWeight: 300 }}>
                  100%
                </p>
                <p className="text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.1em] mt-1.5" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                  프라이빗 독점
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-[#4A3F35] text-2xl sm:text-3xl tracking-[0.03em]" style={{ fontWeight: 300 }}>
                  1F
                </p>
                <p className="text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.1em] mt-1.5" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                  단독 주택
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
