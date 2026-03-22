import OperationalFlow from '@/components/pages/phygitalPage/OperationalFlow';
import PhygitalModelSection from '@/components/pages/phygitalPage/PhygitalModelSection';
import WhyItWorks from '@/components/pages/phygitalPage/WhyItWorks';

export default function Page() {
  return <div className='pt-26 w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]'>
    <div className='p-4'>
      <PhygitalModelSection/>
    </div>
    <OperationalFlow/>
    <WhyItWorks/>
  </div>
}
