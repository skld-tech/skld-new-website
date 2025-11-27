"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Search } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      title:
        "Educating Nigeria's Future: Early Episode of Education Dialogue wit Ayodele Olajiga",
      date: "October 10, 2024",
      readTime: "5 min read",
      image: "/news/news-1.png",
      slug: "transforming-public-schools-smart-furniture",
    },
    {
      title:
        "The Envelop Concept: Would it work for the 21st-century young Nigerian adult?",
      date: "October 14, 2024",
      readTime: "8 min read",
      image: "/news/news-2.png",
      slug: "new-furniture-wholesome-classroom",
    },
    {
      title:
        "Lagos Govt, Casio, SKLD Urge Teachers To Adopt New Teaching Skills",
      date: "November 6, 2023",
      readTime: "2 min read",
      image: "/news/news-3.webp",
      slug: "designing-collaborative-spaces-learning",
    },
    {
      title: "Lagos Trains 1200 Teachers In Critical Skills",
      date: "November 6, 2023",
      readTime: "7 min read",
      image: "/news/news-3.webp",
      slug: "integrating-technology-smart-tools",
    },
    {
      title:
        "Lagos, CASIO/ SKLD Targets 1,200 Secondary School Teachers for Capacity Building",
      date: "November 6, 2023",
      readTime: "5 min read",
      image: "/news/news-5.webp",
      slug: "innovative-learning-spaces-future",
    },
    {
      title: "Shop for Back-to-School Without a Dime!",
      date: "August 29, 2023",
      readTime: "10 min read",
      image: "/news/news-6.jpg",
      slug: "ergonomics-enhancing-student-performance",
    },
    {
      title:
        "Leadership Competence: LASG Opens for Partnership in Education-Commissioner",
      date: "May 16, 2023",
      readTime: "2 min read",
      image: "/news/news-7.jpg",
      slug: "flexible-seating-student-engagement",
    },
    {
      title: "Lagos Harps On Innovative Methods To Transform Education",
      date: "May 15, 2023",
      readTime: "2 min read",
      image: "/news/news-8.jpg",
      slug: "schools-leading-sustainable-furniture",
    },
    {
      title:
        "Lagos State Seek Additional Partnership for Educational Development",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/news/news-9.jpg",
      slug: "transforming-schools-smart-furniture-2",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center my-18">
              <motion.h1
                className="text-4xl lg:text-5xl font-medium"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Insights & Trends
              </motion.h1>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="bg-gray-900 border border-gray-700 pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-600"
                />
              </motion.div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  className="group cursor-pointer h-full" // Added h-full for equal heights
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    {" "}
                    {/* Added h-full to link */}
                    <div className="flex flex-col h-full">
                      {" "}
                      {/* Added flex column with full height */}
                      <div className="overflow-hidden mb-4">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="bg-gray-800/50 p-4 space-y-3 flex-1 flex flex-col">
                        {" "}
                        {/* Added flex-1 and flex column for equal content heights */}
                        <p className="text-md font-medium group-hover:text-blue-400 transition-colors flex-1">
                          {post.title}
                        </p>{" "}
                        {/* Added flex-1 to title */}
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
