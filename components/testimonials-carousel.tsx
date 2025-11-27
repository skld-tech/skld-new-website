// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "Partnering with SKLD for our office supplies has streamlined our procurement process, saving us both time and money.",
//     name: "Mr. Tunde Okoro",
//     title: "Operations Manager, Sterling Innovations, Lagos",
//     image: "/about/md-2.png",
//   },
//   {
//     quote:
//       "The quality of products is consistently high. From stationery to ergonomic furniture, we've never been disappointed. It's great value for money.",
//     name: "Dr. Emeka Nwosu",
//     title: "Managing Director, Crestview Medical Center, Port Harcourt",
//     image: "/about/md-4.png",
//   },
//   {
//     quote:
//       "Partnering with SKLD for our office supplies has streamlined our procurement process, saving us both time and money.",
//     name: "Mr. Tunde Okoro",
//     title: "Operations Manager, Sterling Innovations, Lagos",
//     image: "/about/md-2.png",
//   },
//   {
//     quote:
//       "Their customer service team is a pleasure to work with. They are knowledgeable, friendly, and always ready to help us find the perfect solution.",
//     name: "Mrs. Funke Adebayo",
//     title: "Studio Lead, Kobo Art House, Ibadan",
//     image: "/about/md-3.png",
//   },
//   {
//     quote:
//       "SKLD's delivery is fast and reliable. We placed a large order for conference, and it arrived ahead of schedule.",
//     name: "Mrs. Aisha Bello",
//     title: "Head of Administration, Abuja",
//     image: "/about/md-bg.png",
//   },
// ];

// export function TestimonialsCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     setIsAutoPlaying(false);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//     setIsAutoPlaying(false);
//   };

//   const goToTestimonial = (index: number) => {
//     setCurrentIndex(index);
//     setIsAutoPlaying(false);
//   };

//   // Calculate visible testimonials (show 3 at a time on desktop, 1 on mobile)
//   const getVisibleTestimonials = () => {
//     const visibleCount = 3;
//     const testimonialsCopy = [...testimonials, ...testimonials]; // Duplicate for seamless loop
//     return testimonialsCopy.slice(currentIndex, currentIndex + visibleCount);
//   };

//   return (
//     <div className="relative max-w-7xl mx-auto bg-white text-black px-6 py-4">
//       {/* Testimonials Grid */}
//       <div className="grid md:grid-cols-3 gap-8 mb-12">
//         <AnimatePresence mode="wait">
//           {getVisibleTestimonials().map((testimonial, index) => (
//             <motion.div
//               key={`${currentIndex}-${index}`}
//               className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="mb-6">
//                 <p className="text-gray-300 leading-relaxed italic">
//                   "{testimonial.quote}"
//                 </p>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <motion.img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                 />
//                 <div>
//                   <h4 className="text-white font-semibold">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-gray-400 text-sm">{testimonial.title}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Navigation Controls */}
//       <div className="flex justify-between items-center">
//         {/* Dots Navigation */}
//         <div className="flex space-x-2">
//           {testimonials.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => goToTestimonial(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentIndex ? "bg-white" : "bg-gray-600"
//               }`}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             />
//           ))}
//         </div>

//         {/* Arrow Controls */}
//         <div className="flex space-x-2">
//           <motion.button
//             onClick={prevTestimonial}
//             className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </motion.button>
//           <motion.button
//             onClick={nextTestimonial}
//             className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Partnering with SKLD for our office supplies has streamlined our procurement process, saving us both time and money.",
    name: "Mr. Tunde Okoro",
    title: "Operations Manager, Sterling Innovations, Lagos",
    image: "/about/md-2.png",
  },
  {
    quote:
      "The quality of products is consistently high. From stationery to ergonomic furniture, we've never been disappointed. It's great value for money.",
    name: "Dr. Emeka Nwosu",
    title: "Managing Director, Crestview Medical Center, Port Harcourt",
    image: "/about/md-4.png",
  },
  {
    quote:
      "Their customer service team is a pleasure to work with. They are knowledgeable, friendly, and always ready to help us find the perfect solution.",
    name: "Mrs. Funke Adebayo",
    title: "Studio Lead, Kobo Art House, Ibadan",
    image: "/about/md-3.png",
  },
  {
    quote:
      "SKLD's delivery is fast and reliable. We placed a large order for conference, and it arrived ahead of schedule.",
    name: "Mrs. Aisha Bello",
    title: "Head of Administration, Abuja",
    image: "/about/md-bg.png",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate visible testimonials (show 3 at a time on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visibleCount = 3;
    const testimonialsCopy = [...testimonials, ...testimonials]; // Duplicate for seamless loop
    return testimonialsCopy.slice(currentIndex, currentIndex + visibleCount);
  };

  return (
    <section className="bg-white pb-6 lg:pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-medium text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover why businesses across Nigeria trust SKLD for their office solutions
          </p>
        </motion.div> */}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="mb-6">
                  <div className="text-yellow-400 text-2xl mb-2">"</div>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Dots Navigation */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
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
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
