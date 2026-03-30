import TrustDataSection from '@/components/pages/trustPage/TrustDataSection';
import TrustGovernanceSection from '@/components/pages/trustPage/TrustGovernanceSection';

export default function Page() {
  return <div className='pt-26 w-full bg-[linear-gradient(#E6F3FF)]'>
    <div className='p-4'>
      <TrustGovernanceSection/>
    </div>
    <TrustDataSection/>
  </div>
}
