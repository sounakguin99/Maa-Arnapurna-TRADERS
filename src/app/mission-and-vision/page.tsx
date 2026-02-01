"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-[112px] md:mt-[120px] bg-[#fdfaf5] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center ">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold animate-fade-in-down">
            Mission & Vision
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-medium opacity-90 animate-fade-in">
            Guided by purpose, driven by excellence.
          </p>
        </div>
      </section>

      {/* Content Section 1: Mission & Drives Us */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl xl:max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Our Mission Card */}
          <div className="bg-[#fdfaf5] p-8 md:p-10 lg:p-14 rounded-3xl border border-orange-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl group-hover:bg-orange-200/50 transition-colors"></div>
            <div className="relative space-y-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-8">
                <div className="w-10 h-10 border-4 border-[#e67e22] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#e67e22] rounded-full"></div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                "To empower Indian craftsmanship by taking it to the global
                stage. We aim to supply high-quality, eco-friendly jute and
                leather products that meet international standards while
                ensuring fair trade practices and sustainable sourcing."
              </p>
            </div>
          </div>

          {/* What Drives Us */}
          <div className="space-y-10 lg:pl-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              What Drives Us
              <span className="absolute -bottom-2 left-0 w-16 h-1.5 bg-[#e67e22] rounded-full"></span>
            </h2>
            <div className="space-y-8">
              {[
                "Promoting sustainable and eco-friendly packaging solutions worldwide.",
                "Supporting local artisans and manufacturers in West Bengal.",
                "Delivering value to our clients through competitive pricing and quality.",
              ].map((text, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-[#e67e22] font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Going & Vision */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl xl:max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Where We Are Going */}
          <div className="space-y-10 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              Where We Are Going
              <span className="absolute -bottom-2 left-0 w-16 h-1.5 bg-[#e67e22] rounded-full"></span>
            </h2>
            <div className="space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a future where Indian products are the first choice
                for international buyers looking for quality and sustainability.
                We strive to become a benchmark in the export industry for
                reliability and trust.
              </p>
              <div className="space-y-6">
                {[
                  "Expanding our footprint to new markets across Europe and Americas.",
                  "Innovating in product design to meet modern aesthetic needs.",
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-4 items-center group">
                    <span className="text-[#e67e22] transition-transform group-hover:translate-x-1">
                      {idx === 0 ? "🎯" : "💡"}
                    </span>
                    <p className="text-gray-700 text-lg font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="bg-[#111827] p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 order-1 lg:order-2">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
            <div className="relative space-y-6">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-lg mb-8">
                <svg
                  className="w-8 h-8 text-[#e67e22]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed italic">
                "To be the most trusted and preferred export trading partner
                from India, recognized globally for our integrity, quality
                excellence, and customer-centric approach."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
