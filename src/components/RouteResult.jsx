"use client";

import { motion } from "framer-motion";

export default function RouteResult({ result }) {
  if (!result) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 glass p-6 text-center"
    >
      <h3 className="text-lg font-semibold mb-3">Route Details</h3>

      <p className="mb-1">
        📍 <strong>{result.route}</strong>
      </p>

      <p className="mb-1">⏱ Time: {result.time}</p>

      <p>📏 Distance: {result.distance}</p>
    </motion.div>
  );
}
