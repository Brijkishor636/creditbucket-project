import TrustDataSection from '@/components/pages/trustPage/TrustDataSection';
import TrustGovernanceSection from '@/components/pages/trustPage/TrustGovernanceSection';

export default function Page() {
  return <div className='pt-26 w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]'>
    <div className='p-4'>
      <TrustGovernanceSection/>
    </div>
    <TrustDataSection/>
  </div>
}
