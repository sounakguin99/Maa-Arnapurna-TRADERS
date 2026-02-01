"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you offer custom branding on jute bags?",
    a: "Yes! We offer full customization including screen printing, embroidery, and custom tags with your brand logo.",
  },
  {
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "Our MOQ is flexible depending on the product. For jute bags, it typically starts at 500 units, while leather goods may vary.",
  },
  {
    q: "Do you ship internationally?",
    a: "Absolutely. We have extensive experience exporting to the USA, Europe, Australia, and the Middle East.",
  },
  {
    q: "How long does production take?",
    a: "Standard production time is 2-4 weeks after sample approval, depending on the order volume.",
  },
];

export default function FAQ() {
  // -1 means no item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fdfaf5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#e67e22] shadow-md ring-1 ring-[#e67e22]/20"
                    : "border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#e67e22] text-xl font-bold flex-shrink-0">
                      ?
                    </span>
                    <h3
                      className={`font-bold text-lg transition-colors ${isOpen ? "text-[#e67e22]" : "text-gray-900"}`}
                    >
                      {faq.q}
                    </h3>
                  </div>
                  <span
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#e67e22] text-white"
                        : "bg-orange-50 text-[#e67e22]"
                    }`}
                  >
                    {/* Icon changing based on state */}
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
