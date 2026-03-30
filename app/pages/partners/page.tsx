import PartnershipModel from '@/components/pages/partnerPage/PartnershipModel';
import PartnerWithSection from '@/components/pages/partnerPage/PartnerWithSection';
import WhyPartner from '@/components/pages/partnerPage/WhyPartner';

export default function Page() {
  return <div className='pt-26 w-full bg-[linear-gradient(#E6F3FF)]'>
    <div className='p-4'>
      <PartnerWithSection />
    </div>
    <PartnershipModel/>
    <WhyPartner/>
  </div>;
}
