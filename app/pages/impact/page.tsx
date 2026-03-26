import EcosystemImpact from "@/components/pages/impactPage/EcosystemImpact";
import ImpactPageSection from "@/components/pages/impactPage/ImpactSection";
import RegionalPresence from "@/components/pages/impactPage/RegionalPresence";
import ScaleStatsSection from "@/components/ScaleStatsSection";


export default function Page() {
  return <div className='pt-26 w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]'>
      <div className="p-4 pb-10">
        <ImpactPageSection/>
      </div>
        <ScaleStatsSection/>
        <RegionalPresence/>
        <EcosystemImpact/>
  </div>
}
