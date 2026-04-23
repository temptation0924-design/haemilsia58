/*
 * LocationSection — 찾아오는 길
 * Design: "Quiet Luxury" — Old Money Minimalism
 * Palette: Cream White (#FAF8F4) + Deep Brown (#4A3F35) + Warm Gold (#C8B89A)
 * Typography: Cormorant Garamond (headings) + Noto Sans KR (body)
 * Google Maps integration via pre-built MapView component
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { MapView } from "@/components/Map";
import { MapPin, Car, Navigation, Copy, Check } from "lucide-react";
import { useState } from "react";

const STUDIO_LOCATION = {
  lat: 37.2073,
  lng: 126.8235,
};

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
    icon: MapPin,
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
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Custom styled marker
    const markerContent = document.createElement("div");
    markerContent.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      ">
        <div style="
          background: #4A3F35;
          color: #FAF8F4;
          padding: 8px 16px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.15em;
          white-space: nowrap;
          border-radius: 0;
        ">
          HAEMILSIA
        </div>
        <div style="
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #4A3F35;
        "></div>
      </div>
    `;

    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: STUDIO_LOCATION,
      title: "해밀시아 오팔 스튜디오",
      content: markerContent,
    });
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenNavigation = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${STUDIO_LOCATION.lat},${STUDIO_LOCATION.lng}&destination_place_id=`,
      "_blank"
    );
  };

  return (
    <section
      id="location"
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
          className="text-center mb-16 sm:mb-20"
        >
          <p
            className="text-[12px] tracking-[0.35em] uppercase mb-6 text-[#9A8E82]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Location
          </p>
          <h2
            className="font-serif text-[#4A3F35] text-3xl sm:text-4xl lg:text-5xl tracking-[0.06em] mb-6"
            style={{ fontWeight: 300 }}
          >
            찾아오는 길
          </h2>
          <p
            className="text-[#8A7E72] text-[14px] sm:text-[15px] leading-[1.9] max-w-lg mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            경기도 화성시에 위치한 프라이빗 대저택 스튜디오입니다.
          </p>
        </motion.div>

        {/* Map + Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-8 overflow-hidden"
          >
            <MapView
              className="w-full h-[350px] sm:h-[420px] lg:h-[480px]"
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
              className="p-7 sm:p-8 mb-5"
              style={{ backgroundColor: "#FDFCFA", border: "1px solid #E8E0D4" }}
            >
              <p
                className="text-[11px] tracking-[0.25em] uppercase text-[#C8B89A] mb-5"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                Address
              </p>
              <p
                className="text-[#4A3F35] text-[15px] sm:text-[16px] leading-[1.8] mb-2"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
              >
                {ADDRESS}
              </p>
              <p
                className="text-[#9A8E82] text-[13px] leading-[1.8] mb-6"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                1층 단독주택
              </p>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center gap-2 text-[12px] tracking-[0.1em] px-5 py-2.5 border border-[#E8E0D4] text-[#6B6058] hover:border-[#C8B89A] hover:text-[#4A3F35] transition-all duration-500"
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
                  onClick={handleOpenNavigation}
                  className="flex items-center gap-2 text-[12px] tracking-[0.1em] px-5 py-2.5 border border-[#E8E0D4] text-[#6B6058] hover:border-[#C8B89A] hover:text-[#4A3F35] transition-all duration-500"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  <Navigation size={13} strokeWidth={1.3} />
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
                className="p-7 sm:p-8 mb-5 last:mb-0"
                style={{ backgroundColor: "#FDFCFA", border: "1px solid #E8E0D4" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center border border-[#C8B89A]/40 rounded-full">
                    <info.icon size={16} strokeWidth={1.2} className="text-[#8A7E72]" />
                  </div>
                  <h4
                    className="font-serif text-[#4A3F35] text-lg tracking-[0.06em]"
                    style={{ fontWeight: 400 }}
                  >
                    {info.title}
                  </h4>
                </div>
                <div className="space-y-2 pl-12">
                  {info.details.map((detail, j) => (
                    <p
                      key={j}
                      className="text-[#8A7E72] text-[13px] leading-[1.8]"
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
