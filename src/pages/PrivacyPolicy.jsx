import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow py-20 mt-16 text-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1E1951] font-display">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: 22 July 2026
            </p>
          </header>

          {/* Content Section */}
          <div className="space-y-8 text-base leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Introduction
              </h2>
              <p className="text-gray-700">
                Optimus Marking respects the privacy of visitors to our website.
                This policy explains what information we receive through our website
                and how we use it.
              </p>
            </section>

            {/* Information We Receive */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Information We Receive
              </h2>
              <p className="text-gray-700 mb-3">
                When you contact us through our website, email, or WhatsApp, we
                may receive:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Your name</li>
                <li>Company name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Details of your product inquiry or support request</li>
              </ul>
            </section>

            {/* How We Use the Information */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                How We Use the Information
              </h2>
              <p className="text-gray-700 mb-3">We use the information only to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Respond to your inquiry</li>
                <li>Provide product or technical information</li>
                <li>
                  Communicate regarding coding, marking, labeling, and consumable
                  products
                </li>
                <li>Provide customer assistance related to your request</li>
              </ul>
            </section>

            {/* Email Communication */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Email Communication
              </h2>
              <p className="text-gray-700">
                Information submitted through the website is sent to our official
                company email address. We may retain email conversations for
                record-keeping and customer support purposes.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Data Sharing
              </h2>
              <p className="text-gray-700">
                We do not sell, rent, or trade your personal information to third
                parties.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Cookies
              </h2>
              <p className="text-gray-700">
                Our website may use essential cookies required for website
                functionality and basic analytics cookies to understand website
                traffic and improve user experience.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-gray-50 border border-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Contact Us
              </h2>
              <p className="text-gray-700 font-medium">Optimus Marking</p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:sales@optimusmarking.com"
                  className="text-[#1E1951] font-medium hover:underline"
                >
                  sales@optimusmarking.com
                </a>
              </p>
              <p className="text-gray-700">
                Phone:{" "}
                <a
                  href="tel:+919503729925"
                  className="text-[#1E1951] font-medium hover:underline"
                >
                  +91-9503729925
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;