"use client";

import { motion } from "framer-motion";

export default function RouteForm({
  start,
  end,
  setStart,
  setEnd,
  onSubmit,
  loading,
}) {
  // 🔥 Handle form submit (Enter key + button)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* 🔥 Heading Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Intelligent Route Optimization
        </h1>

        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Get optimal routes based on real-time traffic conditions, weather, and
          safety metrics
        </p>
      </div>

      {/* 🔥 Main Container */}
      <form
        onSubmit={handleFormSubmit}
        className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-5 md:p-8 shadow-lg"
      >
        {/* 🔥 Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Start Location */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">
              Start Location
            </label>

            <input
              type="text"
              placeholder="Enter starting point"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
              className="w-full p-3 rounded-xl bg-[#1e293b] border border-white/10 placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">
              Destination
            </label>

            <input
              type="text"
              placeholder="Enter destination"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
              className="w-full p-3 rounded-xl bg-[#1e293b] border border-white/10 placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
        </div>

        {/* 🚀 Optimize Route Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-4 rounded-xl font-semibold text-black transition-all duration-300 ${
            loading
              ? "bg-cyan-300 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 shadow-lg shadow-cyan-500/30"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                🔄
              </motion.span>
              Optimizing...
            </span>
          ) : (
            "🔗 Optimize Route"
          )}
        </motion.button>
      </form>
    </div>
  );
}
