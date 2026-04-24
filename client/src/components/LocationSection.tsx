/*
 * LocationSection — 찾아오는 길
 * Design: "Quiet Luxury" — Old Money Minimalism
 */

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { MapView } from "@/components/Map";
import { Copy, Check, Navigation, Car, ParkingCircle } from "lucide-react";

const STUDIO_LOCATION = { lat: 37.2024, lng: 126.8157 };
const ADDRESS = "경기도 화성시 남양읍 역골동로 32-6";

const transportInfo = [
  {
    icon: Car,
    title: "자가용",
    details: [
      "네비게이션 '역골동로 32-6' 검색",
      "서해안고속도로 비봉IC에서 약 15분",
      "수원에서 약 30분 소요",
    ],
  },
  {
    icon: ParkingCircle,
    title: "주차 안내",
    details: [
      "건물 앞 무료 주차 가능",
      "대형 차량(5톤 이상) 사전 문의",
    ],
  },
];

export default function LocationSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = useCallback(() => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleOpenNavigation = useCallback(() => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${STUDIO_LOCATION.lat},${STUDIO_LOCATION.lng}`,
      "_blank"
    );
  }, []);

  const handleMapReady = useCallback((map: google.maps.Map) => {
    new google.maps.Marker({
      position: STUDIO_LOCATION,
      map,
      title: "해밀시아 58 스튜디오",
      label: {
        text: "HAEMILSIA 58",
        color: "#4A3F35",
        fontSize: "11px",
        fontWeight: "400",
        className: "marker-label",
      },
    });
  }, []);

  return (
    <section
      id="location"
      ref={ref}
      className="py-20 sm:py-28 lg:py-44 px-5 sm:px-10"
      style={{ backgroundColor: "#FFFFFF" }}
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
            경기도 화성시에 위치한 프라이빗 대저택 스튜디오입니다.
          </p>
        </motion.div>

        {/* Map + Info Layout - stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-8 overflow-hidden"
          >
            <MapView
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px]"
              initialCenter={STUDIO_LOCATION}
              initialZoom={16}
              onMapReady={handleMapReady}
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col"
          >
            {/* Address Card */}
            <div
              className="p-5 sm:p-7 lg:p-8 mb-4 sm:mb-5"
              style={{ backgroundColor: "#FDFCFA", border: "1px solid #E8E0D4" }}
            >
              <p
                className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C8B89A] mb-4 sm:mb-5"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                Address
              </p>
              <p
                className="text-[#4A3F35] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] mb-1 sm:mb-2"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
              >
                {ADDRESS}
              </p>
              <p
                className="text-[#9A8E82] text-[12px] sm:text-[13px] leading-[1.8] mb-5 sm:mb-6"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                1층 단독주택
              </p>

              {/* Action buttons - full width on mobile */}
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-[12px] tracking-[0.08em] sm:tracking-[0.1em] px-4 sm:px-5 py-2.5 sm:py-2.5 border border-[#E8E0D4] text-[#6B6058] hover:border-[#C8B89A] hover:text-[#4A3F35] active:border-[#C8B89A] active:text-[#4A3F35] transition-all duration-500"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {copied ? (
                    <>
                      <Check size={12} strokeWidth={1.5} className="sm:w-[13px] sm:h-[13px]" />
                      복사됨
                    </>
                  ) : (
                    <>
                      <Copy size={12} strokeWidth={1.3} className="sm:w-[13px] sm:h-[13px]" />
                      주소 복사
                    </>
                  )}
                </button>
                <button
                  onClick={handleOpenNavigation}
                  className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-[12px] tracking-[0.08em] sm:tracking-[0.1em] px-4 sm:px-5 py-2.5 sm:py-2.5 border border-[#E8E0D4] text-[#6B6058] hover:border-[#C8B89A] hover:text-[#4A3F35] active:border-[#C8B89A] active:text-[#4A3F35] transition-all duration-500"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  <Navigation size={12} strokeWidth={1.3} className="sm:w-[13px] sm:h-[13px]" />
                  길찾기
                </button>
              </div>
            </div>

            {/* Transport Info */}
            {transportInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                className="p-5 sm:p-7 lg:p-8 mb-4 sm:mb-5 last:mb-0"
                style={{ backgroundColor: "#FDFCFA", border: "1px solid #E8E0D4" }}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-[#C8B89A]/40 rounded-full">
                    <info.icon size={14} strokeWidth={1.2} className="text-[#8A7E72] sm:w-4 sm:h-4" />
                  </div>
                  <h4
                    className="font-serif text-[#4A3F35] text-base sm:text-lg tracking-[0.06em]"
                    style={{ fontWeight: 400 }}
                  >
                    {info.title}
                  </h4>
                </div>
                <div className="space-y-1.5 sm:space-y-2 pl-[42px] sm:pl-12">
                  {info.details.map((detail, j) => (
                    <p
                      key={j}
                      className="text-[#8A7E72] text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.8]"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
