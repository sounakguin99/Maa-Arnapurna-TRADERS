"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-[112px] md:mt-[120px] bg-[#fdfaf5] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            About Maa Arnapurna <span className="text-[#e67e22]">TRADERS</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between Indian heritage and global markets through
            quality exports.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl xl:max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 relative inline-block">
              Our Story
              <span className="absolute -bottom-2 left-0 w-16 h-1.5 bg-[#e67e22] rounded-full"></span>
            </h2>
            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Maa Arnapurna TRADERS is an established export trading firm
                located in the heart of West Bengal, India. With a deep
                understanding of the rich craftsmanship available in our region,
                we embarked on a journey to bring these high-quality products to
                the international stage.
              </p>
              <p>
                We specialize in the export of **Jute Bags**—known for their
                eco-friendliness and durability—and **Leather Goods**,
                celebrated for their premium quality and finish. Our strategic
                location allows us to source directly from skilled artisans and
                manufacturers, ensuring that every product we ship meets global
                standards.
              </p>
              <p>
                At Maa Arnapurna TRADERS, we don't just export goods; we build
                lasting partnerships. Our commitment to **transparent
                communication**, **timely delivery**, and **uncompromising
                quality** has made us a preferred partner for buyers,
                wholesalers, and retailers across the globe.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-[#e67e22]">
                  100%
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Quality Checked
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-[#e67e22]">
                  Global
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Shipping Network
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-[#e67e22]">
                  24/7
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Image with Tag */}
          <div className="relative group">
            <div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/store.avif"
                alt="Our Warehouse Operations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Badge/Tag */}
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl text-white border border-white/20">
                <div className="font-bold text-lg">West Bengal, India</div>
                <div className="text-xs text-gray-300 uppercase tracking-widest font-semibold mt-1">
                  Our Hub of Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-[#e67e22] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Standards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We adhere to international quality standards in packaging and
                product specifications.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customer First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your requirements are our priority. We offer customization to
                meet your specific needs.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sustainable Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Promoting eco-friendly products like jute to contribute to a
                greener planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e67e22] py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left leading-tight">
            Want to know more <br className="hidden md:block" /> about our
            products?
          </h2>
          <button className="bg-white text-[#e67e22] px-10 py-4 rounded-xl font-black text-lg hover:bg-orange-50 transition-colors shadow-xl hover:scale-105 active:scale-95 transition-transform shrink-0">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
