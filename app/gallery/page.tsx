// "use client";

// import { motion } from "framer-motion";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import Image from "next/image";

// export default function GalleryPage() {
//   const galleryImages = [
//     { src: "businesses/gallery-1.jpg", caption: "Office Supplies" },
//     { src: "businesses/gallery-2.png", caption: "School Furniture" },
//     { src: "businesses/gallery-3.png", caption: "Corporate Event" },
//     { src: "businesses/gallery-4.png", caption: "Manufacturing Facility" },
//     { src: "businesses/gallery-5.png", caption: "Retail Store" },
//     { src: "businesses/gallery-1.jpg", caption: "Team Meeting" },
//     { src: "businesses/gallery-2.png", caption: "Product Showcase" },
//     { src: "businesses/gallery-3.png", caption: "Distribution Center" },
//     { src: "businesses/gallery-4.png", caption: "Client Presentation" },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navigation />
//       <main>
//         <section className="pt-24 pb-16 px-6">
//           <div className="max-w-7xl mx-auto">
//             <motion.h1
//               className="text-4xl lg:text-5xl font-medium mb-8 text-center"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Our Gallery
//             </motion.h1>

//             <motion.p
//               className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-12"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               A visual journey through our products, services, and the impact
//               we've made across various sectors.
//             </motion.p>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {galleryImages.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   className="group relative overflow-hidden cursor-pointer"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="aspect-square relative">
//                     <Image
//                       src={image.src || "/placeholder.svg"}
//                       alt={image.caption}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
//                       <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <p className="font-semibold">{image.caption}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
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
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9; // 3x3 grid

  const galleryImages = [
    { src: "businesses/gallery-1.jpg", caption: "Office Supplies" },
    { src: "businesses/gallery-2.png", caption: "School Furniture" },
    { src: "businesses/gallery-3.png", caption: "Corporate Event" },
    { src: "businesses/gallery-4.png", caption: "Manufacturing Facility" },
    { src: "businesses/gallery-5.png", caption: "Retail Store" },
    { src: "businesses/gallery-1.jpg", caption: "Team Meeting" },
    { src: "businesses/gallery-2.png", caption: "Product Showcase" },
    { src: "businesses/gallery-3.png", caption: "Distribution Center" },
    { src: "businesses/gallery-4.png", caption: "Client Presentation" },
    { src: "businesses/gallery-5.png", caption: "Warehouse Setup" },
    { src: "businesses/gallery-1.jpg", caption: "Office Interior" },
    { src: "businesses/gallery-2.png", caption: "Educational Space" },
    { src: "businesses/gallery-3.png", caption: "Conference Room" },
    { src: "businesses/gallery-4.png", caption: "Storage Solutions" },
    { src: "businesses/gallery-5.png", caption: "Retail Display" },
    { src: "businesses/gallery-1.jpg", caption: "Workstation Setup" },
    { src: "businesses/gallery-2.png", caption: "Collaborative Space" },
    { src: "businesses/gallery-3.png", caption: "Industrial Equipment" },
  ];

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-4xl lg:text-5xl font-medium mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Gallery
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A visual journey through our products, services, and the impact
              we've made across various sectors.
            </motion.p>

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">
                Showing {indexOfFirstImage + 1}-{Math.min(indexOfLastImage, galleryImages.length)} of {galleryImages.length} images
              </p>
              <p className="text-gray-400">
                Page {currentPage} of {totalPages}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentImages.map((image, index) => (
                <motion.div
                  key={indexOfFirstImage + index}
                  className="group relative overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.caption}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-semibold">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div 
                className="flex justify-center items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  } transition-colors duration-200`}
                >
                  Previous
                </button>

                <div className="flex space-x-1">
                  {getPageNumbers().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && handlePageChange(page)}
                      className={`px-3 py-2 rounded-md min-w-[40px] ${
                        page === currentPage
                          ? "bg-blue-600 text-white"
                          : typeof page === 'number'
                          ? "bg-gray-700 text-white hover:bg-gray-600"
                          : "bg-transparent text-gray-400 cursor-default"
                      } transition-colors duration-200`}
                      disabled={page === '...'}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  } transition-colors duration-200`}
                >
                  Next
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
