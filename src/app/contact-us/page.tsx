"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Matching the theme */}
      <section className="mt-[112px] md:mt-[120px] bg-[#fdfaf5] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl  font-bold text-gray-900 leading-tight">
            Contact Us
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for inquiries, quotes, or partnership
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl xl:max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Side: Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6 border border-gray-100 group hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e67e22] group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Phone</h4>
                <a
                  href="tel:+916294792340"
                  className="text-gray-600 hover:text-[#e67e22] transition-colors"
                >
                  +91 62947 92340
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6 border border-gray-100 group hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e67e22] group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Email</h4>
                <a
                  href="mailto:subrajitmandal250@gmail.com"
                  className="text-gray-600 break-all hover:text-[#e67e22] transition-colors"
                >
                  subrajitmandal250@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6 border border-gray-100 group hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e67e22] group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Working Hours</h4>
                <p className="text-gray-600">9:30AM to 8PM</p>
                <p className="text-xs text-gray-400 font-medium">
                  Monday - Saturday
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6 border border-gray-100 group hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e67e22] group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Location</h4>
                <a
                  href="https://maps.app.goo.gl/Gm6zvHNsDZjhmeCG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-[#e67e22] transition-colors"
                >
                  Near Happy Club Maidan, Ranaghat, Nadia, West Bengal
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Appointment Form */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Book Appointment
              </h2>
              <p className="text-gray-500">
                We're here to help. If you've got a question, we'd love to chat.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">
                    Subject *
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat text-gray-900"
                    required
                  >
                    <option value="" className="text-gray-900">
                      General Inquiry
                    </option>
                    <option className="text-gray-900">General Inquiry</option>
                    <option className="text-gray-900">
                      Product Quote (Jute)
                    </option>
                    <option className="text-gray-900">
                      Product Quote (Leather)
                    </option>
                    <option className="text-gray-900">
                      Export Partnership
                    </option>
                    <option className="text-gray-900">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">
                  Message
                </label>
                <textarea
                  placeholder="Enter Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 resize-none text-gray-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg active:scale-95"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl  xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="w-full h-[700px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6768192232657!2d88.56739429999999!3d23.181992599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8c4b25ef3bc8d%3A0xb7b170a1361963a9!2sRanaghat%20Happy%20Club%20Maidan%2F%20Tarun%20Bayam%20Samiti%20School%20Of%20Cricket!5e0!3m2!1sen!2sin!4v1769961070858!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
