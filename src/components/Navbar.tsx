"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useQuote();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#e67e22] text-white py-2 px-4 shadow-sm">
        <div className="w-full xl:pl-16 xl:pr-16 mx-auto flex  flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:subrajitmandal250@gmail.com"
              className="flex items-center gap-1 hover:text-orange-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              subrajitmandal250@gmail.com
            </a>
            <a
              href="tel:+916294792340"
              className="flex items-center gap-1 hover:text-orange-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 62947 92340
            </a>
          </div>
          <div className="hidden md:block font-medium tracking-wide">
            Global Exporter of Jute & Leather Goods
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="w-full xl:pl-20 xl:pr-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm">
                  <Image
                    src="/logo.jpeg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-[#e67e22] leading-tight">
                    Maa Arnapurna
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.2em] uppercase">
                    TRADERS
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#e67e22] font-semibold text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#e67e22] font-semibold text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/mission-and-vision"
                className="text-gray-700 hover:text-[#e67e22] font-semibold text-sm transition-colors"
              >
                Mission & Vision
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-700 hover:text-[#e67e22] font-semibold text-sm transition-colors"
              >
                Contact Us
              </Link>
              <button
                onClick={openModal}
                className="bg-[#e67e22] hover:bg-[#d35400] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md active:scale-95"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#e67e22] hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#e67e22] hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              href="/mission-and-vision"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#e67e22] hover:bg-gray-50"
            >
              Mission & Vision
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#e67e22] hover:bg-gray-50"
            >
              Contact Us
            </Link>
            <div className="mt-4 px-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
                className="w-full bg-[#e67e22] text-white px-6 py-3 rounded-lg font-bold text-base shadow-md hover:bg-[#d35400] transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
