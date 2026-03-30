import AboutSection from "@/components/pages/aboutPage/AboutSection";
import OurApproachSection from "@/components/pages/aboutPage/OurApproachSection";
import WhatWeDoSection from "@/components/pages/aboutPage/WhatWeDoSection";
import WhyBuiltSection from "@/components/pages/aboutPage/WhyBuiltSection";
import LeadershipSection from "@/components/pages/aboutPage/LeadershipSection";
import JourneyTimeline from "@/components/pages/aboutPage/JourneyTimeline";
import RegionalExpansion from "@/components/pages/aboutPage/RegionalExpansion";

export default function page(){
    return <div className="pt-26 w-full bg-[linear-gradient(#E6F3FF)]">
        <div className="p-4">
            <AboutSection/>
        </div>
        <div className="py-15">
            <WhyBuiltSection/>
        </div>
        <WhatWeDoSection/>
        <OurApproachSection/>
        <LeadershipSection/>
        <JourneyTimeline/>
        <RegionalExpansion/>
    </div>
}