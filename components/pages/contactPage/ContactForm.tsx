"use client";
import { MapPin, Mail, Clock } from "lucide-react";
import Link from "next/link";
export default function ContactForm() {
  return (
    <section className="w-full py-16 px-4 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-12">
          Send Us a Message
        </h2>

        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl min-h-[750px]">
          
          <div className="lg:w-2/5 bg-[#0C82DD] p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h3>
              <p className="text-white/90 text-base leading-relaxed mb-12">
                For partnership inquiries, institutional discussions, or general
                queries, please submit the form below or email us directly.
              </p>

              <div className="space-y-12">
                <div className="flex gap-5">
                  <MapPin size={28} className="shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl md:text-2xl mb-2">Corporate Office</h4>
                    <p className="text-base text-white/80 leading-snug">
                      Creditbucket Technologies Private Limited<br />
                      2nd Floor, A-Wing, BSFC Building<br />
                      Frazer Road, Patna, Bihar – 800001
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Mail size={28} className="shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl md:text-2xl mb-2">Email</h4>
                    <p className="text-base text-white/80">(to be confirmed)</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Clock size={28} className="shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl md:text-2xl mb-2">Working Hours</h4>
                    <p className="text-base text-white/80">
                      Monday To Saturday<br />
                      10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed mt-12 italic">
              Creditbucket does not provide loans directly. Loan related queries
              must be directed to the respective lending institution.
            </p>
          </div>

          <div className="lg:w-3/5 p-8 md:p-12 bg-white">
            <h3 className="text-3xl font-bold text-[#0C82DD] mb-8">Contact Form</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Full name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-5 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C82DD] placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-5 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C82DD] placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Number</label>
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  className="w-full px-5 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C82DD] placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Inquiry Type</label>
                <select className="w-full px-5 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C82DD] bg-white text-gray-400 appearance-none">
                  <option>Select Inquiry Type</option>
                  <option value="partnership">Partnership</option>
                  <option value="institutional">Institutional Discussion</option>
                  <option value="general">General Query</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Please describe your inquiry in detail"
                  className="w-full px-6 py-4 rounded-3xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C82DD] placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm"
                  className="mt-1 w-5 h-5 accent-[#0C82DD] rounded border-gray-400 cursor-pointer"
                />
                <label htmlFor="confirm" className="text-[13px] text-gray-800 leading-snug cursor-pointer">
  I confirm that the information provided is accurate and may be used for responding 
  to this inquiry in accordance with{" "}
  <Link 
    href="/PrivacyPolicy" 
    className="text-[#0C82DD] underline cursor-pointer hover:text-[#0a6bb6] transition-colors"
    onClick={(e) => e.stopPropagation()} // Prevents toggling the checkbox when clicking the link
  >
    Creditbucket's Privacy Policy.
  </Link>
</label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-lg cursor-pointer font-semibold transition-all duration-300 border-2 border-[#0C82DD] bg-[#0C82DD] text-white hover:bg-white hover:text-[#0C82DD] mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}