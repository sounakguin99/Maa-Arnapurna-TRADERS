"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-[112px] md:mt-[120px] bg-[#fdfaf5] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our
            service.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="prose prose-lg md:prose-xl prose-orange text-gray-600">
          <p className="lead">
            Welcome to Maa Arnapurna TRADERS! By accessing this website we
            assume you accept these terms and conditions. Do not continue to use
            Maa Arnapurna TRADERS if you do not agree to take all of the terms
            and conditions stated on this page.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            1. Definitions
          </h2>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li>
              <strong>"Client", "You" and "Your"</strong> refers to you, the
              person log on this website and compliant to the Company’s terms
              and conditions.
            </li>
            <li>
              <strong>"The Company", "Ourselves", "We", "Our" and "Us"</strong>,
              refers to our Company, Maa Arnapurna TRADERS.
            </li>
            <li>
              <strong>"Party", "Parties", or "Us"</strong>, refers to both the
              Client and ourselves.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            2. Products and Services
          </h2>
          <p>
            We specialize in the export of Jute Bags, Leather Goods, and related
            eco-friendly products. We strive to describe and display our
            products as accurately as possible. However, we do not warrant that
            product descriptions, colors, or other content is accurate,
            complete, reliable, current, or error-free.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            3. Orders and Payment
          </h2>
          <p>
            All orders placed through our website or direct contact are subject
            to acceptance by us. We reserve the right to refuse or cancel any
            order for any reason. Payment terms will be agreed upon at the time
            of order confirmation, typically via bank transfer or Letter of
            Credit (LC) for international shipments.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            4. Shipping and Delivery
          </h2>
          <p>
            As an export trading firm, we calculate shipping costs and delivery
            timelines based on the destination, weight, and volume of the
            shipment. While we aim to meet all delivery estimates, delays may
            occur due to customs, logistics, or force majeure events outside our
            control.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            5. License
          </h2>
          <p>
            Unless otherwise stated, Maa Arnapurna TRADERS and/or its licensors
            own the intellectual property rights for all material on Maa
            Arnapurna TRADERS. All intellectual property rights are reserved.
            You may access this from Maa Arnapurna TRADERS for your own personal
            use subjected to restrictions set in these terms and conditions.
          </p>
          <p className="mt-4">You must not:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li>Republish material from Maa Arnapurna TRADERS</li>
            <li>
              Sell, rent or sub-license material from Maa Arnapurna TRADERS
            </li>
            <li>
              Reproduce, duplicate or copy material from Maa Arnapurna TRADERS
            </li>
            <li>Redistribute content from Maa Arnapurna TRADERS</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall Maa Arnapurna TRADERS, nor any of its officers,
            directors, and employees, be held liable for anything arising out of
            or in any way connected with your use of this website whether such
            liability is under contract. Maa Arnapurna TRADERS, including its
            officers, directors and employees shall not be held liable for any
            indirect, consequential or special liability arising out of or in
            any way related to your use of this website.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            7. Governing Law
          </h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of West Bengal, India and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            8. Contact Info
          </h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us:
          </p>
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <p className="font-bold text-gray-900">Maa Arnapurna TRADERS</p>
            <p>Email: Subrajitmandal250@gmail.com</p>
            <p>Phone: +91 62947 92340</p>
            <p>Address: Near Happy Club Maidan, Ranaghat, Nadia, West Bengal</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
