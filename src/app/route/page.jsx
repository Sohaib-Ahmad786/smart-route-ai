"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// 🔗 Components
import RouteForm from "@/components/RouteForm";
import RouteResult from "@/components/RouteResult";
import RouteMap from "@/components/RouteMap";

// 🧠 Logic
import { getRouteData } from "@/utils/routeLogic";

export default function RoutePage() {
  // 🔥 State management
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🚀 Handle route calculation
  const handleSubmit = () => {
    // ❗ Prevent empty input
    if (!start || !end) return;

    setLoading(true);

    // ⏳ Simulate API delay
    setTimeout(() => {
      const data = getRouteData(start, end);
      setResult(data);
      setLoading(false);
    }, 1200);
  };

  return (
    <motion.div
      // 🎬 Page entry animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-start px-4 py-10"
    >
      {/* 🔥 Route Form Section */}
      <RouteForm
        start={start}
        end={end}
        setStart={setStart}
        setEnd={setEnd}
        onSubmit={handleSubmit}
        loading={loading}
      />

      {/* ⏳ Loading State */}
      {loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-cyan-400 animate-pulse"
        >
          🚀 Optimizing route...
        </motion.p>
      )}

      {/* 📊 Result + Map Section */}
      {result && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <RouteResult result={result} />
          <RouteMap show={result} />
        </motion.div>
      )}
    </motion.div>
  );
}
