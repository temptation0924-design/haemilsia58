/*
 * HAEMILSIA STUDIO — Landing Page
 * Design: "Quiet Luxury" — Old Money Minimalism
 * Palette: Cream White (#FAF8F4) + Deep Brown (#4A3F35)
 * Typography: Cormorant Garamond (headings, light) + Noto Sans KR (body, light)
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SpacePreview from "@/components/SpacePreview";
import FeatureSection from "@/components/FeatureSection";
import GalleryStrip from "@/components/GalleryStrip";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <IntroSection />
      <SpacePreview />
      <FeatureSection />
      <GalleryStrip />
      <CTASection />
      <Footer />
    </div>
  );
}
