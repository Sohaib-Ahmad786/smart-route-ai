"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// 🔗 Components
import RouteForm from "@/components/RouteForm";
import RouteResult from "@/components/RouteResult";
import RouteChart from "@/components/RouteChart";

// 🧠 Logic
import { getRouteData } from "@/utils/routeLogic";

export default function RoutePage() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🚀 Handle route calculation
  const handleSubmit = () => {
    const trimmedStart = start.trim();
    const trimmedEnd = end.trim();

    if (!trimmedStart || !trimmedEnd) {
      console.warn("Both fields are required");
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      const data = getRouteData(trimmedStart, trimmedEnd);
      setResult(data);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center px-4 py-10"
    >
      {/* 🔥 Route Form */}
      <RouteForm
        start={start}
        end={end}
        setStart={setStart}
        setEnd={setEnd}
        onSubmit={handleSubmit}
        loading={loading}
      />

      {/* ⏳ Loading */}
      {loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-cyan-400 animate-pulse"
        >
          🚀 Optimizing route...
        </motion.p>
      )}

      {/* 📊 Result + Chart */}
      {result && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <RouteResult result={result} />
          <RouteChart result={result} />
        </motion.div>
      )}
    </motion.div>
  );
}
