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
  const handleSwap = () => {
    const temp = start;
    setStart(end);
    setEnd(temp);
  };

  return (
    <div className="glass p-6 w-[350px] text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Enter Route</h2>

      {/* Start Input */}
      <input
        type="text"
        placeholder="Start Location"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-white/20 placeholder-white outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      {/* Destination Input */}
      <input
        type="text"
        placeholder="Destination"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-white/20 placeholder-white outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      {/* 🔁 Swap Button */}
      <motion.button
        onClick={handleSwap}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #facc15" }}
        whileTap={{ scale: 0.95, rotate: 5 }}
        className="w-full mb-3 bg-yellow-500 py-2 rounded-lg shadow-lg font-semibold"
      >
        🔁 Swap Locations
      </motion.button>

      {/* 🚀 Find Route Button (PRO VERSION) */}
      <motion.button
        onClick={onSubmit}
        disabled={loading}
        whileHover={{
          scale: loading ? 1 : 1.05,
          boxShadow: "0px 0px 15px #3b82f6",
        }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
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
            Finding...
          </span>
        ) : (
          "Find Route 🚀"
        )}
      </motion.button>
    </div>
  );
}
