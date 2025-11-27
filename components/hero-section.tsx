// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BrandCarousel } from "./brand-carousel";
// import Image from "next/image";

// export function HeroSection() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const words = ["Innovation", "Technology", "Creativity"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [words.length]);

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" /> */}
//         <div className="absolute inset-0 " />
//         <Image
//           src="/landing.jpg"
//           alt="Business background"
//           fill
//           priority // Add priority to preload the main hero image
//           className="object-cover opacity-60"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col flex-grow justify-center">
//         {/* Kept your "mt-8" on the grid container */}
//         <div className="grid lg:grid-cols-2 gap-4 items-center mt-10">
//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <motion.h1
//               // Kept your font size change: "text-4xl"
//               className="text-4xl lg:text-6xl font-serif font-medium leading-tight"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               Redefining Trading & Manufacturing Through
//               <br />
//               <span className="bg-[var(--blue-custom)] text-white px-4 py-1 inline-block mt-3">
//                 <AnimatePresence mode="wait">
//                   <motion.span
//                     key={currentWordIndex}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.4 }}
//                     className="inline-block"
//                   >
//                     {words[currentWordIndex]}
//                   </motion.span>
//                 </AnimatePresence>
//               </span>
//             </motion.h1>

//             <motion.p
//               className="font-lato text-white font-bold text-lg max-w-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//             >
//               We provide quality, efficient sourcing and delivery across retail,
//               manufacturing, education, corporate, and humanitarian sectors.
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>

//       <BrandCarousel />
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandCarousel } from "./brand-carousel";

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const words = ["Innovation", "Technology", "Creativity"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  // Auto-play and loop the video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Optional: Dark overlay to improve text readability */}
        {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          className={`w-full h-full object-cover opacity-60 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-60" : "opacity-0"
          }`}
        >
          <source src="/landing-hero-vid.mov" type="video/mp4" />
          {/* Fallback for browsers that don't support .mov */}
          {/* <source src="/landing-hero-vid.mp4" type="video/mp4" /> */}
          {/* Fallback image if video doesn't load */}
          <img
            src="/landing.jpg"
            alt="Business background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col flex-grow justify-center">
        <div className="grid lg:grid-cols-2 gap-4 items-center mt-10">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-serif font-medium leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Redefining Trading & Manufacturing Through
              <br />
              <span className="bg-[var(--blue-custom)] text-white px-4 py-1 inline-block mt-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              className="font-lato text-white font-bold text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We provide quality, efficient sourcing and delivery across retail,
              manufacturing, education, corporate, and humanitarian sectors.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <BrandCarousel />
    </section>
  );
}
