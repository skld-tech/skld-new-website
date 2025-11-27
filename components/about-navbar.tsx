// // components/about-navbar.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// interface AboutNavbarProps {
//   activeSection: string;
//   onSectionChange: (section: string) => void;
// }

// export function AboutNavbar({ activeSection, onSectionChange }: AboutNavbarProps) {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const sections = [
//     { id: "who-we-are", label: "Who We Are" },
//     { id: "our-story", label: "Our Story" },
//     { id: "our-team", label: "Our Team" },
//     { id: "board-of-directors", label: "Board of Directors" },
//     { id: "testimonials", label: "Testimonials" },
//   ];

//   // Handle scroll behavior to show/hide navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY) {
//         // Scrolling up - show navbar
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         // Scrolling down and past threshold - hide navbar
//         setIsVisible(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 100, // Adjust for header height
//         behavior: "smooth"
//       });
//       onSectionChange(sectionId);
//     }
//   };

//   return (
//     <motion.nav
//       className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-full px-4 py-2 shadow-lg"
//       initial={{ y: 100, opacity: 0 }}
//       animate={{
//         y: isVisible ? 0 : 100,
//         opacity: isVisible ? 1 : 0
//       }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex items-center space-x-1">
//         {sections.map((section) => (
//           <button
//             key={section.id}
//             onClick={() => scrollToSection(section.id)}
//             className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
//               activeSection === section.id
//                 ? "bg-[#0519b4] text-white"
//                 : "text-gray-300 hover:text-white hover:bg-gray-800"
//             }`}
//           >
//             {section.label}
//           </button>
//         ))}
//       </div>
//     </motion.nav>
//   );
// }
// components/about-navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AboutNavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AboutNavbar({
  activeSection,
  onSectionChange,
}: AboutNavbarProps) {
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    { id: "who-we-are", label: "Who We Are" },
    { id: "our-story", label: "Our Story" },
    { id: "our-team", label: "Our Team" },
    { id: "board-of-directors", label: "Board of Directors" },
    // { id: "testimonials", label: "Testimonials" },
    // { id: "our-partners", label: "Our Partners" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for header height
        behavior: "smooth",
      });
      onSectionChange(sectionId);
    }
  };

  return (
    <motion.nav
      className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-40 bg-black border border-gray-700 rounded-full px-4 py-2 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`flex items-center space-x-1 ${
          isMobile ? "overflow-x-auto max-w-[90vw] py-1" : ""
        }`}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              isMobile ? "whitespace-nowrap" : ""
            } ${
              activeSection === section.id
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
