import CoreCapabilities from '@/components/pages/solutionPage/CoreCapabilities';
import HeroSection from '@/components/pages/solutionPage/HeroSection';
import ValueSection from '@/components/pages/solutionPage/ValueSection';
import WhatWeOffer from '@/components/pages/solutionPage/WhatWeOffer';

export default function Page() {
  return <div className='w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] pt-26'>
    <div className='p-4'>
      <HeroSection />
    </div>
    <WhatWeOffer/>
    <CoreCapabilities/>
    <ValueSection/>
  </div>
}
