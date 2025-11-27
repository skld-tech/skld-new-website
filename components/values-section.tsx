// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export function ValuesSection() {
//   const [activeValue, setActiveValue] = useState("Customer Satisfaction");
//   const [hoveredValue, setHoveredValue] = useState<string | null>(null);

//   const values = [
//     {
//       name: "Customer Satisfaction",
//       description:
//         "We strive to exceed expectations and maintain the highest standards of quality and accessibility in all our products and services.",
//     },
//     {
//       name: "Employee Management",
//       description:
//         "We foster a culture of growth, innovation, and collaboration, empowering our team to deliver exceptional results.",
//     },
//     {
//       name: "Partnership",
//       description:
//         "We build lasting relationships with our partners, suppliers, and stakeholders based on trust and mutual success.",
//     },
//     {
//       name: "Environmental Responsibility",
//       description:
//         "We are committed to sustainable practices and environmental stewardship in all our operations.",
//     },
//     {
//       name: "Social Responsibility",
//       description:
//         "We actively contribute to the communities we serve, creating positive social impact through our initiatives.",
//     },
//   ];

//   // Find the longest description for min-height calculation
//   const longestDescription = values.reduce(
//     (longest, v) =>
//       v.description.length > longest.length ? v.description : longest,
//     ""
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveValue((prev) => {
//         const currentIndex = values.findIndex((v) => v.name === prev);
//         const nextIndex = (currentIndex + 1) % values.length;
//         return values[nextIndex].name;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [values]);

//   return (
//     <section className="py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-medium mb-12">Corporate Values</h2>
//         <div className="space-y-8">
//           <div className="flex flex-col lg:flex-row justify-between items-start w-full relative gap-8 lg:gap-0">
//             {values.map((value, index) => (
//               <div
//                 key={value.name}
//                 className="relative flex-1 px-4 w-full lg:w-auto flex flex-col items-start"
//               >
//                 <motion.div
//                   className="absolute -top-2 left-4 right-4 h-0.5 bg-gray-600"
//                   animate={{
//                     backgroundColor:
//                       activeValue === value.name || hoveredValue === value.name
//                         ? "var(--blue-custom)" // #0519b4
//                         : "#4b5563",
//                     width: activeValue === value.name ? "100%" : "0%",
//                   }}
//                   initial={{ width: "0%" }}
//                   transition={{ duration: 3, ease: "linear" }} // Loading animation
//                 />
//                 <button
//                   onClick={() => setActiveValue(value.name)}
//                   onMouseEnter={() => setHoveredValue(value.name)}
//                   onMouseLeave={() => setHoveredValue(null)}
//                   className={`pt-4 transition-colors cursor-pointer text-left w-full ${
//                     activeValue === value.name
//                       ? "text-white"
//                       : "text-gray-400 hover:text-gray-300"
//                   }`}
//                   style={{ alignSelf: "flex-start" }}
//                 >
//                   {value.name}
//                 </button>
//                 {/* Reserve space for description to avoid layout shift */}
//                 <div className="mt-4 w-full min-h-[72px] relative">
//                   {/* Hidden dummy for sizing, always rendered but invisible */}
//                   <span
//                     className="invisible block absolute pointer-events-none select-none"
//                     aria-hidden="true"
//                   >
//                     {longestDescription}
//                   </span>
//                   {/* Actual animated description */}
//                   <motion.p
//                     initial={false}
//                     animate={
//                       activeValue === value.name
//                         ? { opacity: 1, y: 0, position: "static" }
//                         : { opacity: 0, y: 10, position: "absolute" }
//                     }
//                     transition={{ duration: 0.3 }}
//                     className={`text-gray-400 text-sm text-left absolute left-0 top-0 w-full`}
//                     style={{ willChange: "opacity, transform" }}
//                   >
//                     {value.description}
//                   </motion.p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// values-section.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ValuesSection() {
  const [activeValue, setActiveValue] = useState("CUSTOMER SATISFACTION");
  const [progress, setProgress] = useState(0);

  const values = [
    {
      name: "CUSTOMER SATISFACTION",
      description:
        "We strive to exceed expectations and maintain the highest standards of quality and accessibility in all our products and services.",
    },
    {
      name: "EMPLOYEE MANAGEMENT",
      description:
        "We foster a culture of growth, innovation, and collaboration, empowering our team to deliver exceptional results.",
    },
    {
      name: "PARTNERSHIP",
      description:
        "We build lasting relationships with our partners, suppliers, and stakeholders based on trust and mutual success.",
    },
    {
      name: "ENVIRONMENTAL RESPONSIBILITY",
      description:
        "We are committed to sustainable practices and environmental stewardship in all our operations.",
    },
    {
      name: "SOCIAL RESPONSIBILITY",
      description:
        "We actively contribute to the communities we serve, creating positive social impact through our initiatives.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const currentIndex = values.findIndex((v) => v.name === activeValue);
          const nextIndex = (currentIndex + 1) % values.length;
          setActiveValue(values[nextIndex].name);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Adjust timing as needed

    return () => clearInterval(interval);
  }, [activeValue, values]);

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium mb-12">Corporate Values</h2>
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start w-full relative gap-8 lg:gap-0">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="relative flex-1 px-4 w-full lg:w-auto flex flex-col items-start"
              >
                <div className="absolute -top-2 left-4 right-4 h-0.5 bg-gray-600">
                  {activeValue === value.name && (
                    <motion.div
                      className="h-full bg-[var(--blue-custom)]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  )}
                </div>
                <button
                  onClick={() => {
                    setActiveValue(value.name);
                    setProgress(0);
                  }}
                  className={`pt-4 transition-colors cursor-pointer text-left w-full font-medium ${
                    activeValue === value.name
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  style={{ alignSelf: "flex-start" }}
                >
                  {value.name}
                </button>
                <div className="mt-4 w-full min-h-[72px] relative">
                  <span
                    className="invisible block absolute pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    {values.reduce(
                      (longest, v) =>
                        v.description.length > longest.length
                          ? v.description
                          : longest,
                      ""
                    )}
                  </span>
                  <motion.p
                    initial={false}
                    animate={
                      activeValue === value.name
                        ? { opacity: 1, y: 0, position: "static" }
                        : { opacity: 0, y: 10, position: "absolute" }
                    }
                    transition={{ duration: 0.3 }}
                    className={`text-gray-400 text-sm text-left absolute left-0 top-0 w-full`}
                    style={{ willChange: "opacity, transform" }}
                  >
                    {value.description}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
