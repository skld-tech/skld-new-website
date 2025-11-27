// "use client";

// import { useState, useEffect } from "react";
// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Link from "next/link";
// import Image from "next/image";

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const businesses = [
//     { name: "Skit Store", slug: "skit" },
//     { name: "SKLD Relief", slug: "skld-relief" },
//     { name: "Marcel Hughes", slug: "marcel-hughes" },
//     { name: "SKLD Corporate Sales", slug: "skld-corporate-sales" },
//     // { name: "WeaveWorx", slug: "weaveworx" },
//     { name: "SKLD Distributorship", slug: "skld-distributorship" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-black/90 backdrop-blur-sm"
//           : "bg-black/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-auto mx-auto px-6 py-4 font-dm-serif">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             {/* <div className="w-8 h-8 bg-white flex items-center justify-center">
//               <span className="text-black font-medium text-sm">SKLD</span>
//             </div> */}
//             <Image
//               src="/skld-logo.png"
//               alt="SKLD Logo"
//               width={120}
//               height={40}
//               className="object-contain"
//             />
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               href="/about"
//               className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
//             >
//               About Us
//             </Link>

//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300">
//                 <span>Our Businesses</span>
//                 <ChevronDown className="w-4 h-4" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="sub-navbar-bg border-gray-600 p-4 min-w-[500px]">
//                 <div className="text-white font-semibold mb-2 text-right font-dm-serif">
//                   Our Businesses
//                 </div>
//                 <hr className="border-gray-500 mb-4" />
//                 <div className="flex flex-wrap gap-4 font-dm-serif">
//                   {businesses.map((business) => (
//                     <DropdownMenuItem
//                       key={business.name}
//                       className="text-white hover:bg-gray-700 p-2"
//                     >
//                       <Link
//                         href={`/businesses/${business.slug}`}
//                         className="whitespace-nowrap"
//                       >
//                         {business.name}
//                       </Link>
//                     </DropdownMenuItem>
//                   ))}
//                 </div>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <Link
//               href="/blog"
//               className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
//             >
//               News
//             </Link>

//             <Link
//               href="/careers"
//               className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
//             >
//               Careers
//             </Link>

//             <Link
//               href="/contact"
//               className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessesOpen, setIsBusinessesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsBusinessesOpen(false);
  };

  const handleBusinessesClick = () => {
    setIsBusinessesOpen(!isBusinessesOpen);
  };

  const businesses = [
    { name: "Skit Store", slug: "skit" },
    { name: "SKLD Relief", slug: "skld-relief" },
    { name: "MarcelHughes", slug: "marcel-hughes" },
    { name: "SKLD Corporate Sales", slug: "skld-corporate-sales" },
    // { name: "WeaveWorx", slug: "weaveworx" },
    { name: "SKLD Distributorship", slug: "skld-distributorship" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-sm"
          : "bg-black/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-auto mx-auto px-6 py-4 font-lato">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/skld-logo-white.png"
              alt="SKLD Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
            >
              About Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300">
                <span>Our Businesses</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="sub-navbar-bg border-gray-600 p-4 min-w-[500px]">
                <div className="text-white font-semibold mb-2 text-right font-dm-serif">
                  Our Businesses
                </div>
                <hr className="border-gray-500 mb-4" />
                <div className="flex flex-wrap gap-4 font-dm-serif">
                  {businesses.map((business) => (
                    <DropdownMenuItem
                      key={business.name}
                      className="text-white hover:bg-gray-700 p-2"
                    >
                      <Link
                        href={`/businesses/${business.slug}`}
                        className="whitespace-nowrap"
                      >
                        {business.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
            >
              News
            </Link>

            <Link
              href="/careers"
              className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="text-white hover:bg-white hover:text-black px-4 py-2 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-6 py-4 space-y-0">
              {/* About Us */}
              <Link
                href="/about"
                className="block text-white hover:bg-white hover:text-black px-4 py-3 transition-all duration-300 rounded"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>

              {/* Our Businesses Dropdown */}
              <div className="border-b border-gray-700">
                <button
                  onClick={handleBusinessesClick}
                  className="w-full flex items-center justify-between text-white hover:bg-white hover:text-black px-4 py-3 transition-all duration-300 rounded"
                >
                  <span>Our Businesses</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isBusinessesOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Businesses Submenu */}
                {isBusinessesOpen && (
                  <div className="bg-gray-900/50 ml-4 mt-1 mb-2 rounded-lg">
                    {businesses.map((business) => (
                      <Link
                        key={business.name}
                        href={`/businesses/${business.slug}`}
                        className="block text-gray-300 hover:text-white hover:bg-gray-700 px-6 py-3 transition-all duration-300 border-l-2 border-gray-600"
                        onClick={closeMobileMenu}
                      >
                        {business.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* News */}
              <Link
                href="/blog"
                className="block text-white hover:bg-white hover:text-black px-4 py-3 transition-all duration-300 rounded"
                onClick={closeMobileMenu}
              >
                News
              </Link>

              {/* Careers */}
              <Link
                href="/careers"
                className="block text-white hover:bg-white hover:text-black px-4 py-3 transition-all duration-300 rounded"
                onClick={closeMobileMenu}
              >
                Careers
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                className="block text-white hover:bg-white hover:text-black px-4 py-3 transition-all duration-300 rounded"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
