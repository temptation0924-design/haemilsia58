import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const spaces = [
  {
    title: "The Grand Living & Dining",
    subtitle: "거실 및 다이닝",
    description: "자연광이 쏟아지는 대리석 다이닝과 모던 럭셔리의 조화. 웅장한 스케일의 라이프스타일 씬을 연출해 보세요.",
    image: "/manus-storage/IMG_5399_b830fbe1.webp",
  },
  {
    title: "Vintage Kitchen",
    subtitle: "주방",
    description: "고급스러운 빌트인과 디테일한 소품들. 생활감이 묻어나는 따뜻하고 세련된 주방의 모습을 담아냅니다.",
    image: "/manus-storage/IMG_5405_6f5d3436.webp",
  },
  {
    title: "Living Room",
    subtitle: "거실 공간",
    description: "모던한 조명과 넓은 공간이 만들어내는 감성. 인터뷰나 룩북 촬영에 깊이를 더해주는 프라이빗한 공간입니다.",
    image: "/manus-storage/IMG_5392_8f246539.webp",
  },
  {
    title: "Outdoor Terrace & Garden",
    subtitle: "야외 테라스 및 정원",
    description: "한국식 정원의 고즈넉함과 모던한 테라스의 만남. 실내와는 또 다른 다채로운 야외 씬을 제공합니다.",
    image: "/manus-storage/IMG_5414_d8153493.webp",
  },
];

export default function SpacePreview() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="space"
      ref={ref}
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-10"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-20"
        >
          <p
            className="text-[12px] tracking-[0.35em] uppercase mb-6 text-[#9A8E82]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Our Spaces
          </p>
          <h2
            className="font-serif text-[#4A3F35] text-3xl sm:text-4xl lg:text-5xl tracking-[0.06em]"
            style={{ fontWeight: 300 }}
          >
            Curated Spaces
          </h2>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          {/* Large: Living & Dining - spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="md:col-span-7 group relative overflow-hidden cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={spaces[0].image}
                alt={spaces[0].subtitle}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex flex-col items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-center px-8">
                  <p className="text-white font-serif text-2xl sm:text-3xl tracking-[0.08em] mb-3" style={{ fontWeight: 300 }}>
                    {spaces[0].title}
                  </p>
                  <p className="text-white/70 text-[13px] tracking-[0.15em] uppercase mb-4" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                    {spaces[0].subtitle}
                  </p>
                  <div className="w-8 h-[1px] bg-white/40 mx-auto mb-4" />
                  <p className="text-white/80 text-[13px] sm:text-[14px] leading-relaxed max-w-sm mx-auto" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}>
                    {spaces[0].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: Kitchen + Living Room stacked */}
          <div className="md:col-span-5 flex flex-col gap-4 lg:gap-5">
            {[1, 2].map((idx) => (
              <motion.div
                key={spaces[idx].title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                className="group relative overflow-hidden cursor-pointer flex-1"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={spaces[idx].image}
                    alt={spaces[idx].subtitle}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex flex-col items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-center px-6">
                      <p className="text-white font-serif text-xl sm:text-2xl tracking-[0.08em] mb-2" style={{ fontWeight: 300 }}>
                        {spaces[idx].title}
                      </p>
                      <p className="text-white/70 text-[12px] tracking-[0.15em] uppercase mb-3" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                        {spaces[idx].subtitle}
                      </p>
                      <div className="w-6 h-[1px] bg-white/40 mx-auto mb-3" />
                      <p className="text-white/80 text-[12px] sm:text-[13px] leading-relaxed max-w-xs mx-auto" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}>
                        {spaces[idx].description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full width: Outdoor Terrace */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.75, ease: "easeOut" }}
            className="md:col-span-12 group relative overflow-hidden cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[21/8]">
              <img
                src={spaces[3].image}
                alt={spaces[3].subtitle}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex flex-col items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-center px-8">
                  <p className="text-white font-serif text-2xl sm:text-3xl tracking-[0.08em] mb-3" style={{ fontWeight: 300 }}>
                    {spaces[3].title}
                  </p>
                  <p className="text-white/70 text-[13px] tracking-[0.15em] uppercase mb-4" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}>
                    {spaces[3].subtitle}
                  </p>
                  <div className="w-8 h-[1px] bg-white/40 mx-auto mb-4" />
                  <p className="text-white/80 text-[13px] sm:text-[14px] leading-relaxed max-w-sm mx-auto" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}>
                    {spaces[3].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
