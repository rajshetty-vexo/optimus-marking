import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
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
              Terms & Conditions
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: 22 July 2026
            </p>
          </header>

          {/* Content Section */}
          <div className="space-y-8 text-base leading-relaxed">
            {/* Website Purpose */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Website Purpose
              </h2>
              <p className="text-gray-700">
                This website is provided for general information about Optimus
                Marking and its coding, marking, labeling, laser, TIJ, CIJ, and
                consumable products.
              </p>
            </section>

            {/* Product Information */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Product Information
              </h2>
              <p className="text-gray-700">
                Product images, specifications, and descriptions are provided for
                general reference and may change without prior notice.
              </p>
            </section>

            {/* Availability */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Availability
              </h2>
              <p className="text-gray-700">
                Availability of products, consumables, and accessories may vary
                depending on stock and supplier availability.
              </p>
            </section>

            {/* Proper Use */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Proper Use
              </h2>
              <p className="text-gray-700">
                Users agree not to misuse the website, attempt unauthorized
                access, or use the website for unlawful purposes.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Intellectual Property
              </h2>
              <p className="text-gray-700">
                All content on this website, including logos, product images,
                text, brochures, and graphics, is the property of their
                respective owners and may not be copied or reproduced without
                permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Limitation of Liability
              </h2>
              <p className="text-gray-700">
                While we try to keep the information on this website accurate and
                up to date, Optimus Marking does not guarantee that all
                information is free from errors or omissions.
              </p>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                External Links
              </h2>
              <p className="text-gray-700">
                This website may contain links to external websites. We are not
                responsible for the content or privacy practices of those
                websites.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-[#1E1951] mb-3">
                Governing Law
              </h2>
              <p className="text-gray-700">
                These terms are governed by the laws of India.
              </p>
            </section>

            {/* Contact Information */}
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

export default TermsConditions;