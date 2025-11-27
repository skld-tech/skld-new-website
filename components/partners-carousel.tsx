"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      name: "Value Smart Tech Co. Ltd",
      logo: "/partners/valuestek-logo-2.png",
      description:
        "Value Smart Tech Co. Ltd is high-tech enterprise engaging in R&D, manufacturing and sales of educational and corporate presentation technology.",
    },
    {
      name: "HP",
      logo: "/partners/hp-logo-2.png",
      description:
        "HP product lines include PCs and other computing devices, enterprise and industry standard servers, storage devices, networking products, software, printers, scanners, plotters and other imaging products.",
    },
    {
      name: "Canon",
      logo: "/partners/canon-logo-2.png",
      description:
        "From chic and portable instant cameras and compact cameras offering lightweight, fixed lens flexibility to DSLRs and mirrorless cameras with state-of-the-art features, Canon's range of cameras offers everyone a route to creativity.",
    },
    {
      name: "Sharp",
      logo: "/partners/sharp-logo-2.png",
      description:
        "Sharp manufactures the world's most advanced flat screen display technology and our interactive displays, digital signage and video walls help you increase engagement, boost productivity and enrich communication in reception areas and retail outlets, to classrooms and boardrooms.",
    },
    {
      name: "Casio",
      logo: "/partners/casio-logo-2.png",
      description:
        "Casio is a global innovator in electronic products, renowned for pioneering calculators, digital watches, musical instruments, and educational technology. Their durable and reliable products empower learning, creativity, and productivity worldwide.",
    },
    {
      name: "Dell",
      logo: "/partners/dell-logo-2.png",
      description:
        "Dell continues to be a significant player in the technology industry, with increasing offerings in desktops, laptops, high-end gaming PCs, workstations, servers, monitors, network switches and new technologies such as AI PCs and cloud computing.",
    },
    {
      name: "Epson",
      logo: "/partners/epson-logo-2.png",
      description:
        "Epson manufactures a wide range of products including inkjet, dot matrix, and laser printers; 3LCD projectors; scanners; robots; watches; and other electronic components.",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, partners.length]);

  const nextPartner = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    setIsAutoPlaying(false);
  };

  const prevPartner = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    setIsAutoPlaying(false);
  };

  const goToPartner = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // const handleDownloadCatalogue = () => {
  //   const pdfUrl =
  //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  //   window.open(pdfUrl, "_blank", "noopener,noreferrer");
  // };

  return (
    <section id="our-partners" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-medium text-gray-900 mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver cutting-edge
            solutions and innovative products across education, technology, and
            business sectors.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel Card */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Partner Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-24 relative">
                      <Image
                        src={partners[currentIndex].logo}
                        alt={`${partners[currentIndex].name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {partners[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {partners[currentIndex].description}
                    </p>

                    {/* <motion.button
                      onClick={handleDownloadCatalogue}
                      className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download Catalogue
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
            {/* Dots Navigation */}
            <div className="flex space-x-3">
              {partners.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToPartner(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex space-x-3">
              <motion.button
                onClick={prevPartner}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextPartner}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Interested in becoming a partner?
          </p>
          <Link href="/contact">
            <motion.button
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
