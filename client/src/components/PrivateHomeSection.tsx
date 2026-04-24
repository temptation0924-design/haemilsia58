/*
 * Private Home Section — 주인 부부의 감성 스토리
 * Location과 CTA 사이에 배치. 편지글 같은 이탈릭 톤.
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function PrivateHomeSection() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16"
      style={{ backgroundColor: "#F5F1EA" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-[11px] sm:text-[12px] tracking-[0.4em] uppercase text-[#9A8E82] mb-6"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          A Private Home
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-12 h-[1px] bg-[#C8B89A]/60 mx-auto mb-10 sm:mb-14"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-[#5C5147] text-[16px] sm:text-[19px] lg:text-[21px] leading-[2.2] tracking-[0.03em] italic"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, wordBreak: "keep-all" }}
        >
          해밀시아 58은 본래,<br />
          이재수·최숙영 부부가 머무는<br />
          실제 개인 주택입니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-8 sm:mt-10 text-[#7A6E62] text-[14px] sm:text-[16px] lg:text-[17px] leading-[2.1] tracking-[0.03em]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
        >
          오래도록 머물며 가꿔온 삶의 온기,<br />
          손때 묻은 디테일과 다정한 공기가<br />
          공간의 결마다 고요히 배어 있습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="w-8 h-[1px] bg-[#C8B89A]/60 mx-auto my-10 sm:my-14"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="text-[#5C5147] text-[15px] sm:text-[18px] lg:text-[19px] leading-[2.2] tracking-[0.04em] italic"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, wordBreak: "keep-all" }}
        >
          그 따뜻한 일상을,<br />
          이제 당신의 장면에 잠시 빌려드립니다.
        </motion.p>
      </div>
    </section>
  );
}
