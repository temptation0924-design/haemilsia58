/*
 * Floating Call Button — Always visible at bottom-right
 * Design: "Quiet Luxury" — Subtle, elegant floating action button
 * Shows phone icon + text on desktop, icon only on mobile
 * Appears after scrolling past the hero section
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px (past hero section)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50"
        >
          <a
            href="tel:010-4819-9078"
            className="group flex items-center gap-2.5 sm:gap-3 rounded-full shadow-lg transition-all duration-500 hover:shadow-xl"
            style={{
              backgroundColor: "#4A3F35",
              padding: "12px 16px",
            }}
          >
            {/* Phone icon with pulse ring */}
            <span className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
              {/* Pulse animation ring */}
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: "#C8B89A" }}
              />
              <Phone
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#FAF8F4] relative z-10 group-hover:rotate-12 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </span>

            {/* Text — hidden on very small screens */}
            <span
              className="hidden sm:inline text-[12px] sm:text-[13px] tracking-[0.1em] text-[#FAF8F4]/90 group-hover:text-[#FAF8F4] transition-colors duration-300 pr-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
            >
              전화 문의
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
