"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-[112px] md:mt-[120px] bg-[#fdfaf5] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="prose prose-lg md:prose-xl prose-orange text-gray-600">
          <p className="lead">
            At Maa Arnapurna TRADERS, accessible from our website, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Maa Arnapurna TRADERS and how we use it.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            1. Information We Collect
          </h2>
          <p>
            When you visit our website, register for an account, or place an
            order, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li>
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li>
              Business details (Company name, business address, GSTIN/Tax ID)
            </li>
            <li>Order details and transaction history</li>
            <li>Communication preferences and history</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li>Provide, operate, and maintain our website and services.</li>
            <li>Process your orders for Jute and Leather goods securely.</li>
            <li>
              Improve, personalize, and expand our website's user experience.
            </li>
            <li>Understand and analyze how you use our website.</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes.
            </li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            3. Log Files
          </h2>
          <p>
            Maa Arnapurna TRADERS follows a standard procedure of using log
            files. These files log visitors when they visit websites. All
            hosting companies do this and a part of hosting services' analytics.
            The information collected by log files includes internet protocol
            (IP) addresses, browser type, Internet Service Provider (ISP), date
            and time stamp, referring/exit pages, and possibly the number of
            clicks. These are not linked to any information that is personally
            identifiable.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            4. Data Security
          </h2>
          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            5. Third-Party Privacy Policies
          </h2>
          <p>
            Maa Arnapurna TRADERS's Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            6. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            7. Contact Us
          </h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
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
