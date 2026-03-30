import FundFlowSection from '@/components/pages/bankFlow/FundFlowSection';
import LoanDisbursalProcess from '@/components/pages/bankFlow/LoanDisbursalProcess';
import RepaymentServicingStructure from '@/components/pages/bankFlow/RepaymentServicingStructure';
import TransparencySection from '@/components/pages/bankFlow/TransparencySection';
import PartnershipModel from '@/components/pages/partnerPage/PartnershipModel';

export default function Page() {
  return <div className='pt-26 w-full bg-[linear-gradient(#E6F3FF)]'>
    <div className='p-4'>
      <FundFlowSection/>
    </div>
    <LoanDisbursalProcess/>
    <RepaymentServicingStructure/>
    <PartnershipModel/>
    <TransparencySection/>
  </div>
}
