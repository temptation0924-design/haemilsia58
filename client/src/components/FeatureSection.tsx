import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Sun, VolumeX, Maximize, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "풍부한 자연광",
    description: "커다란 창을 통해 쏟아지는 자연광부터 인공조명까지, 촬영에 최적화된 조명 환경을 제공합니다.",
  },
  {
    icon: VolumeX,
    title: "완벽한 방음",
    description: "외부 소음을 완벽하게 차단하는 방음 설계로, 오롯이 촬영에만 몰입할 수 있는 환경입니다.",
  },
  {
    icon: Maximize,
    title: "대저택 스케일",
    description: "높은 천장과 웅장한 개방감의 대저택 구조로, 드라마틱한 공간 연출이 가능합니다.",
  },
  {
    icon: Sparkles,
    title: "큐레이션 된 인테리어",
    description: "유럽풍 빈티지 가구와 대리석, 원목이 어우러진 고급 인테리어와 디테일한 소품을 완비했습니다.",
  },
];

const useCases = [
  "유튜브 콘텐츠",
  "광고 및 바이럴 영상",
  "드라마 및 단편 영화",
  "룩북",
  "인터뷰",
  "졸업작품",
];

export default function FeatureSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 sm:py-28 lg:py-44 px-5 sm:px-10"
      style={{ backgroundColor: "#FAF8F4" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-14 sm:mb-20 lg:mb-24"
        >
          <p
            className="text-[11px] sm:text-[12px] tracking-[0.35em] uppercase mb-5 sm:mb-6 text-[#9A8E82]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Why Haemilsia
          </p>
          <h2
            className="font-serif text-[#4A3F35] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] sm:tracking-[0.06em]"
            style={{ fontWeight: 300 }}
          >
            Crafted for Creators
          </h2>
        </motion.div>

        {/* Feature grid - 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-x-16 lg:gap-x-24 sm:gap-y-16 lg:gap-y-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
              className="text-center relative"
            >
              <div className="flex justify-center mb-5 sm:mb-7">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-[#C8B89A]/40 rounded-full">
                  <feature.icon
                    size={20}
                    strokeWidth={1.2}
                    className="text-[#8A7E72] sm:w-[22px] sm:h-[22px]"
                  />
                </div>
              </div>
              <h3
                className="font-serif text-[#4A3F35] text-lg sm:text-xl md:text-2xl tracking-[0.06em] mb-3 sm:mb-5"
                style={{ fontWeight: 400 }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#6B6058] text-[13px] sm:text-[14px] leading-[1.8] sm:leading-[1.9] tracking-[0.01em] max-w-[280px] sm:max-w-xs mx-auto"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Usage types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 lg:mt-28 text-center"
        >
          <div className="w-8 sm:w-10 h-[1px] bg-[#C8B89A] mx-auto mb-8 sm:mb-12" />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-y-3">
            {useCases.map((item, i) => (
              <span key={item} className="flex items-center gap-2 sm:gap-3">
                <span
                  className="text-[12px] sm:text-[13px] tracking-[0.08em] sm:tracking-[0.1em] text-[#8A7E72]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {item}
                </span>
                {i < useCases.length - 1 && (
                  <span className="text-[#C8B89A]/60 text-[10px]">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
