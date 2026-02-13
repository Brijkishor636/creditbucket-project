import CreditHero from "@/components/CreditHero";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import InfoStrip from "@/components/InfoStrip";
import Navbar from "@/components/layout/Navbar";
import { logos } from "@/components/logos/Logos";
import LogoStrip from "@/components/logos/LogoStrip";
import Ticker from "@/components/Ticker";
import TrustSection from "@/components/TrustSection";
import LendingPartnersSection from "@/components/partnerSection/LendingPartnersSection";
import ImpactSection from "@/components/ImpactSection/ImpactSection";
import ScaleStatsSection from "@/components/ScaleStatsSection";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ticker/>
      <CreditHero/>
      <div className="w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <ScaleStatsSection/>
          <ImpactSection />
          <LendingPartnersSection />
      </div>
      <LogoStrip logos={logos}/>
      <InfoStrip/>
      <TrustSection/>
      <Footer/>
    </div>
  );
}
