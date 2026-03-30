import EcosystemImpact from "@/components/pages/impactPage/EcosystemImpact";
import ImpactPageSection from "@/components/pages/impactPage/ImpactSection";
import RegionalPresence from "@/components/pages/impactPage/RegionalPresence";
import ScaleStatsSection from "@/components/ScaleStatsSection";


export default function Page() {
  return <div className='pt-26 w-full bg-[linear-gradient(#E6F3FF)]'>
      <div className="p-4 pb-10">
        <ImpactPageSection/>
      </div>
        <ScaleStatsSection/>
        <RegionalPresence/>
        <EcosystemImpact/>
  </div>
}
