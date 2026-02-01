import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl xl:max-w-[1440px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Container with Decorative Elements */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative h-[400px] md:h-[500px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/store.avif"
                alt="Our Warehouse"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 lg:space-y-4">
              <span className="text-[#e67e22] font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Your Trusted Partner in Global Trade
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-gray-900">
                  Maa Arnapurna TRADERS
                </span>{" "}
                is an India-based exporting firm located in West Bengal. We
                specialize in sourcing and supplying the finest quality
                eco-friendly
                <span className="text-orange-700 font-semibold">
                  {" "}
                  Jute Bags
                </span>{" "}
                and
                <span className="text-orange-700 font-semibold">
                  {" "}
                  premium Leather Goods
                </span>
                .
              </p>
              <p>
                Our promise is simple: Quality, Timely Delivery, and Transparent
                Communication. We bridge the gap between Indian craftsmanship
                and the global market, ensuring a seamless experience for our
                international buyers.
              </p>
            </div>

            <button className="group text-[#e67e22] font-bold text-lg hover:text-[#d35400] flex items-center gap-3 transition-all">
              Read Our Story
              <span className="bg-orange-50 p-2 rounded-full group-hover:translate-x-2 transition-transform">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 italic">
              Our Product Categories
            </h2>
            <div className="h-1.5 w-24 bg-[#e67e22] mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg md:text-xl">
              We export a wide range of products, ensuring rigorous quality
              checks at every level of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Category 1 - Jute */}
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
              <Image
                src="/slider4.avif"
                alt="Jute Products"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Eco-Friendly Jute Products
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Shopping bags, Tote bags, Gift bags, Wine bags, Custom
                  Packaging.
                </p>
                <div className="flex gap-4">
                  <span className="bg-[#e67e22] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Bags & Rugs
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold">
                    Eco-Friendly
                  </span>
                </div>
              </div>
            </div>

            {/* Product Category 2 - Leather */}
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
              <Image
                src="/slider2.jpeg"
                alt="Leather Goods"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Premium Leather Goods
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Wallets, Belts, Handbags, Accessories, Travel Gear.
                </p>
                <div className="flex gap-4">
                  <span className="bg-[#e67e22] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Quality Leather
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold">
                    Handcrafted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Buyers Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            We are committed to excellence and building long-term relationships
            with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Direct Sourcing",
              desc: "We source directly from manufacturers to ensure authenticity and best pricing.",
              icon: (
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              ),
            },
            {
              title: "Quality Inspection",
              desc: "Rigorous quality checks before dispatch to minimize defects and returns.",
              icon: (
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Custom Printing",
              desc: "Custom logo printing and packaging to align with your brand identity.",
              icon: (
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
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              ),
            },
            {
              title: "Eco-Friendly",
              desc: "Sustainable products that help reduce your carbon footprint globally.",
              icon: (
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Export Support",
              desc: "Complete export documentation support for hassle-free customs clearance.",
              icon: (
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
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              ),
            },
            {
              title: "Flexible MOQ",
              desc: "Competitive pricing with flexible Minimum Order Quantities for all businesses.",
              icon: (
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-orange-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-orange-100 group"
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e67e22] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Ready to Start Importing?
          </h2>
          <p className="text-orange-50 text-xl md:text-2xl font-light">
            Get in touch with us today for a catalog and price quote. We are
            here to serve your business needs.
          </p>
          <button className="bg-white text-[#e67e22] px-12 py-5 rounded-xl font-black text-xl hover:bg-orange-50 transition-colors shadow-2xl hover:scale-105 active:scale-95 transition-transform">
            Contact Us Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
