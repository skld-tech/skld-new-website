"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import { ArrowIcon } from "./arrow-icon";

export function BusinessesSection() {
  const businesses = [
    {
      name: "Skit Store",
      slug: "skit",
      logo: "/businesses/skit-yellow.png",
      backgroundImage: "/businesses/skit-bg.jpg",
      websiteUrl: "https://skit.com.ng",
    },
    {
      name: "SKLD Relief",
      slug: "skld-relief",
      logo: "/businesses/skld-relief-white-logo.png",
      backgroundImage: "/businesses/skld-relief-bg.jpg",
      websiteUrl: "https://skldrelief.com",
    },
    {
      name: "Marcel Hughes",
      slug: "marcel-hughes",
      logo: "/businesses/marcel-hughes-white.png",
      backgroundImage: "/businesses/marcel-hughes-bg.jpg",
      websiteUrl: "https://marcelhughes.ng",
    },
    {
      name: "SKLD Corporate Sales",
      slug: "skld-corporate-sales",
      logo: "/businesses/skld-corporate-services-white.png",
      backgroundImage: "/businesses/skld-corporate-services-bg.jpg",
      websiteUrl: "https://skldcorporate.com",
    },
    // {
    //   name: "WeaveWorx",
    //   slug: "weaveworx",
    //   logo: "/businesses/weave-worx.png",
    //   backgroundImage: "/businesses/weave-worx-bg.jpg",
    // },
    {
      name: "SKLD Distributorship",
      slug: "skld-distributorship",
      logo: "/businesses/skld-distributorship-logo.png",
      backgroundImage: "/businesses/skld-distributorship-bg.jpg",
      websiteUrl: "https://skld.ng",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-dm-serif text-4xl font-medium mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Businesses
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {businesses.map((business, index) => (
            <motion.div
              key={business.name}
              className="group relative h-64 bg-gray-900 border border-gray-800 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${business.backgroundImage})` }}
              />

              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                {/* Fixed logo container with consistent sizing */}
                <div className="h-20 w-full flex items-center justify-center mb-2">
                  <motion.img
                    src={business.logo}
                    alt={business.name}
                    className="h-16 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-4"
                    style={{
                      // Apply white filter only if needed for SKLD Relief logo
                      filter:
                        business.name === "SKLD Relief"
                          ? "brightness(0) invert(1)"
                          : "none",
                      // Force specific width for SKLD Relief if needed
                      minWidth:
                        business.name === "SKLD Relief" ? "120px" : "auto",
                    }}
                  />
                </div>

                {/* <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Link href={`/businesses/${business.slug}`}>
                    <div className="w-8 h-8 bg-gray-500 text-black flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border rounded">
                      <ArrowIcon />
                    </div>
                  </Link>
                </motion.div> */}

                {/* Buttons Container */}
                <motion.div
                  className="absolute bottom-4 w-full px-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                >
                  <Link href={`/businesses/${business.slug}`}>
                    <button className="w-full bg-white text-black py-2 px-4 text-sm font-medium rounded hover:bg-gray-700 hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
                      More Info
                    </button>
                  </Link>

                  <a
                    href={business.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-transparent border border-white text-white py-2 px-4 text-sm font-medium rounded hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
                      Visit Website
                    </button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
