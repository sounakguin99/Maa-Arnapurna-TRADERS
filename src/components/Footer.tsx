import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e67e22] to-orange-400"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
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
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Maa Arnapurna
              </h3>
              <span className="text-xs font-bold text-orange-500 tracking-[0.3em] uppercase">
                Traders
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Premium export trading firm from West Bengal, India. Supplying
            high-quality eco-friendly jute bags and premium leather goods to the
            global market.
          </p>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e67e22] hover:border-[#e67e22] transition-colors cursor-pointer group"
              >
                <div className="w-5 h-5 bg-gray-400 group-hover:bg-white rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-xl font-bold relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e67e22] rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li>
              <a
                href="/"
                className="hover:text-[#e67e22] hover:translate-x-2 transition-all inline-block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#e67e22] hover:translate-x-2 transition-all inline-block"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/mission-and-vision"
                className="hover:text-[#e67e22] hover:translate-x-2 transition-all inline-block"
              >
                Mission & Vision
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-[#e67e22] hover:translate-x-2 transition-all inline-block"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-[#e67e22] hover:translate-x-2 transition-all inline-block"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Products List */}
        <div className="space-y-8">
          <h4 className="text-xl font-bold relative inline-block">
            Our Products
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e67e22] rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-gray-400 text-lg">
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
        <div className="space-y-8">
          <h4 className="text-xl font-bold relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e67e22] rounded-full"></span>
          </h4>
          <ul className="space-y-6 text-gray-400 text-lg">
            <li className="flex gap-4">
              <span className="text-[#e67e22] shrink-0">📍</span>
              <a
                href="https://maps.app.goo.gl/Gm6zvHNsDZjhmeCG7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e67e22] transition-colors"
              >
                Near Happy Club Maidan, Ranaghat, Nadia, West Bengal
              </a>
            </li>
            <li className="flex gap-4">
              <span className="text-[#e67e22] shrink-0">📞</span>
              <a
                href="tel:+916294792340"
                className="hover:text-[#e67e22] transition-colors"
              >
                +91 62947 92340
              </a>
            </li>
            <li className="flex gap-4">
              <span className="text-[#e67e22] shrink-0">✉️</span>
              <a
                href="mailto:Subrajitmandal250@gmail.com"
                className="break-all hover:text-[#e67e22] transition-colors"
              >
                Subrajitmandal250@gmail.com
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
