// "use client";

// import { motion } from "framer-motion";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import { BrandCarousel } from "@/components/brand-carousel";
// import {
//   // MapPin,
//   // Phone,
//   // Mail,
//   // Clock,
//   Instagram,
//   Facebook,
//   Linkedin,
//   Twitter,
// } from "lucide-react";
// import Image from "next/image";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navigation />
//       <main>
//         {/* Header */}
//         <section className="min-h-96 relative pt-24 pb-16 px-6 overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0" />
//             <Image
//               src="/contact-bg.jpg"
//               alt="Team collaboration"
//               fill
//               priority
//               className="w-full h-full object-cover opacity-60"
//             />
//             {/* <img
//               src="/placeholder.svg?height=800&width=1200&text=Contact+Background"
//               alt="Contact background"
//               className="w-full h-full object-cover opacity-60"
//             /> */}
//           </div>

//           <div className="max-w-4xl mx-auto text-center relative z-20 mt-10">
//             <motion.h1
//               className="text-5xl lg:text-6xl font-medium mb-6"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Contact Us
//             </motion.h1>
//             <motion.p
//               className="font-lato text-white font-bold text-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               We'd love to hear from you. Reach out to our team for inquiries,
//               <br />
//               support, or partnership opportunities.
//             </motion.p>
//           </div>
//         </section>

//         {/* Contact Form and Info */}
//         <section className="py-16 px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-4 gap-16">
//               {/* Contact Form */}
//               <motion.div
//                 className="lg:col-span-2"
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//               >
//                 <h2 className="text-2xl font-medium mb-8">Contact Form</h2>
//                 <form className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter your full name"
//                       className="w-full h-12 border rounded-3xl border-gray-600 px-4 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Enter your email address"
//                       className="w-full h-12 border rounded-3xl border-gray-600 px-4 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Phone Number
//                     </label>
//                     <div className="flex h-12 rounded-3xl border border-gray-600 overflow-hidden focus-within:border-blue-600">
//                       <select className=" px-3 text-white focus:outline-none">
//                         <option>+234</option>
//                       </select>
//                       <input
//                         type="tel"
//                         placeholder="123-456-7890"
//                         className="flex-1 px-4 text-white placeholder-gray-300 bg-transparent focus:outline-none"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Subject
//                     </label>
//                     <select className="w-full h-12 border rounded-3xl border-gray-600 px-4 text-white focus:outline-none focus:border-blue-600">
//                       <option className="bg-gray-950 text-white">
//                         Subject
//                       </option>
//                       <option className="bg-gray-950 text-white">
//                         General Inquiry
//                       </option>
//                       <option className="bg-gray-950 text-white">
//                         Partnership
//                       </option>
//                       <option className="bg-gray-950 text-white">
//                         Support
//                       </option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       rows={4}
//                       placeholder="Your message..."
//                       className="w-full border rounded-3xl border-gray-600 px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 resize-none"
//                     />
//                   </div>

//                   <motion.button
//                     type="submit"
//                     className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-100 transition-colors"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Submit
//                   </motion.button>
//                 </form>
//               </motion.div>

//               {/* Contact Information */}
//               <motion.div
//                 className="lg:col-span-1"
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 <h2 className="text-2xl font-medium mb-8">Contact Information</h2>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-3">
//                     {/* <MapPin className="w-5 h-5 text-blue-600 mt-1" /> */}
//                     <div>
//                       <p className="font-semibold mb-0.5">
//                         Head Office Address
//                       </p>
//                       <p className="text-gray-400">
//                         12 Adeola Odeku Street, Victoria Island, Lagos,
//                         <br />
//                         Nigeria
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     {/* <Phone className="w-5 h-5 text-blue-600 mt-1" /> */}
//                     <div>
//                       <p className="font-semibold mb-0.5">Contact Phone</p>
//                       <p className="text-gray-400">+234 803 123 4567</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     {/* <Mail className="w-5 h-5 text-blue-600 mt-1" /> */}
//                     <div>
//                       <p className="font-semibold mb-0.5">Support Email</p>
//                       <p className="text-gray-400">info@skld.ng</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     {/* <Clock className="w-5 h-5 text-blue-600 mt-1" /> */}
//                     <div>
//                       <p className="font-semibold mb-0.5">Business Hours</p>
//                       <p className="text-gray-400">
//                         Monday – Friday: 9:00 AM – 5:00 PM
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Social Media */}
//               <motion.div
//                 className="lg:col-span-1"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//               >
//                 <h2 className="text-2xl font-medium mb-8">Social Media</h2>
//                 <div className="flex gap-4">
//                   {[
//                     { icon: Instagram },
//                     { icon: Facebook },
//                     { icon: Linkedin },
//                     { icon: Twitter },
//                   ].map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href="#"
//                       className="flex items-center justify-center p-4 bg-gray-900 border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-colors group"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <social.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         <BrandCarousel />
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
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const addresses = [
    {
      name: "Head Office Address",
      address: "12 Oguntona Crescent, Gbagada Phase 1, Lagos.",
      url: "https://maps.app.goo.gl/sfHo7ngTARW6LFPk7",
    },
    {
      name: "Abuja Address",
      address:
        "Plot 165, 1st Avenue Gwarimpa, Opposite Drumstix Eatery, Abuja.",
      url: "https://maps.app.goo.gl/Bsy9m5P5aZ2TKTcj7",
    },
    {
      name: "UAE Address",
      address:
        "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.",
      url: "https://maps.app.goo.gl/BgwCDskVPD4fDVgK9",
    },
    {
      name: "Borno Address",
      address: "13 Shehu Laminu Way, Sanda Kyarimi Park Zoo, Maiduguri, Borno.",
      url: "https://share.google/zMaTLRDMc0o3eyyXK",
    },
    {
      name: "Yobe Address",
      address:
        "Golden Mall Souk, PXV6+HXH, Maiduguri Rd, behind Old Yobe Line Filling Station, Damaturu 620101, Yobe.",
      url: "https://maps.app.goo.gl/i5MsDkVFbKZVE2iN7",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        {/* Header */}
        <section className="min-h-96 relative pt-24 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" />
            <Image
              src="/contact-bg.jpg"
              alt="Team collaboration"
              fill
              priority
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-20 mt-10">
            <motion.h1
              className="text-5xl lg:text-6xl font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="font-lato text-white font-bold text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We'd love to hear from you. Reach out to our team for inquiries,
              <br />
              support, or partnership opportunities.
            </motion.p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-16">
              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-medium mb-8">Contact Form</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full h-12 border rounded-3xl border-gray-600 px-4 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-12 border rounded-3xl border-gray-600 px-4 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <div className="flex h-12 rounded-3xl border border-gray-600 overflow-hidden focus-within:border-blue-600">
                      <select className=" px-3 text-white focus:outline-none">
                        <option>+234</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="123-456-7890"
                        className="flex-1 px-4 text-white placeholder-gray-300 bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select className="w-full h-12 border rounded-3xl border-gray-600 px-4 text-white focus:outline-none focus:border-blue-600">
                      <option className="bg-gray-950 text-white">
                        Subject
                      </option>
                      <option className="bg-gray-950 text-white">
                        General Inquiry
                      </option>
                      <option className="bg-gray-950 text-white">
                        Partnership
                      </option>
                      <option className="bg-gray-950 text-white">
                        Support
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Your message..."
                      className="w-full border rounded-3xl border-gray-600 px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-medium mb-8">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold mb-0.5">Contact Phone</p>
                      <p className="text-gray-400">+234 803 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold mb-0.5">Support Email</p>
                      <p className="text-gray-400">info@skld.ng</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold mb-0.5">Business Hours</p>
                      <p className="text-gray-400">
                        Monday – Friday: 9:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Social Media moved below Business Hours */}
                  <div className="pt-4">
                    <p className="font-semibold mb-4">Social Media</p>
                    <div className="flex gap-4">
                      {[
                        { icon: Instagram },
                        { icon: Facebook },
                        { icon: Linkedin },
                        { icon: Twitter },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href="#"
                          className="flex items-center justify-center p-4 bg-gray-900 border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-colors group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Addresses */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-8">Our Offices</h2>
                <div className="space-y-6">
                  {addresses.map((address, index) => (
                    <motion.a
                      key={index}
                      href={address.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-white group-hover:text-blue-400 transition-colors">
                            {address.name}
                          </p>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {address.address}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <BrandCarousel />
      </main>
      <Footer />
    </div>
  );
}
