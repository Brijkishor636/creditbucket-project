import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            Contact
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            For partnership inquiries, institutional discussions, or general queries, please reach out to us using the details below or submit the form.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-5xl font-bold text-gray-900 leading-tight">
            Contact Information
          </div>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                <p className="text-2xl font-bold text-blue-600">Contact@creditbucket.in</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone</p>
                <p className="text-2xl font-bold text-gray-900">1800 313 1998</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Working Hours</p>
                <p className="text-2xl font-bold text-gray-900">Monday – Saturday</p>
                <p className="text-xl text-gray-600">10:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Address</p>
                <p className="text-2xl font-bold text-gray-900 leading-snug">
                  Creditbucket Technologies Private Limited<br />
                  Samriddh Kendra<br />
                  2nd Floor, A-Wing, BSFC Building<br />
                  Frazer Road, Patna, Bihar – 800001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Send Us a Message</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-blue-600 rounded-3xl p-12 text-white space-y-8">
              <h3 className="text-4xl font-bold">Get In Touch</h3>
              <p className="text-lg opacity-90">
                For partnership inquiries, institutional discussions, or general queries, please submit the form below or email us directly.
              </p>

              <div className="space-y-8 pt-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Corporate Office</p>
                    <p className="text-sm opacity-75">Creditbucket Technologies Private Limited 2nd Floor, A-Wing, BSFC Building Frazer Road, Patna, Bihar – 800001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm opacity-75">(to be confirmed)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Working Hours</p>
                    <p className="text-sm opacity-75">Monday To Saturday 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <p className="text-xs opacity-60 pt-12">
                Creditbucket does not provide loans directly. Loan related queries must be directed to the respective lending institution.
              </p>
            </div>

            <div className="lg:col-span-3 bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-600 mb-8">Contact Form</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full name</label>
                  <input type="text" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <input type="email" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Number</label>
                  <input type="tel" placeholder="Enter Your Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Inquiry Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600">
                    <option>Select Inquiry Type</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows={4} placeholder="Please describe your inquiry in detail" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                  <p className="text-xs text-gray-500">
                    I confirm that the information provided is accurate and may be used for responding to this inquiry in accordance with <span className="text-blue-600 underline">Creditbucket's Privacy Policy</span>.
                  </p>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
