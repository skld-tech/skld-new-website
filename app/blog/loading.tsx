// export default function Loading() {
//   return null
// }
"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <motion.div
        className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
        aria-label="Loading..."
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
