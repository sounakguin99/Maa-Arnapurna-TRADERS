"use client";

import { useState } from "react";

const reviews = [
  {
    text: "The quality of jute bags we received was exceptional. Maa Arnapurna TRADERS ensured timely delivery and the print quality was exactly as we requested.",
    author: "Sarah Johnson",
    role: "Retail Manager, UK",
    rating: 5,
  },
  {
    text: "We've been sourcing leather wallets for 2 years now. Their craftsmanship is top-notch and the pricing is very competitive for this level of quality.",
    author: "Michael Chen",
    role: "Import Director, USA",
    rating: 5,
  },
  {
    text: "Great communication throughout the export process. They handled all the documentation smoothly. Highly recommended for reliable sourcing.",
    author: "Elena Rodriguez",
    role: "Boutique Owner, Spain",
    rating: 5,
  },
  {
    text: "Excellent service and high-quality products. The eco-friendly packaging solutions have really helped our brand image.",
    author: "David Schmidt",
    role: "Procurement Head, Germany",
    rating: 5,
  },
  {
    text: "Reliable partner for our bulk orders. The leather belts and bags are always consistent in quality.",
    author: "Ahmed Al-Fayed",
    role: "Distributor, UAE",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Determine which slides to show. show 1 on mobile, 2 on tablet, 3 on desktop if possible.
  // For simplicity implementation, we'll slide one by one but show a responsive grid.
  // Actually, a true carousel is better with fixed width items.
  // Let's implement a simpler view where we cycle through active set.

  // Improved logic: We show 1 (mobile), 2 (md), 3 (lg) cards.
  // We need a visible window.

  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <div className="h-1.5 w-24 bg-[#e67e22] mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by importers and retailers worldwide for our consistent
            quality and service.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-[#e67e22] text-white p-3 rounded-full shadow-lg hover:bg-[#d35400] transition-transform active:scale-95 hidden md:flex"
            aria-label="Previous testimonial"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-[#e67e22] text-white p-3 rounded-full shadow-lg hover:bg-[#d35400] transition-transform active:scale-95 hidden md:flex"
            aria-label="Next testimonial"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Mobile Nav (visible only on small screens) */}
          <div className="flex gap-4 justify-center mb-8 md:hidden">
            <button
              onClick={prevSlide}
              className="bg-[#e67e22] p-2 rounded-full text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#e67e22] p-2 rounded-full text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Slides Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % reviews.length;
              const review = reviews[index];
              // On mobile we might want to just show one, but for simplicity let's hide others via CSS based on screen size or just show 3 active cycling
              // Actually, for a proper carousel feeling on mobile, showing 1 is better.
              // Let's strictly control visibility:
              // Mobile: Show current only.
              // Tablet/Desktop: Show current + next 2.

              return (
                <div
                  key={index}
                  className={`bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#e67e22] transition-colors group flex-col ${offset === 0 ? "flex" : "hidden md:flex"}`}
                >
                  <div className="flex gap-1 mb-6 text-[#e67e22]">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed flex-grow">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 group-hover:bg-[#e67e22] group-hover:text-white transition-colors">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{review.author}</h4>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
