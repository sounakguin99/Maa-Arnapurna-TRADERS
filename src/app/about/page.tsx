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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/50 border border-orange-200 text-[#e67e22] text-sm font-semibold mb-4 mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#e67e22] animate-pulse"></span>
            Our Journey & Heritage
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
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
                At Maa Arnapurna TRADERS, we don&apos;t just export goods; we build
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

      {/* How We Work Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-[#e67e22] font-bold text-xs uppercase tracking-widest mb-3">
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Seamless Operations
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From the initial inquiry to the final delivery, our streamlined
              process ensures you get exactly what you need, on time.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
            {[
              {
                title: "Consultation",
                desc: "Understanding your specifications, materials, and quantity requirements.",
                icon: "01",
              },
              {
                title: "Prototyping",
                desc: "Developing a sample for your approval to match your exact standards.",
                icon: "02",
              },
              {
                title: "Manufacturing",
                desc: "Ethical production with rigorous quality checks at every stage.",
                icon: "03",
              },
              {
                title: "Global Logistics",
                desc: "Handling customs and shipping for a hassle-free delivery to your port.",
                icon: "04",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 bg-white p-6 pt-0 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-white border-4 border-[#e67e22] text-[#e67e22] rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-[#e67e22] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Capabilities Section */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 to-gray-900"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Scale & Quality
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our infrastructure is designed to handle bulk orders without
              compromising on the finer details. We operate with a blend of
              traditional craftsmanship and modern efficiency.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Warehousing Unit",
                  desc: "Spacious storage facilities ensuring safety from moisture and damage.",
                },
                {
                  title: "Quality Control Lab",
                  desc: "Dedicated testing area for strength, color fastness, and finish.",
                },
                {
                  title: "Packaging Division",
                  desc: "Customized packaging solutions to ensure products arrive in pristine condition.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-[#e67e22]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/slider2.jpeg"
              alt="Our Infrastructure"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm uppercase tracking-widest font-bold">
                Maa Arnapurna TRADERS
              </p>
              <p className="text-white text-lg font-medium">
                Exporting Excellence Since 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
