// "use client";

// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export function StatsSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const leftStats = [
//     { value: 10, suffix: "+", label: "Years servicing\nthe education sector" },
//     { value: 200, suffix: "+", label: "Institutions\nserved nationwide" },
//   ];

//   const rightStats = [
//     { value: 100, suffix: "%", label: "Locally produced,\nwomen & furniture" },
//     { value: 50, suffix: "+", label: "Infrastructure\nprojects delivered" },
//   ];

//   return (
//     <section ref={sectionRef} className="pt-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Title section with original padding/margin */}
//         <div className="grid lg:grid-cols-2 gap-18 items-start mb-12">
//           <h2 className="text-4xl lg:text-5xl font-medium leading-tight bg-blue-800 text-white px-4 py-2 inline-block">
//             Driving Change Through Innovation, Quality, and Commitment
//           </h2>
//           <p className="text-white text-lg lg:ml-12">
//             At SKLD our work goes beyond products — we're building sustainable
//             supply chains, supporting communities, and creating long-term value
//             for our partners.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
//           {/* Left Stats Stack - aligned with title text */}
//           <div className="flex flex-col space-y-12 w-full lg:w-[21rem] justify-center">
//             {leftStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="text-left p-8 w-full"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 style={{ marginLeft: "-8px" }} // Aligns with title text
//               >
//                 <div className="text-5xl lg:text-7xl font-medium mb-8 text-white">
//                   <CountingNumber
//                     target={stat.value}
//                     suffix={stat.suffix}
//                     isVisible={isVisible}
//                   />
//                 </div>
//                 <p className="text-gray-300 text-base whitespace-pre-line">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Center Globe GIF - made even larger and responsive */}
//           <motion.div
//             className="flex justify-center items-center order-first lg:order-none px-0 lg:px-8"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             style={{ flex: "1 1 0%" }}
//           >
//             <div className="relative w-full max-w-[44rem] h-[18rem] sm:h-[28rem] md:h-[34rem] lg:h-[26rem] xl:h-[38rem] aspect-[2/1]">
//               {/* Using Next.js Image component for the globe */}
//               <Image
//                 src="/revolving-globe.gif"
//                 alt="Revolving Globe"
//                 fill
//                 className="rounded-full object-cover"
//                 unoptimized // Required for GIFs in Next.js Image component
//                 priority
//               />
//             </div>
//           </motion.div>

//           {/* Right Stats Stack - aligned with subtitle */}
//           <div className="flex flex-col space-y-12 w-full lg:w-[25rem] justify-center">
//             {rightStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="text-left p-8 w-full"
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 style={{ marginRight: "-8px" }} // Aligns with subtitle
//               >
//                 <div className="text-5xl lg:text-7xl font-medium mb-8 text-white">
//                   <CountingNumber
//                     target={stat.value}
//                     suffix={stat.suffix}
//                     isVisible={isVisible}
//                   />
//                 </div>
//                 <p className="text-gray-300 text-base whitespace-pre-line">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // const stats = [
  //   {
  //     value: 13,
  //     suffix: "+",
  //     label: "Offices across 7 cities\nincluding 7 retail stores",
  //   },
  //   { value: 100, suffix: "+", label: "Corporate Clients" },
  //   { value: 1000, suffix: "+", label: "Top Tier Schools across\n26 cities" },
  //   { value: 30, suffix: "+", label: "International NGO clients" },
  // ];
  const leftStats = [
    // {
    //   type: "number" as const,
    //   value: 13,
    //   suffix: "+",
    //   label: "Offices across 7 cities\nincluding 7 retail stores",
    // },
    {
      type: "number" as const,
      value: 30,
      suffix: "+",
      label: "International NGO clients",
    },
    {
      type: "number" as const,
      value: 100,
      suffix: "+",
      label: "Corporate Clients",
    },
    {
      type: "image" as const,
      src: "/iso-stamp.png",
      alt: "ISO 9001:2015 Certified",
    },
  ];

  const rightStats = [
    {
      type: "number" as const,
      value: 1000,
      suffix: "+",
      label: "Top Tier Schools across\n26 cities",
    },
    // {
    //   type: "number" as const,
    //   value: 30,
    //   suffix: "+",
    //   label: "International NGO clients",
    // },
    {
      type: "number" as const,
      value: 13,
      suffix: "+",
      label: "Offices across 7 cities\nincluding 7 retail stores",
    },
    {
      type: "number" as const,
      value: 20000,
      suffix: "+",
      label: "Retail customers",
    },
  ];

  return (
    <section ref={sectionRef} className="pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* <div className="grid lg:grid-cols-2 gap-18 items-start mb-2">
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight bg-[var(--blue-custom)] text-white px-4 py-2 inline-block font-serif">
            Driving Change Through Innovation, Quality, and Commitment
          </h2>
          <div className="flex justify-center lg:justify-end lg:ml-12">
            <div className="relative h-38 w-28 md:h-24 lg:h-46 lg:w-44">
              <Image
                src="/iso-stamp.png"
                alt="Company Vision"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div> */}
        <motion.div
          className="grid lg:grid-cols-2 gap-18 items-start mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight bg-[var(--blue-custom)] text-white px-4 py-2 inline-block font-serif">
            Driving Change Through Innovation, Quality, and Commitment
          </h2>
          <p className="font-lato text-white text-3xl lg:ml-12">
            {/* At SKLD our work goes beyond products — we're building sustainable
            supply chains, supporting communities, and creating long-term value
            for our partners. */}
            To be the preferred trading and manufacturing company in the Middle
            East and Africa (MEA), providing innovative products and services
            across multi-sectors by 2030.
          </p>
          {/* <div className="flex items-center justify-center lg:justify-end lg:ml-12">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-sm lg:text-xl font-medium whitespace-nowrap">
                We are an ISO 9001:2015 certified company
              </span>
              <motion.div
                className="relative h-38 w-28 md:h-24 lg:h-46 lg:w-44"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/iso-stamp.png"
                  alt="ISO 9001:2015 Certified"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </motion.div>
          </div> */}
        </motion.div>

        {/* <div className="flex flex-col lg:flex-row items-stretch justify-between">
          <div className="flex flex-col space-y-12 w-full lg:w-[21rem] justify-center">
            {stats.slice(0, 2).map(
              (
                stat,
                index // First two on left
              ) => (
                <motion.div
                  key={index}
                  className="text-left p-8 bg-gray-950 rounded-lg" // Added box
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ marginLeft: "-8px" }}
                >
                  <div className="text-5xl lg:text-7xl font-normal mb-10 text-white">
                    <CountingNumber
                      target={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>
                  <p className="text-gray-300 text-base whitespace-pre-line">
                    {stat.label}
                  </p>
                </motion.div>
              )
            )}
          </div>

          <motion.div
            className="flex justify-center items-center order-first lg:order-none px-0 lg:px-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ flex: "1 1 0%" }}
          >
            <div className="relative w-full max-w-[44rem] h-[18rem] sm:h-[28rem] md:h-[34rem] lg:h-[26rem] xl:h-[38rem] aspect-[2/1] hidden md:block">
              <Image
                src="/revolving-globe.gif"
                alt="Revolving Globe"
                fill
                className="rounded-full object-cover"
                unoptimized
                priority
              />
            </div>
          </motion.div>

          <div className="flex flex-col space-y-12 w-full lg:w-[25rem] justify-center">
            {stats.slice(2).map(
              (
                stat,
                index // Last two on right
              ) => (
                <motion.div
                  key={index}
                  className="text-left p-8 bg-gray-950 rounded-lg" // Added box
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ marginRight: "-8px" }}
                >
                  <div className="text-5xl lg:text-7xl font-normal mb-10 text-white">
                    <CountingNumber
                      target={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>
                  <p className="text-gray-300 text-base whitespace-pre-line">
                    {stat.label}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between my-10">
          {/* Left Stats Column - 3 items */}
          <div className="flex flex-col space-y-12 w-full lg:w-[21rem] justify-center">
            {leftStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-left p-8 rounded-lg min-h-[200px] flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ marginLeft: "-8px" }}
              >
                {stat.type === "image" ? (
                  // ISO Image Box
                  <div className="flex items-center justify-center h-full min-h-[120px]">
                    <div className="relative h-32 w-32 md:h-40 md:w-40 lg:h-36 lg:w-36">
                      <Image
                        src={stat.src}
                        alt={stat.alt}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                ) : (
                  // Regular Stat Box
                  <>
                    <div className="text-4xl lg:text-6xl font-normal mb-6 text-white">
                      <CountingNumber
                        target={stat.value}
                        suffix={stat.suffix}
                        isVisible={isVisible}
                      />
                    </div>
                    <p className="text-gray-300 text-base whitespace-pre-line">
                      {stat.label}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Larger Globe */}
          <motion.div
            className="flex justify-center items-center order-first lg:order-none px-0 lg:px-8 my-12 lg:my-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ flex: "1 1 0%" }}
          >
            <div className="relative w-full max-w-[50rem] h-[22rem] sm:h-[35rem] md:h-[42rem] lg:h-[32rem] xl:h-[50rem] aspect-[2/1] hidden md:block">
              <Image
                src="/revolving-globe.gif"
                alt="Revolving Globe"
                fill
                className="rounded-full object-cover"
                unoptimized
                priority
              />
            </div>
          </motion.div>

          {/* Right Stats Column - 3 items */}
          <div className="flex flex-col space-y-12 w-full lg:w-[25rem] justify-center">
            {rightStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-left p-8 rounded-lg min-h-[200px] flex flex-col justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ marginRight: "-8px" }}
              >
                <div className="text-4xl lg:text-6xl font-normal mb-10 text-white">
                  <CountingNumber
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <p className="text-gray-300 text-base whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountingNumber({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
