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
          className="text-[11px] sm:text-[12px] tracking-[0.35em] uppercase mb-8 sm:mb-10 text-[#9A8E82] text-center"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          About the Studio
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-[#4A3F35] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] sm:tracking-[0.06em] mb-10 sm:mb-14 text-center"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden">
              <img
                src="/manus-storage/IMG_5401_7e0eb858.webp"
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
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <p
              className="text-[#5C5147] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.9] sm:leading-[2.1] tracking-[0.02em]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
            >
              해밀시아 58 스튜디오는 경기도 화성에 자리한
              프라이빗 고급 대저택형 촬영 공간입니다.
            </p>
            <p
              className="text-[#5C5147] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.9] sm:leading-[2.1] tracking-[0.02em]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
            >
              문을 여는 순간 펼쳐지는 높은 천장과 웅장한 개방감,
              그리고 커다란 창을 통해 쏟아지는 풍부한 자연광은
              어떤 촬영이든 완벽한 미장센을 완성해 줍니다.
              세심하게 큐레이션 된 유럽풍 빈티지 가구와 대리석, 원목이 어우러진
              인테리어는 공간 곳곳에 따뜻하고 고급스러운 숨결을 불어넣습니다.
            </p>
            <p
              className="text-[#5C5147] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.9] sm:leading-[2.1] tracking-[0.02em]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
            >
              우리는 창작자가 오직 결과물에만 집중할 수 있는 환경을 고민했습니다.
              외부 소음이 완벽히 차단된 프라이빗한 공간에서,
              광고부터 드라마, 유튜브 콘텐츠까지
              당신이 상상했던 모든 장면을 현실로 만들어 보세요.
            </p>

            {/* Key stats - responsive grid */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-4 sm:gap-0 sm:flex sm:flex-wrap sm:gap-12">
              <div>
                <p className="font-serif text-[#4A3F35] text-2xl sm:text-3xl tracking-[0.04em]" style={{ fontWeight: 300 }}>
                  58
                  <span className="text-base sm:text-lg ml-1">평</span>
                </p>
                <p className="text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.15em] mt-1" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                  전용 면적
                </p>
              </div>
              <div>
                <p className="font-serif text-[#4A3F35] text-2xl sm:text-3xl tracking-[0.04em]" style={{ fontWeight: 300 }}>
                  100%
                </p>
                <p className="text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.15em] mt-1" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                  프라이빗 독점
                </p>
              </div>
              <div>
                <p className="font-serif text-[#4A3F35] text-2xl sm:text-3xl tracking-[0.04em]" style={{ fontWeight: 300 }}>
                  1F
                </p>
                <p className="text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.15em] mt-1" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
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
