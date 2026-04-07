"use client";

import { motion } from "framer-motion";

export default function RouteMap({ show }) {
  if (!show) return null;

  const curve = Math.floor(Math.random() * 80) + 40;

  const path = `M 20 150 Q 250 ${curve} 480 150`;

  const randomY = [
    150,
    Math.floor(Math.random() * 80) + 40,
    Math.floor(Math.random() * 80) + 30,
    Math.floor(Math.random() * 80) + 40,
    150,
  ];

  return (
    <div className="mt-12 flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-6">Smart Live Route 🚗</h3>

      <svg width="500" height="220">
        {/* 🌈 Gradient */}
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* 🔥 Animated Dashed Path */}
        <motion.path
          d={path}
          stroke="url(#routeGradient)"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray="10 10"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          style={{
            filter: "drop-shadow(0 0 8px rgba(59,130,246,0.7))",
          }}
        />

        {/* Start */}
        <circle cx="20" cy="150" r="8" fill="#22c55e" />

        {/* End */}
        <circle cx="480" cy="150" r="8" fill="#ef4444" />

        {/* 🚗 Car with motion */}
        <motion.text
          fontSize="22"
          initial={{ x: 20, y: 150 }}
          animate={{
            x: [20, 150, 300, 420, 480],
            y: randomY,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          🚗
        </motion.text>

        {/* ✨ Pulse Effect at destination */}
        <motion.circle
          cx="480"
          cy="150"
          r="10"
          fill="red"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        />
      </svg>
    </div>
  );
}
