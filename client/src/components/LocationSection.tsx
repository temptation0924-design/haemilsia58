/*
 * LocationSection — 찾아오는 길
 * Design: "Quiet Luxury" — Old Money Minimalism
 * 구글맵 제거, 감각적인 길안내 + 강남 기준 경로 + 200평 무료주차 + 사업자 정보
 */

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Copy, Check, Navigation, Car, ParkingCircle, Clock, MapPin, Phone, ArrowRight } from "lucide-react";

const ADDRESS = "경기도 화성시 남양읍 역골동로 32-6";

export default function LocationSection() {
  const [ref, isInView] = useInView({ threshold: 0.08 });
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = useCallback(() => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleOpenNavi = useCallback(() => {
    window.open(
      `https://map.naver.com/v5/search/${encodeURIComponent(ADDRESS)}`,
      "_blank"
    );
  }, []);

  return (
    <section
      id="location"
      ref={ref}
      className="py-20 sm:py-28 lg:py-44 px-5 sm:px-10"
      style={{ backgroundColor: "#FDFCFA" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-14 sm:mb-18 lg:mb-24"
        >
          <p
            className="text-[11px] sm:text-[12px] tracking-[0.35em] uppercase mb-5 sm:mb-6 text-[#9A8E82]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Location
          </p>
          <h2
            className="font-serif text-[#4A3F35] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] sm:tracking-[0.06em] mb-5 sm:mb-6"
            style={{ fontWeight: 300 }}
          >
            찾아오는 길
          </h2>
          <p
            className="text-[#8A7E72] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] sm:leading-[1.9]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            서울 강남에서 약 50분, 도심 속 번잡함을 벗어나 만나는 프라이빗 대저택
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">

          {/* Left: 주소 & 경로 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            {/* Address Card */}
            <div
              className="p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0D4" }}
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-[#C8B89A]/40 rounded-full">
                  <MapPin size={15} strokeWidth={1.2} className="text-[#8A7E72] sm:w-4 sm:h-4" />
                </div>
                <h3
                  className="font-serif text-[#4A3F35] text-lg sm:text-xl tracking-[0.06em]"
                  style={{ fontWeight: 400 }}
                >
                  스튜디오 주소
                </h3>
              </div>
              <p
                className="text-[#4A3F35] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] mb-1"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
              >
                {ADDRESS}
              </p>
              <p
                className="text-[#9A8E82] text-[12px] sm:text-[13px] leading-[1.8] mb-6 sm:mb-7"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                1층 단독주택 (대저택 전체 독립 사용)
              </p>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-[12px] tracking-[0.08em] sm:tracking-[0.1em] px-5 py-3 border border-[#E8E0D4] text-[#6B6058] hover:border-[#C8B89A] hover:text-[#4A3F35] active:border-[#C8B89A] active:text-[#4A3F35] transition-all duration-500"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {copied ? (
                    <>
                      <Check size={13} strokeWidth={1.5} />
                      복사됨
                    </>
                  ) : (
                    <>
                      <Copy size={13} strokeWidth={1.3} />
                      주소 복사
                    </>
                  )}
                </button>
                <button
                  onClick={handleOpenNavi}
                  className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-[12px] tracking-[0.08em] sm:tracking-[0.1em] px-5 py-3 bg-[#4A3F35] text-[#FAF8F4]/90 hover:bg-[#5A4F45] active:bg-[#5A4F45] transition-all duration-500"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  <Navigation size={13} strokeWidth={1.3} />
                  네이버 지도
                </button>
              </div>
            </div>

            {/* 강남 기준 경로 안내 */}
            <div
              className="p-6 sm:p-8 lg:p-10"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0D4" }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-7">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-[#C8B89A]/40 rounded-full">
                  <Car size={15} strokeWidth={1.2} className="text-[#8A7E72] sm:w-4 sm:h-4" />
                </div>
                <h3
                  className="font-serif text-[#4A3F35] text-lg sm:text-xl tracking-[0.06em]"
                  style={{ fontWeight: 400 }}
                >
                  강남에서 오시는 길
                </h3>
              </div>

              {/* Route Steps */}
              <div className="space-y-0">
                {/* Step 1 */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4A3F35] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#FAF8F4] text-[10px] sm:text-[11px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>1</span>
                    </div>
                    <div className="w-[1px] h-full min-h-[40px] bg-[#E8E0D4] my-1.5" />
                  </div>
                  <div className="pb-5 sm:pb-6">
                    <p
                      className="text-[#4A3F35] text-[13px] sm:text-[14px] mb-1"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
                    >
                      강남역 출발
                    </p>
                    <p
                      className="text-[#9A8E82] text-[11px] sm:text-[12px] leading-[1.7]"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                    >
                      경부고속도로 → 신갈JC 방면 진입
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4A3F35] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#FAF8F4] text-[10px] sm:text-[11px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>2</span>
                    </div>
                    <div className="w-[1px] h-full min-h-[40px] bg-[#E8E0D4] my-1.5" />
                  </div>
                  <div className="pb-5 sm:pb-6">
                    <p
                      className="text-[#4A3F35] text-[13px] sm:text-[14px] mb-1"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
                    >
                      수원신갈IC 경유
                    </p>
                    <p
                      className="text-[#9A8E82] text-[11px] sm:text-[12px] leading-[1.7]"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                    >
                      봉담과천로 → 서해안고속도로(비봉IC) 방면
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4A3F35] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#FAF8F4] text-[10px] sm:text-[11px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>3</span>
                    </div>
                    <div className="w-[1px] h-full min-h-[40px] bg-[#E8E0D4] my-1.5" />
                  </div>
                  <div className="pb-5 sm:pb-6">
                    <p
                      className="text-[#4A3F35] text-[13px] sm:text-[14px] mb-1"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
                    >
                      비봉IC 진출
                    </p>
                    <p
                      className="text-[#9A8E82] text-[11px] sm:text-[12px] leading-[1.7]"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                    >
                      남양 방면 우회전 → 현대기아로 직진
                    </p>
                  </div>
                </div>

                {/* Step 4 - Final */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C8B89A] flex items-center justify-center flex-shrink-0">
                      <MapPin size={12} strokeWidth={1.5} className="text-[#FFFFFF] sm:w-[13px] sm:h-[13px]" />
                    </div>
                  </div>
                  <div>
                    <p
                      className="text-[#4A3F35] text-[13px] sm:text-[14px] mb-1"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
                    >
                      해밀시아 58 도착
                    </p>
                    <p
                      className="text-[#9A8E82] text-[11px] sm:text-[12px] leading-[1.7]"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                    >
                      역골동로 32-6 (1층 단독주택)
                    </p>
                  </div>
                </div>
              </div>

              {/* Travel Time Badge */}
              <div className="mt-6 sm:mt-8 flex items-center gap-3 p-4 sm:p-5" style={{ backgroundColor: "#FAF8F4", border: "1px solid #E8E0D4" }}>
                <Clock size={16} strokeWidth={1.2} className="text-[#C8B89A] flex-shrink-0" />
                <div>
                  <p
                    className="text-[#4A3F35] text-[13px] sm:text-[14px]"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
                  >
                    강남역 기준 약 <span className="text-[#C8B89A]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "16px" }}>50</span>분 소요
                  </p>
                  <p
                    className="text-[#9A8E82] text-[11px] sm:text-[12px] mt-0.5"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                  >
                    비혼잡 시간대 기준 · 네비게이션 '역골동로 32-6' 검색
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 주차 안내 + 연락처 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* 주차 안내 - 매력적인 카드 */}
            <div
              className="p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 relative overflow-hidden"
              style={{ backgroundColor: "#4A3F35" }}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 opacity-[0.04]" style={{ background: "radial-gradient(circle at top right, #C8B89A, transparent)" }} />
              
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-[#C8B89A]/30 rounded-full">
                  <ParkingCircle size={15} strokeWidth={1.2} className="text-[#C8B89A] sm:w-4 sm:h-4" />
                </div>
                <h3
                  className="font-serif text-[#FAF8F4]/90 text-lg sm:text-xl tracking-[0.06em]"
                  style={{ fontWeight: 400 }}
                >
                  주차 안내
                </h3>
              </div>

              {/* 200평 강조 */}
              <div className="mb-6 sm:mb-8">
                <p className="flex items-baseline gap-2 mb-2">
                  <span
                    className="text-[#C8B89A] text-4xl sm:text-5xl lg:text-6xl"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: "italic" }}
                  >
                    200
                  </span>
                  <span
                    className="text-[#FAF8F4]/60 text-sm sm:text-base"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                  >
                    평 규모
                  </span>
                </p>
                <p
                  className="text-[#FAF8F4]/80 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.9] mb-3"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  넉넉한 무료 전용 주차장 완비
                </p>
              </div>

              {/* 주차 상세 */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 p-3.5 sm:p-4" style={{ backgroundColor: "rgba(250, 248, 244, 0.06)", border: "1px solid rgba(200, 184, 154, 0.12)" }}>
                  <ArrowRight size={12} strokeWidth={1.5} className="text-[#C8B89A] mt-0.5 flex-shrink-0" />
                  <p
                    className="text-[#FAF8F4]/65 text-[12px] sm:text-[13px] leading-[1.7]"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                  >
                    촬영 장비차, 스태프 차량, 모델 차량까지 여유롭게 주차 가능
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 sm:p-4" style={{ backgroundColor: "rgba(250, 248, 244, 0.06)", border: "1px solid rgba(200, 184, 154, 0.12)" }}>
                  <ArrowRight size={12} strokeWidth={1.5} className="text-[#C8B89A] mt-0.5 flex-shrink-0" />
                  <p
                    className="text-[#FAF8F4]/65 text-[12px] sm:text-[13px] leading-[1.7]"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                  >
                    5톤 트럭, 대형 촬영 차량 진입 가능한 넓은 진입로
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 sm:p-4" style={{ backgroundColor: "rgba(250, 248, 244, 0.06)", border: "1px solid rgba(200, 184, 154, 0.12)" }}>
                  <ArrowRight size={12} strokeWidth={1.5} className="text-[#C8B89A] mt-0.5 flex-shrink-0" />
                  <p
                    className="text-[#FAF8F4]/65 text-[12px] sm:text-[13px] leading-[1.7]"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                  >
                    주차 비용 무료 — 별도 요금 없이 이용 시간 내 자유 주차
                  </p>
                </div>
              </div>

              {/* 촬영팀 어필 문구 */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6" style={{ borderTop: "1px solid rgba(200, 184, 154, 0.15)" }}>
                <p
                  className="text-[#C8B89A]/80 text-[12px] sm:text-[13px] leading-[1.9] italic"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  "대규모 촬영팀도 주차 걱정 없이 오실 수 있습니다.<br />
                  장비 하역부터 차량 정리까지, 넉넉한 공간이 기다립니다."
                </p>
              </div>
            </div>

            {/* 전화 문의 카드 */}
            <div
              className="p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0D4" }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-[#C8B89A]/40 rounded-full">
                  <Phone size={15} strokeWidth={1.2} className="text-[#8A7E72] sm:w-4 sm:h-4" />
                </div>
                <h3
                  className="font-serif text-[#4A3F35] text-lg sm:text-xl tracking-[0.06em]"
                  style={{ fontWeight: 400 }}
                >
                  문의 및 예약
                </h3>
              </div>
              <a
                href="tel:010-4819-9078"
                className="inline-flex items-center gap-2 text-[#4A3F35] text-[16px] sm:text-[18px] lg:text-[20px] hover:text-[#C8B89A] transition-colors duration-500"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.08em" }}
              >
                010-4819-9078
              </a>
              <p
                className="text-[#9A8E82] text-[11px] sm:text-[12px] mt-2 leading-[1.7]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                전화 상담을 통해 일정과 맞춤 견적을 안내해 드립니다.
              </p>
            </div>

            {/* 네이버 블로그 */}
            <div
              className="p-6 sm:p-8 lg:p-10"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0D4" }}
            >
              <p
                className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C8B89A] mb-3 sm:mb-4"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                Blog
              </p>
              <a
                href="https://blog.naver.com/haemilsia2277"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B6058] text-[13px] sm:text-[14px] hover:text-[#4A3F35] transition-colors duration-500 flex items-center gap-2"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                blog.naver.com/haemilsia2277
                <ArrowRight size={13} strokeWidth={1.3} />
              </a>
              <p
                className="text-[#9A8E82] text-[11px] sm:text-[12px] mt-2 leading-[1.7]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                더 많은 공간 사진과 촬영 사례를 확인하세요.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
