"use client";

import { motion } from "framer-motion";

export default function RouteResult({ result }) {
  if (!result) return null;

  const data = [
    {
      label: "Route",
      value: result.route,
    },
    {
      label: "Estimated Time",
      value: result.time,
    },
    {
      label: "Distance",
      value: result.distance,
    },
    {
      label: "Traffic Level",
      value: `${result.traffic ?? 0}% congestion`,
      extraClass: "text-yellow-400",
    },
    {
      label: "Weather",
      value: result.weather,
    },
    {
      label: "Safety Score",
      value: `${result.safety ?? 0}% safe`,
      extraClass: "text-green-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto px-4 mt-6"
    >
      {/* 🔥 Main Result Card */}
      <div className="sohaib-route-card bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-5 md:p-6 shadow-[0_0_20px_rgba(0,255,150,0.08)]">
        {/* 🔥 Heading */}
        <h3 className="text-xl font-semibold text-white mb-4">Route Summary</h3>

        {/* 📊 Result Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          {data.map((item, index) => (
            <div
              key={index}
              className="sohaib-card bg-white/5 p-4 rounded-xl border border-white/10"
            >
              <p className="text-gray-400 text-sm mb-1">{item.label}</p>
              <p className={`font-medium ${item.extraClass || ""}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
