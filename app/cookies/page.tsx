// app/cookies/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CookiesPage() {
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
              Cookie Policy
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

              <h2 className="text-2xl font-medium mt-8 mb-4">What Are Cookies</h2>
              <p className="text-gray-400 mb-6">
                Cookies are small text files that are placed on your computer by
                websites that you visit. They are widely used to make websites
                work, or work more efficiently, as well as to provide
                information to the owners of the site.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-400 mb-6">
                We use cookies for a variety of reasons detailed below.
                Unfortunately, in most cases there are no industry standard
                options for disabling cookies without completely disabling the
                functionality and features they add to this site.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">
                Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3">Essential Cookies</h3>
              <p className="text-gray-400 mb-6">
                These cookies are essential to provide you with services
                available through our website and to enable you to use some of
                its features. Without these cookies, the services that you have
                asked for cannot be provided.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Analytics Cookies</h3>
              <p className="text-gray-400 mb-6">
                These cookies help us understand how visitors interact with our
                website. The information collected includes the number of
                visitors, where visitors come from, and the pages they visited.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">
                Functionality Cookies
              </h3>
              <p className="text-gray-400 mb-6">
                These cookies allow our website to remember choices you make and
                provide enhanced, more personal features.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">Managing Cookies</h2>
              <p className="text-gray-400 mb-6">
                You can control and/or delete cookies as you wish. You can
                delete all cookies that are already on your computer and you can
                set most browsers to prevent them from being placed. If you do
                this, however, you may have to manually adjust some preferences
                every time you visit a site and some services and
                functionalities may not work.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
