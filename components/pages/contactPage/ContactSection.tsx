"use client";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#f0f7ff] relative py-14 px-6 overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0C82DD] to-transparent" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="flex justify-center md:justify-end md:pr-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight text-center md:text-right">
            Contact Information
          </h2>
        </div>

        <div className="space-y-10">
          
          <div className="flex items-start gap-5">
            <Mail size={24} className="mt-1 text-black shrink-0" strokeWidth={2} />
            <div>
              <p className="text-black text-lg font-semibold mb-1">Email</p>
              <a
                href="mailto:Contact@creditbucket.in"
                className="text-[#0C82DD] hover:underline text-2xl md:text-3xl font-bold block"
              >
                Contact@creditbucket.in
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Phone size={24} className="mt-1 text-black shrink-0" strokeWidth={2} />
            <div>
              <p className="text-black text-lg font-semibold mb-1">Phone</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">1800 313 1998</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Clock size={24} className="mt-1 text-black shrink-0" strokeWidth={2} />
            <div>
              <p className="text-black text-lg font-semibold mb-1">Working Hours</p>
              <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                Monday – Saturday <br />
                10:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <MapPin size={24} className="mt-1 text-black shrink-0" strokeWidth={2} />
            <div>
              <p className="text-black text-lg font-semibold mb-1">Address</p>
              <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                Creditbucket Technologies Private Limited <br />
                Samriddh Kendra <br />
                2nd Floor, A-Wing, BSFC Building <br />
                Frazer Road, Patna, Bihar – 800001
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0C82DD] to-transparent" />
    </section>
  );
}