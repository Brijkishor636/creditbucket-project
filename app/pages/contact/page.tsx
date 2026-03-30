import ContactForm from "@/components/pages/contactPage/ContactForm";
import ContactSection from "@/components/pages/contactPage/ContactSection";
import GetInTouch from "@/components/pages/contactPage/GetInTouch";

export default function page(){
    return <div className="pt-26 w-full bg-[linear-gradient(#E6F3FF)]">
        <GetInTouch/>
        <ContactSection/>
        <ContactForm/>
    </div>
}