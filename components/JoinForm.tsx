'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";
import { useRouter } from 'next/navigation';

import Link from 'next/link';

const JoinForm = () => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Retailer',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-ascent">
        
        <main className="flex-grow flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-white max-w-md w-full text-center p-12"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-green-600" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
            <p className="text-slate-600 mb-8">
              Your application has been received. Our team will get in touch with you shortly to discuss the next steps.
            </p>
            <button 
              onClick={() => router.push('/')}
              className="btn-primary w-full"
            >
              Back to Home
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-ascent">
      
      
      <main className="flex-grow py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-500 hover:text-primary-blue transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-white p-8 md:p-12"
          >
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Join Creditbucket</h1>
              <p className="text-slate-500">Fill out the form below and we'll reach out to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    required
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    required
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-semibold text-slate-700">I want to join as</label>
                  <select 
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-slate-50 appearance-none hover:bg-white"
                  >
                    <option value="Retailer">Retailer</option>
                    <option value="Corporate">Corporate Partner</option>
                    <option value="Samriddh Sathi">Samriddh Sathi (Facilitator)</option>
                    <option value="Lending Partner">Lending Partner (Bank/NBFC)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about yourself or your organization..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all bg-slate-50 resize-none hover:bg-white"
                ></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Submit Application <Send size={20} className="ml-2" />
                </button>
              </div>

              <p className="text-xs text-center text-slate-400 mt-6">
                By submitting this form, you agree to our <Link href="/terms" className="text-primary-blue hover:underline">Terms & Conditions</Link> and <Link href="#" className="text-primary-blue hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinForm;
