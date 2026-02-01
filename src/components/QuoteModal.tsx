"use client";

import { useQuote } from "@/context/QuoteContext";
import { useState, useEffect } from "react";

export default function QuoteModal() {
  const { isModalOpen, closeModal } = useQuote();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsAnimating(true);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  if (!isModalOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isModalOpen ? "opacity-100" : "opacity-0"}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div
        className={`bg-white text-left w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden transform transition-all duration-300 ${isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}
      >
        {/* Header */}
        <div className="bg-[#e67e22] p-6 text-white text-center relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="text-2xl font-bold">Request a Quote</h3>
          <p className="text-orange-100 mt-1 text-sm">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <div className="p-6 md:p-8 space-y-4">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We will contact you soon.");
              closeModal();
            }}
          >
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+91..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">
                Interested In
              </label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-900">
                <option>General Inquiry</option>
                <option>Jute Bags</option>
                <option>Leather Wallets</option>
                <option>Leather Belts</option>
                <option>Custom Packaging</option>
                <option>Bulk/Wholesale Order</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea
                rows={3}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#e67e22] focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400 resize-none text-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-3 rounded-lg font-bold transition-all shadow-md active:scale-95 text-base mt-2"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
