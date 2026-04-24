/*
 * PricingSection — 이용 요금 및 예약 안내
 * Design: "Quiet Luxury" — Old Money Minimalism
 * Typography: Improved readability with consistent alignment
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Clock, Phone, MessageCircle, CalendarCheck, ArrowRight } from "lucide-react";

const timeSlots = [
  {
    label: "A타임",
    time: "09:00 – 14:00",
    duration: "5시간",
    note: "오전 자연광 촬영에 최적",
  },
  {
    label: "B타임",
    time: "15:00 – 20:00",
    duration: "5시간",
    note: "오후 골든아워 활용 가능",
  },
  {
    label: "C타임",
    time: "22:00 – 04:00",
    duration: "6시간",
    note: "새벽 감성의 야간 촬영",
  },
  {
    label: "올데이",
    time: "09:00 – 20:00",
    duration: "11시간",
    note: "하루 종일 여유로운 촬영",
  },
  {
    label: "풀타임",
    time: "09:00 – 04:00",
    duration: "19시간",
    note: "낮부터 새벽까지 완전한 자유",
  },
];

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "전화 상담",
    description: "촬영 목적과 일정을 말씀해 주시면, 맞춤 견적을 안내해 드립니다.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "일정 확인 및 예약",
    description: "원하시는 날짜와 타임을 확인 후, 예약을 확정합니다.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "사전 안내",
    description: "촬영 당일 이용 안내와 주의사항을 사전에 안내해 드립니다.",
  },
];

const notices = [
  "촬영 목적(유튜브, 광고, 드라마 등)에 따라 요금이 상이합니다.",
  "정확한 요금은 전화 상담을 통해 맞춤 안내해 드립니다.",
  "예약 확정 후 취소 시, 취소 규정이 적용됩니다.",
  "촬영 시 공간 내 소품 이동은 가능하나, 원상복구를 부탁드립니다.",
];

export default function PricingSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-20 sm:py-28 lg:py-44 px-5 sm:px-10"
      style={{ backgroundColor: "#FFFFFF" }}
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
            className="text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-5 sm:mb-6 text-[#9A8E82]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Pricing & Reservation
          </p>
          <h2
            className="font-serif text-[#4A3F35] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] sm:tracking-[0.05em] mb-5 sm:mb-6"
            style={{ fontWeight: 300 }}
          >
            이용 안내
          </h2>
          <p
            className="text-[#8A7E72] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.9] sm:leading-[2] max-w-lg mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
          >
            촬영 목적에 따라 맞춤 견적을 안내해 드립니다.<br />
            편하게 전화 주시면 실시간 상담이 가능합니다.
          </p>
        </motion.div>

        {/* Time Slots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-4 mb-16 sm:mb-24 lg:mb-28"
        >
          {timeSlots.map((slot, i) => (
            <motion.div
              key={slot.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: "easeOut" }}
              className="group relative border border-[#E8E0D4] hover:border-[#C8B89A] transition-all duration-700 p-6 sm:p-8 lg:p-10 text-center"
              style={{ backgroundColor: "#FDFCFA" }}
            >
              {/* Accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8B89A] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Clock size={16} strokeWidth={1.2} className="text-[#C8B89A] mr-2 sm:w-[18px] sm:h-[18px]" />
                <span
                  className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#9A8E82]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {slot.duration}
                </span>
              </div>

              <h3
                className="font-serif text-[#4A3F35] text-xl sm:text-2xl lg:text-3xl tracking-[0.06em] mb-3 sm:mb-4"
                style={{ fontWeight: 300 }}
              >
                {slot.label}
              </h3>

              <p
                className="text-[#6B6058] text-[14px] sm:text-[15px] lg:text-[16px] tracking-[0.04em] mb-4 sm:mb-5 tabular-nums"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
              >
                {slot.time}
              </p>

              <div className="w-6 h-[1px] bg-[#C8B89A]/50 mx-auto mb-4 sm:mb-5" />

              <p
                className="text-[#9A8E82] text-[12px] sm:text-[13px] leading-[1.8]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
              >
                {slot.note}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center mb-16 sm:mb-24 lg:mb-28 py-8 sm:py-10 lg:py-14 px-5 sm:px-6 border-y border-[#E8E0D4]"
        >
          <p
            className="text-[#4A3F35] text-[14px] sm:text-[15px] lg:text-[16px] leading-[2] sm:leading-[2.1] tracking-[0.02em]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
          >
            대여 시간 및 요금은 촬영 목적에 따라 상이하며,
          </p>
          <p
            className="text-[#4A3F35] text-[14px] sm:text-[15px] lg:text-[16px] leading-[2] sm:leading-[2.1] tracking-[0.02em] mb-6 sm:mb-7"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
          >
            <span className="text-[#8A7E72] font-medium">맞춤 견적</span>을 통해 안내해 드립니다.
          </p>
          <a
            href="tel:010-4819-9078"
            className="inline-flex items-center gap-2.5 sm:gap-3 text-[#4A3F35] text-[13px] sm:text-[14px] tracking-[0.1em] sm:tracking-[0.12em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 border border-[#4A3F35] hover:bg-[#4A3F35] hover:text-[#FAF8F4] active:bg-[#4A3F35] active:text-[#FAF8F4] transition-all duration-500 group"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            <Phone size={14} strokeWidth={1.3} className="sm:w-[15px] sm:h-[15px]" />
            010-4819-9078
            <ArrowRight size={13} strokeWidth={1.3} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 hidden sm:block sm:w-[14px] sm:h-[14px]" />
          </a>
          <p
            className="mt-3 sm:mt-4 text-[#9A8E82] text-[11px] sm:text-[12px] tracking-[0.08em]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            실시간 상담 가능
          </p>
        </motion.div>

        {/* Reservation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16 sm:mb-24 lg:mb-28"
        >
          <div className="text-center mb-10 sm:mb-16">
            <p
              className="text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-5 sm:mb-6 text-[#9A8E82]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
            >
              How to Reserve
            </p>
            <h3
              className="font-serif text-[#4A3F35] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.04em] sm:tracking-[0.05em]"
              style={{ fontWeight: 300 }}
            >
              예약 절차
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                className="text-center relative"
              >
                {/* Step number */}
                <p
                  className="font-serif text-[#C8B89A]/40 text-4xl sm:text-5xl lg:text-6xl tracking-[0.08em] mb-4 sm:mb-5"
                  style={{ fontWeight: 300 }}
                >
                  {item.step}
                </p>

                {/* Icon */}
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border border-[#C8B89A]/40 rounded-full">
                    <item.icon size={18} strokeWidth={1.2} className="text-[#8A7E72] sm:w-5 sm:h-5" />
                  </div>
                </div>

                <h4
                  className="font-serif text-[#4A3F35] text-base sm:text-lg lg:text-xl tracking-[0.05em] mb-3 sm:mb-4"
                  style={{ fontWeight: 400 }}
                >
                  {item.title}
                </h4>

                <p
                  className="text-[#8A7E72] text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.9] max-w-[260px] sm:max-w-xs mx-auto"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
                >
                  {item.description}
                </p>

                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-[3rem] lg:top-[3.5rem] right-0 translate-x-1/2 w-8 sm:w-12 lg:w-20 h-[1px] bg-[#E8E0D4]" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="py-8 sm:py-10 lg:py-12 px-5 sm:px-8 lg:px-12"
          style={{ backgroundColor: "#FAF8F4" }}
        >
          <p
            className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#9A8E82] mb-5 sm:mb-6"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
          >
            Notice
          </p>
          <div className="space-y-3 sm:space-y-3.5">
            {notices.map((notice, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#C8B89A] text-[10px] mt-[6px] sm:mt-[7px] flex-shrink-0">&bull;</span>
                <p
                  className="text-[#8A7E72] text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] sm:leading-[1.9]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300, wordBreak: "keep-all" }}
                >
                  {notice}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
