import CodeOfConduct from "@/components/pages/codeofconduct/CodeOfConduct";
import CoreValues from "@/components/pages/codeofconduct/CoreValues";
import EscalationSection from "@/components/pages/codeofconduct/EscalationSection";
import ProfessionalConduct from "@/components/pages/codeofconduct/ProfessionalConduct";

export default function Page() {
  return <div className="pt-26 w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
    <div className="p-4">
      <CodeOfConduct/>
    </div>
    <CoreValues/>
    <ProfessionalConduct/>
    <EscalationSection/>
  </div>;
}
