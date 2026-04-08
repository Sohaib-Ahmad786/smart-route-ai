"use client";

import { motion } from "framer-motion";

export default function RouteMap({ show }) {
  // 👉 Agar data nahi hai to kuch render nahi karega
  if (!show) return null;

  // 🔥 Dynamic curve for path
  const curve = Math.floor(Math.random() * 60) + 60;

  const path = `M 20 150 Q 250 ${curve} 480 150`;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-8">
      {/* 🔥 Container */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-5 md:p-6 shadow-lg">
        {/* Heading */}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
          Route Visualization 🚗
        </h3>

        {/* Responsive SVG Container */}
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 500 220" className="w-full h-[200px]">
            {/* 🌈 Gradient */}
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* 🔥 Animated Path */}
            <motion.path
              d={path}
              stroke="url(#routeGradient)"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray="8 8"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(59,130,246,0.5))",
              }}
            />

            {/* Start Point */}
            <circle cx="20" cy="150" r="6" fill="#22c55e" />

            {/* End Point */}
            <circle cx="480" cy="150" r="6" fill="#ef4444" />

            {/* 🚗 Moving Car */}
            <motion.text
              fontSize="18"
              initial={{ x: 20, y: 150 }}
              animate={{
                x: [20, 150, 300, 420, 480],
                y: [150, curve - 20, curve - 30, curve - 10, 150],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
            >
              🚗
            </motion.text>
          </svg>
        </div>
      </div>
    </div>
  );
}
