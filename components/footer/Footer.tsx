import React from "react";
import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";
import FooterBottom from "./FooterBottom";


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#022743] rounded-2xl mx-4 md:mx-6 my-6 px-6 sm:px-10 py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <FooterAbout />

        <div className="flex gap-10">
          <FooterContact />

          <div className="hidden md:block w-px bg-gray-600" />

          <FooterLegal />
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
