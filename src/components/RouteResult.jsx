"use client";

import { motion } from "framer-motion";

export default function RouteResult({ result }) {
  if (!result) return null;

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
          {/* 📍 Route */}
          <div className="sohaib-card bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Route</p>
            <p className="font-medium">{result.route}</p>
          </div>

          {/* ⏱ Time */}
          <div className="sohaib-card bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Estimated Time</p>
            <p className="font-medium">{result.time}</p>
          </div>

          {/* 📏 Distance */}
          <div className="sohaib-card bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Distance</p>
            <p className="font-medium">{result.distance}</p>
          </div>

          {/* 🚦 Traffic */}
          <div className="sohaib-card bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Traffic Level</p>
            <p className="font-medium text-yellow-400">
              {result.traffic}% congestion
            </p>
          </div>

          {/* 🌦️ Weather */}
          <div className="sohaib-card bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Weather</p>
            <p className="font-medium">{result.weather}</p>
          </div>

          {/* 🛡️ Safety */}
          <div className="sohaib-card bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Safety Score</p>
            <p className="font-medium text-green-400">{result.safety}% safe</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
