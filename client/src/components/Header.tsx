import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#intro" },
  { label: "Space", href: "#space" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="relative z-10"
            >
              <span
                className={`font-serif text-xl sm:text-2xl tracking-[0.25em] transition-colors duration-500 ${
                  scrolled ? "text-[#4A3F35]" : "text-white"
                }`}
                style={{ fontWeight: 300 }}
              >
                HAEMILSIA
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`text-[13px] tracking-[0.2em] uppercase transition-all duration-500 hover:opacity-60 ${
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
                className={`text-[13px] tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-500 hover:opacity-80 ${
                  scrolled
                    ? "border-[#4A3F35] text-[#4A3F35] hover:bg-[#4A3F35] hover:text-[#FAF8F4]"
                    : "border-white/70 text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                예약하기
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
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
            className="fixed inset-0 z-40 bg-[#FAF8F4] flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="font-serif text-3xl tracking-[0.15em] text-[#4A3F35]"
                style={{ fontWeight: 300 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#cta"
              onClick={(e) => { e.preventDefault(); handleNavClick("#cta"); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.08, duration: 0.5 }}
              className="mt-4 text-[14px] tracking-[0.2em] uppercase px-8 py-3 border border-[#4A3F35] text-[#4A3F35]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
            >
              예약하기
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
