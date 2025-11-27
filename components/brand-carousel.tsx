// "use client";

// import { useRef, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowIcon } from "./arrow-icon";

// // Preserved your exact brand paths
// const brands = [
//   { name: "ValueStek", logo: "/brands/value-brand.png" },
//   { name: "Canon", logo: "/brands/canon-brand.png" },
//   { name: "Sharp", logo: "/brands/sharp-brand.png" },
//   { name: "HP", logo: "/brands/hp-brand.png" },
// ];

// const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

// export function BrandCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     const scroll = () => {
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//         scrollContainer.scrollLeft = 0;
//       } else {
//         scrollContainer.scrollLeft += 1;
//       }
//     };
//     const intervalId = setInterval(scroll, 30);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto w-full relative z-20 pb-10">
//       <motion.div
//         // Kept your specified gap: "gap-20"
//         className="flex flex-col lg:flex-row items-center gap-20"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.7 }}
//       >
//         <div className="flex-shrink-0">
//           {/* Kept your exact styling with "sub-navbar-bg", "p-1", etc. */}
//           <div className="sub-navbar-bg rounded-full p-1 flex items-center space-x-4 shadow-lg">
//             <span className="text-white text-sm font-medium pl-3">
//               Trusted by Thousands of Organizations Across MEA
//             </span>
//             <div className="bg-gray-300 hover:bg-gray-300 transition-colors rounded-full p-1 cursor-pointer">
//               <ArrowIcon />
//             </div>
//           </div>
//         </div>

//         <div
//           ref={scrollRef}
//           className="flex items-center space-x-16 overflow-hidden w-full"
//         >
//           {duplicatedBrands.map((brand, index) => (
//             <div key={index} className="flex-shrink-0">
//               <Image
//                 src={brand.logo}
//                 alt={`${brand.name} logo`}
//                 // Kept your specified image dimensions
//                 width={70}
//                 height={50}
//                 className="object-contain filter grayscale brightness-0 invert"
//               />
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowIcon } from "./arrow-icon";

const defaultBrands = [
  { name: "ValueStek", logo: "/brands/relief/UNICEF-Logo.png" },
  { name: "Canon", logo: "/brands/corporate/sheraton.png" },
  { name: "Sharp", logo: "/brands/relief/Malaria-Consortium-logo.png" },
  { name: "Sharp", logo: "/brands/relief/Nigerian-Red-Cross-Society.png" },
  { name: "HP", logo: "/brands/corporate/evercare.png" },
  { name: "HP", logo: "/brands/corporate/movenpick.png" },
  { name: "HP", logo: "/brands/corporate/lafarge-white.png" },
  { name: "HP", logo: "/brands/corporate/TSL-Limited-Logo.png" },
  { name: "HP", logo: "/brands/corporate/fanmilk.png" },
  { name: "HP", logo: "/brands/corporate/mouka.png" },
  { name: "HP", logo: "/brands/corporate/GrandCereals.png" },
  { name: "HP", logo: "/brands/corporate/Sun-king.png" },
];

interface Brand {
  name: string;
  logo: string;
}

interface BrandCarouselProps {
  brands?: Brand[];
}

export function BrandCarousel({ brands = defaultBrands }: BrandCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // duplicated brands for seamless scrolling
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };
    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full relative z-20 pb-10">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="flex-shrink-0">
          <div className="sub-navbar-bg rounded-full p-1 flex items-center space-x-4 shadow-lg">
            <span className="text-white text-sm font-medium pl-3">
              Trusted by Thousands of Organizations Across MEA
            </span>
            <div className="bg-gray-300 hover:bg-gray-300 transition-colors rounded-full p-1 cursor-pointer">
              <ArrowIcon />
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex items-center space-x-16 overflow-hidden w-full"
        >
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={70}
                height={50}
                className="object-contain filter "
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
