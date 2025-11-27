// "use client";

// import { motion } from "framer-motion";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import { BrandCarousel } from "@/components/brand-carousel";
// import { notFound } from "next/navigation";

// const businessData = {
//   skit: {
//     name: "Skit",
//     logo: "/businesses/skit-yellow.png",
//     tagline: "Your One-Stop Destination For Quality School & Office Essentials",
//     description:
//       "We provide quality, safety, and convenience plus other office essentials. Experience the difference with our comprehensive range of products and exceptional customer service.",
//     heroImage: "/businesses/skit-yellow-bg.jpg",
//     mainHeading:
//       "Providing premium school, office, and lifestyle supplies with convenience, variety, and a unique in-store experience.",
//     mainDescription:
//       "From desks, school uniforms and school backpacks to stationery, gadgets, and office supplies — we've got everything you need to learn, create, and succeed.",
//     websiteUrl: "https://skit.com.ng",
//     services: [
//       {
//         title: "School Supplies",
//         description:
//           "Complete range of educational materials, uniforms, and school essentials designed to support learning excellence.",
//         image: "/businesses/school-supplies.jpg",
//       },
//       {
//         title: "Office Essentials",
//         description:
//           "Professional office supplies, furniture, and equipment to create productive work environments.",
//         image: "/businesses/office-essentials.jpg",
//       },
//       {
//         title: "Lifestyle Products",
//         description:
//           "Curated selection of lifestyle products that enhance daily experiences and personal productivity.",
//         image: "/businesses/lifestyle-products.jpg",
//       },
//     ],
//     gallery: [
//       "/businesses/gallery-1.jpg",
//       "/businesses/gallery-2.png",
//       "/businesses/gallery-3.png",
//     ],
//   },
//   "skld-relief": {
//     name: "SKLD Relief",
//     logo: "/businesses/skld-relief-3.png",
//     tagline: "Humanitarian Aid & Emergency Response Solutions",
//     description:
//       "Providing critical support and resources during emergencies and humanitarian crises. Our relief operations ensure communities receive essential aid when they need it most.",
//     heroImage: "/businesses/skld-relief-bg.jpg",
//     mainHeading:
//       "Delivering life-saving aid and emergency response solutions with speed, efficiency, and compassion.",
//     mainDescription:
//       "From emergency shelter and medical supplies to food distribution and disaster recovery — we provide comprehensive humanitarian support across Africa.",
//     websiteUrl: "https://skldrelief.com",
//     // services: [
//     //   {
//     //     title: "Emergency Response",
//     //     description:
//     //       "Rapid deployment of emergency aid including shelter, medical supplies, and essential resources during crises.",
//     //     image: "/businesses/school-supplies.jpg",
//     //   },
//     //   {
//     //     title: "Food Security",
//     //     description:
//     //       "Food distribution programs and nutrition support to combat hunger and malnutrition in affected communities.",
//     //     image: "/businesses/office-essentials.jpg",
//     //   },
//     //   {
//     //     title: "Community Recovery",
//     //     description:
//     //       "Long-term recovery programs that help communities rebuild and become more resilient after disasters.",
//     //     image: "/businesses/lifestyle-products.jpg",
//     //   },
//     // ],
//     gallery: [
//       "/businesses/gallery-1.jpg",
//       "/businesses/gallery-2.png",
//       "/businesses/gallery-3.png",
//     ],
//   },
//   "skld-corporate-sales": {
//     name: "SKLD Corporate Sales",
//     logo: "/businesses/skld-corporate-services.png",
//     tagline: "Enterprise Solutions & B2B Partnerships",
//     description:
//       "Comprehensive corporate solutions and bulk procurement services for businesses, institutions, and government organizations across Africa.",
//     heroImage: "/businesses/skld-corporate-services-bg.jpg",
//     mainHeading:
//       "Empowering businesses with comprehensive corporate solutions, bulk procurement, and strategic partnerships.",
//     mainDescription:
//       "From large-scale furniture procurement to institutional partnerships — we provide tailored solutions that drive business success and operational efficiency.",
//     websiteUrl: "https://skldcorporate.com",
//     services: [
//       {
//         title: "Bulk Procurement",
//         description:
//           "Large-scale procurement services for furniture, equipment, and supplies with competitive pricing and reliable delivery.",
//         image: "/businesses/school-supplies.jpg",
//       },
//       {
//         title: "Corporate Partnerships",
//         description:
//           "Strategic partnerships and long-term contracts that provide consistent supply chain solutions for enterprises.",
//         image: "/businesses/office-essentials.jpg",
//       },
//       {
//         title: "Custom Solutions",
//         description:
//           "Tailored solutions designed to meet specific corporate needs and requirements across various industries.",
//         image: "/businesses/lifestyle-products.jpg",
//       },
//     ],
//     gallery: [
//       "/businesses/gallery-1.jpg",
//       "/businesses/gallery-2.png",
//       "/businesses/gallery-3.png",
//     ],
//   },
//   "marcel-hughes": {
//     name: "Marcel Hughes",
//     logo: "/businesses/marcel-hughes.png",
//     tagline: "Nigeria's Leading Quality School Uniform Brand",
//     description:
//       "Premium school uniforms, footwear, and accessories designed for comfort and durability. Focused on quality schoolwear for almost a decade.",
//     heroImage: "/businesses/marcel-hughes-bg.jpg",
//     mainHeading:
//       "Providing quality schoolwear that combines comfort, style, and durability for students across Nigeria.",
//     mainDescription:
//       "From uniforms to sportswear and accessories — we create premium schoolwear solutions for educational institutions.",
//     websiteUrl: "https://marcelhughes.ng",
//     services: [
//       {
//         title: "School Uniforms",
//         description:
//           "High-quality school uniforms designed for comfort and longevity, suitable for daily wear.",
//         image: "/businesses/school-supplies.jpg",
//       },
//       {
//         title: "Footwear",
//         description:
//           "Durable and comfortable school shoes and accessories to complete the uniform look.",
//         image: "/businesses/office-essentials.jpg",
//       },
//       {
//         title: "Sportswear",
//         description:
//           "Premium sportswear for school activities, ensuring performance and comfort.",
//         image: "/businesses/lifestyle-products.jpg",
//       },
//     ],
//     gallery: [
//       "/businesses/gallery-1.jpg",
//       "/businesses/gallery-2.png",
//       "/businesses/gallery-3.png",
//     ],
//   },
//   weaveworx: {
//     name: "WeaveWorx",
//     logo: "/businesses/weave-worx.png",
//     tagline: "Professional Garment Production Solutions",
//     description:
//       "Specializing in manufacturing of school uniforms, professional wear, corporate outfits, and industrial workwear.",
//     heroImage: "/businesses/weave-worx-bg.jpg",
//     mainHeading:
//       "Delivering high-quality garment manufacturing with passion and precision for various sectors.",
//     mainDescription:
//       "From school uniforms to medical and industrial workwear — we provide comprehensive garment production services.",
//     websiteUrl: "https://weaveworx.ng",
//     services: [
//       {
//         title: "School Uniform Manufacturing",
//         description:
//           "Custom production of school uniforms with focus on quality and design.",
//         image: "/businesses/school-supplies.jpg",
//       },
//       {
//         title: "Corporate Wear",
//         description:
//           "Professional corporate outfits tailored for business environments.",
//         image: "/businesses/office-essentials.jpg",
//       },
//       {
//         title: "Industrial Workwear",
//         description:
//           "Durable workwear for industrial, medical, and professional use.",
//         image: "/businesses/lifestyle-products.jpg",
//       },
//     ],
//     gallery: [
//       "/businesses/gallery-1.jpg",
//       "/businesses/gallery-2.png",
//       "/businesses/gallery-3.png",
//     ],
//   },
//   "skld-distributorship": {
//     name: "SKLD Distributorship",
//     logo: "/businesses/skld-distributorship.png",
//     tagline: "Branded Product Distribution Network",
//     description:
//       "Opportunities for distributors to partner with SKLD in distributing educational supplies, garments, and other products across regions.",
//     heroImage: "/businesses/skld-distributorship-bg.jpg",
//     mainHeading:
//       "Join our distributorship program to expand access to SKLD's quality products.",
//     mainDescription:
//       "From educational and office supplies to branded garments — become a distributor and grow your business with our support.",
//     websiteUrl: "https://skld.ng",
//     services: [
//       {
//         title: "Distribution Opportunities",
//         description:
//           "Partner with us to distribute SKLD products in your region.",
//         image: "/businesses/school-supplies.jpg",
//       },
//       {
//         title: "Branded Products",
//         description:
//           "Access to a range of branded educational and office supplies.",
//         image: "/businesses/office-essentials.jpg",
//       },
//       {
//         title: "Support & Training",
//         description:
//           "Comprehensive support and training for successful distribution.",
//         image: "/businesses/lifestyle-products.jpg",
//       },
//     ],
//     gallery: [
//       "/businesses/gallery-1.jpg",
//       "/businesses/gallery-2.png",
//       "/businesses/gallery-3.png",
//     ],
//   },
// };

// type Business = {
//   name: string;
//   logo: string;
//   tagline: string;
//   description: string;
//   heroImage: string;
//   mainHeading: string;
//   mainDescription: string;
//   websiteUrl: string;
//   services?: { title: string; description: string; image: string }[];
//   gallery: string[];
// };

// export default function BusinessPage({ params }: { params: { slug: string } }) {
//   const business: Business =
//     businessData[params.slug as keyof typeof businessData];

//   if (!business) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navigation />
//       <main>
//         {/* Hero Section */}
//         <section className="relative pt-24 pb-16 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
//             <img
//               src={business.heroImage || "/placeholder.svg"}
//               alt={business.name}
//               className="w-full h-full object-cover opacity-60"
//             />
//           </div>

//           <div className="max-w-4xl mx-auto text-center relative z-20 mt-8">
//             <motion.div
//               className="inline-block mb-6"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <img
//                 src={business.logo || "/placeholder.svg"}
//                 alt={`${business.name} Logo`}
//                 className="h-16 mx-auto"
//               />
//             </motion.div>
//             <motion.h1
//               className="text-5xl lg:text-6xl font-medium mb-6"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {business.tagline}
//             </motion.h1>
//             <motion.p
//               className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               {business.description}
//             </motion.p>
//             <motion.a
//               href={business.websiteUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 font-semibold transition-colors"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Go to Website
//             </motion.a>
//           </div>
//           <section className="py-8">
//             <BrandCarousel />
//           </section>
//         </section>

//         {/* Services Section */}
//         <section className="py-16 px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-4xl font-medium mb-6">
//                   {business.mainHeading}
//                 </h2>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <p className="text-gray-400">{business.mainDescription}</p>
//               </motion.div>
//             </div>
//             {business.services && business.services?.length > 0 && (
//               <>
//                 <div className="grid md:grid-cols-3 gap-8 mb-12">
//                   {business.services.map((service, index) => (
//                     <motion.div
//                       key={service.title}
//                       className="bg-gray-800/50 p-6 space-y-4"
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <img
//                         src={service.image || "/placeholder.svg"}
//                         alt={service.title}
//                         className="w-full aspect-[4/3] object-cover"
//                       />
//                       <h3 className="text-xl font-medium">{service.title}</h3>
//                       <p className="text-gray-400">{service.description}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </>
//             )}

//             <div className="text-left">
//               <motion.a
//                 href={business.websiteUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block border border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold transition-colors"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 Go to Website
//               </motion.a>
//             </div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section className="py-16 px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid md:grid-cols-3 gap-4">
//               {business.gallery.map((image, index) => (
//                 <motion.img
//                   key={index}
//                   src={image}
//                   alt={`${business.name} gallery ${index + 1}`}
//                   className="w-full aspect-[3/4] object-cover"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.05 }}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BrandCarousel } from "@/components/brand-carousel";
import { notFound } from "next/navigation";
import Image from "next/image";

const businessBrands = {
  "skld-relief": [
    { name: "Brand 1", logo: "/brands/relief/AHNI-logo.png" },
    { name: "Brand 2", logo: "/brands/relief/care-logo.png" },
    { name: "Brand 3", logo: "/brands/relief/CRS-logo.png" },
    { name: "Brand 4", logo: "/brands/relief/Malaria-Consortium-logo.png" },
    { name: "Brand 5", logo: "/brands/relief/MSF-logo.png" },
    { name: "Brand 6", logo: "/brands/relief/MSI-website-logo.png" },
    { name: "Brand 7", logo: "/brands/relief/Nigerian-Red-Cross-Society.png" },
    { name: "Brand 8", logo: "/brands/relief/Save-the-Children-Logo.png" },
    { name: "Brand 9", logo: "/brands/relief/UNICEF-Logo.png" },
  ],
  "skld-corporate-sales": [
    { name: "Corporate Brand 1", logo: "/brands/corporate/evercare.png" },
    { name: "Corporate Brand 2", logo: "/brands/corporate/fanmilk.png" },
    { name: "Corporate Brand 3", logo: "/brands/corporate/GrandCereals.png" },
    { name: "Corporate Brand 4", logo: "/brands/corporate/lafarge-white.png" },
    { name: "Corporate Brand 5", logo: "/brands/corporate/MayAndBaker.png" },
    { name: "Corporate Brand 6", logo: "/brands/corporate/mouka.png" },
    { name: "Corporate Brand 7", logo: "/brands/corporate/movenpick.png" },
    { name: "Corporate Brand 8", logo: "/brands/corporate/sheraton.png" },
    { name: "Corporate Brand 9", logo: "/brands/corporate/Sun-king.png" },
    {
      name: "Corporate Brand 10",
      logo: "/brands/corporate/TSL-Limited-Logo.png",
    },
  ],
  "marcel-hughes": [
    { name: "Marcel Brand 1", logo: "/brands/marcel/Alvina-Logo.png" },
    { name: "Marcel Brand 2", logo: "/brands/marcel/Edel-Logo.png" },
    { name: "Marcel Brand 3", logo: "/brands/marcel/Evergreen-Logo.png" },
    { name: "Marcel Brand 4", logo: "/brands/marcel/jeco-logo-2.png" },
    { name: "Marcel Brand 5", logo: "/brands/marcel/Kharis-Crest-Logo.png" },
    { name: "Marcel Brand 6", logo: "/brands/marcel/Roemichs-logo.png" },
    { name: "Marcel Brand 7", logo: "/brands/marcel/St-Thomas-Logo.png" },
    { name: "Marcel Brand 8", logo: "/brands/marcel/Thames-Logo.png" },
  ],
};

const businessData = {
  skit: {
    name: "Skit",
    logo: "/businesses/skit-yellow.png",
    tagline: "Your One-Stop Destination For Quality School & Office Essentials",
    description:
      // "We provide quality, safety, and convenience plus other office essentials. Experience the difference with our comprehensive range of products and exceptional customer service.",
      "We offer a convenient and high-quality retail shopping experience, with a wide range of products and outstanding customer service that sets us apart",
    heroImage: "/businesses/skit-yellow-bg.jpg",
    mainHeading:
      "Providing premium school, office, and lifestyle supplies with convenience, variety, and a unique in-store experience.",
    mainDescription:
      "From desks, school uniforms and school backpacks to stationery, gadgets, and office supplies — we've got everything you need to learn, create, and succeed.",
    websiteUrl: "https://skit.com.ng",
    services: [
      {
        title: "School Supplies",
        description:
          "Complete range of educational materials, uniforms, and school essentials designed to support learning excellence.",
        image: "/businesses/skit-services-1.jpg",
      },
      {
        title: "Office Essentials",
        description:
          "Professional office supplies, furniture, and equipment to create productive work environments.",
        image: "/businesses/skit-services-2.jpg",
      },
      {
        title: "Lifestyle Products",
        description:
          "Curated selection of lifestyle products that enhance daily experiences and personal productivity.",
        image: "/businesses/skit-services-3.jpg",
      },
    ],
    gallery: [
      "/businesses/skit-gallery-1.jpg",
      "/businesses/skit5.jpg",
      "/businesses/gallery-3.png",
    ],
  },
  "skld-relief": {
    name: "SKLD Relief",
    logo: "/businesses/skld-relief-white-logo.png",
    tagline: "Humanitarian Aid & Emergency Response Solutions",
    description:
      "Providing critical support and resources during emergencies and humanitarian crises. Our relief operations ensure communities receive essential aid when they need it most.",
    heroImage: "/businesses/skld-relief-back.jpg",
    mainHeading:
      "Delivering life-saving aid and emergency response solutions with speed, efficiency, and compassion.",
    mainDescription:
      "From emergency shelter and medical supplies to food distribution and disaster recovery — we provide comprehensive humanitarian support across Africa.",
    websiteUrl: "https://skldrelief.com",
    services: [
      {
        title: "Wash (Water, sanitation & Hygiene)",
        description: "",
        image: "/businesses/relief1.jpg",
      },
      {
        title: "Disaster Response (NFIS)",
        description: "",
        image: "/businesses/relief2.jpg",
      },
      {
        title: "Nutrition",
        description: "",
        image: "/businesses/relief3.jpg",
      },
      {
        title: "Education",
        description: "",
        image: "/businesses/relief4.jpg",
      },
      {
        title: "Medical Aid",
        description: "",
        image: "/businesses/relief5.jpg",
      },
      {
        title: "Vocational Training",
        description: "",
        image: "/businesses/relief6.jpg",
      },
      {
        title: "Printing & Visibility",
        description: "",
        image: "/businesses/relief7.jpg",
      },
      {
        title: "IT & Office Equipment",
        description: "",
        image: "/businesses/relief8.jpg",
      },
    ],
    gallery: [
      "/businesses/relief9.jpg",
      "/businesses/relief10.jpg",
      "/businesses/relief11.jpg",
    ],
  },
  "skld-corporate-sales": {
    name: "SKLD Corporate Sales",
    logo: "/businesses/skld-corporate-services-white.png",
    tagline: "Enterprise Solutions & B2B Partnerships",
    description:
      "Comprehensive corporate solutions and bulk procurement services for businesses, institutions, and government organizations across Africa.",
    heroImage: "/businesses/landing.jpg",
    mainHeading:
      "Empowering businesses with comprehensive corporate solutions, bulk procurement, and strategic partnerships.",
    mainDescription:
      "From large-scale furniture procurement to institutional partnerships — we provide tailored solutions that drive business success and operational efficiency.",
    websiteUrl: "https://skldcorporate.com",
    services: [
      {
        title: "Office and IT",
        description:
          "Large-scale procurement services for furniture, equipment, and supplies with competitive pricing and reliable delivery.",
        image: "/businesses/skld-sales-services-2.jpg",
      },
      {
        title: "Workwear and Safety",
        description:
          "Strategic partnerships and long-term contracts that provide consistent supply chain solutions for enterprises.",
        image: "/businesses/corporate-sales.jpg",
      },
      {
        title: "Branding and Stationery",
        description:
          "Tailored solutions designed to meet specific corporate needs and requirements across various industries.",
        image: "/businesses/skld-sales-services-3.jpg",
      },
    ],
    gallery: [
      "/businesses/skld-sales-gallery-1.jpg",
      "/businesses/skld-sales-gallery-2.jpg",
      "/businesses/corporate6.jpg",
    ],
  },
  "marcel-hughes": {
    name: "Marcel Hughes",
    logo: "/businesses/marcel-hughes-white.png",
    tagline: "Nigeria's Leading Quality School Uniform Brand",
    description:
      "Premium school uniforms, footwear, and accessories designed for comfort and durability. Focused on quality schoolwear for almost a decade.",
    heroImage: "/businesses/marcel-hughes-hero.jpg",
    mainHeading:
      "Providing quality schoolwear that combines comfort, style, and durability for students across Nigeria.",
    mainDescription:
      "From uniforms to sportswear and accessories — we create premium schoolwear solutions for educational institutions.",
    websiteUrl: "https://marcelhughes.ng",
    services: [
      {
        title: "School Uniforms",
        description:
          "High-quality school uniforms designed for comfort and longevity, suitable for daily wear.",
        image: "/businesses/marcel-services-1.jpg",
      },
      {
        title: "Footwear",
        description:
          "Durable and comfortable school shoes and accessories to complete the uniform look.",
        image: "/businesses/office-essentials.jpg",
      },
      {
        title: "Sportswear",
        description:
          "Premium sportswear for school activities, ensuring performance and comfort.",
        image: "/businesses/lifestyle-products.jpg",
      },
    ],
    gallery: [
      "/businesses/marcel-gallery-1.jpg",
      "/businesses/marcel-gallery-2.jpg",
      "/businesses/marcel-gallery-3.jpg",
    ],
  },
  weaveworx: {
    name: "WeaveWorx",
    logo: "/businesses/weave-worx.png",
    tagline: "Professional Garment Production Solutions",
    description:
      "Specializing in manufacturing of school uniforms, professional wear, corporate outfits, and industrial workwear.",
    heroImage: "/businesses/weaveworx-new-bg.jpg",
    mainHeading:
      "Delivering high-quality garment manufacturing with passion and precision for various sectors.",
    mainDescription:
      "From school uniforms to medical and industrial workwear — we provide comprehensive garment production services.",
    websiteUrl: "https://weaveworx.ng",
    services: [
      {
        title: "School Uniform Manufacturing",
        description:
          "Custom production of school uniforms with focus on quality and design.",
        image: "/businesses/school-supplies.jpg",
      },
      {
        title: "Corporate Wear",
        description:
          "Professional corporate outfits tailored for business environments.",
        image: "/businesses/office-essentials.jpg",
      },
      {
        title: "Industrial Workwear",
        description:
          "Durable workwear for industrial, medical, and professional use.",
        image: "/businesses/lifestyle-products.jpg",
      },
    ],
    gallery: [
      "/businesses/gallery-1.jpg",
      "/businesses/gallery-2.png",
      "/businesses/gallery-3.png",
    ],
  },
  "skld-distributorship": {
    name: "SKLD Distributorship",
    logo: "/businesses/skld-distributorship-logo.png",
    tagline: "Branded Product Distribution Network",
    description:
      "Opportunities for distributors to partner with SKLD in distributing educational supplies, garments, and other products across regions.",
    heroImage: "/businesses/distro-hero-new.jpg",
    mainHeading:
      "Join our distributorship program to expand access to SKLD's quality products.",
    mainDescription:
      "From educational and office supplies to branded garments — become a distributor and grow your business with our support.",
    websiteUrl: "https://skld.ng",
    services: [
      {
        title: "Distribution Opportunities",
        description:
          "Partner with us to distribute SKLD products in your region.",
        image: "/businesses/distro1.jpg",
      },
      {
        title: "Branded Products",
        description:
          "Access to a range of branded educational and office supplies.",
        image: "/businesses/office-essentials.jpg",
      },
      {
        title: "Support & Training",
        description:
          "Comprehensive support and training for successful distribution.",
        image: "/businesses/lifestyle-products.jpg",
      },
    ],
    gallery: [
      "/businesses/distro2.jpg",
      "/businesses/distro3.jpg",
      "/businesses/distro4.jpg",
    ],
  },
};

type Business = {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  heroImage: string;
  mainHeading: string;
  mainDescription: string;
  websiteUrl: string;
  services?: { title: string; description: string; image: string }[];
  gallery: string[];
};

export default function BusinessPage({ params }: { params: { slug: string } }) {
  const business: Business =
    businessData[params.slug as keyof typeof businessData];

  if (!business) {
    notFound();
  }

  const isSkldCorporateSales = params.slug === "skld-corporate-sales";
  const isSkldDistributorship = params.slug === "skld-distributorship";
  const isSkldRelief = params.slug === "skld-relief";
  const isSkit = params.slug === "skit";
  const isMarcelHughes = params.slug === "marcel-hughes";

  const shouldUseImageTextLayout =
    !isSkit && !isSkldRelief && !isSkldCorporateSales;
  const shouldShowBrandCarousel =
    isSkldRelief || isSkldCorporateSales || isMarcelHughes;

  const handleDownloadCatalogue = () => {
    // Dummy PDF link - replace with actual PDF URL
    const pdfUrl =
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const getHeroButton = () => {
    if (isSkldCorporateSales) {
      return (
        <motion.button
          onClick={handleDownloadCatalogue}
          className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 font-semibold transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Catalogue
        </motion.button>
      );
    } else if (isSkldDistributorship) {
      return (
        <motion.a
          href="/contact"
          className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 font-semibold transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      );
    } else {
      return (
        <motion.a
          href={business.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 font-semibold transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Website
        </motion.a>
      );
    }
  };

  const getServicesButton = () => {
    if (isSkldCorporateSales || isSkldDistributorship) {
      return (
        <motion.a
          href="/contact"
          className="inline-block border border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.a>
      );
    } else {
      return (
        <motion.a
          href={business.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Go to Website
        </motion.a>
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-6 overflow-hidden min-h-screen flex flex-col">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" />
            <img
              src={business.heroImage || "/placeholder.svg"}
              alt={business.name}
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Main content that pushes brand carousel to bottom */}
          <div className="flex-grow flex flex-col justify-center">
            <div className="max-w-4xl mx-auto text-center relative z-20">
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={business.logo || "/placeholder.svg"}
                  alt={`${business.name} Logo`}
                  className="h-16 mx-auto"
                />
              </motion.div>
              <motion.h1
                className="text-5xl lg:text-6xl font-medium mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {business.tagline}
              </motion.h1>
              <motion.p
                className="font-lato text-white font-bold text-lg max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {business.description}
              </motion.p>
              {getHeroButton()}
            </div>
          </div>

          <div className="relative z-20 mt-auto">
            {shouldShowBrandCarousel && (
              <BrandCarousel
                brands={
                  businessBrands[params.slug as keyof typeof businessBrands]
                }
              />
            )}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {shouldUseImageTextLayout ? (
              // Image + Text Layout for specific businesses
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <Image
                    src={business.services?.[0]?.image || "/placeholder.svg"}
                    alt={business.name}
                    width={600}
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full flex flex-col justify-center"
                >
                  <h2 className="text-4xl font-medium mb-6">
                    {business.mainHeading}
                  </h2>
                  <p className="text-gray-400">{business.mainDescription}</p>
                </motion.div>
              </div>
            ) : (
              // Original Layout for skit and skld-relief
              <>
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl font-medium mb-6">
                      {business.mainHeading}
                    </h2>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-400">{business.mainDescription}</p>
                  </motion.div>
                </div>

                {business.services && business.services.length > 0 && (
                  <div
                    className={`grid gap-8 mb-12 ${
                      isSkldRelief
                        ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
                        : "md:grid-cols-3"
                    }`}
                  >
                    {business.services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        className={`${
                          isSkldRelief
                            ? "text-center"
                            : "bg-gray-800/50 p-6 space-y-4"
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className={`${
                            isSkldRelief
                              ? "w-full aspect-square object-cover mb-2"
                              : "w-full aspect-[4/3] object-cover"
                          }`}
                        />
                        <p
                          className={`${
                            isSkldRelief ? "text-sm" : "text-xl font-medium"
                          }`}
                        >
                          {service.title}
                        </p>
                        {!isSkldRelief && service.description && (
                          <p className="text-gray-400">{service.description}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}

            <div className="text-left mt-12">{getServicesButton()}</div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {business.gallery.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${business.name} gallery ${index + 1}`}
                  className="w-full aspect-[3/4] object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
