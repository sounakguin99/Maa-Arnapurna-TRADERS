"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[#e67e22]/20 selection:text-[#e67e22] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mt-[112px] md:mt-[120px] bg-[#fdfaf5] py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/50 border border-orange-200 text-[#e67e22] text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#e67e22] animate-pulse"></span>
            Our Purpose & Direction
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e67e22] to-orange-400">Vision</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Guided by purpose, driven by excellence. We are building the future of sustainable global trade with integrity and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision Split Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Mission Card */}
          <div className="group relative bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-8 border border-orange-200/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-[#e67e22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  To empower Indian craftsmanship by taking it to the global stage. We are dedicated to supplying high-quality, eco-friendly jute and leather products that meet and exceed international standards.
                </p>
                <p>
                  We aim to bridge the gap between traditional artisans and global markets, ensuring fair trade practices, sustainable sourcing, and delivering unparalleled value to our clients worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-800 shadow-xl hover:shadow-2xl hover:shadow-orange-900/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-900/20 rounded-full blur-3xl -ml-20 -mb-20 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-[#e67e22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  To be the most trusted and preferred export trading partner from India, recognized globally for our absolute integrity, quality excellence, and deeply customer-centric approach.
                </p>
                <p>
                  We envision a future where sustainable Indian products are the first choice for international buyers, creating a benchmark in the export industry for reliability, innovation, and environmental stewardship.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The fundamental beliefs that guide our actions and behavior, shaping our company culture and how we interact with the world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Excellence",
                desc: "We never compromise on the standards of our products. Excellence is not an act, but our habit.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              },
              {
                title: "Sustainability",
                desc: "Committed to eco-friendly practices that protect our planet for future generations.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Absolute Integrity",
                desc: "Honesty and transparency form the bedrock of all our global business relationships.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Empowerment",
                desc: "Uplifting local artisans by providing them a global platform and fair trade opportunities.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#e67e22] mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-[#e67e22] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us - Detailed List */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">What Drives Our Journey</h2>
        <div className="space-y-8">
          {[
            { title: "Sustainable Packaging Solutions", desc: "Leading the shift towards eco-friendly packaging worldwide, reducing carbon footprints." },
            { title: "Artisan Support & Growth", desc: "Directly engaging with and supporting local manufacturers and craftsmen in West Bengal." },
            { title: "Uncompromising Value", desc: "Delivering exceptional value to our international clients through competitive pricing without sacrificing quality." },
            { title: "Market Expansion", desc: "Continuously expanding our footprint across European, American, and emerging markets." },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#e67e22] font-bold text-lg border border-orange-200">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#e67e22] via-slate-900 to-slate-900"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to partner with us?</h2>
          <p className="text-lg md:text-xl text-slate-300">
            Join us in our mission to bring sustainable, high-quality Indian craftsmanship to the global market.
          </p>
          <div className="pt-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-[#e67e22] text-white font-bold rounded-full hover:bg-[#d6711a] hover:scale-105 transition-all shadow-lg shadow-orange-900/50">
              Get in Touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
