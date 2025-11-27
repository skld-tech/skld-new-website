// app/privacy/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl lg:text-5xl font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Privacy Policy
            </motion.h1>

            <motion.div
              className="prose prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-400 mb-6">
                Last updated: September 16, 2025
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">Introduction</h2>
              <p className="text-gray-400 mb-6">
                SKLD Integrated Services Limited ("we," "our," or "us") is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-400 mb-6">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="text-gray-400 list-disc list-inside mb-6">
                <li>Register on our website</li>
                <li>Place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a form</li>
                <li>Contact us</li>
              </ul>

              <h2 className="text-2xl font-medium mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-400 mb-6">
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul className="text-gray-400 list-disc list-inside mb-6">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>Process your transactions</li>
                <li>Send you promotional information</li>
              </ul>

              <h2 className="text-2xl font-medium mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-6">
                If you have any questions about this Privacy Policy, please
                contact us at:
                <br />
                Email: privacy@skld.com
                <br />
                Phone: +234-800-824667
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
