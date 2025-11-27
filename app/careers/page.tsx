// "use client";

// import { motion } from "framer-motion";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import { MoveUpRight } from "lucide-react";
// import Image from "next/image";
// // import Link from "next/link"

// export default function CareersPage() {
//   const benefits = [
//     {
//       title: "Collaborative Culture",
//       description:
//         "We believe in teamwork, respect, and diversity. Everyone's voice matters, and collaboration is how we make magic happen.",
//     },
//     {
//       title: "Growth Opportunities",
//       description:
//         "We invest in our people through continuous learning, mentorship, and clear career growth pathways for you to advance your skills.",
//     },
//     {
//       title: "Competitive Benefits",
//       description:
//         "We offer rewarding packages that recognize your contribution, along with benefits that support your well-being and work-life balance.",
//     },
//     {
//       title: "Make Real Impact",
//       description:
//         "Your work directly contributes to meaningful change across education, corporate, and infrastructure sectors, empowering communities and building futures.",
//     },
//   ];

//   const openings = [
//     { title: "Retail Store Manager (Ikeja)", status: "Apply" },
//     { title: "Procurement Officer (Lagos)", status: "Apply" },
//     { title: "Customer Support Representative (Wuse)", status: "Apply" },
//     { title: "Logistics Coordinator (Kwara/Kogi)", status: "Apply" },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navigation />
//       <main>
//         {/* relative min-h-screen flex flex-col justify-center px-6 overflow-hidden */}
//         {/* Hero Section */}
//         <section className="relative pt-24 pb-16 px-6 min-h-screen flex justify-center overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0" />
//             <Image
//               src="/career-bg.jpg"
//               alt="Team collaboration"
//               fill
//               priority
//               className="w-full h-full object-cover opacity-60"
//             />
//           </div>

//           <div className="max-w-7xl relative z-20 text-left w-full pb-8 m-auto">
//             <motion.div
//               className="inline-block bg-[var(--blue-custom)] text-white px-4 py-2 mb-6"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h1 className="text-5xl lg:text-6xl font-medium">
//                 Join Our Team
//               </h1>
//             </motion.div>
//             <motion.p
//               className="font-lato text-white font-bold text-lg max-w-3xl mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               From our corporate office to the retail stores to our diverse
//               production sites and warehouses, we take pride in personnel with
//               us work all over the nation. A company that values innovation,
//               collaboration, and growth. At SKLD, we embrace diversity, unique
//               voices, perspectives, and ideas. Discover how you can make an
//               impact. See our areas of work, locations, benefits and
//               opportunities.
//             </motion.p>
//             <motion.button
//               className="bg-white hover:bg-gray-100 text-black px-8 py-3 font-semibold transition-colors"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Go to Jobs
//             </motion.button>
//           </div>
//         </section>

//         {/* Why Work With Us */}
//         {/* <section className="py-16 px-6">
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               className="text-4xl font-medium text-left mb-16"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               Why Work With Us
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={benefit.title}
//                   className="bg-gray-800/50 p-6 text-left space-y-4 rounded-lg shadow transition-transform duration-300 cursor-pointer"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{
//                     scale: 1.04,
//                     boxShadow: "0 6px 24px 0 rgba(37,99,235,0.14)", // subtle blue
//                     backgroundColor: "rgba(37,99,235,0.12)", // blue-600/10
//                   }}
//                 >
//                   <h3 className="text-lg font-medium">{benefit.title}</h3>
//                   <p className="text-gray-400 text-sm">{benefit.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section> */}
//         <section className="py-16 px-6 bg-white">
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               className="text-4xl font-medium text-left mb-16 text-black"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               Why Work With Us
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={benefit.title}
//                   className="bg-gray-100 p-6 text-left space-y-4 rounded-lg shadow transition-transform duration-300 cursor-pointer"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{
//                     scale: 1.04,
//                     boxShadow: "0 6px 24px 0 rgba(37,99,235,0.14)", // subtle blue
//                     backgroundColor: "rgba(37,99,235,0.12)", // blue-600/10
//                   }}
//                 >
//                   <h3 className="text-lg font-medium text-black">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{benefit.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Current Openings */}
//         <section className="py-16 px-6">
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               className="text-4xl font-medium text-left mb-12"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               Current Openings
//             </motion.h2>

//             <div className="space-y-4">
//               {openings.map((opening, index) => (
//                 <motion.div
//                   key={opening.title}
//                   className="flex items-center justify-between p-6 bg-gray-800/50 hover:bg-gray-700/50 transition-colors group cursor-pointer"
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 5 }}
//                 >
//                   <p className="text-base font-normal group-hover:text-[#0519b4] transition-colors">
//                     {opening.title}
//                   </p>
//                   <div className="flex items-center space-x-2 text-base font-normal group-hover:text-[#0519b4] transition-colors">
//                     <span>{opening.status}</span>
//                     <MoveUpRight className="w-3 h-3" />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.p
//               className="text-center text-gray-400 mt-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               We are always looking for talented individuals to join our team.
//               <br />
//               We would love to hear from you.
//               <br /> Send your CV and cover letter to{" "}
//               <span className="text-[#0519b4]">careers@skld.ng</span> with the
//               job title as the email subject.
//             </motion.p>
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
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function CareersPage() {
  const benefits = [
    {
      title: "Collaborative Culture",
      description:
        "We believe in teamwork, respect, and diversity. Everyone's voice matters, and collaboration is how we make magic happen.",
    },
    {
      title: "Growth Opportunities",
      description:
        "We invest in our people through continuous learning, mentorship, and clear career growth pathways for you to advance your skills.",
    },
    {
      title: "Competitive Benefits",
      description:
        "We offer rewarding packages that recognize your contribution, along with benefits that support your well-being and work-life balance.",
    },
    {
      title: "Make Real Impact",
      description:
        "Your work directly contributes to meaningful change across education, corporate, and infrastructure sectors, empowering communities and building futures.",
    },
  ];

  const openings = [
    {
      title: "Head Of HR",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Asst Head Of HR",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Talent Acquisition Specialist",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Head Of Brands And Marketing",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Procurement Manager H-Aid",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Quality Control Manager",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "E Commerce Manager",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Warehouse Manager",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Logistics Manager",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Logistics Officer",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "BDE - ES Lagos",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Account Payable Executive",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Head Of Operations",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
    {
      title: "Partnership Manager",
      status: "Apply",
      url: "https://forms.gle/KNGeaE9aGWrJDAgW8",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-6 min-h-screen flex justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" />
            <Image
              src="/career-bg.jpg"
              alt="Team collaboration"
              fill
              priority
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          <div className="max-w-7xl relative z-20 text-left w-full pb-8 m-auto">
            <motion.div
              className="inline-block bg-[var(--blue-custom)] text-white px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-medium">
                Join Our Team
              </h1>
            </motion.div>
            <motion.p
              className="font-lato text-white font-bold text-lg max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From our corporate office to the retail stores to our diverse
              production sites and warehouses, we take pride in personnel with
              us work all over the nation. A company that values innovation,
              collaboration, and growth. At SKLD, we embrace diversity, unique
              voices, perspectives, and ideas. Discover how you can make an
              impact. See our areas of work, locations, benefits and
              opportunities.
            </motion.p>
            <motion.button
              className="bg-white hover:bg-gray-100 text-black px-8 py-3 font-semibold transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("current-openings")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Go to Jobs
            </motion.button>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-medium text-left mb-16 text-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Work With Us
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-gray-100 p-6 text-left space-y-4 rounded-lg shadow transition-transform duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 6px 24px 0 rgba(37,99,235,0.14)",
                    backgroundColor: "rgba(37,99,235,0.12)",
                  }}
                >
                  <h3 className="text-lg font-medium text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 px-6" id="current-openings">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-medium text-left mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Current Openings
            </motion.h2>

            <div className="space-y-4">
              {openings.map((opening, index) => (
                <motion.a
                  key={index}
                  href={opening.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-gray-800/50 hover:bg-gray-700/50 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <p className="text-base font-normal group-hover:text-[#0519b4] transition-colors">
                    {opening.title}
                  </p>
                  <div className="flex items-center space-x-2 text-base font-normal group-hover:text-[#0519b4] transition-colors">
                    <span>{opening.status}</span>
                    <MoveUpRight className="w-3 h-3" />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.p
              className="text-center text-gray-400 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We are always looking for talented individuals to join our team.
              <br />
              We would love to hear from you.
              <br /> Send your CV and cover letter to{" "}
              <span className="text-[#0519b4]">careers@skld.ng</span> with the
              job title as the email subject.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
