"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function QualityPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-black">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Logo Header */}
        <div className="flex justify-center mb-8">
          <Image
            src="/skld-logo.png"
            alt="SKLD Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Letter Container */}
        <motion.div
          className="max-w-4xl mx-auto bg-white px-8 py-12 shadow-lg border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Letter Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-4">QUALITY POLICY</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Date */}
          <div className="text-right mb-8">
            <p className="text-gray-600">Date: January 1, 2025</p>
          </div>

          {/* Letter Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>To All Stakeholders of SKLD Integrated Services Limited,</p>

            <p>
              At SKLD Integrated Services Limited, we are committed to
              delivering exceptional quality in all our products and services.
              Our quality policy forms the foundation of our operations and
              reflects our dedication to excellence, customer satisfaction, and
              continuous improvement.
            </p>

            <p>
              <strong>Our Quality Commitment:</strong>
            </p>

            <ul className="list-disc list-outside ml-6 space-y-3">
              <li>
                <strong>Customer Focus:</strong> We prioritize understanding and
                meeting our customers' needs and expectations through superior
                products and services.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> We constantly seek to
                enhance our processes, products, and services through innovation
                and best practices.
              </li>
              <li>
                <strong>Compliance & Standards:</strong> We adhere to all
                relevant quality standards, regulatory requirements, and
                industry best practices.
              </li>
              <li>
                <strong>Employee Engagement:</strong> We empower our team
                members to take ownership of quality and contribute to our
                improvement initiatives.
              </li>
              <li>
                <strong>Supplier Partnerships:</strong> We collaborate with
                suppliers who share our commitment to quality and reliability.
              </li>
              <li>
                <strong>Sustainable Practices:</strong> We integrate
                environmental responsibility and sustainability into our quality
                management approach.
              </li>
            </ul>

            <p>
              This quality policy is communicated to all employees and
              stakeholders, and is regularly reviewed to ensure its continuing
              suitability. Every member of the SKLD team is responsible for
              understanding, implementing, and maintaining this policy in their
              daily activities.
            </p>

            <p>
              We are committed to measuring our performance against this policy
              and will provide the necessary resources to achieve our quality
              objectives.
            </p>

            <p className="mt-12">Sincerely,</p>

            {/* Signature Section */}
            <div className="mt-10">
              {/* <div className="mb-4">
                <Image
                  src="/signature-placeholder.png" // Replace with actual signature image
                  alt="Tayo Osiyemi Signature"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div> */}
              <p className="font-medium text-xl">Tayo Osiyemi</p>
              <p className="text-gray-600">Executive Director</p>
              <p className="text-gray-600">SKLD Integrated Services Limited</p>
            </div>

            {/* Policy Review Date */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Policy Review Date:</strong> January 1, 2025
              </p>
              <p className="text-sm text-gray-500">
                <strong>Document Version:</strong> 1.0
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
