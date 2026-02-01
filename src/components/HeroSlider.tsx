"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";

const slides = [
  {
    id: 1,
    src: "/slider1.jpg",
    title: "Connecting India's Craftsmanship to the World",
    subtitle:
      "We supply premium eco-friendly Jute Bags and high-quality Leather Goods directly from manufacturers.",
  },
  {
    id: 2,
    src: "/slider2.jpeg",
    title: "Global Export of Premium Jute & Leather",
    subtitle:
      "Ensuring top-tier quality and sustainable sourcing for partners around the globe.",
  },
  {
    id: 3,
    src: "/slider3.avif",
    title: "Eco-Friendly Solutions for Your Brand",
    subtitle:
      "Customizable jute products designed to reduce ecological impact and enhance brand value.",
  },
  {
    id: 4,
    src: "/slider4.avif",
    title: "Direct Sourcing from Indian Artisans",
    subtitle:
      "Bridging the gap between traditional craftsmanship and international market demands.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { openModal } = useQuote();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[85vh] overflow-hidden bg-gray-900 font-sans mt-[112px] md:mt-[120px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Image */}
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Dark Overlay - matching screenshot gradient style */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content - Left Aligned */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-16 xl:px-10">
                <div className="max-w-4xl text-left">
                  <p className="text-[#f39c12] font-bold uppercase tracking-[0.2em] mb-2 text-xs md:text-sm lg:text-base animate-fade-in-down">
                    MAA ARNAPURNA TRADERS
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-4 text-white animate-fade-in-up drop-shadow-sm max-w-[800px] xl:max-w-[1000px]">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 mb-6 lg:mb-8 max-w-2xl leading-relaxed animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                    <button
                      onClick={openModal}
                      className="bg-[#ff9f43] hover:bg-[#e67e22] text-white px-6 py-3 md:px-7 md:py-3.5 rounded-lg font-bold text-sm md:text-base lg:text-lg transition-all shadow-lg active:scale-95"
                    >
                      Request a Quote
                    </button>
                    <a
                      href="/about"
                      className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 md:px-10 md:py-3.5 rounded-lg font-bold text-sm md:text-base lg:text-lg transition-all shadow-lg active:scale-95 text-center flex items-center justify-center min-w-[160px]"
                    >
                      Learn About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls - Positioned like the screenshot dots/arrows if needed */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all hidden md:block"
        aria-label="Previous slide"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all hidden md:block"
        aria-label="Next slide"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots - Bottom right as often seen in premium sliders or centered bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-[#ff9f43] w-8"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
