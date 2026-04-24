/*
 * Space Preview Section — Asymmetric Grid
 * Design: "Quiet Luxury" — Curated space showcase
 * Updated: Added interior spaces (living room, bedroom, dressing room, bathroom)
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const spaces = [
  {
    title: "The Grand Living",
    subtitle: "거실",
    description: "양쪽 대형 슬라이딩 도어로 정원이 한눈에 들어오는 넓은 거실. 캐멀 가죽 소파와 간접조명이 만들어내는 모던 럭셔리 공간입니다.",
    image: "/images/haemilsia_new_09.webp",
  },
  {
    title: "The Grand Living & Dining",
    subtitle: "거실 및 다이닝",
    description: "자연광이 쏟아지는 대리석 다이닝과 모던 럭셔리의 조화. 웅장한 스케일의 라이프스타일 씬을 연출해 보세요.",
    image: "/images/IMG_5399.webp",
  },
  {
    title: "Master Bedroom",
    subtitle: "침실",
    description: "오크 원목 바닥과 터프팅 헤드보드, PH5 펜던트 조명이 어우러진 감각적인 침실. 대형 창문 너머 정원 뷰가 펼쳐집니다.",
    image: "/images/haemilsia_new_08.webp",
  },
  {
    title: "Coral Dressing Room",
    subtitle: "드레스룸",
    description: "코랄 핑크 벽면과 화이트 가구가 만들어내는 유니크한 색감. 패션, 뷰티 촬영에 최적화된 감각적인 공간입니다.",
    image: "/images/haemilsia_new_11.webp",
  },
  {
    title: "Vintage Kitchen",
    subtitle: "주방",
    description: "고급스러운 빌트인과 디테일한 소품들. 생활감이 묻어나는 따뜻하고 세련된 주방의 모습을 담아냅니다.",
    image: "/images/IMG_5405.webp",
  },
  {
    title: "Outdoor Terrace & Garden",
    subtitle: "야외 테라스 및 정원",
    description: "한국식 정원의 고즈넉함과 모던한 테라스의 만남. 실내와는 또 다른 다채로운 야외 씬을 제공합니다.",
    image: "/images/IMG_5414.webp",
  },
];

function SpaceCard({
  space,
  aspectClass,
  titleSize,
  subtitleSize,
  descSize,
  delay,
  isInView,
}: {
  space: typeof spaces[0];
  aspectClass: string;
  titleSize: string;
  subtitleSize: string;
  descSize: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <img
          src={space.image}
          alt={space.subtitle}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        {/* Desktop: hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 hidden md:flex flex-col items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-center px-6 sm:px-8">
            <p className={`text-white font-serif ${titleSize} tracking-[0.08em] mb-2 sm:mb-3`} style={{ fontWeight: 300 }}>
              {space.title}
            </p>
            <p className={`text-white/70 ${subtitleSize} tracking-[0.15em] uppercase mb-3 sm:mb-4`} style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
              {space.subtitle}
            </p>
            <div className="w-6 sm:w-8 h-[1px] bg-white/40 mx-auto mb-3 sm:mb-4" />
            <p className={`text-white/80 ${descSize} leading-relaxed max-w-xs sm:max-w-sm mx-auto`} style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}>
              {space.description}
            </p>
          </div>
        </div>
        {/* Mobile: always-visible bottom caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-5 md:hidden">
          <p className="text-white font-serif text-lg tracking-[0.06em] mb-0.5" style={{ fontWeight: 300 }}>
            {space.title}
          </p>
          <p className="text-white/60 text-[11px] tracking-[0.12em] uppercase" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
            {space.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SpacePreview() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="space"
      ref={ref}
      className="py-20 sm:py-28 lg:py-44 px-5 sm:px-10"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p
            className="text-[11px] sm:text-[12px] tracking-[0.35em] uppercase mb-5 sm:mb-6 text-[#9A8E82]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Our Spaces
          </p>
          <h2
            className="font-serif text-[#4A3F35] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] sm:tracking-[0.06em]"
            style={{ fontWeight: 300 }}
          >
            Curated Spaces
          </h2>
        </motion.div>

        {/* Asymmetric Grid Layout - 6 spaces */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
          {/* Row 1: Grand Living (wide) + Dining (narrow) */}
          <div className="md:col-span-7">
            <SpaceCard
              space={spaces[0]}
              aspectClass="aspect-[4/3]"
              titleSize="text-xl sm:text-2xl md:text-3xl"
              subtitleSize="text-[11px] sm:text-[12px] md:text-[13px]"
              descSize="text-[12px] sm:text-[13px] md:text-[14px]"
              delay={0.3}
              isInView={isInView}
            />
          </div>
          <div className="md:col-span-5">
            <SpaceCard
              space={spaces[1]}
              aspectClass="aspect-[4/3]"
              titleSize="text-lg sm:text-xl md:text-2xl"
              subtitleSize="text-[11px] sm:text-[12px]"
              descSize="text-[11px] sm:text-[12px] md:text-[13px]"
              delay={0.45}
              isInView={isInView}
            />
          </div>

          {/* Row 2: Bedroom (narrow) + Dressing Room (narrow) + Kitchen (narrow) */}
          <div className="md:col-span-4">
            <SpaceCard
              space={spaces[2]}
              aspectClass="aspect-[3/4]"
              titleSize="text-lg sm:text-xl md:text-2xl"
              subtitleSize="text-[11px] sm:text-[12px]"
              descSize="text-[11px] sm:text-[12px] md:text-[13px]"
              delay={0.5}
              isInView={isInView}
            />
          </div>
          <div className="md:col-span-4">
            <SpaceCard
              space={spaces[3]}
              aspectClass="aspect-[3/4]"
              titleSize="text-lg sm:text-xl md:text-2xl"
              subtitleSize="text-[11px] sm:text-[12px]"
              descSize="text-[11px] sm:text-[12px] md:text-[13px]"
              delay={0.6}
              isInView={isInView}
            />
          </div>
          <div className="md:col-span-4">
            <SpaceCard
              space={spaces[4]}
              aspectClass="aspect-[3/4]"
              titleSize="text-lg sm:text-xl md:text-2xl"
              subtitleSize="text-[11px] sm:text-[12px]"
              descSize="text-[11px] sm:text-[12px] md:text-[13px]"
              delay={0.7}
              isInView={isInView}
            />
          </div>

          {/* Row 3: Outdoor Terrace - full width panoramic */}
          <div className="md:col-span-12">
            <SpaceCard
              space={spaces[5]}
              aspectClass="aspect-[16/9] md:aspect-[21/8]"
              titleSize="text-xl sm:text-2xl md:text-3xl"
              subtitleSize="text-[11px] sm:text-[12px] md:text-[13px]"
              descSize="text-[12px] sm:text-[13px] md:text-[14px]"
              delay={0.8}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
