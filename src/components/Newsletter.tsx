"use client";

import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-[#e67e22] py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        {/* Optional pattern or texture could go here if using an image, otherwise just color */}
      </div>
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Stay Updated with Market Trends
        </h2>
        <p className="text-orange-50 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates on eco-friendly
          packaging trends, new product launches, and exclusive export offers.
        </p>

        <form
          className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed successfully!");
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-lg placeholder:text-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg active:scale-95 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
        <p className="text-orange-100 text-sm">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
}
