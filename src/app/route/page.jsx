"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RouteForm from "@/components/RouteForm";
import RouteResult from "@/components/RouteResult";
import RouteMap from "@/components/RouteMap";
import { getRouteData } from "@/utils/routeLogic";

export default function RoutePage() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!start || !end) return; // ✅ validation

    setLoading(true);

    setTimeout(() => {
      const data = getRouteData(start, end);
      setResult(data);
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* 🔥 Heading Animation */}
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Smart Route AI 🚀
      </motion.h1>

      {/* FORM */}
      <RouteForm
        start={start}
        end={end}
        setStart={setStart}
        setEnd={setEnd}
        onSubmit={handleSubmit}
        loading={loading} // ✅ IMPORTANT FIX
      />

      {/* LOADING */}
      {loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 animate-pulse text-blue-300"
        >
          🚀 Calculating smart route...
        </motion.p>
      )}

      {/* RESULT + MAP */}
      {result && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RouteResult result={result} />
          <RouteMap show={result} />
        </motion.div>
      )}
    </motion.div>
  );
}
