/*
 * Header — HAEMILSIA 58 Branding
 * "58" uses Playfair Display Italic for a distinctive, editorial feel
 * "HAEMILSIA" uses Cormorant Garamond Light (existing serif)
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#intro" },
  { label: "Space", href: "#space" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

function BrandLogo({ color }: { color: "light" | "dark" }) {
  const textColor = color === "light" ? "text-white" : "text-[#4A3F35]";
  const accentColor = color === "light" ? "text-[#C8B89A]" : "text-[#8A7E72]";

  return (
    <span className="flex items-baseline gap-1.5 sm:gap-2">
      <span
        className={`text-base sm:text-lg lg:text-xl tracking-[0.25em] ${textColor} transition-colors duration-500`}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      >
        HAEMILSIA
      </span>
      <span
        className={`text-xl sm:text-2xl lg:text-[1.7rem] ${accentColor} transition-colors duration-500`}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1,
          letterSpacing: "0.02em",
        }}
      >
        58
      </span>
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-[#FAF8F4]/90 backdrop-blur-md shadow-[0_1px_0_rgba(74,63,53,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="relative z-10"
            >
              <BrandLogo color={scrolled || mobileOpen ? "dark" : "light"} />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`text-[12px] xl:text-[13px] tracking-[0.2em] uppercase transition-all duration-500 hover:opacity-60 ${
                    scrolled ? "text-[#4A3F35]" : "text-white/90"
                  }`}
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={(e) => { e.preventDefault(); handleNavClick("#cta"); }}
                className={`text-[12px] xl:text-[13px] tracking-[0.15em] uppercase px-5 xl:px-6 py-2.5 border transition-all duration-500 hover:opacity-80 ${
                  scrolled
                    ? "border-[#4A3F35] text-[#4A3F35] hover:bg-[#4A3F35] hover:text-[#FAF8F4]"
                    : "border-white/70 text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                예약하기
              </a>
            </nav>

            {/* Mobile Menu Button - enlarged touch target (44x44 min) */}
            <button
              className="lg:hidden relative z-10 w-11 h-11 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] transition-all duration-500 ${
                  mobileOpen
                    ? "rotate-45 translate-y-[3.5px] bg-[#4A3F35]"
                    : scrolled ? "bg-[#4A3F35]" : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-[1px] transition-all duration-500 ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[3.5px] bg-[#4A3F35]"
                    : scrolled ? "bg-[#4A3F35]" : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#FAF8F4] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6 sm:gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="font-serif text-2xl sm:text-3xl tracking-[0.15em] text-[#4A3F35] py-1 active:text-[#8A7E72] transition-colors"
                  style={{ fontWeight: 300 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.06, duration: 0.5 }}
                className="mt-4"
              >
                <a
                  href="#cta"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#cta"); }}
                  className="text-[13px] tracking-[0.2em] uppercase px-8 py-3.5 border border-[#4A3F35] text-[#4A3F35] active:bg-[#4A3F35] active:text-[#FAF8F4] transition-all"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
                >
                  예약하기
                </a>
              </motion.div>

              {/* Mobile: Quick contact */}
              <motion.a
                href="tel:010-4819-9078"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-6 text-[12px] tracking-[0.1em] text-[#9A8E82]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                010-4819-9078
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
