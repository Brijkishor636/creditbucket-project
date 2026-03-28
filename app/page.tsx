"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import CreditHero from "@/components/CreditHero";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import InfoStrip from "@/components/InfoStrip";
import { logos } from "@/components/logos/Logos";
import LogoStrip from "@/components/logos/LogoStrip";
import Ticker from "@/components/Ticker";
import TrustSection from "@/components/TrustSection";
import LendingPartnersSection from "@/components/partnerSection/LendingPartnersSection";
import ImpactSection from "@/components/ImpactSection/ImpactSection";
import ScaleStatsSection from "@/components/ScaleStatsSection";
import Problem from "@/components/challenge/Problem";
import Solution from "@/components/solution/solution";
import WhyPartnerSection from "@/components/whyPartner/WhyPartnerSection";
import CertificationBanner from "@/components/IsoSection/CertificationBanner";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">

      <Hero />
      <Ticker />
      <CreditHero />
      <div className="w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
        <ScaleStatsSection />
      <Problem />
      <Solution />
      <WhyPartnerSection/>
      <CertificationBanner/>
        <ImpactSection />
        <LendingPartnersSection />
      <LogoStrip logos={logos} />
      <InfoStrip />
      </div>
      <TrustSection />

   
      <button
  onClick={scrollToTop}
  className={`fixed bottom-6 right-6 z-50 flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur border border-gray-300 rounded-full shadow-md hover:shadow-lg transition cursor-pointer text-sm font-medium text-blue-700 ${
    showScroll
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6 pointer-events-none"
  }`}
>
  Scroll to Top
<span className="flex flex-col leading-none -space-y-2">
  <ChevronUp size={14} />
  <ChevronUp size={14} />
</span>
  
  
</button>

      
    </div>
  );
}
