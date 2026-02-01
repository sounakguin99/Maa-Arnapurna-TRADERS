import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e67e22] to-orange-400"></div>
      <div className="w-full xl:pl-22 xl:pr-22 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Brand Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-orange-500 shadow-lg">
              <Image
                src="/logo.jpeg"
                alt="Footer Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Maa Arnapurna
              </h3>
              <span className="text-xs font-bold text-orange-500 tracking-[0.1em] uppercase">
                Traders
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium export trading firm from West Bengal, supplying quality
            eco-friendly jute bags and leather goods to the world.
          </p>
          <div className="flex gap-4">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.196 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.17 5.432 0v8.306h5v-10.577c0-7.116-8-7.587-10.464-3.728v-2.001z" />
                  </svg>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((social, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center hover:bg-[#e67e22] hover:text-white hover:border-[#e67e22] transition-colors cursor-pointer group"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-[#e67e22]">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-[#e67e22] transition-colors inline-block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#e67e22] transition-colors inline-block"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/mission-and-vision"
                className="hover:text-[#e67e22] transition-colors inline-block"
              >
                Mission & Vision
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-[#e67e22] transition-colors inline-block"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-[#e67e22] transition-colors inline-block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="hover:text-[#e67e22] transition-colors inline-block"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Products List */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-[#e67e22] ">Our Products</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-[#e67e22] transition-colors">
                Jute Shopping Bags
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e67e22] transition-colors">
                Jute Tote & Gift Bags
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e67e22] transition-colors">
                Leather Wallets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e67e22] transition-colors">
                Leather Belts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e67e22] transition-colors">
                Leather Handbags
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e67e22] transition-colors">
                Custom Packaging
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-[#e67e22]">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-4 items-start">
              <span className="text-[#e67e22] shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="max-w-[200px]">West Bengal, India</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-[#e67e22] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a
                href="tel:+916294792340"
                className="hover:text-[#e67e22] transition-colors"
              >
                +91 62947 92340
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-[#e67e22] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <a
                href="mailto:subrajitmandal250@gmail.com"
                className="break-all hover:text-[#e67e22] transition-colors"
              >
                subrajitmandal250@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-12 text-center text-gray-500 text-sm md:text-base">
        <p>
          &copy; {new Date().getFullYear()} Maa Arnapurna TRADERS. All rights
          reserved. |{" "}
          <a
            href="/privacy-policy"
            className="hover:text-[#e67e22] transition-colors"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-and-conditions"
            className="hover:text-[#e67e22] transition-colors"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}
